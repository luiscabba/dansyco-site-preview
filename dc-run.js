/* Dansyco site runtime: renders the design templates (holes, sc-for, sc-if, dc-import, events, refs) with React. */
(function () {
  var R = window.React, h = R.createElement;
  var DEFS = {};
  var EV = {};
  ['Click', 'DoubleClick', 'Input', 'Change', 'Submit', 'KeyDown', 'KeyUp', 'Focus', 'Blur', 'Scroll', 'Wheel',
    'MouseEnter', 'MouseLeave', 'MouseMove', 'MouseDown', 'MouseUp', 'MouseOver', 'MouseOut',
    'PointerDown', 'PointerMove', 'PointerUp', 'PointerEnter', 'PointerLeave', 'PointerCancel', 'PointerOver', 'PointerOut',
    'TouchStart', 'TouchMove', 'TouchEnd', 'AnimationEnd', 'TransitionEnd', 'Load', 'Error'
  ].forEach(function (n) { EV['on' + n.toLowerCase()] = 'on' + n; });
  var RENAME = { 'class': 'className', 'for': 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength',
    colspan: 'colSpan', rowspan: 'rowSpan', autocomplete: 'autoComplete', autofocus: 'autoFocus', crossorigin: 'crossOrigin',
    srcset: 'srcSet', 'xlink:href': 'xlinkHref', contenteditable: 'contentEditable', spellcheck: 'spellCheck', enterkeyhint: 'enterKeyHint' };
  var BOOL = { disabled: 1, checked: 1, hidden: 1, open: 1, selected: 1, readOnly: 1, required: 1, multiple: 1, autoFocus: 1, muted: 1, loop: 1, autoplay: 1, controls: 1, playsinline: 1 };
  var VOID = { area: 1, base: 1, br: 1, col: 1, embed: 1, hr: 1, img: 1, input: 1, link: 1, meta: 1, source: 1, track: 1, wbr: 1 };
  var HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;

  function look(path, scope) {
    if (path === 'true') return true; if (path === 'false') return false; if (path === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(path)) return Number(path);
    if (/^'.*'$|^".*"$/.test(path)) return path.slice(1, -1);
    var parts = path.split('.'), v = scope[parts[0]];
    for (var i = 1; i < parts.length && v != null; i++) v = v[parts[i]];
    return v;
  }
  /* A compiled string: either a constant, a single whole hole (keeps the raw value), or a mix. */
  function cstr(s) {
    if (s.indexOf('{{') < 0) return { c: s };
    var whole = s.match(/^\{\{\s*([^}]+?)\s*\}\}$/);
    if (whole) return { w: whole[1] };
    var parts = [], last = 0, m; HOLE.lastIndex = 0;
    while ((m = HOLE.exec(s))) { if (m.index > last) parts.push(s.slice(last, m.index)); parts.push({ p: m[1] }); last = m.index + m[0].length; }
    if (last < s.length) parts.push(s.slice(last));
    return { m: parts };
  }
  function ev(cs, scope) {
    if ('c' in cs) return cs.c;
    if (cs.w) return look(cs.w, scope);
    var out = '';
    for (var i = 0; i < cs.m.length; i++) { var x = cs.m[i]; if (typeof x === 'string') out += x; else { var v = look(x.p, scope); out += v == null ? '' : String(v); } }
    return out;
  }
  var styleCache = {};
  function styleObj(s) {
    if (styleCache[s]) return styleCache[s];
    var o = {};
    s.split(';').forEach(function (d) {
      var i = d.indexOf(':'); if (i < 0) return;
      var k = d.slice(0, i).trim(), v = d.slice(i + 1).trim(); if (!k) return;
      if (k.indexOf('--') !== 0) { k = k.replace(/^-ms-/, 'ms-').replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); }); }
      o[k] = v;
    });
    if (Object.keys(styleCache).length > 4000) styleCache = {};
    styleCache[s] = o; return o;
  }

  function compile(node) {
    if (node.nodeType === 3) return { t: cstr(node.nodeValue) };
    if (node.nodeType !== 1) return null;
    var tag = node.localName;
    if (tag === 'helmet') return null;
    var src = tag === 'template' ? node.content : node;
    var kids = [];
    for (var ch = src.firstChild; ch; ch = ch.nextSibling) { var c = compile(ch); if (c) kids.push(c); }
    if (tag === 'sc-for') return { f: cstr(node.getAttribute('list')), as: node.getAttribute('as') || 'item', k: kids };
    if (tag === 'sc-if') return { i: cstr(node.getAttribute('value')), k: kids };
    var attrs = [];
    for (var j = 0; j < node.attributes.length; j++) {
      var a = node.attributes[j];
      if (a.name.indexOf('hint-') === 0) continue;
      attrs.push([a.name, cstr(a.value)]);
    }
    if (tag === 'dc-import') return { d: node.getAttribute('name'), a: attrs.filter(function (x) { return x[0] !== 'name'; }) };
    return { e: tag, a: attrs, k: kids, svg: node.namespaceURI === 'http://www.w3.org/2000/svg' };
  }

  function camel(n) { return n.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); }); }

  function render(list, scope, key) {
    var out = [];
    for (var i = 0; i < list.length; i++) {
      var n = list[i], k = key + '.' + i;
      if (n.t) { var tv = ev(n.t, scope); if (tv != null && tv !== '' && tv !== false) out.push(String(tv)); continue; }
      if (n.f) {
        var arr = ev(n.f, scope) || [];
        for (var q = 0; q < arr.length; q++) {
          var s = Object.create(scope); s[n.as] = arr[q]; s.$index = q;
          var r = render(n.k, s, k + ':' + q);
          for (var z = 0; z < r.length; z++) out.push(r[z]);
        }
        continue;
      }
      if (n.i) { if (ev(n.i, scope)) { var ri = render(n.k, scope, k + '?'); for (var y = 0; y < ri.length; y++) out.push(ri[y]); } continue; }
      if (n.d) {
        var def = DEFS[n.d];
        if (!def) { console.warn('[dc-run] missing component', n.d); continue; }
        var dp = { key: k };
        n.a.forEach(function (x) { dp[camel(x[0])] = ev(x[1], scope); });
        out.push(h(def.Comp, dp));
        continue;
      }
      out.push(el(n, scope, k));
    }
    return out;
  }

  function el(n, scope, key) {
    var p = { key: key }, hasHandler = false;
    for (var i = 0; i < n.a.length; i++) {
      var name = n.a[i][0], v = ev(n.a[i][1], scope);
      var lname = name.toLowerCase();
      if (EV[lname]) { if (typeof v === 'function') { p[EV[lname]] = v; if (lname === 'oninput' || lname === 'onchange') hasHandler = true; } continue; }
      if (name === 'ref') { if (typeof v === 'function' || (v && typeof v === 'object')) p.ref = v; continue; }
      if (name === 'style') { if (v) p.style = styleObj(String(v)); continue; }
      var pn = RENAME[lname] || name;
      if (v === false || v == null) continue;
      if (BOOL[pn]) { p[pn] = v === true || v === '' || v === pn || v === 'true'; continue; }
      p[pn] = v === true ? '' : (typeof v === 'number' ? v : String(v));
    }
    if (n.e === 'input' || n.e === 'textarea' || n.e === 'select') {
      if (!hasHandler) {
        if ('value' in p) { p.defaultValue = p.value; delete p.value; }
        if ('checked' in p && !p.onClick) { p.defaultChecked = p.checked; delete p.checked; }
      } else if ('value' in p && !p.onChange) { p.onChange = function () {}; }
    }
    if (VOID[n.e]) return h(n.e, p);
    var kids = render(n.k, scope, key);
    return h.apply(null, [n.e, p].concat(kids));
  }

  function define(name, html, factory) {
    var t = document.createElement('template');
    t.innerHTML = html;
    var tpl = [];
    for (var ch = t.content.firstChild; ch; ch = ch.nextSibling) { var c = compile(ch); if (c) tpl.push(c); }
    var Base = function (props) { R.Component.call(this, props); this.state = this.state || null; };
    Base.prototype = Object.create(R.Component.prototype);
    Base.prototype.constructor = Base;
    Base.prototype.render = function () {
      var vals = this.renderVals ? this.renderVals() || {} : {};
      var kids = render(tpl, vals, name);
      return h.apply(null, [R.Fragment, null].concat(kids));
    };
    var Comp = factory(Base);
    DEFS[name] = { Comp: Comp };
    return Comp;
  }

  function mount(name, el) {
    var root = window.ReactDOM.createRoot(el);
    root.render(h(DEFS[name].Comp, {}));
  }

  window.DCRun = { define: define, mount: mount };
})();
