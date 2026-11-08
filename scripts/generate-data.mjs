// Generates every computed value used in the handbook's figures.
// Nothing in /data is typed by hand: colour values, hex fallbacks, contrast
// ratios and type scales all come from this script, so the book can never
// quote a contrast ratio that is not true.
//
//   node scripts/generate-data.mjs
//
import { writeFileSync } from 'node:fs';
import { oklch, formatHex, wcagContrast, toGamut, displayable, converter, parse } from 'culori';

const out = (name, data) => writeFileSync(new URL(`../data/${name}.json`, import.meta.url), JSON.stringify(data, null, 2) + '\n');
const toOklch = converter('oklch');
const toHsl = converter('hsl');
const clampToSrgb = toGamut('rgb', 'oklch');
const r2 = (n) => Math.round(n * 100) / 100;
const r3 = (n) => Math.round(n * 1000) / 1000;
const fmt = ({ l, c, h }) => `oklch(${r3(l)} ${r3(c)} ${Math.round(h ?? 0)})`;

// ---------------------------------------------------------------------------
// 1. Example product palette ("Ledgerly", a fictional B2B SaaS used in every
//    worked example). 11-step ramps on a fixed lightness curve, so that the
//    same step number means the same perceived lightness in every hue.
// ---------------------------------------------------------------------------
export const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
// Lightness curve: dense near the light end (where UI surfaces live) and
// near the dark end (where text lives), even through the middle.
const L = [0.975, 0.945, 0.885, 0.815, 0.73, 0.645, 0.565, 0.485, 0.405, 0.33, 0.255];
// Chroma envelope: 0 at the extremes, peak around 500–600. Multiplied by each
// hue's peak chroma, then clipped to sRGB by reducing chroma only.
const CHROMA_ENVELOPE = [0.12, 0.26, 0.5, 0.74, 0.92, 1, 1, 0.92, 0.78, 0.6, 0.45];

const brandSeed = toOklch(parse('#ff6b3d')); // Layer One signal orange as the seed
const HUES = [
  { name: 'brand', label: 'Brand (Signal)', h: brandSeed.h, peak: 0.19 },
  { name: 'blue', label: 'Blue', h: 255, peak: 0.17 },
  { name: 'green', label: 'Green', h: 150, peak: 0.17 },
  { name: 'amber', label: 'Amber', h: 75, peak: 0.16 },
  { name: 'red', label: 'Red', h: 25, peak: 0.21 },
  { name: 'neutral', label: 'Neutral', h: 260, peak: 0.018, flat: true },
];

function ramp({ name, label, h, peak, flat }) {
  const steps = STEPS.map((step, i) => {
    const want = { mode: 'oklch', l: L[i], c: flat ? peak * (i === 0 ? 0.6 : 1) : peak * CHROMA_ENVELOPE[i], h };
    const inGamut = displayable(want);
    const got = inGamut ? want : toOklch(clampToSrgb(want));
    const hex = formatHex(got);
    return {
      step,
      oklch: fmt(got),
      l: r3(got.l), c: r3(got.c), h: Math.round(got.h ?? h),
      requestedChroma: r3(want.c),
      clipped: !inGamut,
      hex,
      onWhite: r2(wcagContrast(hex, '#ffffff')),
      onBlack: r2(wcagContrast(hex, '#000000')),
    };
  });
  return { name, label, hue: Math.round(h), steps };
}
const palette = HUES.map(ramp);
out('palette', { seed: { hex: '#ff6b3d', oklch: fmt(brandSeed) }, lightnessCurve: L, chromaEnvelope: CHROMA_ENVELOPE, ramps: palette });

// ---------------------------------------------------------------------------
// 2. HSL vs OKLCH: same "lightness" number, very different perceived result.
// ---------------------------------------------------------------------------
const hslHues = [0, 60, 120, 180, 240, 300];
const hslRow = hslHues.map((h) => {
  const c = { mode: 'hsl', h, s: 1, l: 0.5 };
  const hex = formatHex(c);
  const ok = toOklch(c);
  return { label: `hsl(${h} 100% 50%)`, hex, perceivedL: r2(ok.l), onWhite: r2(wcagContrast(hex, '#fff')) };
});
const okRow = hslHues.map((h) => {
  const want = { mode: 'oklch', l: 0.65, c: 0.15, h: h === 0 ? 25 : h };
  const got = displayable(want) ? want : toOklch(clampToSrgb(want));
  const hex = formatHex(got);
  return { label: fmt(got), hex, perceivedL: r2(got.l), onWhite: r2(wcagContrast(hex, '#fff')) };
});
out('hsl-vs-oklch', { hsl: hslRow, oklch: okRow });

