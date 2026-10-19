DCRun.define("Yard-Sim-Camera", "<div style=\"width: 100%; background: #1B3A8C; color: #FFFFFF; font-family: 'IBM Plex Mono', monospace; display: flex; flex-direction: column; overflow: hidden\">\n  <div style=\"position: relative\">\n  <svg viewBox=\"0 0 1280 720\" width=\"100%\" style=\"display: block; touch-action: none; cursor: {{cursor}}\" onPointerDown=\"{{down}}\" onPointerMove=\"{{move}}\" onPointerUp=\"{{up}}\" role=\"img\" aria-label=\"Animated isometric view of the Dansyco yard, with a camera that follows the action, on the Navotas River: two berths building hulls, two mobile cranes lifting blocks, steel trucks on M. Naval St., and each finished vessel launching and turning down the river behind a tug.\" onPointerLeave=\"{{unhover}}\">\n    <rect x=\"0\" y=\"0\" width=\"1280\" height=\"720\" fill=\"#1B3A8C\"><\/rect>\n    <g transform=\"{{camTr}}\">\n    <sc-for list=\"{{polys}}\" as=\"p\" hint-placeholder-count=\"12\">\n      <polygon points=\"{{p.pts}}\" fill=\"{{p.fill}}\" stroke=\"{{p.stroke}}\" stroke-width=\"{{p.sw}}\" stroke-dasharray=\"{{p.dash}}\" opacity=\"{{p.op}}\" onPointerEnter=\"{{p.enter}}\"><\/polygon>\n    <\/sc-for>\n    <g aria-hidden=\"true\" style=\"pointer-events: none\">\n      <sc-for list=\"{{glines}}\" as=\"l\" hint-placeholder-count=\"20\">\n        <line x1=\"{{l.x1}}\" y1=\"{{l.y1}}\" x2=\"{{l.x2}}\" y2=\"{{l.y2}}\" stroke=\"{{l.c}}\" stroke-width=\"{{l.w}}\" stroke-dasharray=\"{{l.dash}}\"><\/line>\n      <\/sc-for>\n      <sc-for list=\"{{ripples}}\" as=\"r\" hint-placeholder-count=\"30\">\n        <line class=\"ys-rip\" x1=\"{{r.x1}}\" y1=\"{{r.y1}}\" x2=\"{{r.x2}}\" y2=\"{{r.y2}}\" stroke=\"#7FD3E3\" stroke-width=\"1.4\" stroke-linecap=\"round\" style=\"{{r.st}}\"><\/line>\n      <\/sc-for>\n      <sc-for list=\"{{labels}}\" as=\"t\" hint-placeholder-count=\"4\">\n        <text x=\"{{t.x}}\" y=\"{{t.y}}\" transform=\"{{t.tr}}\" text-anchor=\"{{t.anchor}}\" font-family=\"IBM Plex Mono\" font-size=\"{{t.size}}\" letter-spacing=\"2\" fill=\"{{t.fill}}\">{{t.text}}<\/text>\n      <\/sc-for>\n    <\/g>\n    <sc-for list=\"{{objs}}\" as=\"o\" hint-placeholder-count=\"12\">\n      <g onPointerEnter=\"{{o.enter}}\" style=\"cursor: help\">\n        <sc-for list=\"{{o.faces}}\" as=\"f\" hint-placeholder-count=\"6\">\n          <polygon points=\"{{f.pts}}\" fill=\"{{f.fill}}\" stroke=\"{{f.stroke}}\" stroke-width=\"{{f.sw}}\" stroke-linejoin=\"round\" vector-effect=\"non-scaling-stroke\"><\/polygon>\n        <\/sc-for>\n      <\/g>\n    <\/sc-for>\n    <g aria-hidden=\"true\" style=\"pointer-events: none\">\n      <sc-for list=\"{{lines}}\" as=\"l\" hint-placeholder-count=\"10\">\n        <line x1=\"{{l.x1}}\" y1=\"{{l.y1}}\" x2=\"{{l.x2}}\" y2=\"{{l.y2}}\" stroke=\"{{l.c}}\" stroke-width=\"{{l.w}}\" stroke-dasharray=\"{{l.dash}}\" stroke-linecap=\"round\" opacity=\"{{l.op}}\"><\/line>\n      <\/sc-for>\n      <sc-for list=\"{{dots}}\" as=\"d\" hint-placeholder-count=\"6\">\n        <ellipse cx=\"{{d.cx}}\" cy=\"{{d.cy}}\" rx=\"{{d.rx}}\" ry=\"{{d.ry}}\" fill=\"{{d.fill}}\" stroke=\"{{d.stroke}}\" stroke-width=\"{{d.sw}}\" opacity=\"{{d.op}}\"><\/ellipse>\n      <\/sc-for>\n    <\/g>\n    <\/g>\n  <\/svg>\n  <sc-if value=\"{{tip.on}}\" hint-placeholder-val=\"{{false}}\">\n    <div role=\"tooltip\" style=\"position: absolute; {{tip.st}}; transform: translate(-50%, calc(-100% - 14px)); pointer-events: none; background: #FFFFFF; color: #12185C; padding: 10px 14px 10px 16px; border-left: 4px solid #D7372F; box-shadow: 0 8px 20px rgba(11,14,36,0.25); white-space: nowrap; display: flex; flex-direction: column; gap: 3px\">\n      <b style=\"font-family: 'Archivo', sans-serif; font-weight: 800; font-size: 15px\">{{tip.l1}}<\/b>\n      <span style=\"font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #3A4060\">{{tip.l2}}<\/span>\n    <\/div>\n  <\/sc-if>\n  <div style=\"position: absolute; left: 16px; top: 16px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center; pointer-events: none\">\n    <div style=\"background: rgba(11,14,36,0.88); color: #FFFFFF; padding: 10px 14px; display: flex; gap: 10px; align-items: center; font-family: 'IBM Plex Mono', monospace; font-size: 13px\">\n      <span aria-hidden=\"true\" style=\"width: 10px; height: 10px; border-radius: 5px; background: #FF8A80\"><\/span>\n      <span>{{why}}<\/span>\n      <span style=\"color: #AFC4FF\">{{zoomLabel}}<\/span>\n    <\/div>\n    <sc-if value=\"{{offFollow}}\" hint-placeholder-val=\"{{false}}\">\n      <button type=\"button\" onClick=\"{{backFollow}}\" style=\"pointer-events: auto; min-height: 40px; padding: 0 14px; background: #D7372F; color: #FFFFFF; border: 0; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; cursor: pointer\">\u21ba Back to following<\/button>\n    <\/sc-if>\n  <\/div>\n  <\/div>\n  <sc-if value=\"{{hud}}\" hint-placeholder-val=\"{{true}}\">\n    <div style=\"display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px 20px; padding: 14px 20px; background: #0B0E24; border-top: 1px solid rgba(255,255,255,0.18)\">\n      <div aria-live=\"polite\" style=\"display: flex; flex-wrap: wrap; gap: 12px; flex: 1 1 520px\">\n        <sc-for list=\"{{status}}\" as=\"s\" hint-placeholder-count=\"2\">\n          <div style=\"flex: 1 1 240px; display: flex; flex-direction: column; gap: 6px; padding: 10px 12px; border: 1px solid rgba(255,255,255,0.22)\">\n            <div style=\"display: flex; justify-content: space-between; gap: 10px; font-size: 11px; color: #AFC4FF\"><span>{{s.berth}} \u00b7 {{s.vessel}}<\/span><sc-if value=\"{{s.live}}\" hint-placeholder-val=\"{{false}}\"><span class=\"ys-live\" style=\"color: #FF8A80; font-weight: 600\">\u25cf LIVE<\/span><\/sc-if><\/div>\n            <div style=\"font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 15px\">{{s.stage}}<\/div>\n            <div style=\"height: 4px; background: rgba(255,255,255,0.15)\"><div style=\"height: 4px; background: #D7372F; {{s.barSt}}\"><\/div><\/div>\n          <\/div>\n        <\/sc-for>\n      <\/div>\n      <div style=\"display: flex; flex-direction: column; gap: 8px; align-items: flex-end\">\n        <div role=\"group\" aria-label=\"Camera\" style=\"display: flex; flex-wrap: wrap; border: 1px solid rgba(255,255,255,0.6)\">\n          <sc-for list=\"{{modes}}\" as=\"m\" hint-placeholder-count=\"4\">\n            <button type=\"button\" aria-pressed=\"{{m.pressed}}\" onClick=\"{{m.pick}}\" style=\"min-height: 44px; padding: 0 12px; border: 0; background: {{m.bg}}; color: {{m.fg}}; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; cursor: pointer\">{{m.label}}<\/button>\n          <\/sc-for>\n        <\/div>\n        <div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n          <button type=\"button\" aria-label=\"Zoom out\" onClick=\"{{zout}}\" style=\"width: 44px; min-height: 44px; background: transparent; color: #FFFFFF; border: 1px solid rgba(255,255,255,0.6); font-size: 18px; cursor: pointer\">\u2212<\/button>\n          <button type=\"button\" aria-label=\"Zoom in\" onClick=\"{{zin}}\" style=\"width: 44px; min-height: 44px; background: transparent; color: #FFFFFF; border: 1px solid rgba(255,255,255,0.6); font-size: 18px; cursor: pointer\">+<\/button>\n          <button type=\"button\" onClick=\"{{toggle}}\" style=\"min-height: 44px; padding: 0 16px; background: #FFFFFF; color: #12185C; border: 0; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; cursor: pointer\">{{playLabel}}<\/button>\n          <button type=\"button\" onClick=\"{{jump}}\" style=\"min-height: 44px; padding: 0 14px; background: #D7372F; color: #FFFFFF; border: 0; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; cursor: pointer\">Skip to the launch<\/button>\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/sc-if>\n<\/div>", function (DCLogic) {

function gBox(x0, x1, y0, y1, z0, z1) {
  return { v: [[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]],
    f: [[0,1,2,3],[4,5,6,7],[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7]] };
}
function gLoft(bottom, top) {
  var n = bottom.length, v = bottom.concat(top), f = [[], []], i;
  for (i = 0; i < n; i++) { f[0].push(i); f[1].push(i + n); }
  for (i = 0; i < n; i++) { var j = (i + 1) % n; f.push([i, j, j + n, i + n]); }
  return { v: v, f: f };
}
function gPrismXZ(poly, y0, y1) {
  return gLoft(poly.map(function (p) { return [p[0], y0, p[1]]; }), poly.map(function (p) { return [p[0], y1, p[1]]; }));
}
function gCyl(x0, x1, yc, zc, r) {
  var b = [], t = [], n = 10, i;
  for (i = 0; i < n; i++) { var a = i / n * 2 * Math.PI; b.push([x0, yc + r * Math.cos(a), zc + r * Math.sin(a)]); t.push([x1, yc + r * Math.cos(a), zc + r * Math.sin(a)]); }
  return gLoft(b, t);
}
function gShipOutline(L, B, D, z) {
  var t = z / D, b = B / 2 * (0.84 + 0.16 * t), s0 = L * 0.04 * (1 - t), sh = L * (0.8 + 0.05 * t), bow = L * (0.92 + 0.08 * t);
  return [[s0,-b,z],[sh,-b,z],[bow,0,z],[sh,b,z],[s0,b,z]];
}
function gShipHull(L, B, D, z0, z1) { return gLoft(gShipOutline(L, B, D, z0), gShipOutline(L, B, D, z1)); }
function gBargeOutline(L, B, D, z) {
  var t = z / D, b = B / 2 * (0.95 + 0.05 * t);
  return [[2 * (1 - t), -b, z], [L - 6 + 6 * t, -b, z], [L - 6 + 6 * t, b, z], [2 * (1 - t), b, z]];
}
function gBargeHull(L, B, D, z0, z1) { return gLoft(gBargeOutline(L, B, D, z0), gBargeOutline(L, B, D, z1)); }

function gVessel(key) {
  var L, B, D, W;
  if (key === 'tanker') {
    L = 100; B = 18; D = 9; W = 5;
    return { L: L, B: B, D: D, W: W, steps: ['Keel and bottom', 'Side shell', 'Cargo deck', 'Accommodation', 'Outfitting'], parts: [
      { s: gShipHull(L, B, D, 0, W), c: 'red', step: 0 }, { s: gShipHull(L, B, D, W, D), c: 'hull', step: 1 },
      { s: gBox(22, 84, -1, 1, D, D + 1.2), c: 'gear', step: 2 }, { s: gBox(50, 54, -6, 6, D, D + 1.4), c: 'gear', step: 2 },
      { s: gBox(83, 90, -4, 4, D, D + 2), c: 'hull', step: 2 }, { s: gBox(0.5, 4, -2.5, 2.5, D, 22), c: 'navy', step: 3 },
      { s: gBox(4, 18, -7, 7, D, 16), c: 'house', step: 3 }, { s: gBox(5, 16, -8.5, 8.5, 16, 19.5), c: 'bridge', step: 3 },
      { s: gBox(9.5, 10.5, -0.4, 0.4, 19.5, 24), c: 'navy', step: 4 }, { s: gBox(91, 92, -0.5, 0.5, D + 2, 20), c: 'navy', step: 4 } ] };
  }
  if (key === 'lpg') {
    L = 100; B = 18; D = 9; W = 5;
    return { L: L, B: B, D: D, W: W, steps: ['Keel and bottom', 'Side shell', 'Pressure tanks', 'Accommodation', 'Outfitting'], parts: [
      { s: gShipHull(L, B, D, 0, W), c: 'red', step: 0 }, { s: gShipHull(L, B, D, W, D), c: 'hull', step: 1 },
      { s: gCyl(22, 44, 0, D + 3.6, 3.6), c: 'tank', step: 2 }, { s: gCyl(46, 66, 0, D + 3.6, 3.6), c: 'tank', step: 2 },
      { s: gCyl(68, 82, 0, D + 3.2, 3.2), c: 'tank', step: 2 }, { s: gBox(0.5, 4, -2.5, 2.5, D, 22), c: 'navy', step: 3 },
      { s: gBox(4, 18, -7, 7, D, 16), c: 'house', step: 3 }, { s: gBox(5, 16, -8.5, 8.5, 16, 19.5), c: 'bridge', step: 3 },
      { s: gBox(9.5, 10.5, -0.4, 0.4, 19.5, 24), c: 'navy', step: 4 }, { s: gBox(86, 91, -3, 3, D, D + 2), c: 'hull', step: 4 } ] };
  }
  if (key === 'lct') {
    return { L: 72, B: 16, D: 5, W: 2.5, steps: ['Bottom shell', 'Car deck', 'Bow ramp and walls', 'Wheelhouse', 'Cargo'], parts: [
      { s: gBox(1, 66, -7.5, 7.5, 0, 2.5), c: 'red', step: 0 }, { s: gBox(0, 68, -8, 8, 2.5, 5), c: 'hull', step: 1 },
      { s: gBox(14, 68, -8, -7, 5, 7.5), c: 'gear', step: 2 }, { s: gBox(14, 68, 7, 8, 5, 7.5), c: 'gear', step: 2 },
      { s: gPrismXZ([[68, 4.5], [69.4, 4.5], [71, 10], [69.6, 10]], -6.5, 6.5), c: 'gear', step: 2 },
      { s: gBox(1, 13, -7, 7, 5, 12), c: 'house', step: 3 }, { s: gBox(2, 12, -7.5, 7.5, 12, 15.5), c: 'bridge', step: 3 },
      { s: gBox(6.5, 7.1, -0.3, 0.3, 15.5, 20), c: 'navy', step: 3 }, { s: gBox(30, 40, -3, 3, 5, 8.5), c: 'navy', step: 4 },
      { s: gBox(40, 43, -3, 3, 5, 9.5), c: 'glass', step: 4 } ] };
  }
  if (key === 'tug') {
    L = 40; B = 13; D = 6; W = 3.5;
    return { L: L, B: B, D: D, W: W, steps: ['Keel and bottom', 'Side shell', 'Towing gear', 'Deckhouse', 'Wheelhouse'], parts: [
      { s: gShipHull(L, B, D, 0, W), c: 'red', step: 0 }, { s: gShipHull(L, B, D, W, D), c: 'hull', step: 1 },
      { s: gBox(4, 5, -5, 5, 10, 11), c: 'navy', step: 2 }, { s: gBox(6, 9, -2, 2, D, 7.5), c: 'gear', step: 2 },
      { s: gBox(12, 26, -5, 5, D, 11), c: 'house', step: 3 }, { s: gBox(14, 24, -5.8, 5.8, 11, 15), c: 'bridge', step: 4 },
      { s: gBox(18.7, 19.3, -0.3, 0.3, 15, 21), c: 'navy', step: 4 } ] };
  }
  if (key === 'barge') {
    L = 60; B = 22; D = 4.5; W = 2;
    return { L: L, B: B, D: D, W: W, steps: ['Bottom', 'Deck', 'Spud legs', 'Excavator base', 'Boom and bucket'], parts: [
      { s: gBargeHull(L, B, D, 0, W), c: 'red', step: 0 }, { s: gBargeHull(L, B, D, W, D), c: 'hull', step: 1 },
      { s: gBox(3, 4.5, -9, -7.5, D, 18), c: 'navy', step: 2 }, { s: gBox(3, 4.5, 7.5, 9, D, 18), c: 'navy', step: 2 },
      { s: gBox(18, 29, -5, 5, D, 10), c: 'gear', step: 3 }, { s: gBox(25, 29, -5, -1, 10, 14), c: 'glass', step: 3 },
      { s: gPrismXZ([[27, 9.5], [30, 9.5], [44, 18], [42, 19.5]], -0.9, 0.9), c: 'house', step: 4 },
      { s: gPrismXZ([[42, 19.5], [44, 18], [50, 8], [48, 8]], -0.7, 0.7), c: 'house', step: 4 } ] };
  }
  L = 60; B = 14; D = 6; W = 3;
  return { L: L, B: B, D: D, W: W, steps: ['Keel and bottom', 'Main hull', 'Passenger deck', 'Upper deck', 'Bridge and mast'], parts: [
    { s: gShipHull(L, B, D, 0, W), c: 'red', step: 0 }, { s: gShipHull(L, B, D, W, D), c: 'hull', step: 1 },
    { s: gBox(6, 48, -6.5, 6.5, D, 10.5), c: 'house', step: 2 }, { s: gBox(10, 42, -6, 6, 10.5, 14.5), c: 'bridge', step: 3 },
    { s: gBox(14, 18, -2, 2, 14.5, 19), c: 'navy', step: 4 }, { s: gBox(34, 42, -6.8, 6.8, 14.5, 17.5), c: 'house', step: 4 },
    { s: gBox(38, 38.6, -0.3, 0.3, 17.5, 22), c: 'navy', step: 4 } ] };
}

var G_PAL = { red: '#D7372F', hull: '#EEF2FF', gear: '#A9B9EC', house: '#FFFFFF', bridge: '#D6DFFF', navy: '#12185C', tank: '#C4D2FF', glass: '#2B3A9E',
  yellow: '#F5C400', steel: '#8E9AB8', concrete: '#C9D0DC', roof: '#9DB2F0', wall: '#D6DFFF', dark: '#0B0E24', white: '#FFFFFF' };
function gMix(a, b, t) {
  var A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16);
  var ar = [A >> 16 & 255, A >> 8 & 255, A & 255], br = [B >> 16 & 255, B >> 8 & 255, B & 255];
  return 'rgb(' + ar.map(function (v, i) { return Math.round(v + (br[i] - v) * t); }).join(',') + ')';
}
function gIso(p) { return [(p[0] - p[1]) * 0.866, (p[0] + p[1]) * 0.5 - p[2]]; }
function gCen(pts) {
  var c = [0, 0, 0];
  pts.forEach(function (p) { c[0] += p[0]; c[1] += p[1]; c[2] += p[2]; });
  return [c[0] / pts.length, c[1] / pts.length, c[2] / pts.length];
}
// xf: { s: scale, cx: model rotation centre on x, yaw: degrees, x, y, z: world position of that centre }
function gXf(xf) {
  var a = (xf.yaw || 0) * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a), s = xf.s || 1, cx = xf.cx || 0;
  return function (p) {
    var dx = (p[0] - cx) * s, dy = p[1] * s;
    return [xf.x + dx * ca - dy * sa, xf.y + dx * sa + dy * ca, (xf.z || 0) + p[2] * s];
  };
}
// returns visible faces of a shape, already in world space, each with depth and shaded fill
function gFaces(shape, T, color, opt) {
  opt = opt || {};
  var v = shape.v.map(T), c = gCen(v), out = [];
  shape.f.forEach(function (fi) {
    var pts = fi.map(function (i) { return v[i]; }), nx = 0, ny = 0, nz = 0, i;
    for (i = 0; i < pts.length; i++) {
      var a = pts[i], b = pts[(i + 1) % pts.length];
      nx += (a[1] - b[1]) * (a[2] + b[2]); ny += (a[2] - b[2]) * (a[0] + b[0]); nz += (a[0] - b[0]) * (a[1] + b[1]);
    }
    var fc = gCen(pts);
    if ((fc[0] - c[0]) * nx + (fc[1] - c[1]) * ny + (fc[2] - c[2]) * nz < 0) { nx = -nx; ny = -ny; nz = -nz; }
    var len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1; nx /= len; ny /= len; nz /= len;
    if (nx + ny + nz <= 0.01) return;
    var amt = nz > 0.6 ? 0 : (nx >= ny ? 0.42 : 0.2);
    var fill = color.charAt(0) === '#' ? gMix(color, opt.shade || '#0E2470', amt * (opt.k == null ? 0.9 : opt.k)) : color;
    out.push({ w: pts, d: fc[0] + fc[1] + fc[2], fill: fill, stroke: opt.stroke || '#0E2470', sw: opt.sw == null ? 0.6 : opt.sw });
  });
  out.sort(function (a, b) { return a.d - b.d; });
  return { faces: out, c: c };
}
function gClamp(x, a, b) { return x < a ? a : x > b ? b : x; }
function gEase(x) { x = gClamp(x, 0, 1); return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }

var YS_W = 1280, YS_H = 720;
var YS_C = 44;               // seconds per berth cycle
var YS_BERTHS = [
  { id: 'b1', n: 1, x: 40, off: 0, ships: ['tanker', 'lct', 'lpg'] },
  { id: 'b2', n: 2, x: 100, off: 22, ships: ['ferry', 'barge', 'tug'] }
];
var YS_LEN = { tanker: 46, lpg: 46, lct: 40, tug: 24, barge: 32, ferry: 36 };
var YS_NAME = { tanker: 'Oil tanker', lpg: 'LPG tanker', lct: 'Landing craft', tug: 'Tugboat', barge: 'Backhoe barge', ferry: 'Passenger ferry' };
var YS_STERN = 112, YS_QUAY = 120;

var YS_FIT = (function () {
  var c = gIso([104, 96, 0]), s = 4.1;
  return { s: s, ox: YS_W / 2 - c[0] * s, oy: YS_H / 2 - c[1] * s + 10 };
})();
function ysP(p) { var q = gIso(p); return [q[0] * YS_FIT.s + YS_FIT.ox, q[1] * YS_FIT.s + YS_FIT.oy]; }
function ysPts(ws) { return ws.map(function (p) { var q = ysP(p); return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '); }
function ysPoly(ws, fill, stroke, sw, extra) { var o = { pts: ysPts(ws), fill: fill, stroke: stroke || 'none', sw: sw || 0, op: 1 }; if (extra) for (var k in extra) o[k] = extra[k]; return o; }
function ysRect(x0, x1, y0, y1, z) { return [[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z]]; }
function ysFacesOut(fs) { return fs.map(function (f) { return { pts: ysPts(f.w), fill: f.fill, stroke: f.stroke, sw: f.sw }; }); }

// ----- static scenery, built once
var YS_STATIC = (function () {
  var L = [];
  L.push(ysPoly(ysRect(-260, 520, YS_QUAY, 320, -1.2), '#13859F', null, 0, { id: 'river' }));
  L.push(ysPoly(ysRect(-260, 520, -15, -2, 0), '#22408F', null, 0, { id: 'road' }));
  L.push(ysPoly([[210, -2, 0], [210, YS_QUAY, 0], [210, YS_QUAY, -3], [210, -2, -3]], '#163275'));
  L.push(ysPoly(ysRect(214, 330, -2, YS_QUAY, 0), '#22418F'));
  L.push(ysPoly(ysRect(-120, -4, -2, YS_QUAY, 0), '#22418F'));
  L.push(ysPoly([[-120, YS_QUAY, 0], [-4, YS_QUAY, 0], [-4, YS_QUAY, -1.2], [-120, YS_QUAY, -1.2]], '#8E9AB8'));
  L.push(ysPoly(ysRect(0, 210, -2, YS_QUAY, 0), '#2B4FAE', null, 0, { id: 'ground' }));
  L.push(ysPoly([[0, YS_QUAY, 0], [210, YS_QUAY, 0], [210, YS_QUAY, -1.2], [0, YS_QUAY, -1.2]], '#C9D0DC'));
  YS_BERTHS.forEach(function (b) {
    L.push(ysPoly(ysRect(b.x - 8, b.x + 8, 40, YS_QUAY, 0.02), '#22449C', '#9DBBFF', 0.8, { id: b.id, dash: '5 4' }));
    L.push(ysPoly([[b.x - 8, YS_QUAY, 0], [b.x + 8, YS_QUAY, 0], [b.x + 8, 146, -2.2], [b.x - 8, 146, -2.2]], '#22449C', null, 0, { op: 0.75 }));
  });
  var lines = [];
  for (var gx = 20; gx < 210; gx += 20) { var a = ysP([gx, -2, 0]), c = ysP([gx, YS_QUAY, 0]); lines.push({ x1: a[0].toFixed(1), y1: a[1].toFixed(1), x2: c[0].toFixed(1), y2: c[1].toFixed(1), c: 'rgba(255,255,255,0.08)', w: 1, dash: '' }); }
  for (var gy = 20; gy < YS_QUAY; gy += 20) { var a2 = ysP([0, gy, 0]), c2 = ysP([210, gy, 0]); lines.push({ x1: a2[0].toFixed(1), y1: a2[1].toFixed(1), x2: c2[0].toFixed(1), y2: c2[1].toFixed(1), c: 'rgba(255,255,255,0.08)', w: 1, dash: '' }); }
  var m1 = ysP([-260, -8.5, 0]), m2 = ysP([520, -8.5, 0]);
  lines.push({ x1: m1[0].toFixed(1), y1: m1[1].toFixed(1), x2: m2[0].toFixed(1), y2: m2[1].toFixed(1), c: 'rgba(255,255,255,0.45)', w: 1.2, dash: '10 10' });
  YS_BERTHS.forEach(function (b) {
    [-3.5, 3.5].forEach(function (dx) {
      var r1 = ysP([b.x + dx, 44, 0.05]), r2 = ysP([b.x + dx, YS_QUAY, 0.05]), r3 = ysP([b.x + dx, 146, -2.2]);
      lines.push({ x1: r1[0].toFixed(1), y1: r1[1].toFixed(1), x2: r2[0].toFixed(1), y2: r2[1].toFixed(1), c: '#9DB2F0', w: 1.6, dash: '' });
      lines.push({ x1: r2[0].toFixed(1), y1: r2[1].toFixed(1), x2: r3[0].toFixed(1), y2: r3[1].toFixed(1), c: 'rgba(157,178,240,0.5)', w: 1.6, dash: '' });
    });
  });
  var ripples = [], seed = 7;
  function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  for (var i = 0; i < 46; i++) {
    var rx = -120 + rnd() * 460, ry = YS_QUAY + 6 + rnd() * 110, len = 4 + rnd() * 8;
    var p1 = ysP([rx, ry, -1.2]), p2 = ysP([rx + len, ry, -1.2]);
    if (p1[0] < -20 || p1[0] > YS_W + 20 || p1[1] > YS_H + 10) continue;
    ripples.push({ x1: p1[0].toFixed(1), y1: p1[1].toFixed(1), x2: p2[0].toFixed(1), y2: p2[1].toFixed(1), st: 'animation-delay: -' + (rnd() * 6).toFixed(2) + 's' });
  }
  var labels = [];
  function lab(p, text, size, fill, rot, anchor) { var q = ysP(p); labels.push({ x: q[0].toFixed(1), y: q[1].toFixed(1), text: text, size: size, fill: fill, tr: 'rotate(' + rot + ' ' + q[0].toFixed(1) + ' ' + q[1].toFixed(1) + ')', anchor: anchor || 'middle' }); }
  lab([150, 160, -1.2], 'NAVOTAS RIVER', 15, 'rgba(255,255,255,0.55)', 30);
  lab([170, -8.5, 0], 'M. NAVAL ST.', 12, 'rgba(255,255,255,0.6)', 30);
  YS_BERTHS.forEach(function (b) { lab([b.x, 48, 0], 'BERTH ' + b.n, 12, '#DDE7FF', -30); });
  // permanent buildings and stock, kept as hoverable objects
  var objs = [];
  function obj(id, shapes, extra) {
    var faces = [], d = 0, n = 0, top = null;
    shapes.forEach(function (sh) {
      var g = gFaces(sh.s, function (p) { return p; }, sh.c, { stroke: sh.stroke || '#0E2470', sw: 0.6 });
      faces = faces.concat(g.faces); d += g.c[0] + g.c[1]; n++;
      sh.s.v.forEach(function (p) { if (!top || p[2] > top[2]) top = p; });
    });
    faces.sort(function (a, b) { return a.d - b.d; });
    var o = { id: id, faces: ysFacesOut(faces), d: d / n, tip: ysP(top) };
    if (extra) for (var k in extra) o[k] = extra[k];
    objs.push(o);
  }
  [[-80, -30, 10, 60, 9], [-70, -20, 70, 105, 6], [222, 270, 8, 50, 11], [228, 300, 64, 110, 7]].forEach(function (n) {
    var g = gFaces(gBox(n[0], n[1], n[2], n[3], 0, n[4]), function (p) { return p; }, '#2C4C9E', { stroke: '#1B3A8C', sw: 0.6, k: 0.6 });
    objs.push({ id: 'nbr', faces: ysFacesOut(g.faces), d: g.c[0] + g.c[1], tip: ysP([(n[0] + n[1]) / 2, (n[2] + n[3]) / 2, n[4]]) });
  });
  obj('shed', [
    { s: gBox(140, 196, 24, 78, 0, 13), c: G_PAL.wall },
    { s: gLoft([[140, 24, 13], [196, 24, 13], [196, 51, 18], [140, 51, 18]], [[140, 24, 13.2], [196, 24, 13.2], [196, 51, 18.2], [140, 51, 18.2]]), c: G_PAL.roof },
    { s: gLoft([[140, 51, 18], [196, 51, 18], [196, 78, 13], [140, 78, 13]], [[140, 51, 18.2], [196, 51, 18.2], [196, 78, 13.2], [140, 78, 13.2]]), c: G_PAL.roof }
  ]);
  obj('office', [
    { s: gBox(152, 192, 90, 110, 0, 7), c: G_PAL.white },
    { s: gBox(151, 193, 89, 111, 7, 7.8), c: G_PAL.roof },
    { s: gBox(198, 200, -3, -1, 0, 6), c: G_PAL.red }, { s: gBox(198, 200, 12, 14, 0, 6), c: G_PAL.red }
  ]);
  YS_BERTHS.forEach(function (b, i) {
    var sx = b.x + 17;
    obj('stock' + i, [
      { s: gBox(sx - 5, sx + 5, 14, 26, 0, 1.2), c: G_PAL.steel },
      { s: gBox(sx - 4, sx + 4, 15, 25, 1.2, 2.4), c: '#A3AECA' },
      { s: gBox(sx - 3, sx + 3, 16, 24, 2.4, 3.2), c: G_PAL.steel }
    ]);
  });
  return { polys: L, lines: lines, ripples: ripples, labels: labels, objs: objs };
})();

var YS_TIPS = {
  river: ['Navotas River', 'Launch water and the route out to Manila Bay'],
  road: ['M. Naval St.', 'Steel arrives by truck from the street'],
  ground: ['The yard', '1204 M. Naval St., Navotas City'],
  nbr: ['Neighbouring yards', 'Navotas shipbuilding row'],
  shed: ['Fabrication shed', 'Plate cut, bent and welded into blocks'],
  office: ['Office and gate', 'Quotes, surveys and owner visits'],
  stock0: ['Steel stockyard', 'Plate and sections for Berth 1'],
  stock1: ['Steel stockyard', 'Plate and sections for Berth 2'],
  crane0: ['25 t mobile crane', 'Lifting blocks onto Berth 1'],
  crane1: ['25 t mobile crane', 'Lifting blocks onto Berth 2'],
  truck0: ['Steel delivery', 'Plate for the next hull'],
  truck1: ['Steel delivery', 'Plate for the next hull'],
  fork0: ['Forklift', 'Moving cut plate from the shed to Berth 2'],
  fork1: ['Forklift', 'Feeding sections to Berth 1'],
  fork2: ['Forklift', 'Running stock along the back lane'],
  tug0: ['Harbour tug', 'Takes each new hull out to the bay'],
  tug1: ['Harbour tug', 'Takes each new hull out to the bay']
};

// model data per vessel, cached
var YS_MODEL = {};
function ysModel(key) {
  if (YS_MODEL[key]) return YS_MODEL[key];
  var d = gVessel(key), s = YS_LEN[key] / d.L, rank = {}, cnt = {};
  d.parts.forEach(function (p, i) { cnt[p.step] = cnt[p.step] || 0; rank[i] = cnt[p.step]++; });
  var parts = d.parts.map(function (p, i) {
    var top = -1e9, c = gCen(p.s.v);
    p.s.v.forEach(function (q) { top = Math.max(top, q[2]); });
    return { s: p.s, c: G_PAL[p.c], step: p.step, ts: 2 + p.step * 4.4 + rank[i] * 0.45, anchor: [c[0], c[1], top] };
  });
  YS_MODEL[key] = { d: d, s: s, parts: parts, len: YS_LEN[key] };
  return YS_MODEL[key];
}

function ysShip(m, xf, u, building) {
  var T = gXf(xf), faces = [], top = null;
  var list = m.parts.map(function (p) {
    var dz = 0;
    if (building) {
      if (u < p.ts) return null;
      var k = gClamp((u - p.ts) / 0.9, 0, 1);
      dz = 26 * Math.pow(1 - k, 2);
    }
    var T2 = dz ? function (q) { var w = T(q); return [w[0], w[1], w[2] + dz]; } : T;
    var g = gFaces(p.s, T2, p.c, {});
    return { g: g, step: p.step };
  }).filter(Boolean);
  list.sort(function (a, b) { return a.step - b.step || (a.g.c[0] + a.g.c[1] + a.g.c[2]) - (b.g.c[0] + b.g.c[1] + b.g.c[2]); });
  list.forEach(function (l) { faces = faces.concat(l.g.faces); });
  return faces;
}


// ----- yard traffic: forklifts and people on fixed routes (ping-pong along each path)
function ysPath(pts, speed, t, off, pause) {
  var segs = [], total = 0, i;
  for (i = 0; i < pts.length - 1; i++) { var dx = pts[i + 1][0] - pts[i][0], dy = pts[i + 1][1] - pts[i][1], l = Math.sqrt(dx * dx + dy * dy); segs.push(l); total += l; }
  var leg = total / speed + (pause || 0), cycle = leg * 2, u = ((t + off) % cycle + cycle) % cycle, back = u >= leg;
  var k = back ? u - leg : u;
  var d = Math.min(total, Math.max(0, (k - (pause || 0) / 2) * speed));
  if (back) d = total - d;
  var acc = 0;
  for (i = 0; i < segs.length; i++) {
    if (d <= acc + segs[i] || i === segs.length - 1) {
      var f = segs[i] ? (d - acc) / segs[i] : 0, a = pts[i], b = pts[i + 1];
      var hx = (b[0] - a[0]) * (back ? -1 : 1), hy = (b[1] - a[1]) * (back ? -1 : 1);
      return { x: a[0] + (b[0] - a[0]) * f, y: a[1] + (b[1] - a[1]) * f, yaw: Math.atan2(hy, hx) * 180 / Math.PI, moving: k > (pause || 0) / 2 && k < leg - (pause || 0) / 2 };
    }
    acc += segs[i];
  }
  return { x: pts[0][0], y: pts[0][1], yaw: 0, moving: false };
}
var YS_FORKS = [
  { id: 'fork0', path: [[136, 72], [129, 72], [129, 31], [124, 31]], v: 4.2, off: 0 },
  { id: 'fork1', path: [[63, 22], [68, 27], [68, 96], [62, 100]], v: 4.6, off: 7 },
  { id: 'fork2', path: [[18, 8], [192, 8]], v: 5.5, off: 3 }
];
var YS_WALK = [
  { p: [[112, 116], [204, 116]], v: 1.4, off: 0, hat: '#F5C400' },
  { p: [[88, 117], [52, 117]], v: 1.2, off: 40, hat: '#FFFFFF' },
  { p: [[150, 85], [196, 85]], v: 1.1, off: 5, hat: '#F5C400' },
  { p: [[140, 84], [140, 112], [150, 114]], v: 1.0, off: 12, hat: '#E8892B' },
  { p: [[77, 30], [77, 110]], v: 1.3, off: 20, hat: '#F5C400' },
  { p: [[79, 104], [79, 34]], v: 1.1, off: 9, hat: '#FFFFFF' },
  { p: [[137, 28], [137, 62]], v: 1.2, off: 30, hat: '#F5C400' },
  { p: [[24, 40], [24, 112]], v: 1.0, off: 16, hat: '#E8892B' },
  { p: [[180, 2], [196, 2], [196, 14]], v: 0.9, off: 4, hat: '#FFFFFF' },
  { p: [[88, 12], [148, 12]], v: 1.3, off: 22, hat: '#F5C400' }
];
function ysForklift(f, t) {
  var q = ysPath(f.path, f.v, t, f.off, 3);
  var load = Math.floor(((t + f.off) / 9)) % 2 === 0;
  var shapes = [
    { s: gBox(-1.6, 1.4, -0.9, 0.9, 0.3, 1.5), c: '#E8892B' },
    { s: gBox(-1.6, -0.4, -0.85, 0.85, 1.5, 2.9), c: '#2B3A9E' },
    { s: gBox(1.4, 1.7, -0.7, 0.7, 0.2, 3.6), c: '#5A6078' },
    { s: gBox(1.7, 3.0, -0.6, 0.6, 0.3, 0.45), c: '#8E9AB8' }
  ];
  if (load) shapes.push({ s: gBox(1.75, 3.6, -1.1, 1.1, 0.45, 1.05), c: G_PAL.steel });
  var T = gXf({ s: 1, cx: 0, yaw: q.yaw, x: q.x, y: q.y, z: 0 }), ff = [];
  shapes.forEach(function (sh) { ff = ff.concat(gFaces(sh.s, T, sh.c, { sw: 0.4, k: 0.8 }).faces); });
  ff.sort(function (a, b) { return a.d - b.d; });
  return { id: f.id, faces: ysFacesOut(ff), d: q.x + q.y, tip: ysP([q.x, q.y, 4]) };
}

function ysScene(t) {
  var objs = YS_STATIC.objs.slice(), lines = [], dots = [], status = [];
  function L3(a, b, c, w, dash, op) { var p = ysP(a), q = ysP(b); lines.push({ x1: p[0].toFixed(1), y1: p[1].toFixed(1), x2: q[0].toFixed(1), y2: q[1].toFixed(1), c: c, w: w, dash: dash || '', op: op == null ? 1 : op }); }
  function E3(p, rx, ry, fill, stroke, op, sw) { var q = ysP(p); dots.push({ cx: q[0].toFixed(1), cy: q[1].toFixed(1), rx: rx.toFixed(1), ry: ry.toFixed(1), fill: fill, stroke: stroke || 'none', op: op.toFixed(2), sw: sw || 0 }); }

  YS_BERTHS.forEach(function (b, bi) {
    var tt = t + b.off, cyc = Math.floor(tt / YS_C), u = tt - cyc * YS_C;
    var key = b.ships[((cyc % b.ships.length) + b.ships.length) % b.ships.length];
    var m = ysModel(key), Ls = m.len, cx0 = m.d.L / 2;
    var draft = m.d.W * m.s * 0.55, zf = -1.2 - draft;
    var phase, xf = { s: m.s, cx: cx0, yaw: -90, x: b.x, y: YS_STERN - Ls / 2, z: 0.6 };
    var slide = 0, swing = 0, tow = 0;
    if (u < 26) phase = u < 2 ? 'ready' : (u < 24 ? 'build' : 'done');
    else if (u < 30) { phase = 'launch'; slide = gEase((u - 26) / 4); }
    else if (u < 34) { phase = 'swing'; slide = 1; swing = gEase((u - 30) / 4); }
    else { phase = 'tow'; slide = 1; swing = 1; tow = Math.pow(gClamp((u - 34) / 10, 0, 1), 1.6); }
    var slideLen = 56;
    var ys = YS_STERN + slide * slideLen;
    xf.y = ys - Ls / 2;
    xf.z = 0.6 + (zf - 0.6) * gClamp((ys - 116) / 30, 0, 1);
    xf.yaw = -90 + 90 * swing;
    xf.x = b.x + tow * 420;
    var building = phase === 'build' || phase === 'ready';
    var faces = ysShip(m, xf, u, building);
    var T = gXf(xf);
    var shipTop = T([cx0, 0, m.d.D + 6]);
    var inWater = phase === 'swing' || phase === 'tow' || (phase === 'launch' && ys > YS_QUAY + Ls * 0.5);
    if (faces.length) objs.push({ id: inWater ? 'float' + bi : b.id, faces: ysFacesOut(faces), d: xf.x + xf.y, tip: ysP(shipTop), vessel: key, berth: b.n });

    // stage, for status chips and tooltips
    var stepIdx = -1;
    m.parts.forEach(function (p) { if (u >= p.ts) stepIdx = Math.max(stepIdx, p.step); });
    var stageText, pct;
    if (phase === 'ready') { stageText = 'Keel blocks set'; pct = 2; }
    else if (phase === 'build') { stageText = '0' + (stepIdx + 1) + ' ' + m.d.steps[Math.max(stepIdx, 0)]; pct = Math.round(gClamp((u - 2) / 22, 0, 1) * 100); }
    else if (phase === 'done') { stageText = 'Ready to launch'; pct = 100; }
    else if (phase === 'launch') { stageText = 'Launching'; pct = 100; }
    else { stageText = 'Under tow to the bay'; pct = 100; }
    var fc = T([cx0, 0, m.d.D * 0.5]);
    if (phase === 'tow') fc = [xf.x + 10, xf.y + 4, 0];
    status.push({ berth: 'BERTH ' + b.n, vessel: YS_NAME[key], stage: stageText, pct: pct, barSt: 'width: ' + pct + '%', live: phase === 'launch' || phase === 'swing', phase: phase, u: u, focus: ysP(fc) });

    // crane
    var cxr = b.x + 15, stock = [b.x + 17, 20, 4], target = stock, prevA = null, curA = null, k = 0, carrying = false, cur = null;
    if (phase === 'build' || phase === 'ready') {
      var parts = m.parts;
      for (var i = 0; i < parts.length; i++) { if (u >= parts[i].ts - 1.6) { prevA = curA; curA = parts[i]; } }
      if (curA) {
        cur = curA;
        var aW = T(cur.anchor), pW = prevA ? T(prevA.anchor) : stock;
        k = gClamp((u - (cur.ts - 1.6)) / 1.2, 0, 1);
        carrying = u < cur.ts;
        target = [stock[0] + (aW[0] - stock[0]) * gEase(k), stock[1] + (aW[1] - stock[1]) * gEase(k), aW[2]];
        var cyFrom = prevA ? gClamp(pW[1], 28, 104) : 40;
        var cyTo = gClamp(aW[1], 28, 104);
        var cyr = cyFrom + (cyTo - cyFrom) * gEase(k);
      }
    }
    if (cyr == null) cyr = 40 + 6 * Math.sin(t * 0.25 + bi);
    var swingIdle = (phase !== 'build' && phase !== 'ready');
    if (swingIdle) target = [stock[0] + 4 * Math.sin(t * 0.4 + bi), stock[1] + 4, 3];
    var craneShapes = [
      { s: gBox(cxr - 2.2, cxr + 2.2, cyr - 5, cyr + 5, 0.6, 2.4), c: G_PAL.yellow },
      { s: gBox(cxr - 1.8, cxr + 1.8, cyr - 2, cyr + 2, 2.4, 4.6), c: '#E0B200' },
      { s: gBox(cxr - 1.4, cxr + 1.4, cyr + 2, cyr + 3.6, 2.4, 4), c: G_PAL.navy }
    ];
    var cf = [];
    craneShapes.forEach(function (sh) { cf = cf.concat(gFaces(sh.s, function (p) { return p; }, sh.c, { shade: '#5A4300', k: 0.8, stroke: '#3A2E00', sw: 0.5 }).faces); });
    cf.sort(function (a, b) { return a.d - b.d; });
    var pivot = [cxr, cyr, 4.6];
    var dx = target[0] - pivot[0], dy = target[1] - pivot[1], dist = Math.sqrt(dx * dx + dy * dy) || 1, reach = Math.min(dist, 34);
    var tip = [pivot[0] + dx / dist * reach, pivot[1] + dy / dist * reach, 22];
    objs.push({ id: 'crane' + bi, faces: ysFacesOut(cf), d: cxr + cyr, tip: ysP([cxr, cyr, 6]) });
    L3(pivot, tip, '#F5C400', 3.2);
    L3([pivot[0], pivot[1], 6.2], tip, '#B38A00', 1);
    if (cur && phase === 'build') {
      if (carrying) {
        var hz = 13;
        L3(tip, [tip[0], tip[1], hz], '#DDE7FF', 0.9);
        var hb = gFaces(gBox(tip[0] - 2.5, tip[0] + 2.5, tip[1] - 2, tip[1] + 2, hz - 2.2, hz), function (p) { return p; }, cur.c, {});
        objs.push({ id: 'crane' + bi, faces: ysFacesOut(hb.faces), d: tip[0] + tip[1] + 50, tip: ysP(tip) });
      } else {
        var kk = gClamp((u - cur.ts) / 0.9, 0, 1), aW2 = T(cur.anchor);
        if (kk < 1) L3(tip, [aW2[0], aW2[1], aW2[2] + 26 * Math.pow(1 - kk, 2)], '#DDE7FF', 0.9);
        else L3(tip, [tip[0], tip[1], 16], '#DDE7FF', 0.9, '', 0.6);
      }
    } else {
      L3(tip, [tip[0], tip[1], 14], '#DDE7FF', 0.9, '', 0.6);
    }

    // weld flashes and crews while building
    if (phase === 'build') {
      m.parts.forEach(function (p, pi) {
        var since = u - p.ts - 0.9;
        if (since > 0 && since < 2.4) {
          var a = T([p.anchor[0] + Math.sin(pi * 7) * m.d.L * 0.18, (pi % 2 ? 1 : -1) * m.d.B * 0.42, p.anchor[2] * 0.6]);
          var fl = 0.5 + 0.5 * Math.sin(t * 31 + pi * 3);
          if (fl > 0.35) { E3(a, 6, 4, 'rgba(255,179,71,0.35)', null, fl); E3(a, 2.2, 2.2, '#FFF1C9', null, 1); }
        }
      });
      for (var c = 0; c < 4; c++) {
        var side = c % 2 ? 1 : -1, wy = 68 + 32 * (0.5 + 0.5 * Math.sin(t * 0.22 + c * 1.9 + bi));
        var wx = b.x + side * (m.d.B * m.s / 2 + 2.6);
        L3([wx, wy, 0], [wx, wy, 1.7], '#FFFFFF', 2);
        E3([wx, wy, 2.1], 1.6, 1.4, '#F5C400', null, 1);
      }
    }

    // splash on entry
    var tEnter = 26 + 4 * 0.5;
    if (u > tEnter && u < tEnter + 2.2) {
      var sk = (u - tEnter) / 2.2;
      [0, 0.25, 0.5].forEach(function (lag) {
        var kk2 = sk - lag; if (kk2 <= 0 || kk2 >= 1) return;
        var r = (6 + kk2 * 34) * YS_FIT.s * 0.866;
        E3([b.x, YS_QUAY + 10, -1.2], r, r * 0.5, 'none', '#FFFFFF', (1 - kk2) * 0.9, 1.6);
      });
      E3([b.x, YS_QUAY + 8, 2 + 6 * Math.sin(sk * Math.PI)], 3, 2, '#E6F7FB', null, 1 - sk);
    }

    // tug arrives, then tows along the river
    var tugM = ysModel('tug'), tLs = tugM.len;
    var cy = YS_STERN + slideLen - Ls / 2;
    var tugX = null;
    var meetX = b.x + Ls / 2 + 13 + tLs / 2;
    var lane = cy + Ls / 2 + 14, tugY = cy;
    // tug runs up an outer lane clear of the swinging hull, then steps in ahead of the bow
    if (u > 26 && u < 34) { tugX = -90 + (meetX + 90) * gEase((u - 26) / 5); tugY = lane + (cy - lane) * gEase((u - 31) / 2.5); }
    else if (u >= 34) tugX = meetX + tow * 420;
    if (tugX != null) {
      var txf = { s: tugM.s, cx: tugM.d.L / 2, yaw: 0, x: tugX, y: tugY, z: -1.2 - tugM.d.W * tugM.s * 0.55 };
      var tf = ysShip(tugM, txf, 99, false);
      objs.push({ id: 'tug' + bi, faces: ysFacesOut(tf), d: tugX + tugY + 1, tip: ysP([tugX, tugY, 6]) });
      if (u >= 33.5) {
        var bow = T([m.d.L, 0, m.d.D * 0.8]), stern = [tugX - tLs / 2, tugY, 0.5];
        L3(bow, stern, '#FFFFFF', 1.2, '', 0.9);
      }
    }
  });

  // steel trucks on M. Naval St.
  [{ id: 'truck0', off: 0, stop: 57 }, { id: 'truck1', off: 15, stop: 117 }].forEach(function (tk) {
    var P = 30, u = ((t + tk.off) % P + P) % P, x, load = 1;
    var xin = 300, xout = -80, tIn = 9, tStop = 5;
    if (u < tIn) x = xin + (tk.stop - xin) * gEase(u / tIn);
    else if (u < tIn + tStop) { x = tk.stop; load = 1 - 0.7 * gClamp((u - tIn - 1) / 3, 0, 1); }
    else { x = tk.stop + (xout - tk.stop) * Math.pow(gClamp((u - tIn - tStop) / (P - tIn - tStop), 0, 1), 1.4); load = 0.3; }
    var y = -5.5, sh = [
      { s: gBox(x - 4, x - 0.5, y - 1.6, y + 1.6, 0.6, 3.6), c: G_PAL.red },
      { s: gBox(x - 0.5, x + 9, y - 1.6, y + 1.6, 0.6, 1.4), c: '#5A6078' },
      { s: gBox(x + 0.5, x + 8.5, y - 1.2, y + 1.2, 1.4, 1.4 + 1.6 * load), c: G_PAL.steel }
    ], ff = [];
    sh.forEach(function (s) { ff = ff.concat(gFaces(s.s, function (p) { return p; }, s.c, { sw: 0.5 }).faces); });
    ff.sort(function (a, b) { return a.d - b.d; });
    objs.push({ id: tk.id, faces: ysFacesOut(ff), d: x + y, tip: ysP([x + 2, y, 4]) });
  });

  YS_FORKS.forEach(function (f) { objs.push(ysForklift(f, t)); });
  YS_WALK.forEach(function (w, wi) {
    var q = ysPath(w.p, w.v, t, w.off, 4), bob = q.moving ? Math.abs(Math.sin(t * 7 + wi)) * 0.12 : 0;
    var sx = Math.cos(q.yaw * Math.PI / 180) * 0.35, sy = Math.sin(q.yaw * Math.PI / 180) * 0.35, step = q.moving ? Math.sin(t * 7 + wi) : 0;
    L3([q.x + sx * step, q.y + sy * step, 0], [q.x, q.y, 0.95 + bob], '#0B0E24', 2);
    L3([q.x - sx * step, q.y - sy * step, 0], [q.x, q.y, 0.95 + bob], '#0B0E24', 2);
    L3([q.x, q.y, 0.9 + bob], [q.x, q.y, 1.7 + bob], '#FFFFFF', 3);
    E3([q.x, q.y, 2.1 + bob], 2.2, 1.8, w.hat, null, 1);
  });
  objs.sort(function (a, b) { return a.d - b.d; });
  return { objs: objs, lines: lines, dots: dots, status: status };
}


// camera director: picks the most interesting thing happening and eases toward it
var YC_PRI = { launch: 5, swing: 4, tow: 3, build: 2, done: 1, ready: 0 };
var YC_ZOOM = { launch: 2.1, swing: 1.8, tow: 1.6, build: 1.75, done: 1.6, ready: 1.4 };
var YC_LABEL = { launch: 'Following the launch', swing: 'Following the turn', tow: 'Following the tow', build: 'Watching the build', done: 'Hull ready on the berth', ready: 'Keel blocks set' };
function ycTarget(mode, t, sc, manual) {
  if (mode === 'wide') return { x: YS_W / 2, y: YS_H / 2, z: 1, why: 'Whole yard' };
  if (mode === 'drift') {
    return { x: 640 + 230 * Math.sin(t * 0.07), y: 330 + 90 * Math.sin(t * 0.11 + 1), z: 1.55 + 0.15 * Math.sin(t * 0.05), why: 'Slow drift over the yard' };
  }
  if (mode === 'free') return { x: manual.x, y: manual.y, z: manual.z, why: 'Looking around · following again shortly' };
  var best = null;
  sc.status.forEach(function (s) {
    var p = YC_PRI[s.phase] || 0;
    if (s.phase === 'tow' && s.u > 41) p = 0.5;              // ship leaving frame: hand back to the yard
    if (!best || p > best.p) best = { p: p, s: s };
  });
  var s = best.s, f = s.focus;
  return { x: f[0], y: f[1] - 30, z: YC_ZOOM[s.phase] || 1.5, why: YC_LABEL[s.phase] + ' · ' + s.berth.replace('BERTH', 'Berth') };
}
function ycClamp(c) {
  var hw = YS_W / 2 / c.z, hh = YS_H / 2 / c.z;
  return { x: gClamp(c.x, hw, YS_W - hw), y: gClamp(c.y, hh, YS_H - hh), z: c.z, why: c.why };
}
class Component extends DCLogic {
  componentDidMount() {
    var self = this, reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    var t = Number(this.props.start ?? 24);
    this._cam = { x: YS_W / 2, y: YS_H / 2, z: 1 };
    this._vel = { x: 0, y: 0, z: 0 };
    this._manual = { x: YS_W / 2, y: YS_H / 2, z: 1.6 };
    this._t = t; this._last = null; this._playing = !reduce;
    this.setState({ t: t, playing: this._playing, mode: this.props.mode ?? 'follow', cam: this._cam });
    function step(dt) {
      var st = self.state || {};
      if (st.playing) self._t += dt;
      if (st.mode === 'free' && !self._drag && Date.now() - (self._touch || 0) > 9000) { self.setState({ mode: 'follow' }); st = self.state; }
      var tg = ycClamp(ycTarget(st.mode || 'follow', self._t, ysScene(self._t), self._manual));
      var w = st.mode === 'free' ? 9 : 1.25, c = self._cam, v = self._vel, n = Math.max(1, Math.ceil(dt / 0.016)), h = dt / n;
      for (var i = 0; i < n; i++) {
        ['x', 'y', 'z'].forEach(function (k) {
          var acc = w * w * (tg[k] - c[k]) - 2 * w * v[k];
          v[k] += acc * h; c[k] += v[k] * h;
        });
      }
      self._why = tg.why;
      self.setState({ t: self._t, cam: { x: c.x, y: c.y, z: c.z } });
    }
    if (typeof requestAnimationFrame === 'function') {
      var loop = function (ts) {
        self._raf = requestAnimationFrame(loop);
        if (self._last == null) { self._last = ts; return; }
        var el = ts - self._last;
        if (el < 30) return;
        self._last = ts;
        step(Math.min(0.1, el / 1000));
      };
      this._raf = requestAnimationFrame(loop);
    } else {
      this._timer = setInterval(function () { step(0.033); }, 33);
    }
  }
  componentWillUnmount() { if (this._timer) clearInterval(this._timer); if (this._raf && typeof cancelAnimationFrame === 'function') cancelAnimationFrame(this._raf); }
  renderVals() {
    var self = this, st = this.state || {};
    var t = st.t == null ? Number(this.props.start ?? 24) : st.t;
    var cam = st.cam || { x: YS_W / 2, y: YS_H / 2, z: 1 };
    var sc = ysScene(t), mode = st.mode || 'follow';
    function toScreen(p) { return [(p[0] - cam.x) * cam.z + YS_W / 2, (p[1] - cam.y) * cam.z + YS_H / 2]; }
    var hov = st.hover || null, tip = { on: false };
    function enterFor(id) { return function () { if ((self.state || {}).hover !== id) self.setState({ hover: id }); }; }
    function clearHover() { if ((self.state || {}).hover) self.setState({ hover: null }); }
    var objs = sc.objs.map(function (o) { return { faces: o.faces, enter: enterFor(o.id) }; });
    if (hov) {
      var hit = null;
      sc.objs.forEach(function (o) { if (o.id === hov) hit = o; });
      var lines = YS_TIPS[hov];
      if (!lines && hit && /^b\d/.test(hov)) { var s0 = sc.status[hit.berth - 1]; lines = ['Berth ' + hit.berth + ' · ' + s0.vessel, s0.stage + ' · slipway to 5,000 DWT']; }
      if (!lines && hit && /^float/.test(hov)) lines = ['New ' + YS_NAME[hit.vessel].toLowerCase(), 'Launched from Berth ' + hit.berth];
      if (!lines && /^b\d$/.test(hov)) lines = ['Berth ' + hov.slice(1), 'Building slipway to 5,000 DWT'];
      if (lines && hit) {
        var a = toScreen(hit.tip);
        if (a[0] > -20 && a[0] < YS_W + 20 && a[1] > -20 && a[1] < YS_H + 20) {
          var ax = gClamp(a[0], 150, YS_W - 150), ay = gClamp(a[1], 90, YS_H - 10);
          tip = { on: true, l1: lines[0], l2: lines[1], st: 'left: ' + (ax / YS_W * 100).toFixed(2) + '%; top: ' + (ay / YS_H * 100).toFixed(2) + '%' };
        }
      }
    }
    var modes = [['follow', 'Follow the action'], ['drift', 'Slow drift'], ['free', 'Drag to look'], ['wide', 'Whole yard']].map(function (m) {
      var on = m[0] === mode;
      return { label: m[1], pressed: on ? 'true' : 'false', bg: on ? '#FFFFFF' : 'transparent', fg: on ? '#12185C' : '#FFFFFF',
        pick: function () {
          self._touch = Date.now();
          if (m[0] === 'free') self._manual = { x: self._cam.x, y: self._cam.y, z: Math.max(1.3, self._cam.z) };
          self.setState({ mode: m[0] });
        } };
    });
    var playing = !!st.playing;
    return {
      camTr: 'translate(' + (YS_W / 2).toFixed(1) + ' ' + (YS_H / 2).toFixed(1) + ') scale(' + cam.z.toFixed(4) + ') translate(' + (-cam.x).toFixed(1) + ' ' + (-cam.y).toFixed(1) + ')',
      polys: YS_STATIC.polys.map(function (p) { return { pts: p.pts, fill: p.fill, stroke: p.stroke, sw: p.sw, op: p.op, dash: p.dash || '', enter: clearHover }; }), glines: YS_STATIC.lines, ripples: YS_STATIC.ripples, labels: YS_STATIC.labels,
      objs: objs, lines: sc.lines, dots: sc.dots, tip: tip, status: sc.status, modes: modes,
      why: this._why || 'Following the action', zoomLabel: cam.z.toFixed(1) + '×',
      cursor: mode === 'free' ? (st.drag ? 'grabbing' : 'grab') : 'default',
      playLabel: playing ? 'Pause' : 'Play',
      offFollow: mode !== 'follow',
      backFollow: function () { self.setState({ mode: 'follow' }); },
      unhover: function () { if ((self.state || {}).hover) self.setState({ hover: null }); },
      toggle: function () { self.setState({ playing: !((self.state || {}).playing) }); },
      jump: function () {
        var cur = self._t || 0, cyc = Math.floor(cur / YS_C), target = cyc * YS_C + 25;
        if (target < cur) target += YS_C;
        self._t = target; self.setState({ t: target, playing: true, mode: 'follow' });
      },
      zin: function () { self._touch = Date.now(); if ((self.state || {}).mode !== 'free') self.setState({ mode: 'free' }); self._manual = { x: self._cam.x, y: self._cam.y, z: Math.min(3, (self._manual.z || self._cam.z) * 1.25) }; },
      zout: function () { self._touch = Date.now(); if ((self.state || {}).mode !== 'free') self.setState({ mode: 'free' }); self._manual = { x: self._cam.x, y: self._cam.y, z: Math.max(1, (self._manual.z || self._cam.z) / 1.25) }; },
      down: function (e) { self._touch = Date.now();
        var r = e.currentTarget.getBoundingClientRect();
        self._drag = { x: e.clientX, y: e.clientY, mx: self._cam.x, my: self._cam.y, s: YS_W / r.width };
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch (er) {}
        if ((self.state || {}).mode !== 'free') { self._manual = { x: self._cam.x, y: self._cam.y, z: Math.max(1.3, self._cam.z) }; }
        self.setState({ mode: 'free', drag: true });
      },
      move: function (e) { self._touch = Date.now();
        var d = self._drag; if (!d) return;
        var z = self._manual.z;
        self._manual = ycClamp({ x: d.mx - (e.clientX - d.x) * d.s / z, y: d.my - (e.clientY - d.y) * d.s / z, z: z });
      },
      up: function () { if (self._drag) { self._drag = null; self.setState({ drag: false }); } }
    };
  }
}


return Component;
});
