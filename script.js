// ===== Weapons =====
const WEAPONS = [
  // From your ox_inventory weapons.lua (labels, ammo and weights match the server)
  // tier: t1 = Tier 1, t15 = Tier 1.5, t2 = Tier 2. Guns with ext: 'none' have no picture yet.
  { id: 'WEAPON_4INCHARPBLUE', label: 'Binary 4 Inch ARP Blue', ammo: 'ammo-rifle', weight: 1200, tier: 't2' },
  { id: 'WEAPON_4INCHARPCUS', label: '4 Inch Custom ARP', ammo: 'ammo-rifle', weight: 1950, tier: 't2' },
  { id: 'WEAPON_762MINIAR', label: 'Mini 762 ARP', ammo: 'ammo-rifle2', weight: 1100, tier: 't2' },
  { id: 'WEAPON_BDB', label: 'Binary Draco Black', ammo: 'ammo-rifle2', weight: 3650, tier: 't2' },
  { id: 'WEAPON_CG45SS', label: 'Custom Dagger Switch Silver', ammo: 'ammo-9', weight: 1020, tier: 't15' },
  { id: 'WEAPON_CMP92', label: 'M&P 9 2.0 Custom', ammo: 'ammo-9', weight: 945, tier: 't1' },
  { id: 'WEAPON_CUSTOM75ARP', label: 'Custom 7.5 Inch ARP', ammo: 'ammo-rifle', weight: 2800, tier: 't2' },
  { id: 'WEAPON_G17CG4', label: 'Custom G17 Binary', ammo: 'ammo-9', weight: 980, tier: 't15' },
  { id: 'WEAPON_G17G3P80', label: 'G17 Gen 3 P80', ammo: 'ammo-9', weight: 820, tier: 't1' },
  { id: 'WEAPON_G19G5RS', label: 'Glock 19 Gen 5 Red Switch', ammo: 'ammo-9', weight: 850, tier: 't15' },
  { id: 'WEAPON_G19XCOYOTE', label: 'G19X Coyote', ammo: 'ammo-9', weight: 890, tier: 't1' },
  { id: 'WEAPON_G20CGFLEX', label: 'Custom G20C G-Flex', ammo: 'ammo-10', weight: 850, tier: 't1' },
  { id: 'WEAPON_G21CGFLEX', label: 'Custom G21C G-Flex', ammo: 'ammo-45', weight: 850, tier: 't1' },
  { id: 'WEAPON_G31G5GS', label: 'Glock 31 Gen 5 Green Switch', ammo: 'ammo-9', weight: 950, tier: 't15' },
  { id: 'WEAPON_G45CAMO', label: 'Glock 45 Camo', ammo: 'ammo-9', weight: 750, tier: 't1' },
  { id: 'WEAPON_KG43X', label: 'Kavorka G43X', ammo: 'ammo-9', weight: 1000, tier: 't1' },
  { id: 'WEAPON_MICRODRACCUSTOM', label: 'Custom Micro Draco', ammo: 'ammo-rifle2', weight: 3600, tier: 't2' },
  { id: 'WEAPON_MPADC', label: 'MPA Defender C', ammo: 'ammo-9', weight: 1150, tier: 't15' },
  { id: 'WEAPON_P320CS', label: 'Custom P320 Sig', ammo: 'ammo-9', weight: 915, tier: 't1' },
  { id: 'WEAPON_PSADG20', label: 'G45 Gen 5', ammo: 'ammo-10', weight: 1090, tier: 't1' },
  { id: 'WEAPON_PSADHALFNHALF', label: 'PSA Custom 19/26', ammo: 'ammo-9', weight: 750, tier: 't1' },
  { id: 'WEAPON_PSAFN57', label: 'Rock FN57', ammo: 'ammo-45', weight: 1100, tier: 't1' },
  { id: 'WEAPON_PSAP80G19SWITCH', label: 'Punisher P80 G19', ammo: 'ammo-9', weight: 900, tier: 't15' },
  { id: 'WEAPON_R57B', label: 'Ruger 5.7 Binary', ammo: 'ammo-45', weight: 940, tier: 't15' },
  { id: 'WEAPON_SD40T', label: 'S&W SD40 Tan', ammo: 'ammo-40', weight: 785, tier: 't1' },
  { id: 'WEAPON_G40MOSRS', label: 'Glock 40 MOS Red Switch', ammo: 'ammo-10', weight: 1070, tier: 't15', ext: 'none' },
  { id: 'WEAPON_FN502T', label: 'FN 502 Tactical', ammo: 'ammo-45', weight: 652, tier: 't1', ext: 'none' },
  { id: 'WEAPON_G19G5MOSSWITCH', label: 'G19 Gen 5 MOS Switch', ammo: 'ammo-9', weight: 730, tier: 't15', ext: 'none' },
  { id: 'WEAPON_G22G4SB', label: 'G22 Gen 4 Blue Switch', ammo: 'ammo-40', weight: 880, tier: 't15', ext: 'none' },
  { id: 'WEAPON_G22G4SG', label: 'G22 Gen 4 Green Switch', ammo: 'ammo-40', weight: 880, tier: 't15', ext: 'none' },
  { id: 'WEAPON_G22G4SR', label: 'G22 Gen 4 Red Switch', ammo: 'ammo-40', weight: 880, tier: 't15', ext: 'none' },
  { id: 'WEAPON_G22G4SP', label: 'G22 Gen 4 Purple Switch', ammo: 'ammo-40', weight: 880, tier: 't15', ext: 'none' },
  { id: 'WEAPON_G24SWITCHI', label: 'Illegal G24 Gen 3 Switch', ammo: 'ammo-40', weight: 942, tier: 't15', ext: 'none' },
  { id: 'WEAPON_G23G5SWITCHG', label: 'G23 Gen 5 Switch Gold', ammo: 'ammo-40', weight: 690, tier: 't15', ext: 'none' },
  { id: 'WEAPON_PSAP8019', label: 'PSA P80 G19', ammo: 'ammo-9', weight: 900, tier: 't1', ext: 'none' },
  { id: 'WEAPON_FULLYARPCUSTOM', label: 'Illegal Custom ARP', ammo: 'ammo-9', weight: 1100, tier: 't2', ext: 'none' },
  { id: 'WEAPON_G45AV', label: 'G45 American Variant', ammo: 'ammo-9', weight: 850, tier: 't1', ext: 'none' },
  { id: 'WEAPON_MP20FRT', label: 'MP 2.0 FRT', ammo: 'ammo-9', weight: 850, tier: 't15', ext: 'none' },
  { id: 'WEAPON_G45G5RS', label: 'Glock 45 Gen 5 Red Switch', ammo: 'ammo-9', weight: 850, tier: 't15', ext: 'none' },
  { id: 'WEAPON_7VARP', label: '7 Inch ARP', ammo: 'ammo-rifle', weight: 2000, tier: 't2' },
  { id: 'WEAPON_FIVESEVEN3', label: 'Five Seven', ammo: 'ammo-50', weight: 465, tier: 't2' },
  { id: 'WEAPON_FN502TT', label: 'FN502', ammo: 'ammo-45', weight: 465, tier: 't15' },
  { id: 'WEAPON_G17F', label: 'G17', ammo: 'ammo-9', weight: 465, tier: 't1' },
  { id: 'WEAPON_G17GG', label: 'G17 G', ammo: 'ammo-9', weight: 465, tier: 't1' },
  { id: 'WEAPON_G19G5XC', label: 'G19 G5', ammo: 'ammo-9', weight: 465, tier: 't1' },
  { id: 'WEAPON_G5SWITCH', label: 'G19 G5 Switch', ammo: 'ammo-9', weight: 465, tier: 't15' },
  { id: 'WEAPON_19XMOS', label: 'G19X MOS', ammo: 'ammo-9', weight: 465, tier: 't15' },
  { id: 'WEAPON_G20SS', label: 'G20 Switch', ammo: 'ammo-10', weight: 465, tier: 't15' },
  { id: 'WEAPON_DP43X', label: 'G43X', ammo: 'ammo-45', weight: 465, tier: 't15' },
  { id: 'WEAPON_SD40GH', label: 'SD40', ammo: 'ammo-9', weight: 465, tier: 't1' },
  { id: 'WEAPON_19SWITCH', label: '19 Switch', ammo: 'ammo-9', weight: 800, tier: 't2' },
  { id: 'WEAPON_43MOS', label: '43 MOS', ammo: 'ammo-9', weight: 800, tier: 't2' },
  { id: 'WEAPON_45MOS', label: '45 MOS', ammo: 'ammo-9', weight: 800, tier: 't15' },
  { id: 'WEAPON_AP3', label: 'AP3', ammo: 'ammo-9', weight: 800, tier: 't15' },
  { id: 'WEAPON_CALLOUS', label: 'Callous', ammo: 'ammo-9', weight: 800, tier: 't1' },
  { id: 'WEAPON_CANIK', label: 'Canik', ammo: 'ammo-9', weight: 800, tier: 't1' },
  { id: 'WEAPON_CPT', label: 'CPT', ammo: 'ammo-9', weight: 800, tier: 't1' },
  { id: 'WEAPON_DCOMB', label: 'DCOMB', ammo: 'ammo-9', weight: 800, tier: 't1' },
  { id: 'WEAPON_FFN', label: 'FFN', ammo: 'ammo-9', weight: 800, tier: 't1' },
  { id: 'WEAPON_FN', label: 'FN', ammo: 'ammo-9', weight: 800, tier: 't2' },
  { id: 'WEAPON_FNX45', label: 'FNX45', ammo: 'ammo-9', weight: 800, tier: 't15' },
  { id: 'WEAPON_G19G', label: 'G19G', ammo: 'ammo-9', weight: 800, tier: 't1' },
  { id: 'WEAPON_G205', label: 'G205', ammo: 'ammo-9', weight: 800, tier: 't15' },
  { id: 'WEAPON_G233', label: 'G233', ammo: 'ammo-9', weight: 800, tier: 't1' },
  { id: 'WEAPON_G26S', label: 'G26S', ammo: 'ammo-9', weight: 800, tier: 't2' },
  { id: 'WEAPON_G43G', label: 'G43G', ammo: 'ammo-9', weight: 800, tier: 't1' },
  { id: 'WEAPON_MGLOCK19', label: 'M Glock 19', ammo: 'ammo-9', weight: 800, tier: 't15' },
  { id: 'WEAPON_OLIVE17', label: 'Olive 17', ammo: 'ammo-9', weight: 800, tier: 't1' },
  { id: 'WEAPON_OLIVEG19', label: 'Olive G19', ammo: 'ammo-9', weight: 800, tier: 't15' },
  { id: 'WEAPON_P88P', label: 'P88P', ammo: 'ammo-9', weight: 800, tier: 't1' },
];

