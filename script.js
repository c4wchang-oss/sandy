/* ═══════════════════════════════════════════════
   Sandy's Norway Story · Photo + Slide Controller
   ═══════════════════════════════════════════════ */

/* ── Photo slots manifest ──────────────────────── */
const PHOTO_SLOTS = [
  { key: 'flam-aerial',    label: '弗拉姆村俯瞰',      hint: '第1張：從高處俯瞰整個弗拉姆村' },
  { key: 'flam-breakfast', label: '飯店早餐',          hint: '第2張：燕麥粥 + 木瓜，窗外是弗拉姆' },
  { key: 'fjord-queue',    label: '峽灣渡船碼頭',      hint: '第3張：晴天在碼頭排隊上船' },
  { key: 'train-couple',   label: 'Sandy 夫妻在車廂',  hint: '第4張：Sandy 與先生在木質車廂合照' },
  { key: 'train-family',   label: '爸爸與兩個兒子',    hint: '第5張：爸爸 & 兩個兒子坐在靠窗座位' },
  { key: 'kjos-waterfall', label: 'Kjosfossen 瀑布全景', hint: '第6張：仰望瀑布，陽光穿透水霧' },
  { key: 'kjos-portrait',  label: 'Sandy 在瀑布前',    hint: '第7張：Sandy 微笑，瀑布為背景' },
  { key: 'train-exterior', label: '弗拉姆鐵路外觀',    hint: '第8張：綠色 FLÅMSBANA 列車停靠' },
  { key: 'mountain-hotel', label: 'Vatnahalsen Hotell', hint: '第9張：Bergen Line 沿線紅色飯店' },
  { key: 'mountain-walk',  label: '走往飛索入口',      hint: '第10張：三個男生走在碎石路上' },
  { key: 'mountain-valley', label: '山谷全景',         hint: '第11張：雪山峽谷的壯闊全景' },
  { key: 'zip-utv',        label: '山頂越野車',        hint: '第12張：藍色 Yamaha Wolverine X4' },
  { key: 'zip-sign',       label: '飛索入口招牌',      hint: '第13張：Flåm Zipline and Viewpoint 木屋' },
  { key: 'zip-viewpoint',  label: 'Sandy 在觀景台',    hint: '第14張：Sandy 站在玻璃觀景台，瀑布身後' },
  { key: 'zip-cabin1',     label: '兒子 & 爸爸在木屋', hint: '第15張：兩個男生在飛索準備木屋' },
  { key: 'zip-cabin2',     label: '兒子 & Sandy 在木屋', hint: '第16張：兒子與 Sandy 在飛索準備木屋' },
  { key: 'zip-family',     label: '全家備戰飛索',      hint: '第17張：四人戴頭盔穿裝備，準備出發' },
  { key: 'zip-couple',     label: 'Sandy 夫妻備戰',    hint: '第18張：Sandy 與先生在木屋門口' },
  { key: 'zip-platform',   label: '三男生在發射台',    hint: '第19張：雪山下，三人站在飛索發射台' },
];

/* ── IndexedDB ─────────────────────────────────── */
const DB_NAME  = 'sandy-norway-photos';
const DB_STORE = 'photos';
let db = null;

function openDB() {
  return new Promise((resolve, reject) => {
    if (db) { resolve(db); return; }
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore(DB_STORE);
    req.onsuccess = e => { db = e.target.result; resolve(db); };
    req.onerror   = e => reject(e);
  });
}

async function savePhoto(key, dataUrl) {
  const database = await openDB();
  return new Promise((resolve, reject) => {
    const tx  = database.transaction(DB_STORE, 'readwrite');
    tx.objectStore(DB_STORE).put(dataUrl, key);
    tx.oncomplete = resolve;
    tx.onerror    = reject;
  });
}

async function loadPhoto(key) {
  const database = await openDB();
  return new Promise((resolve, reject) => {
    const tx  = database.transaction(DB_STORE, 'readonly');
    const req = tx.objectStore(DB_STORE).get(key);
    req.onsuccess = e => resolve(e.target.result || null);
    req.onerror   = reject;
  });
}

async function getAllKeys() {
  const database = await openDB();
  return new Promise((resolve, reject) => {
    const tx  = database.transaction(DB_STORE, 'readonly');
    const req = tx.objectStore(DB_STORE).getAllKeys();
    req.onsuccess = e => resolve(e.target.result || []);
    req.onerror   = reject;
  });
}

/* ── Apply photo to slot element ───────────────── */
function applyPhotoToSlot(el, dataUrl) {
  el.style.backgroundImage = `url(${dataUrl})`;
  el.classList.add('has-photo');
}

/* ── Trigger file upload ────────────────────────── */
let activeSlot = null;
const fileInput = document.getElementById('file-input');

function triggerUpload(slotEl) {
  activeSlot = slotEl;
  fileInput.value = '';
  fileInput.click();
}

fileInput.addEventListener('change', async () => {
  const file = fileInput.files[0];
  if (!file || !activeSlot) return;
  const key = activeSlot.dataset.key;

  const reader = new FileReader();
  reader.onload = async (ev) => {
    const dataUrl = ev.target.result;
    applyPhotoToSlot(activeSlot, dataUrl);
    await savePhoto(key, dataUrl);
    updateGuideList();
  };
  reader.readAsDataURL(file);
});

