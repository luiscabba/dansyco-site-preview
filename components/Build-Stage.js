DCRun.define("Build-Stage", "<div style=\"width: 100%; background-color: {{v.bg}}; background-image: linear-gradient({{v.grid}} 1px, transparent 1px), linear-gradient(90deg, {{v.grid}} 1px, transparent 1px); background-size: 24px 24px; font-family: 'IBM Plex Mono', monospace; color: {{v.ink}}; display: flex; flex-direction: column; overflow: hidden\">\n  <svg viewBox=\"0 0 900 520\" width=\"100%\" style=\"display: block; overflow: hidden; touch-action: none; cursor: {{cursor}}\" role=\"img\" aria-label=\"{{v.aria}}\" onPointerDown=\"{{down}}\" onPointerMove=\"{{move}}\" onPointerUp=\"{{up}}\" onPointerLeave=\"{{up}}\">\n    <polygon points=\"{{v.berth}}\" fill=\"{{v.berthFill}}\" stroke=\"{{v.berthStroke}}\" stroke-width=\"1\" stroke-dasharray=\"6 6\"><\/polygon>\n    <sc-if value=\"{{v.measure.on}}\" hint-placeholder-val=\"{{false}}\">\n      <g>\n        <sc-for list=\"{{v.measure.dashes}}\" as=\"l\" hint-placeholder-count=\"1\">\n          <line class=\"{{l.cls}}\" x1=\"{{l.x1}}\" y1=\"{{l.y1}}\" x2=\"{{l.x2}}\" y2=\"{{l.y2}}\" stroke=\"{{v.measure.ink}}\" stroke-width=\"0.9\" stroke-dasharray=\"12 3 2 3\" style=\"{{l.st}}\"><\/line>\n        <\/sc-for>\n        <polygon class=\"{{v.measure.wlCls}}\" points=\"{{v.measure.wl}}\" fill=\"none\" stroke=\"{{v.measure.wlInk}}\" stroke-width=\"1\" stroke-dasharray=\"5 4\" style=\"{{v.measure.wlSt}}\"><\/polygon>\n        <text class=\"{{v.measure.wlCls}}\" x=\"{{v.measure.wlLab.x}}\" y=\"{{v.measure.wlLab.y}}\" font-family=\"IBM Plex Mono\" font-size=\"11\" fill=\"{{v.measure.wlInk}}\" style=\"{{v.measure.wlSt}}\">DWL<\/text>\n      <\/g>\n    <\/sc-if>\n    <sc-if value=\"{{v.ghost}}\" hint-placeholder-val=\"{{false}}\">\n      <g class=\"ghwrap\">\n        <sc-for list=\"{{v.parts}}\" as=\"p\" hint-placeholder-count=\"10\">\n          <sc-for list=\"{{p.faces}}\" as=\"f\" hint-placeholder-count=\"4\">\n            <polygon class=\"gh\" points=\"{{f.pts}}\" fill=\"none\" stroke=\"#9DBBFF\" stroke-width=\"1\" stroke-linejoin=\"round\" style=\"{{f.gst}}\"><\/polygon>\n          <\/sc-for>\n        <\/sc-for>\n      <\/g>\n    <\/sc-if>\n    <g style=\"{{v.glow}}\">\n      <sc-for list=\"{{v.parts}}\" as=\"p\" hint-placeholder-count=\"10\">\n        <g class=\"{{p.cls}}\" style=\"{{p.st}}\">\n          <sc-if value=\"{{p.spark.on}}\" hint-placeholder-val=\"{{false}}\">\n            <line class=\"hook\" x1=\"{{p.cx}}\" y1=\"-360\" x2=\"{{p.cx}}\" y2=\"{{p.spark.hookY}}\" stroke=\"#C9CDD2\" stroke-width=\"1.2\" style=\"{{p.spark.hookSt}}\"><\/line>\n          <\/sc-if>\n          <sc-for list=\"{{p.faces}}\" as=\"f\" hint-placeholder-count=\"4\">\n            <polygon points=\"{{f.pts}}\" fill=\"{{f.fill}}\" stroke=\"{{f.stroke}}\" stroke-width=\"{{f.sw}}\" stroke-linejoin=\"round\" style=\"{{f.st}}\"><\/polygon>\n          <\/sc-for>\n        <\/g>\n      <\/sc-for>\n    <\/g>\n    <sc-for list=\"{{v.parts}}\" as=\"p\" hint-placeholder-count=\"10\">\n      <sc-if value=\"{{p.spark.on}}\" hint-placeholder-val=\"{{false}}\">\n        <g class=\"spk\" style=\"{{p.spark.st}}\">\n          <sc-for list=\"{{p.spark.rays}}\" as=\"r\" hint-placeholder-count=\"6\">\n            <line x1=\"{{r.x1}}\" y1=\"{{r.y1}}\" x2=\"{{r.x2}}\" y2=\"{{r.y2}}\" stroke=\"#FFB347\" stroke-width=\"2\" stroke-linecap=\"round\"><\/line>\n          <\/sc-for>\n          <circle cx=\"{{p.spark.x}}\" cy=\"{{p.spark.y}}\" r=\"3\" fill=\"#FFF1C9\"><\/circle>\n        <\/g>\n      <\/sc-if>\n    <\/sc-for>\n    <sc-if value=\"{{v.measure.on}}\" hint-placeholder-val=\"{{false}}\">\n      <g>\n        <sc-for list=\"{{v.measure.lines}}\" as=\"l\" hint-placeholder-count=\"12\">\n          <line class=\"{{l.cls}}\" pathLength=\"1\" x1=\"{{l.x1}}\" y1=\"{{l.y1}}\" x2=\"{{l.x2}}\" y2=\"{{l.y2}}\" stroke=\"{{v.measure.ink}}\" stroke-width=\"0.9\" style=\"{{l.st}}\"><\/line>\n        <\/sc-for>\n        <sc-for list=\"{{v.measure.callouts}}\" as=\"c\" hint-placeholder-count=\"5\">\n          <g>\n            <polyline class=\"{{c.lcls}}\" pathLength=\"1\" points=\"{{c.x1}},{{c.y1}} {{c.x2}},{{c.y2}} {{c.x3}},{{c.y2}}\" fill=\"none\" stroke=\"{{v.measure.text}}\" stroke-width=\"0.8\" style=\"{{c.lst}}\"><\/polyline>\n            <circle class=\"{{c.tcls}}\" cx=\"{{c.x1}}\" cy=\"{{c.y1}}\" r=\"2.5\" fill=\"{{v.measure.text}}\" style=\"{{c.tst}}\"><\/circle>\n            <text class=\"{{c.tcls}}\" x=\"{{c.tx}}\" y=\"{{c.ty}}\" text-anchor=\"{{c.anchor}}\" font-family=\"IBM Plex Mono\" font-size=\"11\" fill=\"{{v.measure.text}}\" style=\"{{c.tst}}\">{{c.text}}<\/text>\n          <\/g>\n        <\/sc-for>\n        <sc-for list=\"{{v.measure.labels}}\" as=\"t\" hint-placeholder-count=\"10\">\n          <text class=\"{{t.cls}}\" x=\"{{t.x}}\" y=\"{{t.y}}\" text-anchor=\"{{t.anchor}}\" font-family=\"IBM Plex Mono\" font-size=\"11\" fill=\"{{v.measure.text}}\" paint-order=\"stroke\" stroke=\"{{v.bg}}\" stroke-width=\"3\" style=\"{{t.st}}\">{{t.text}}<\/text>\n        <\/sc-for>\n      <\/g>\n    <\/sc-if>\n    <text x=\"880\" y=\"508\" text-anchor=\"end\" font-family=\"IBM Plex Mono\" font-size=\"11\" fill=\"{{v.sub}}\">BUILT AT 1204 M. NAVAL ST., NAVOTAS \u00b7 VIEW {{yawLabel}}\u00b0<\/text>\n  <\/svg>\n  <sc-if value=\"{{v.showSteps}}\" hint-placeholder-val=\"{{true}}\">\n    <div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; padding: 10px 16px 14px; border-top: 1px solid {{v.rule}}\">\n      <div style=\"display: flex; flex-wrap: wrap; gap: 6px\">\n        <sc-for list=\"{{v.steps}}\" as=\"st\" hint-placeholder-count=\"5\">\n          <span class=\"{{st.cls}}\" style=\"font-size: 12px; padding: 7px 10px; border: 1px solid {{v.ink}}; color: {{v.ink}}; {{st.st}}\">{{st.num}} {{st.n}}<\/span>\n        <\/sc-for>\n      <\/div>\n      <div style=\"display: flex; align-items: center; gap: 6px; font-size: 12px\">\n        <span style=\"color: {{v.sub}}\">ROTATE<\/span>\n        <button type=\"button\" aria-label=\"Rotate left 30 degrees\" onClick=\"{{left}}\" style=\"width: 44px; height: 44px; background: transparent; color: {{v.ink}}; border: 1px solid {{v.ink}}; font-size: 18px; cursor: pointer\">\u27f2<\/button>\n        <label style=\"display: flex; align-items: center\"><span style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)\">View angle<\/span><input type=\"range\" min=\"-180\" max=\"180\" step=\"1\" value=\"{{yaw}}\" onInput=\"{{slide}}\" style=\"width: 140px; accent-color: {{v.ink}}\"><\/label>\n        <button type=\"button\" aria-label=\"Rotate right 30 degrees\" onClick=\"{{right}}\" style=\"width: 44px; height: 44px; background: transparent; color: {{v.ink}}; border: 1px solid {{v.ink}}; font-size: 18px; cursor: pointer\">\u27f3<\/button>\n        <button type=\"button\" onClick=\"{{reset}}\" style=\"height: 44px; padding: 0 12px; background: transparent; color: {{v.ink}}; border: 1px solid {{v.rule}}; font-family: 'IBM Plex Mono', monospace; font-size: 12px; cursor: pointer\">RESET<\/button>\n      <\/div>\n    <\/div>\n  <\/sc-if>\n<\/div>", function (DCLogic) {

function shBox(x0, x1, y0, y1, z0, z1) {
  var v = [[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]];
  var f = [[0,1,2,3],[4,5,6,7],[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7]];
  return { v: v, f: f };
}
function shLoft(bottom, top) {
  var n = bottom.length, v = bottom.concat(top), f = [[], []], i;
  for (i = 0; i < n; i++) { f[0].push(i); f[1].push(i + n); }
  for (i = 0; i < n; i++) { var j = (i + 1) % n; f.push([i, j, j + n, i + n]); }
  return { v: v, f: f };
}
function shPrismXZ(poly, y0, y1) {
  return shLoft(poly.map(function (p) { return [p[0], y0, p[1]]; }), poly.map(function (p) { return [p[0], y1, p[1]]; }));
}
function shCyl(x0, x1, yc, zc, r) {
  var b = [], t = [], n = 12, i;
  for (i = 0; i < n; i++) { var a = i / n * 2 * Math.PI; b.push([x0, yc + r * Math.cos(a), zc + r * Math.sin(a)]); t.push([x1, yc + r * Math.cos(a), zc + r * Math.sin(a)]); }
  return shLoft(b, t);
}
function shShipOutline(L, B, D, z) {
  var t = z / D, b = B / 2 * (0.84 + 0.16 * t), s0 = L * 0.04 * (1 - t), sh = L * (0.8 + 0.05 * t), bow = L * (0.92 + 0.08 * t);
  return [[s0,-b,z],[sh,-b,z],[bow,0,z],[sh,b,z],[s0,b,z]];
}
function shShipHull(L, B, D, z0, z1) { return shLoft(shShipOutline(L, B, D, z0), shShipOutline(L, B, D, z1)); }
function shBargeOutline(L, B, D, z) {
  var t = z / D, b = B / 2 * (0.95 + 0.05 * t);
  return [[2 * (1 - t), -b, z], [L - 6 + 6 * t, -b, z], [L - 6 + 6 * t, b, z], [2 * (1 - t), b, z]];
}
function shBargeHull(L, B, D, z0, z1) { return shLoft(shBargeOutline(L, B, D, z0), shBargeOutline(L, B, D, z1)); }

function shDefs(key) {
  var L, B, D, W;
  if (key === 'tanker') {
    L = 100; B = 18; D = 9; W = 5;
    return { L: L, B: B, D: D, wl: shShipOutline(L, B, D, W), steps: ['Keel and bottom', 'Side shell', 'Cargo deck', 'Accommodation', 'Outfitting'], parts: [
      { s: shShipHull(L, B, D, 0, W), c: 'red', step: 0, layer: 0 },
      { s: shShipHull(L, B, D, W, D), c: 'hull', step: 1, layer: 1 },
      { s: shBox(22, 84, -1, 1, D, D + 1.2), c: 'gear', step: 2, layer: 2 },
      { s: shBox(50, 54, -6, 6, D, D + 1.4), c: 'gear', step: 2, layer: 2 },
      { s: shBox(27, 31, 2.5, 5.5, D, D + 0.9), c: 'gear', step: 2, layer: 2 },
      { s: shBox(39, 43, 2.5, 5.5, D, D + 0.9), c: 'gear', step: 2, layer: 2 },
      { s: shBox(61, 65, 2.5, 5.5, D, D + 0.9), c: 'gear', step: 2, layer: 2 },
      { s: shBox(73, 77, 2.5, 5.5, D, D + 0.9), c: 'gear', step: 2, layer: 2 },
      { s: shBox(83, 90, -4, 4, D, D + 2), c: 'hull', step: 2, layer: 2 },
      { s: shBox(0.5, 4, -2.5, 2.5, D, 22), c: 'navy', step: 3, layer: 3 },
      { s: shBox(4, 18, -7, 7, D, 16), c: 'house', step: 3, layer: 3 },
      { s: shBox(5, 16, -8.5, 8.5, 16, 19.5), c: 'bridge', step: 3, layer: 4 },
      { s: shBox(9.5, 10.5, -0.4, 0.4, 19.5, 24), c: 'navy', step: 4, layer: 5 },
      { s: shBox(91, 92, -0.5, 0.5, D + 2, 20), c: 'navy', step: 4, layer: 5 }
    ] };
  }
  if (key === 'lpg') {
    L = 100; B = 18; D = 9; W = 5;
    return { L: L, B: B, D: D, wl: shShipOutline(L, B, D, W), steps: ['Keel and bottom', 'Side shell', 'Pressure tanks', 'Accommodation', 'Outfitting'], parts: [
      { s: shShipHull(L, B, D, 0, W), c: 'red', step: 0, layer: 0 },
      { s: shShipHull(L, B, D, W, D), c: 'hull', step: 1, layer: 1 },
      { s: shCyl(22, 44, 0, D + 3.6, 3.6), c: 'tank', step: 2, layer: 2 },
      { s: shCyl(46, 66, 0, D + 3.6, 3.6), c: 'tank', step: 2, layer: 2 },
      { s: shCyl(68, 82, 0, D + 3.2, 3.2), c: 'tank', step: 2, layer: 2 },
      { s: shBox(0.5, 4, -2.5, 2.5, D, 22), c: 'navy', step: 3, layer: 3 },
      { s: shBox(4, 18, -7, 7, D, 16), c: 'house', step: 3, layer: 3 },
      { s: shBox(5, 16, -8.5, 8.5, 16, 19.5), c: 'bridge', step: 3, layer: 4 },
      { s: shBox(9.5, 10.5, -0.4, 0.4, 19.5, 24), c: 'navy', step: 4, layer: 5 },
      { s: shBox(86, 91, -3, 3, D, D + 2), c: 'hull', step: 4, layer: 5 }
    ] };
  }
  if (key === 'lct') {
    return { L: 72, B: 16, D: 5, wl: [[1, -7.5, 2.5], [66, -7.5, 2.5], [66, 7.5, 2.5], [1, 7.5, 2.5]], steps: ['Bottom shell', 'Car deck', 'Bow ramp and walls', 'Wheelhouse', 'Cargo'], parts: [
      { s: shBox(1, 66, -7.5, 7.5, 0, 2.5), c: 'red', step: 0, layer: 0 },
      { s: shBox(0, 68, -8, 8, 2.5, 5), c: 'hull', step: 1, layer: 1 },
      { s: shBox(14, 68, -8, -7, 5, 7.5), c: 'gear', step: 2, layer: 2 },
      { s: shBox(14, 68, 7, 8, 5, 7.5), c: 'gear', step: 2, layer: 2 },
      { s: shPrismXZ([[68, 4.5], [69.4, 4.5], [71, 10], [69.6, 10]], -6.5, 6.5), c: 'gear', step: 2, layer: 2 },
      { s: shBox(1, 13, -7, 7, 5, 12), c: 'house', step: 3, layer: 3 },
      { s: shBox(2, 12, -7.5, 7.5, 12, 15.5), c: 'bridge', step: 3, layer: 4 },
      { s: shBox(6.5, 7.1, -0.3, 0.3, 15.5, 20), c: 'navy', step: 3, layer: 5 },
      { s: shBox(30, 40, -3, 3, 5, 8.5), c: 'navy', step: 4, layer: 3 },
      { s: shBox(40, 43, -3, 3, 5, 9.5), c: 'glass', step: 4, layer: 3 }
    ] };
  }
  if (key === 'tug') {
    L = 40; B = 13; D = 6; W = 3.5;
    return { L: L, B: B, D: D, wl: shShipOutline(L, B, D, W), steps: ['Keel and bottom', 'Side shell', 'Towing gear', 'Deckhouse', 'Wheelhouse'], parts: [
      { s: shShipHull(L, B, D, 0, W), c: 'red', step: 0, layer: 0 },
      { s: shShipHull(L, B, D, W, D), c: 'hull', step: 1, layer: 1 },
      { s: shBox(4, 5, -5, -4, D, 10), c: 'navy', step: 2, layer: 2 },
      { s: shBox(4, 5, 4, 5, D, 10), c: 'navy', step: 2, layer: 2 },
      { s: shBox(4, 5, -5, 5, 10, 11), c: 'navy', step: 2, layer: 3 },
      { s: shBox(6, 9, -2, 2, D, 7.5), c: 'gear', step: 2, layer: 2 },
      { s: shBox(9, 11.5, -4, -2.5, D, 14), c: 'navy', step: 3, layer: 3 },
      { s: shBox(9, 11.5, 2.5, 4, D, 14), c: 'navy', step: 3, layer: 3 },
      { s: shBox(12, 26, -5, 5, D, 11), c: 'house', step: 3, layer: 3 },
      { s: shBox(14, 24, -5.8, 5.8, 11, 15), c: 'bridge', step: 4, layer: 4 },
      { s: shBox(18.7, 19.3, -0.3, 0.3, 15, 21), c: 'navy', step: 4, layer: 5 }
    ] };
  }
  if (key === 'barge') {
    L = 60; B = 22; D = 4.5; W = 2;
    return { L: L, B: B, D: D, wl: shBargeOutline(L, B, D, W), steps: ['Bottom', 'Deck', 'Spud legs', 'Excavator base', 'Boom and bucket'], parts: [
      { s: shBargeHull(L, B, D, 0, W), c: 'red', step: 0, layer: 0 },
      { s: shBargeHull(L, B, D, W, D), c: 'hull', step: 1, layer: 1 },
      { s: shBox(3, 4.5, -9, -7.5, D, 18), c: 'navy', step: 2, layer: 2 },
      { s: shBox(3, 4.5, 7.5, 9, D, 18), c: 'navy', step: 2, layer: 2 },
      { s: shBox(18, 30, -6, -3, D, 6.5), c: 'navy', step: 3, layer: 2 },
      { s: shBox(18, 30, 3, 6, D, 6.5), c: 'navy', step: 3, layer: 2 },
      { s: shBox(18, 29, -5, 5, 6.5, 10), c: 'gear', step: 3, layer: 3 },
      { s: shBox(25, 29, -5, -1, 10, 14), c: 'glass', step: 3, layer: 4 },
      { s: shPrismXZ([[27, 9.5], [30, 9.5], [44, 18], [42, 19.5]], -0.9, 0.9), c: 'house', step: 4, layer: 5 },
      { s: shPrismXZ([[42, 19.5], [44, 18], [50, 8], [48, 8]], -0.7, 0.7), c: 'house', step: 4, layer: 5 },
      { s: shBox(46.5, 51, -1.6, 1.6, 5, 8.5), c: 'navy', step: 4, layer: 5 }
    ] };
  }
  L = 60; B = 14; D = 6; W = 3;
  return { L: L, B: B, D: D, wl: shShipOutline(L, B, D, W), steps: ['Keel and bottom', 'Main hull', 'Passenger deck', 'Upper deck', 'Bridge and mast'], parts: [
    { s: shShipHull(L, B, D, 0, W), c: 'red', step: 0, layer: 0 },
    { s: shShipHull(L, B, D, W, D), c: 'hull', step: 1, layer: 1 },
    { s: shBox(6, 48, -6.5, 6.5, D, 10.5), c: 'house', step: 2, layer: 2 },
    { s: shBox(7, 47.5, 6.5, 6.7, 7.5, 9.2), c: 'glass', step: 2, layer: 3 },
    { s: shBox(10, 42, -6, 6, 10.5, 14.5), c: 'bridge', step: 3, layer: 3 },
    { s: shBox(11, 41.5, 6, 6.2, 11.5, 13.3), c: 'glass', step: 3, layer: 4 },
    { s: shBox(14, 18, -2, 2, 14.5, 19), c: 'navy', step: 4, layer: 4 },
    { s: shBox(34, 42, -6.8, 6.8, 14.5, 17.5), c: 'house', step: 4, layer: 4 },
    { s: shBox(38, 38.6, -0.3, 0.3, 17.5, 22), c: 'navy', step: 4, layer: 5 }
  ] };
}

var SH_STYLES = {
  trace: { bg: '#1B3A8C', grid: 'rgba(255,255,255,0.12)', ink: '#FFFFFF', sub: '#AFC4FF', rule: 'rgba(255,255,255,0.3)',
    pal: { red: 'none', hull: 'none', gear: 'none', house: 'none', bridge: 'none', navy: 'none', tank: 'none', glass: 'none' },
    shade: '#1B3A8C', k: 0, stroke: '#DDE7FF', sw: 1.1, berthFill: 'none', berthStroke: '#9DBBFF', anim: 'draw', gap: 0.55, ghost: false,
    strokeBy: { red: '#FF8A80' }, measure: true, mInk: '#9DBBFF', mText: '#E6EEFF', wlInk: '#FF8A80' },
  line: { bg: '#0B1530', grid: 'rgba(127,227,255,0.07)', ink: '#7FE3FF', sub: '#5C8FB0', rule: 'rgba(127,227,255,0.25)',
    pal: { red: '#0B1530', hull: '#0B1530', gear: '#0B1530', house: '#0B1530', bridge: '#0B1530', navy: '#0B1530', tank: '#0B1530', glass: '#0B1530' },
    shade: '#0B1530', k: 0, stroke: '#7FE3FF', sw: 1.3, berthFill: 'none', berthStroke: '#2F5A7A', anim: 'draw', gap: 0.55, ghost: false,
    measure: true, mInk: '#3F7FA6', mText: '#9FDFF5', wlInk: '#FFB86B' },
  blueprint: { bg: '#1B3A8C', grid: 'rgba(255,255,255,0.12)', ink: '#FFFFFF', sub: '#AFC4FF', rule: 'rgba(255,255,255,0.3)',
    pal: { red: '#D7372F', hull: '#EEF2FF', gear: '#A9B9EC', house: '#FFFFFF', bridge: '#D6DFFF', navy: '#12185C', tank: '#C4D2FF', glass: '#2B3A9E' },
    shade: '#0E2470', k: 1, stroke: '#0E2470', sw: 0.8, berthFill: 'none', berthStroke: '#9DBBFF', anim: 'drop', gap: 0.6, ghost: true },
  toy: { bg: '#F4EBDD', grid: 'rgba(46,42,38,0.05)', ink: '#2E2A26', sub: '#7A6654', rule: 'rgba(46,42,38,0.2)',
    pal: { red: '#E8604C', hull: '#FFF6E8', gear: '#F2B84B', house: '#FFFFFF', bridge: '#9FD3C7', navy: '#2E3A59', tank: '#F2B84B', glass: '#2E3A59' },
    shade: '#7A4E35', k: 0.55, stroke: '#2E2A26', sw: 2.2, berthFill: '#E7D9C4', berthStroke: 'none', anim: 'pop', gap: 0.55, ghost: false },
  livery: { bg: '#DCE6EF', grid: 'rgba(18,24,92,0.04)', ink: '#12185C', sub: '#4B5170', rule: 'rgba(18,24,92,0.2)',
    pal: { red: '#D7372F', hull: '#12185C', gear: '#8A93A3', house: '#FFFFFF', bridge: '#E9ECF3', navy: '#0B0E24', tank: '#E9ECF3', glass: '#1B2A4A' },
    shade: '#000000', k: 0.75, stroke: 'rgba(0,0,0,0.25)', sw: 0.5, berthFill: '#9FB8CC', berthStroke: 'none', anim: 'rise', gap: 0.6, ghost: false },
  steel: { bg: '#24262A', grid: 'rgba(255,255,255,0.04)', ink: '#F3F4F6', sub: '#9AA0A8', rule: 'rgba(255,255,255,0.15)',
    pal: { red: '#8E4B36', hull: '#9AA0A8', gear: '#B8BDC4', house: '#C9CDD2', bridge: '#AEB3BA', navy: '#5F656E', tank: '#B8BDC4', glass: '#3A3F46' },
    shade: '#121417', k: 0.9, stroke: '#24262A', sw: 0.8, berthFill: '#33363B', berthStroke: 'none', anim: 'crane', gap: 0.85, ghost: false },
  neon: { bg: '#07060F', grid: 'rgba(178,107,255,0.06)', ink: '#38F2FF', sub: '#8C7FB8', rule: 'rgba(56,242,255,0.25)',
    pal: { red: '#140A1E', hull: '#0E0B22', gear: '#120F2A', house: '#120F2A', bridge: '#161233', navy: '#0E0B22', tank: '#120F2A', glass: '#1A1440' },
    shade: '#000000', k: 0.5, stroke: '#38F2FF', sw: 1.2, berthFill: 'none', berthStroke: '#3A2A66', anim: 'flick', gap: 0.5, ghost: false,
    strokeBy: { red: '#FF3D7F', navy: '#B26BFF' }, glow: 'filter: drop-shadow(0 0 3px rgba(56,242,255,0.7))' }
};

function shMix(a, b, t) {
  var A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16);
  var ar = [A >> 16 & 255, A >> 8 & 255, A & 255], br = [B >> 16 & 255, B >> 8 & 255, B & 255];
  return 'rgb(' + ar.map(function (v, i) { return Math.round(v + (br[i] - v) * t); }).join(',') + ')';
}
function shCen(pts) {
  var c = [0, 0, 0];
  pts.forEach(function (p) { c[0] += p[0]; c[1] += p[1]; c[2] += p[2]; });
  return [c[0] / pts.length, c[1] / pts.length, c[2] / pts.length];
}
function shRotF(yaw, cx) {
  var a = yaw * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a);
  return function (p) { var dx = p[0] - cx; return [cx + dx * ca - p[1] * sa, dx * sa + p[1] * ca, p[2]]; };
}
function shIso(p) { return [(p[0] - p[1]) * 0.866, (p[0] + p[1]) * 0.5 - p[2]]; }