// ---------------------------------------------------------------------------
// 3. Semantic colour tokens for light and dark themes, referencing primitives,
//    with the contrast of every text/background pairing computed.
// ---------------------------------------------------------------------------
const P = Object.fromEntries(palette.map((r) => [r.name, Object.fromEntries(r.steps.map((s) => [s.step, s]))]));
const ref = (path) => { const [hue, step] = path.split('.'); return P[hue][step]; };
const semantic = {
  'bg.canvas': ['neutral.50', 'neutral.950'],
  'bg.surface': ['neutral.50', 'neutral.900'],
  'bg.subtle': ['neutral.100', 'neutral.800'],
  'border.default': ['neutral.200', 'neutral.700'],
  'border.strong': ['neutral.500', 'neutral.500'],
  'text.primary': ['neutral.950', 'neutral.50'],
  'text.secondary': ['neutral.700', 'neutral.300'],
  'text.disabled': ['neutral.400', 'neutral.600'],
  'text.link': ['blue.700', 'blue.300'],
  'action.primary.bg': ['brand.700', 'brand.400'],
  'action.primary.bg-hover': ['brand.800', 'brand.300'],
  'action.primary.text': ['neutral.50', 'neutral.950'],
  'feedback.danger.text': ['red.700', 'red.300'],
  'feedback.danger.bg': ['red.100', 'red.900'],
  'feedback.success.text': ['green.700', 'green.300'],
  'feedback.success.bg': ['green.100', 'green.900'],
  'focus.ring': ['blue.600', 'blue.400'],
};
// Override for the light theme surface: pure white is a common choice.
const semanticTokens = Object.entries(semantic).map(([token, [light, dark]]) => ({
  token, light, dark, lightHex: ref(light).hex, darkHex: ref(dark).hex,
}));
const tok = (t, theme) => semanticTokens.find((x) => x.token === t)[theme + 'Hex'];
const pairs = [
  ['text.primary', 'bg.canvas', 'Body text', 4.5],
  ['text.secondary', 'bg.canvas', 'Secondary text', 4.5],
  ['text.link', 'bg.canvas', 'Links', 4.5],
  ['action.primary.text', 'action.primary.bg', 'Primary button label', 4.5],
  ['feedback.danger.text', 'feedback.danger.bg', 'Error message', 4.5],
  ['feedback.success.text', 'feedback.success.bg', 'Success message', 4.5],
  ['border.strong', 'bg.canvas', 'Input border (non-text)', 3],
  ['focus.ring', 'bg.canvas', 'Focus ring (non-text)', 3],
  ['text.disabled', 'bg.canvas', 'Disabled text (exempt)', 0],
].map(([fg, bg, use, min]) => {
  const light = r2(wcagContrast(tok(fg, 'light'), tok(bg, 'light')));
  const dark = r2(wcagContrast(tok(fg, 'dark'), tok(bg, 'dark')));
  return { fg, bg, use, min, light, dark, lightPass: min === 0 ? null : light >= min, darkPass: min === 0 ? null : dark >= min };
});
out('semantic-colors', { tokens: semanticTokens, pairs });

// ---------------------------------------------------------------------------
// 4. Contrast matrix: which ramp steps can sit on which (for the "pairing
//    rule" figure: steps ≥ N apart pass 4.5:1).
// ---------------------------------------------------------------------------
const matrix = STEPS.map((a) => STEPS.map((b) => r2(wcagContrast(P.neutral[a].hex, P.neutral[b].hex))));
const brandOnNeutral = STEPS.map((s) => ({ step: s, onN50: r2(wcagContrast(P.brand[s].hex, P.neutral[50].hex)), onN950: r2(wcagContrast(P.brand[s].hex, P.neutral[950].hex)) }));
out('contrast-matrix', { steps: STEPS, neutral: matrix, brandOnNeutral });