/* ── Drag & drop on slots ───────────────────────── */
document.querySelectorAll('.photo-slot').forEach(slot => {
  slot.addEventListener('dragover', e => { e.preventDefault(); slot.style.borderColor = 'var(--gold)'; });
  slot.addEventListener('dragleave', () => { slot.style.borderColor = ''; });
  slot.addEventListener('drop', async e => {
    e.preventDefault(); slot.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const key = slot.dataset.key;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const dataUrl = ev.target.result;
      applyPhotoToSlot(slot, dataUrl);
      await savePhoto(key, dataUrl);
      updateGuideList();
    };
    reader.readAsDataURL(file);
  });
});

/* ── Load all photos on startup ─────────────────── */
async function initPhotos() {
  const uploaded = await getAllKeys();
  for (const slot of document.querySelectorAll('.photo-slot[data-key]')) {
    const key = slot.dataset.key;
    if (uploaded.includes(key)) {
      const dataUrl = await loadPhoto(key);
      if (dataUrl) applyPhotoToSlot(slot, dataUrl);
    }
  }
  buildGuideList();
}

/* ── Upload Guide ────────────────────────────────── */
function buildGuideList() {
  const list = document.getElementById('guide-list');
  list.innerHTML = '';
  PHOTO_SLOTS.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'guide-item';
    div.dataset.key = s.key;
    div.innerHTML = `
      <span class="g-num">#${i + 1}</span>
      <div>
        <strong>${s.label}</strong>
        <div style="font-size:.78rem;opacity:.7">${s.hint}</div>
      </div>
      <span class="g-check"></span>`;
    div.addEventListener('click', () => {
      activeSlot = document.querySelector(`.photo-slot[data-key="${s.key}"]`);
      if (activeSlot) { fileInput.value = ''; fileInput.click(); }
    });
    list.appendChild(div);
  });
  updateGuideList();
}

async function updateGuideList() {
  const uploaded = await getAllKeys();
  document.querySelectorAll('.guide-item').forEach(item => {
    const isUploaded = uploaded.includes(item.dataset.key);
    item.classList.toggle('uploaded', isUploaded);
    item.querySelector('.g-check').textContent = isUploaded ? '✅' : '';
  });
}

function showGuide() { document.getElementById('upload-guide').classList.remove('hidden'); }
function closeGuide() { document.getElementById('upload-guide').classList.add('hidden'); }

/* ── Slide Controller ───────────────────────────── */
const slides    = document.querySelectorAll('.slide');
const navDots   = document.getElementById('nav-dots');
const progBar   = document.getElementById('progress-bar');
const curEl     = document.getElementById('cur');
const totEl     = document.getElementById('tot');
const chLabel   = document.getElementById('chapter-label');
const btnPlay   = document.getElementById('btn-play');

const TOTAL = slides.length;
let current = 0;
let autoTimer = null;
let isPlaying = false;

totEl.textContent = TOTAL;

/* build dots */
slides.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'nav-dot' + (i === 0 ? ' active' : '');
  d.title = `第 ${i + 1} 頁`;
  d.addEventListener('click', () => goToSlide(i));
  navDots.appendChild(d);
});

function goToSlide(idx) {
  if (idx === current) return;
  const prev = current;
  current = ((idx % TOTAL) + TOTAL) % TOTAL;

  slides[prev].classList.remove('active');
  slides[prev].classList.add('exit');
  setTimeout(() => slides[prev].classList.remove('exit'), 1000);
  slides[current].classList.add('active');

  /* restart kb animation */
  const bg = slides[current].querySelector('.bg-layer');
  if (bg) { bg.style.animation = 'none'; void bg.offsetWidth; bg.style.animation = ''; }

  updateUI();
}

function nextSlide() { goToSlide(current + 1); }
function prevSlide() { goToSlide(current - 1); }

function updateUI() {
  navDots.querySelectorAll('.nav-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  progBar.style.width = ((current + 1) / TOTAL * 100) + '%';
  curEl.textContent   = current + 1;

  const chapter = slides[current].dataset.chapter;
  if (chapter) {
    chLabel.textContent = chapter;
    chLabel.classList.add('visible');
  } else {
    chLabel.classList.remove('visible');
  }
}

/* autoplay */
function startAutoplay() {
  if (isPlaying) return;
  isPlaying = true; btnPlay.textContent = '⏸';
  autoTimer = setInterval(() => {
    if (current === TOTAL - 1) { stopAutoplay(); return; }
    nextSlide();
  }, 9000);
}
function stopAutoplay() {
  isPlaying = false; btnPlay.textContent = '▶';
  clearInterval(autoTimer);
}
function toggleAutoplay() { isPlaying ? stopAutoplay() : startAutoplay(); }

/* keyboard */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); nextSlide(); }
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prevSlide(); }
  else if (e.key.toLowerCase() === 'p') toggleAutoplay();
  else if (e.key.toLowerCase() === 'u') showGuide();
});

/* touch */
let touchX = 0;
document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) dx < 0 ? nextSlide() : prevSlide();
});

/* wheel */
let wheelLock = false;
document.addEventListener('wheel', e => {
  if (wheelLock) return;
  wheelLock = true; setTimeout(() => { wheelLock = false; }, 1100);
  e.deltaY > 0 ? nextSlide() : prevSlide();
}, { passive: true });

/* ── Init ───────────────────────────────────────── */
slides[0].classList.add('active');
updateUI();
initPhotos();