var SH_W = 900, SH_H = 520, SH_M = 34;
var SH_SCALE = {};
function shScale(def, key) {
  if (SH_SCALE[key]) return SH_SCALE[key];
  var all = [];
  def.parts.forEach(function (pt) { all = all.concat(pt.s.v); });
  var Bh = def.B / 2;
  all.push([-10, -Bh - 6, 0], [def.L + 10, Bh + 9, 0], [-10, Bh + 9, 0], [def.L + 10, -Bh - 6, 0]);
  var best = 1e9;
  for (var yaw = 0; yaw < 360; yaw += 15) {
    var R = shRotF(yaw, def.L / 2), xs = [], ys = [];
    all.forEach(function (p) { var q = shIso(R(p)); xs.push(q[0]); ys.push(q[1]); });
    var w = Math.max.apply(null, xs) - Math.min.apply(null, xs), h = Math.max.apply(null, ys) - Math.min.apply(null, ys);
    best = Math.min(best, (SH_W - 2 * SH_M) / w, (SH_H - 2 * SH_M - 20) / h);
  }
  SH_SCALE[key] = best;
  return best;
}

function shGeom(key, yaw) {
  var def = shDefs(key), raw = [], R = shRotF(yaw, def.L / 2);
  def.parts.forEach(function (pt, idx) {
    var v = pt.s.v.map(R), c = shCen(v), faces = [];
    pt.s.f.forEach(function (fi) {
      var pts = fi.map(function (i) { return v[i]; }), nx = 0, ny = 0, nz = 0, i;
      for (i = 0; i < pts.length; i++) {
        var a = pts[i], b = pts[(i + 1) % pts.length];
        nx += (a[1] - b[1]) * (a[2] + b[2]); ny += (a[2] - b[2]) * (a[0] + b[0]); nz += (a[0] - b[0]) * (a[1] + b[1]);
      }
      var fc = shCen(pts);
      if ((fc[0] - c[0]) * nx + (fc[1] - c[1]) * ny + (fc[2] - c[2]) * nz < 0) { nx = -nx; ny = -ny; nz = -nz; }
      var len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1; nx /= len; ny /= len; nz /= len;
      if (nx + ny + nz <= 0.01) return;
      faces.push({ p2: pts.map(shIso), amt: nz > 0.6 ? 0 : (nx >= ny ? 0.42 : 0.2) });
    });
    var top = -1e9; pt.s.v.forEach(function (p) { top = Math.max(top, p[2]); });
    var oc = shCen(pt.s.v);
    raw.push({ faces: faces, role: pt.c, step: pt.step, key: (pt.layer || 0) * 1000 + c[0] + c[1] + c[2], idx: idx, anchor: [oc[0], oc[1], top] });
  });
  var L = def.L, B = def.B, Bh = B / 2, D = def.D;
  var zmax = 0, zx = 0;
  def.parts.forEach(function (pt) { pt.s.v.forEach(function (p) { if (p[2] > zmax) { zmax = p[2]; zx = p[0]; } }); });
  var s = shScale(def, key);
  var berth3 = [[-4, -Bh - 3, 0], [L + 4, -Bh - 3, 0], [L + 4, Bh + 3, 0], [-4, Bh + 3, 0]];
  var xs = [], ys = [];
  raw.forEach(function (r) { r.faces.forEach(function (f) { f.p2.forEach(function (p) { xs.push(p[0]); ys.push(p[1]); }); }); });
  berth3.forEach(function (p) { var q = shIso(R(p)); xs.push(q[0]); ys.push(q[1]); });
  var cx = (Math.min.apply(null, xs) + Math.max.apply(null, xs)) / 2, cy = (Math.min.apply(null, ys) + Math.max.apply(null, ys)) / 2;
  var ox = SH_W / 2 - cx * s, oy = SH_H / 2 - 4 - cy * s;
  function T(p) { return [p[0] * s + ox, p[1] * s + oy]; }
  function P(p3) { return T(shIso(R(p3))); }
  function str(a) { return a.map(function (p) { var q = T(p); return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '); }
  function str3(a) { return a.map(function (p) { var q = P(p); return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '); }
  function perim(a) { var q = a.map(T), l = 0, i; for (i = 0; i < q.length; i++) { var b = q[(i + 1) % q.length]; l += Math.sqrt(Math.pow(b[0] - q[i][0], 2) + Math.pow(b[1] - q[i][1], 2)); } return Math.ceil(l); }
  var order = raw.slice().sort(function (a, b) { return a.step - b.step || a.idx - b.idx; });
  var rank = {}, last = -1, k = 0, firstOfStep = {};
  order.forEach(function (r) { if (r.step !== last) { last = r.step; k = 0; firstOfStep[r.step] = r; } rank[r.idx] = k++; });
  var parts = raw.slice().sort(function (a, b) { return a.key - b.key; }).map(function (r) {
    var qs = [];
    r.faces.forEach(function (f) { f.p2.forEach(function (p) { qs.push(T(p)); }); });
    var pcx = 0, my = 1e9, bot = -1e9;
    qs.forEach(function (q) { pcx += q[0]; my = Math.min(my, q[1]); bot = Math.max(bot, q[1]); });
    pcx = qs.length ? pcx / qs.length : 0;
    return { role: r.role, step: r.step, rank: rank[r.idx], cx: pcx, top: my, bot: bot,
      faces: r.faces.map(function (f) { return { pts: str(f.p2), len: perim(f.p2), amt: f.amt }; }) };
  });

  // measurement layer: segments (solid lines drawn in), dashed lines (fade), labels, ticks
  var lines = [], dashes = [], labels = [];
  function seg(a3, b3, t, kind) { var a = P(a3), b = P(b3); (kind === 'dash' ? dashes : lines).push({ x1: a[0].toFixed(1), y1: a[1].toFixed(1), x2: b[0].toFixed(1), y2: b[1].toFixed(1), t: t }); return [a, b]; }
  function lab(p, text, t, anchor, dx, dy) { labels.push({ x: (p[0] + (dx || 0)).toFixed(1), y: (p[1] + (dy || 0)).toFixed(1), text: text, t: t, anchor: anchor || 'middle' }); }
  function mid(a, b) { return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; }
  var yL = Bh + 12;
  seg([-8, 0, 0], [L + 8, 0, 0], 0.05, 'dash');
  lab(P([L + 9, 0, 0]), 'CL', 0.3, 'start', 4, 4);
  seg([0, Bh + 1, 0], [0, yL + 2, 0], 0.15); seg([L, Bh + 1, 0], [L, yL + 2, 0], 0.15);
  var loa = seg([0, yL, 0], [L, yL, 0], 0.25);
  lab(mid(loa[0], loa[1]), 'LOA [__] m', 0.9, 'middle', 0, 18);
  var xb = -7;
  seg([-1, -Bh, 0], [xb - 2, -Bh, 0], 0.35); seg([-1, Bh, 0], [xb - 2, Bh, 0], 0.35);
  var bm = seg([xb, -Bh, 0], [xb, Bh, 0], 0.45);
  lab(mid(bm[0], bm[1]), 'B [__] m', 1.0, 'end', -10, 4);
  for (var i = 0; i <= 10; i++) {
    var fx = L * i / 10;
    var tk = seg([fx, Bh + 1.6, 0], [fx, Bh + 3.6, 0], 0.3 + i * 0.06);
    if (i % 2 === 0) lab(tk[1], 'FR ' + (i * 10), 0.45 + i * 0.06, 'middle', 0, 13);
  }
  var dX = L + 4, dY = 0;
  seg([dX, dY, 0], [dX, dY, D], 1.2); seg([dX - 1.2, dY, D], [dX + 1.2, dY, D], 1.3); seg([dX - 1.2, dY, 0], [dX + 1.2, dY, 0], 1.3);
  lab(mid(P([dX, dY, 0]), P([dX, dY, D])), 'D [__] m', 1.5, 'start', 8, 4);
  var wlp = def.wl.map(function (p) { return P(p); });
  var wlSt = wlp.map(function (q) { return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' ');
  var bowWl = wlp.reduce(function (m, q) { return q[0] > m[0] ? q : m; }, [-1e9, 0]);
  var axX = zx, axY = -Bh - 4;
  seg([axX, axY, 0], [axX, axY, zmax], 3.2); seg([axX - 1.5, axY, zmax], [axX + 1.5, axY, zmax], 3.3);
  lab(P([axX, axY, zmax]), 'AIR DRAFT [__] m', 3.5, 'start', 8, -6);
  var callouts = [];
  def.steps.forEach(function (n, si) {
    var r = firstOfStep[si]; if (!r) return;
    var a = P(r.anchor), dir = si % 2 === 0 ? 1 : -1, ex = a[0] + dir * 46, ey = a[1] - 34 - si * 4;
    callouts.push({ x1: a[0].toFixed(1), y1: a[1].toFixed(1), x2: ex.toFixed(1), y2: ey.toFixed(1), x3: (ex + dir * 28).toFixed(1),
      tx: (ex + dir * 32).toFixed(1), ty: (ey + 4).toFixed(1), anchor: dir > 0 ? 'start' : 'end', text: '0' + (si + 1) + ' ' + n.toUpperCase(), step: si });
  });
  return { parts: parts, berth: str3(berth3), steps: def.steps,
    measure: { lines: lines, dashes: dashes, labels: labels, wl: wlSt, wlLab: { x: (bowWl[0] + 8).toFixed(1), y: (bowWl[1] + 4).toFixed(1) }, callouts: callouts } };
}

function shStyled(g, sk, still, anim) {
  var S = SH_STYLES[sk] || SH_STYLES.trace, base = 1.1, maxD = 0, play = anim && !still;
  if (S.anim === 'draw' || S.anim === 'flick') base = 0.3;
  var parts = g.parts.map(function (p) {
    var d = base + p.step * S.gap + p.rank * (S.anim === 'crane' ? 0.22 : 0.14);
    var dur = S.anim === 'draw' ? 0.9 : S.anim === 'crane' ? 1.1 : 0.62;
    maxD = Math.max(maxD, d + dur);
    var stroke = (S.strokeBy && S.strokeBy[p.role]) || S.stroke;
    var faces = p.faces.map(function (f) {
      var fill = S.pal[p.role];
      if (S.k > 0 && fill.charAt(0) === '#') fill = shMix(fill, S.shade, f.amt * S.k);
      var st = '';
      if (S.anim === 'draw' && play) st = 'stroke-dasharray: ' + f.len + '; stroke-dashoffset: ' + f.len + '; animation: shInk .9s ease-out ' + d.toFixed(2) + 's both';
      return { pts: f.pts, fill: fill, stroke: stroke, sw: S.sw, st: st,
        gst: 'stroke-dasharray: ' + f.len + '; stroke-dashoffset: ' + f.len + '; animation-delay: ' + (0.03 * p.rank + 0.05 * p.step).toFixed(2) + 's' };
    });
    var cy = (p.top + p.bot) / 2;
    var pst = 'animation-delay: ' + d.toFixed(2) + 's';
    if (S.anim === 'pop' || S.anim === 'flick') pst += '; transform-origin: ' + p.cx.toFixed(0) + 'px ' + cy.toFixed(0) + 'px';
    var crane = S.anim === 'crane' && play;
    var rays = [];
    if (crane) {
      for (var i = 0; i < 6; i++) {
        var an = i * Math.PI / 3 + 0.3;
        rays.push({ x1: (p.cx + Math.cos(an) * 6).toFixed(1), y1: (p.bot + Math.sin(an) * 4).toFixed(1), x2: (p.cx + Math.cos(an) * 16).toFixed(1), y2: (p.bot + Math.sin(an) * 11).toFixed(1) });
      }
    }
    return { faces: faces, cls: play ? 'pt-' + S.anim : '', st: play ? pst : '', cx: p.cx.toFixed(1),
      spark: { on: crane, x: p.cx.toFixed(1), y: p.bot.toFixed(1), rays: rays, hookY: p.top.toFixed(1),
        st: 'animation-delay: ' + (d + 1.0).toFixed(2) + 's; transform-origin: ' + p.cx.toFixed(0) + 'px ' + p.bot.toFixed(0) + 'px',
        hookSt: 'animation-delay: ' + d.toFixed(2) + 's' } };
  });
  var showM = !!S.measure && !still;
  var M = g.measure, end = maxD;
  function lst(t) { return play ? 'stroke-dasharray: 1; stroke-dashoffset: 1; animation-delay: ' + t.toFixed(2) + 's' : ''; }
  function fst(t) { return play ? 'animation-delay: ' + t.toFixed(2) + 's' : ''; }
  var mcls = play ? 'mz' : '', fcls = play ? 'late' : '';
  var measure = {
    on: showM, ink: S.mInk || S.sub, text: S.mText || S.ink, wlInk: S.wlInk || S.sub, bg: S.bg,
    lines: M.lines.map(function (l) { return { x1: l.x1, y1: l.y1, x2: l.x2, y2: l.y2, cls: mcls, st: lst(Math.min(l.t, end)) }; }),
    dashes: M.dashes.map(function (l) { return { x1: l.x1, y1: l.y1, x2: l.x2, y2: l.y2, cls: fcls, st: fst(l.t) }; }),
    labels: M.labels.map(function (l) { return { x: l.x, y: l.y, text: l.text, anchor: l.anchor, cls: fcls, st: fst(Math.min(l.t, end)) }; }),
    wl: M.wl, wlCls: fcls, wlSt: fst(base + S.gap + 0.4), wlLab: M.wlLab,
    callouts: M.callouts.map(function (c) {
      var t = base + c.step * S.gap + 0.45;
      return { x1: c.x1, y1: c.y1, x2: c.x2, y2: c.y2, x3: c.x3, tx: c.tx, ty: c.ty, anchor: c.anchor, text: c.text,
        lcls: mcls, lst: lst(t), tcls: fcls, tst: fst(t + 0.35) };
    })
  };
  return {
    parts: parts, berth: g.berth, berthFill: S.berthFill, berthStroke: S.berthStroke, ghost: S.ghost && play,
    ink: S.ink, sub: S.sub, bg: S.bg, grid: S.grid, rule: S.rule, glow: S.glow || '', measure: measure,
    showSteps: !still,
    steps: g.steps.map(function (n, i) { return { n: n, num: '0' + (i + 1), cls: play ? 'chip' : '', st: play ? 'animation-delay: ' + (base + i * S.gap).toFixed(2) + 's' : '' }; })
  };
}

class Component extends DCLogic {
  renderVals() {
    var self = this, st = this.state || {};
    var vessel = this.props.vessel ?? 'tanker';
    var look = this.props.look ?? 'trace';
    var still = !!(this.props.still ?? false);
    var yaw = st.yaw || 0;
    var anim = !st.moved;
    var ck = vessel + '|' + look + '|' + still + '|' + yaw + '|' + anim;
    if (this._ck !== ck) {
      this._ck = ck;
      this._v = shStyled(shGeom(vessel, yaw), look, still, anim);
      this._v.aria = vessel + ' vessel drawn in ' + look + ' style, viewed at ' + yaw + ' degrees';
    }
    function setYaw(y) { y = Math.round(y); while (y > 180) y -= 360; while (y < -180) y += 360; self.setState({ yaw: y, moved: true }); }
    return {
      v: this._v, yaw: yaw, yawLabel: (yaw >= 0 ? '+' : '') + yaw, cursor: still ? 'default' : (st.drag ? 'grabbing' : 'grab'),
      left: function () { setYaw((self.state && self.state.yaw || 0) - 30); },
      right: function () { setYaw((self.state && self.state.yaw || 0) + 30); },
      reset: function () { setYaw(0); },
      slide: function (e) { setYaw(Number(e.target.value)); },
      down: function (e) {
        if (still) return;
        self._drag = { x: e.clientX, yaw: (self.state && self.state.yaw) || 0 };
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
        self.setState({ drag: true });
      },
      move: function (e) {
        if (!self._drag) return;
        var y = self._drag.yaw + (e.clientX - self._drag.x) * 0.6;
        if (Math.abs(e.clientX - self._drag.x) > 2) setYaw(y);
      },
      up: function () { if (self._drag) { self._drag = null; self.setState({ drag: false }); } }
    };
  }
}

return Component;
});
