/* ═══════════════════════════════════════════════
   Norway in a Nutshell · Presentation Controller
   ═══════════════════════════════════════════════ */

const slides     = document.querySelectorAll('.slide');
const navDots    = document.getElementById('nav-dots');
const progressBar= document.getElementById('progress-bar');
const currentNum = document.getElementById('current-num');
const totalNum   = document.getElementById('total-num');
const btnPlay    = document.getElementById('btn-play');

const TOTAL      = slides.length;
let current      = 0;
let autoplayTimer= null;
let isPlaying    = false;

totalNum.textContent = TOTAL;

/* ── Build nav dots ────────────────────────── */
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('title', `第 ${i + 1} 頁`);
  dot.addEventListener('click', () => goToSlide(i));
  navDots.appendChild(dot);
});

/* ── Go to slide ───────────────────────────── */
function goToSlide(index) {
  if (index === current) return;

  const prev = current;
  current = ((index % TOTAL) + TOTAL) % TOTAL;

  slides[prev].classList.remove('active');
  slides[prev].classList.add('exit');
  setTimeout(() => slides[prev].classList.remove('exit'), 1000);

  slides[current].classList.add('active');

  // Restart ken-burns on bg-layer
  const bg = slides[current].querySelector('.bg-layer');
  if (bg) { bg.style.animation = 'none'; void bg.offsetWidth; bg.style.animation = ''; }

  updateUI();
}

function nextSlide() { goToSlide(current + 1); }
function prevSlide() { goToSlide(current - 1); }

/* ── Update UI chrome ──────────────────────── */
function updateUI() {
  const dots = navDots.querySelectorAll('.nav-dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
  progressBar.style.width = ((current + 1) / TOTAL * 100) + '%';
  currentNum.textContent  = current + 1;
}

/* ── Autoplay ──────────────────────────────── */
function startAutoplay() {
  if (isPlaying) return;
  isPlaying = true;
  btnPlay.textContent = '⏸';
  autoplayTimer = setInterval(() => {
    if (current === TOTAL - 1) { stopAutoplay(); return; }
    nextSlide();
  }, 8000);
}
function stopAutoplay() {
  isPlaying = false;
  btnPlay.textContent = '▶';
  clearInterval(autoplayTimer);
}
function toggleAutoplay() {
  isPlaying ? stopAutoplay() : startAutoplay();
}

/* ── Keyboard ──────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault(); nextSlide();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault(); prevSlide();
  } else if (e.key === 'p' || e.key === 'P') {
    toggleAutoplay();
  }
});

/* ── Touch/Swipe ───────────────────────────── */
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) { dx < 0 ? nextSlide() : prevSlide(); }
});

/* ── Mouse wheel ───────────────────────────── */
let wheelLock = false;
document.addEventListener('wheel', e => {
  if (wheelLock) return;
  wheelLock = true;
  setTimeout(() => { wheelLock = false; }, 1000);
  e.deltaY > 0 ? nextSlide() : prevSlide();
}, { passive: true });

/* ── Init first slide ──────────────────────── */
slides[0].classList.add('active');
updateUI();
