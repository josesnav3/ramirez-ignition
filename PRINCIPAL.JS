/* ═══════════════════════════════════════════════════
   RAMÍREZ IGNITION — APEX PROTOCOL
   JavaScript principal
═══════════════════════════════════════════════════ */


/* ─── 1. BOOT SEQUENCE ───────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('bootOverlay');
  // Ocultar tras ~2.8s (tiempo de animaciones CSS)
  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 2800);
});


/* ─── 2. REGISTRAR GSAP SCROLLTRIGGER ────────────── */
gsap.registerPlugin(ScrollTrigger);


/* ─── 3. LENIS SMOOTH SCROLL ─────────────────────── */
let lenis = null;

try {
  lenis = new Lenis({ duration: 1.2, smoothWheel: true, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.on('scroll', ScrollTrigger.update);
} catch (e) {
  console.warn('Lenis no disponible.', e);
}


/* ─── 4. NAVBAR SCROLL ───────────────────────────── */
const navbar = document.getElementById('navbar');

ScrollTrigger.create({
  start: 60,
  onEnter:     () => navbar.classList.add('scrolled'),
  onLeaveBack: () => navbar.classList.remove('scrolled'),
});


/* ─── 5. MOBILE NAV TOGGLE ───────────────────────── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Cerrar al hacer click en un link
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});


/* ─── 6. HERO ANIMATIONS ─────────────────────────── */
// Se ejecutan después de que el boot overlay desaparece
setTimeout(() => {
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to('#heroEyebrow',  { opacity: 1, y: 0, duration: 0.7, delay: 0.1 })
    .to('#htLine1',      { clipPath: 'inset(0 0% 0 0)', duration: 1.0 }, '-=0.3')
    .to('#htLine2',      { clipPath: 'inset(0 0% 0 0)', duration: 1.0 }, '-=0.7')
    .to('#heroSub',      { opacity: 1, duration: 0.8 }, '-=0.5')
    .to('#heroCtas',     { opacity: 1, duration: 0.7 }, '-=0.5')
    .to('#hudData1',     { opacity: 1, duration: 0.5 }, '-=0.3')
    .to('#hudData2',     { opacity: 1, duration: 0.5 }, '-=0.3')
    .to('#hudData3',     { opacity: 1, duration: 0.5 }, '-=0.3');
}, 2900);


/* ─── 7. SCROLL REVEAL ───────────────────────────── */
document.querySelectorAll('[data-reveal]').forEach(el => {
  const delay = parseFloat(el.dataset.delay || 0) / 1000;
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 88%',
    },
  });
});


/* ─── 8. CAR CARDS REVEAL ────────────────────────── */
gsap.from('.car-card', {
  opacity: 0,
  y: 40,
  duration: 0.65,
  stagger: 0.08,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '#carsGrid',
    start: 'top 85%',
  },
});


/* ─── 9. STATS COUNTER ───────────────────────────── */
document.querySelectorAll('.stat-num').forEach(el => {
  const target = parseInt(el.dataset.target, 10);

  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to({ val: 0 }, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: function () {
          el.textContent = Math.round(this.targets()[0].val);
        },
      });
    },
  });
});


/* ─── 10. GALLERY ITEMS REVEAL ───────────────────── */
gsap.from('.gallery-item', {
  opacity: 0,
  scale: 0.96,
  duration: 0.7,
  stagger: 0.1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.gallery-grid',
    start: 'top 85%',
  },
});


/* ─── 11. SWIPER CAROUSELES ──────────────────────── */
document.querySelectorAll('.car-swiper').forEach(el => {
  new Swiper(el, {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: el.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
});


/* ─── 12. FILTROS ────────────────────────────────── */
const filterBtns  = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const noResults   = document.getElementById('noResults');
let activeFilter  = 'all';

function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();
  let visible = 0;

  document.querySelectorAll('.car-card').forEach(card => {
    const match =
      (activeFilter === 'all' || card.dataset.status === activeFilter) &&
      (!query || card.dataset.name.toLowerCase().includes(query));

    card.classList.toggle('hidden', !match);
    if (match) visible++;
  });

  noResults.style.display = visible === 0 ? 'block' : 'none';
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener('input', applyFilters);


/* ─── 13. SMOOTH SCROLL EN ANCLAS ───────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -72, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* ─── 14. HUD BLINKING STATUS ────────────────────── */
// Pequeño blink en el status OPERATIVO para efecto de terminal
setInterval(() => {
  const statusEl = document.querySelector('.status-ok');
  if (!statusEl) return;
  statusEl.style.opacity = statusEl.style.opacity === '0' ? '1' : '0';
  setTimeout(() => { if (statusEl) statusEl.style.opacity = '1'; }, 120);
}, 4000);