// ---------------------------------------------------------------------------
// 5. Type scales: modular ratios from a 16px base, rounded to a 4px line grid.
// ---------------------------------------------------------------------------
const ratios = [
  { name: 'Major second', r: 1.125 }, { name: 'Major third', r: 1.25 },
  { name: 'Perfect fourth', r: 1.333 }, { name: 'Golden ratio', r: 1.618 },
];
const scales = ratios.map(({ name, r }) => ({
  name, ratio: r,
  sizes: [-2, -1, 0, 1, 2, 3, 4, 5, 6].map((n) => ({ step: n, px: r2(16 * Math.pow(r, n)), rounded: Math.round(16 * Math.pow(r, n)) })),
}));
// Line-height rule: tighter as size grows, always snapped to a 4px grid.
// Headings and display use the tighter ratios at every size; text roles use the size rule.
const lh = (px, heading) => { const target = heading ? (px <= 32 ? 1.3 : px <= 48 ? 1.2 : 1.1) : (px <= 14 ? 1.45 : px <= 20 ? 1.5 : px <= 32 ? 1.3 : px <= 48 ? 1.2 : 1.1); return Math.round((px * target) / 4) * 4; };
const productScale = [
  ['display.lg', 57, 600, -0.02], ['display.md', 45, 600, -0.02], ['heading.xl', 36, 600, -0.015],
  ['heading.lg', 28, 600, -0.01], ['heading.md', 22, 600, -0.005], ['heading.sm', 18, 600, 0],
  ['body.lg', 18, 400, 0], ['body.md', 16, 400, 0], ['body.sm', 14, 400, 0],
  ['label.md', 14, 500, 0.005], ['label.sm', 12, 500, 0.01], ['caption', 12, 400, 0.01],
].map(([token, px, weight, tracking]) => { const h = /^(display|heading)/.test(token); return { token, px, weight, tracking, lineHeight: lh(px, h), ratio: r2(lh(px, h) / px) }; });
out('type-scales', { base: 16, scales, productScale });

// ---------------------------------------------------------------------------
// 6. DTCG-format token file excerpt (Design Tokens Format Module 2025.10).
// ---------------------------------------------------------------------------
const dtcgColor = (s) => ({ $type: 'color', $value: { colorSpace: 'oklch', components: [s.l, s.c, s.h], hex: s.hex } });
const dtcg = {
  color: {
    brand: Object.fromEntries([500, 600, 700, 800].map((st) => [st, dtcgColor(P.brand[st])])),
    neutral: Object.fromEntries([50, 100, 700, 950].map((st) => [st, dtcgColor(P.neutral[st])])),
  },
  semantic: {
    action: { primary: { bg: { $type: 'color', $value: '{color.brand.700}' }, text: { $type: 'color', $value: '{color.neutral.50}' } } },
    text: { primary: { $type: 'color', $value: '{color.neutral.950}' } },
  },
  button: { primary: { background: { $type: 'color', $value: '{semantic.action.primary.bg}' } } },
};
out('tokens.dtcg', dtcg);

console.log('Generated data/: palette, hsl-vs-oklch, semantic-colors, contrast-matrix, type-scales, tokens.dtcg');
console.table(pairs.map((p) => ({ use: p.use, light: p.light, dark: p.dark, min: p.min })));
console.table(palette.map((r) => ({ ramp: r.name, '500': r.steps[5].onWhite, '600': r.steps[6].onWhite, '700': r.steps[7].onWhite, clipped: r.steps.filter((s) => s.clipped).length })));