const TIERS = {
  t1:  { name: 'Tier 1',   short: 'T1',   sub: 'Stock pistols' },
  t15: { name: 'Tier 1.5', short: 'T1.5', sub: 'Switch pistols' },
  t2:  { name: 'Tier 2',   short: 'T2',   sub: 'ARPs & Dracos' },
};
// name for the catalog filter buttons ('all' isn't a wheel tier, so it gets its own label)
const filterName = (k) => (k === 'all' ? 'All guns' : TIERS[k].name);

// guns with ext: 'none' have no picture yet, so they show the Sols logo instead
const img = (w) => (w.ext === 'none' ? 'favicon.png' : `${w.id}.${w.ext || 'png'}`);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const poolFor = (tier) => (tier === 'all' ? WEAPONS : WEAPONS.filter((w) => w.tier === tier));
const $ = (id) => document.getElementById(id);

let tier = 't1';
let count = 1;
let rolling = false;
let landed = [];
let current = null; // weapon currently under the marker

// ===== Card markup =====
function gunHTML(w, { tag = 'div', num = null, win = false } = {}) {
  const t = TIERS[w.tier];
  return `<${tag} class="gun ${w.tier}${win ? ' win' : ''}" data-id="${w.id}"${tag === 'button' ? ' type="button"' : ''}>
    <div class="gun-art">
      <img src="${img(w)}" alt="" loading="lazy" draggable="false">
      <span class="gun-tier">${t.short}</span>
      ${num ? `<span class="gun-num">#${num}</span>` : ''}
    </div>
    <span class="gun-name" title="${w.label}">${w.label}</span>
    <span class="gun-meta"><span>${w.ammo}</span><span>${(w.weight / 1000).toFixed(2)}kg</span></span>
  </${tag}>`;
}

// ===== Tier picker =====
function renderTiers() {
  $('tiers').innerHTML = Object.entries(TIERS).map(([key, t]) => {
    const pool = poolFor(key);
    return `<button type="button" class="tier ${key}${key === tier ? ' active' : ''}" data-tier="${key}">
      <span class="tier-top"><span class="tier-name">${t.name}</span><span class="tier-count">${pool.length} guns</span></span>
      <span class="tier-sub">${t.sub}</span>
      <span class="tier-icons">${pool.slice(0, 5).map((w) => `<img class="${w.tier}" style="--c:var(--${w.tier})" src="${img(w)}" alt="">`).join('')}</span>
    </button>`;
  }).join('');
}
$('tiers').addEventListener('click', (e) => {
  const b = e.target.closest('.tier');
  if (!b || rolling) return;
  tier = b.dataset.tier;
  renderTiers();
  idleReel();
});

// ===== Roll count =====
function setCount(n) {
  count = Math.max(1, Math.min(10, n));
  $('count').textContent = count;
  $('rollBtn').textContent = `ROLL ${count}×`;
  $('quick').querySelectorAll('button').forEach((b) => b.classList.toggle('active', +b.dataset.n === count));
}
$('quick').innerHTML = Array.from({ length: 10 }, (_, i) => `<button type="button" data-n="${i + 1}">${i + 1}</button>`).join('');
$('quick').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setCount(+b.dataset.n); });
$('minus').addEventListener('click', () => setCount(count - 1));
$('plus').addEventListener('click', () => setCount(count + 1));

// ===== Sound (tiny WebAudio ticks, no files needed) =====
let soundOn = true;
let actx = null;
function beep(freq, dur, vol = 0.05, type = 'square') {
  if (!soundOn) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator();
    const g = actx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
    o.connect(g).connect(actx.destination);
    o.start(); o.stop(actx.currentTime + dur);
  } catch (_) { /* audio not available */ }
}
$('soundBtn').addEventListener('click', () => {
  soundOn = !soundOn;
  $('soundBtn').textContent = `Sound: ${soundOn ? 'on' : 'off'}`;
  $('soundBtn').setAttribute('aria-pressed', soundOn);
});

// ===== Reel =====
const strip = $('strip');
const reel = $('reel');
const START = 3;   // index centered before a spin
const WIN = 52;    // index that lands under the marker
const LEN = 60;

function step() {
  const first = strip.firstElementChild;
  return first ? first.offsetWidth + parseFloat(getComputedStyle(strip).columnGap || 10) : 160;
}
function offsetFor(index, jitter = 0) {
  const cardW = strip.firstElementChild.offsetWidth;
  return reel.clientWidth / 2 - (index * step() + cardW / 2) - jitter;
}
function fillStrip(pool, centerIndex, centerGun) {
  const items = Array.from({ length: LEN }, () => pick(pool));
  if (centerGun) items[centerIndex] = centerGun;
  strip.innerHTML = items.map((w) => gunHTML(w)).join('');
  return items;
}
function idleReel() {
  const pool = poolFor(tier);
  current = current && pool.includes(current) ? current : pick(pool);
  fillStrip(pool, START, current);
  strip.style.transition = 'none';
  strip.style.transform = `translateX(${offsetFor(START)}px)`;
}

function spinOnce(pool, duration) {
  return new Promise((resolve) => {
    const winner = pick(pool);
    const items = fillStrip(pool, START, current);
    items[WIN] = winner;
    strip.children[WIN].outerHTML = gunHTML(winner);

    strip.style.transition = 'none';
    strip.style.transform = `translateX(${offsetFor(START)}px)`;
    void strip.offsetWidth;

    const cardW = strip.firstElementChild.offsetWidth;
    const jitter = (Math.random() - 0.5) * cardW * 0.8;
    const target = offsetFor(WIN, jitter);
    strip.style.transition = `transform ${duration}ms cubic-bezier(.08,.82,.17,1)`;
    strip.style.transform = `translateX(${target}px)`;

    // tick each time a card passes the marker
    const s = step();
    const origin = offsetFor(0);
    let last = null;
    let raf;
    const tick = () => {
      const x = new DOMMatrixReadOnly(getComputedStyle(strip).transform).m41;
      const idx = Math.round((origin - x) / s);
      if (last !== null && idx !== last) beep(900 + Math.random() * 200, 0.03, 0.03);
      last = idx;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      strip.children[WIN].classList.add('win');
      beep(winner.tier === 't2' ? 660 : winner.tier === 't15' ? 560 : 480, 0.25, 0.07, 'triangle');
      current = winner;
      resolve(winner);
    };
    strip.addEventListener('transitionend', done, { once: true });
    // backup: finish anyway if the browser skips the animation (e.g. tab switched mid-spin)
    setTimeout(done, duration + 300);
  });
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

async function roll() {
  if (rolling) return;
  rolling = true;
  setBusy(true);
  const pool = poolFor(tier);
  const dur = reduced ? 400 : count === 1 ? 5200 : 2600;
  for (let i = 0; i < count; i++) {
    const w = await spinOnce(pool, dur);
    landed.push({ w, tier });
    renderLanded();
    if (i < count - 1) await wait(reduced ? 150 : 650);
  }
  rolling = false;
  setBusy(false);
}
function setBusy(b) {
  ['rollBtn', 'minus', 'plus', 'clearBtn'].forEach((id) => ($(id).disabled = b));
  $('quick').querySelectorAll('button').forEach((x) => (x.disabled = b));
}
$('rollBtn').addEventListener('click', roll);

// ===== Landed =====
function renderLanded() {
  const el = $('landed');
  if (!landed.length) {
    $('landedSub').textContent = 'Nothing rolled yet.';
    el.innerHTML = '';
    return;
  }
  $('landedSub').textContent = `${landed.length} roll${landed.length > 1 ? 's' : ''} · newest first · tap to copy spawn name`;
  el.innerHTML = landed
    .map((r, i) => ({ ...r, n: i + 1 }))
    .reverse()
    .map((r) => gunHTML(r.w, { tag: 'button', num: r.n }))
    .join('');
}
$('clearBtn').addEventListener('click', () => { landed = []; renderLanded(); });

// ===== Catalog =====
let filter = 'all';
function renderCatalog() {
  const q = $('search').value.trim().toLowerCase();
  const list = poolFor(filter).filter((w) => !q || w.label.toLowerCase().includes(q) || w.id.toLowerCase().includes(q) || w.ammo.includes(q));
  $('catalogGrid').innerHTML = list.length
    ? list.map((w) => gunHTML(w, { tag: 'button' })).join('')
    : '<p class="empty">No weapons match that search.</p>';
}
$('chips').innerHTML = ['all', ...Object.keys(TIERS)]
  .map((k) => `<button type="button" class="chip${k === filter ? ' active' : ''}" data-f="${k}">${filterName(k)} (${poolFor(k).length})</button>`)
  .join('');
$('chips').addEventListener('click', (e) => {
  const b = e.target.closest('.chip');
  if (!b) return;
  filter = b.dataset.f;
  $('chips').querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c === b));
  renderCatalog();
});
$('search').addEventListener('input', renderCatalog);

// ===== Copy spawn name =====
let toastTimer;
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1600);
}
document.addEventListener('click', async (e) => {
  const b = e.target.closest('button.gun');
  if (!b) return;
  const id = b.dataset.id;
  try {
    await navigator.clipboard.writeText(id);
    toast(`Copied ${id}`);
  } catch (_) {
    toast(id);
  }
});

// ===== Start =====
renderTiers();
setCount(1);
renderCatalog();
renderLanded();
idleReel();
addEventListener('resize', () => { if (!rolling) idleReel(); });
