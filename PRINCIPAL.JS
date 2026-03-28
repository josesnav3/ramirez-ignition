/* ═══════════════════════════════════════════════════
   RAMÍREZ IGNITION — PRINCIPAL.JS
═══════════════════════════════════════════════════ */

/* ─── 1. SELECTOR DE TEMAS (primero, siempre funciona) ── */
const html = document.documentElement;
const dots = document.querySelectorAll('.theme-dot');

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  dots.forEach(d => d.classList.toggle('active', d.dataset.theme === theme));
  localStorage.setItem('ri-theme', theme);
}

dots.forEach(dot => dot.addEventListener('click', () => setTheme(dot.dataset.theme)));

const savedTheme = localStorage.getItem('ri-theme');
if (savedTheme) setTheme(savedTheme);


/* ─── 2. REGISTRAR SCROLLTRIGGER ────────────────── */
gsap.registerPlugin(ScrollTrigger);


/* ─── 3. LENIS SMOOTH SCROLL ─────────────────────── */
let lenis = null;

try {
  lenis = new Lenis({ duration: 1.3, smoothWheel: true });

  // Un solo RAF loop — sincronizado con GSAP
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.on('scroll', ScrollTrigger.update);
} catch (e) {
  // Si Lenis no carga, el scroll nativo sigue funcionando
  console.warn('Lenis no disponible, usando scroll nativo.', e);
}


/* ─── 4. NAVBAR: sombra al hacer scroll ─────────── */
const navbar = document.getElementById('navbar');

ScrollTrigger.create({
  start: 80,
  onEnter:     () => navbar.classList.add('scrolled'),
  onLeaveBack: () => navbar.classList.remove('scrolled'),
});


/* ─── 5. HERO ANIMATIONS ─────────────────────────── */
gsap.timeline({ defaults: { ease: 'power3.out' } })
  .from('#heroEyebrow',  { y: 20, opacity: 0, duration: 0.7, delay: 0.3 })
  .from('.hero-line',    { y: '110%', opacity: 0, duration: 0.9, stagger: 0.15 }, '-=0.3')
  .to('#heroSub',        { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
  .to('#heroCtas',       { y: 0, opacity: 1, duration: 0.7 }, '-=0.5');


/* ─── 6. SCROLL REVEAL GENÉRICO ──────────────────── */
gsap.utils.toArray('[data-reveal]').forEach(el => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: parseFloat(el.dataset.delay || 0) / 1000,
    ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 88%' },
  });
});


/* ─── 7. CAR CARDS: entrada escalonada ───────────── */
gsap.from('.car-card', {
  opacity: 0,
  y: 50,
  duration: 0.75,
  stagger: 0.15,
  ease: 'power3.out',
  scrollTrigger: { trigger: '#carsGrid', start: 'top 85%' },
});


/* ─── 8. SWIPER (carruseles de autos) ────────────── */
document.querySelectorAll('.car-swiper').forEach(el => {
  new Swiper(el, {
    loop: true,
    speed: 600,
    autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
    navigation: {
      prevEl: el.querySelector('.swiper-button-prev'),
      nextEl: el.querySelector('.swiper-button-next'),
    },
  });
});


/* ─── 8b. FONDO DIFUMINADO POR SLIDE ────────────── */
document.querySelectorAll('.car-swiper .swiper-slide').forEach(slide => {
  const img = slide.querySelector('img');
  if (img) slide.style.backgroundImage = `url('${img.getAttribute('src')}')`;
});


/* ─── 9. FILTROS ─────────────────────────────────── */
const filterPills = document.querySelectorAll('.filter-pill');
const searchInput = document.getElementById('searchInput');
const noResults   = document.getElementById('noResults');
let activeFilter  = 'all';

function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();
  let visible = 0;

  document.querySelectorAll('.car-card').forEach(card => {
    const match =
      (activeFilter === 'all' || card.dataset.status === activeFilter) &&
      (!query || card.dataset.name.includes(query));

    card.classList.toggle('hidden', !match);
    if (match) visible++;
  });

  noResults.classList.toggle('d-none', visible > 0);
}

filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    filterPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeFilter = pill.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener('input', applyFilters);


/* ─── 10. SMOOTH SCROLL PARA ANCLAS ──────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