// ---------------------------------------------------------------------------
// 7. Economics model (Illustrative). Every assumption is explicit and is
//    printed next to the result in Chapter 04. Change them here.
// ---------------------------------------------------------------------------
const A = {
  hoursPerFteYear: 1600,      // focused working hours per person per year
  monthlyRate: 12000,         // loaded monthly cost per FTE, USD (example input)
  uiShareEng: 0.25,           // share of engineering time spent building UI
  uiShareDes: 0.5,            // share of design time spent on production UI work
  designersPerEngineer: 1 / 7,
};
A.hourlyRate = Math.round(A.monthlyRate / (A.hoursPerFteYear / 12));
const valuePerEng = (adoption, gain) => {
  const eng = A.hoursPerFteYear * A.uiShareEng * adoption * gain;
  const des = A.hoursPerFteYear * A.uiShareDes * adoption * gain * A.designersPerEngineer;
  return { hours: eng + des, usd: (eng + des) * A.hourlyRate };
};
const ledgerly = { engineers: 40, designers: 6 };
const ledgerlyValue = (adoption, gain) => {
  const eng = ledgerly.engineers * A.hoursPerFteYear * A.uiShareEng * adoption * gain;
  const des = ledgerly.designers * A.hoursPerFteYear * A.uiShareDes * adoption * gain;
  return { engHours: Math.round(eng), desHours: Math.round(des), hours: Math.round(eng + des), usd: Math.round((eng + des) * A.hourlyRate) };
};
const teamCost = (fte) => fte * 12 * A.monthlyRate;
const years = [
  { year: 1, adoption: 0.4, gain: 0.2, fte: 2, note: 'Build year: foundations + core components, adoption ramps' },
  { year: 2, adoption: 0.7, gain: 0.2, fte: 2, note: 'Most new work uses the system' },
  { year: 3, adoption: 0.85, gain: 0.2, fte: 2, note: 'Migration of older screens largely complete' },
].map((y) => { const v = ledgerlyValue(y.adoption, y.gain); const cost = teamCost(y.fte); return { ...y, ...v, cost, net: v.usd - cost, roi: Math.round(((v.usd - cost) / cost) * 100) }; });
const sensitivity = [0.1, 0.2, 0.34].map((gain) => ({ gain, cells: [0.4, 0.7, 0.9].map((adoption) => { const v = ledgerlyValue(adoption, gain); return { adoption, value: v.usd, net: v.usd - teamCost(2) }; }) }));
const breakEven = (fte, adoption, gain) => Math.ceil(teamCost(fte) / valuePerEng(adoption, gain).usd);
const breakEvens = [[0.5, 0.7, 0.2], [1, 0.7, 0.2], [2, 0.7, 0.2], [4, 0.7, 0.2], [8, 0.7, 0.2], [2, 0.7, 0.34], [2, 0.5, 0.2]].map(([fte, ad, g]) => ({ fte, adoption: ad, gain: g, cost: teamCost(fte), engineers: breakEven(fte, ad, g) }));
// Budget scenarios in FTE-months.
const scenarios = [
  { name: 'Startup', profile: '1 product, web, 2–3 designers, 8–15 engineers', stage: 'Stage 1 → 2',
    build: [['Design system designer', 0.5, 3], ['Frontend engineer', 0.5, 3]],
    run: [['Designer (embedded owner)', 0.2, 9], ['Engineer (embedded owner)', 0.2, 9]] },
  { name: 'Mid-sized SaaS', profile: '2–3 products, web + mobile web, 6–12 designers, 40–80 engineers', stage: 'Stage 2 → 3',
    build: [['Design system lead (0.5)', 0.5, 6], ['Design system designer', 1, 6], ['Design system engineers', 2, 6], ['Accessibility review', 0.2, 6]],
    run: [['Design system lead (0.5)', 0.5, 6], ['Design system designer', 1, 6], ['Design system engineers', 1.5, 6], ['Product-team contributions', 0.8, 6]] },
  { name: 'Enterprise', profile: '5+ products, web + iOS + Android, multiple brands, 30+ designers, 200+ engineers', stage: 'Stage 3 → 4',
    build: [['Design system lead / PM', 1, 12], ['Design system designers', 2, 12], ['Web engineers', 3, 12], ['iOS + Android engineers', 2, 12], ['Accessibility specialist', 0.5, 12], ['Docs / content', 0.5, 12]],
    run: [] },
].map((s) => { const sum = (rows) => rows.reduce((t, [, fte, m]) => t + fte * m, 0); const b = sum(s.build), r = sum(s.run); return { ...s, buildFteMonths: b, runFteMonths: r, totalFteMonths: b + r }; });
out('economics', { assumptions: A, ledgerly, years, sensitivity, breakEvens, scenarios, rates: [6000, 12000, 20000] });
console.table(years.map(({ year, adoption, hours, usd, cost, net, roi }) => ({ year, adoption, hours, usd, cost, net, roi })));
console.table(breakEvens);
console.table(scenarios.map(({ name, buildFteMonths, runFteMonths, totalFteMonths }) => ({ name, buildFteMonths, runFteMonths, totalFteMonths })));
