/* ─────────────────────────────────────────────
   CLIPPER — INTERACTIVE JAVASCRIPT
   ───────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── 1. NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  /* ── 2. HAMBURGER MENU ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.style.transform = isOpen ? 'rotate(90deg)' : '';
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { navLinks.classList.remove('open'); hamburger.style.transform = ''; });
  });

  /* ── 3. SCROLL TO TOP ── */
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── QR MODAL ── */
  const qrOverlay  = document.getElementById('qrOverlay');
  const openQrBtn  = document.getElementById('openQrBtn');
  const qrCloseBtn = document.getElementById('qrCloseBtn');

  function openQr() {
    qrOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    qrCloseBtn.focus();
  }
  function closeQr() {
    qrOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  openQrBtn  && openQrBtn.addEventListener('click', openQr);
  qrCloseBtn && qrCloseBtn.addEventListener('click', closeQr);

  // Klik di luar modal untuk tutup
  qrOverlay && qrOverlay.addEventListener('click', (e) => {
    if (e.target === qrOverlay) closeQr();
  });

  // Tekan Escape untuk tutup
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && qrOverlay.classList.contains('open')) closeQr();
  });

  /* ── 4. INTERSECTION OBSERVER — REVEAL ── */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        // stagger delay for siblings
        const siblings = [...e.target.parentNode.children].filter(c => c.hasAttribute('data-reveal'));
        const idx = siblings.indexOf(e.target);
        e.target.style.transitionDelay = `${idx * 80}ms`;
        e.target.classList.add('revealed');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));

  /* ── 5. AI DEMO BAR (features section) ── */
  const aiBar = document.getElementById('aiBar');
  const aiBarObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => { aiBar.style.width = '97.4%'; }, 300);
      aiBarObs.disconnect();
    }
  }, { threshold: 0.5 });
  if (aiBar) aiBarObs.observe(aiBar);

  /* ── 6. AI BADGE SIMULATION (hero) ── */
  const processingBadge = document.getElementById('aiProcessingBadge');
  const successBadge    = document.getElementById('aiSuccessBadge');
  if (processingBadge && successBadge) {
    setTimeout(() => {
      processingBadge.classList.add('hidden');
      successBadge.classList.remove('hidden');
    }, 2800);
    setInterval(() => {
      successBadge.classList.add('hidden');
      processingBadge.classList.remove('hidden');
      setTimeout(() => {
        processingBadge.classList.add('hidden');
        successBadge.classList.remove('hidden');
      }, 2800);
    }, 7000);
  }

  /* ── 7. COUNTER ANIMATION (stats) ── */
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.getAttribute('data-target');
      const duration = 1600;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target).toLocaleString('id-ID');
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => countObs.observe(el));

  /* ── 8. INTERACTIVE TIMELINE DEMO ── */
  const demoRunBtn     = document.getElementById('demoRunBtn');
  const playhead       = document.getElementById('playhead');
  const demoStatus     = document.getElementById('demoStatus');
  const demoResults    = document.getElementById('demoResults');
  const highlightMarkers = document.getElementById('highlightMarkers');

  const highlights = [
    { left: '18%',  width: '7%',  label: 'Highlight 1', time: '27:00–37:48' },
    { left: '44%',  width: '9%',  label: 'Highlight 2', time: '1:06:33–1:20:11' },
    { left: '72%',  width: '8%',  label: 'Highlight 3', time: '1:49:12–2:01:54' },
  ];

  let demoRunning = false;
  let animFrame   = null;

  demoRunBtn.addEventListener('click', () => {
    if (demoRunning) return;
    demoRunning = true;
    demoRunBtn.disabled = true;
    demoRunBtn.textContent = 'Memproses...';
    highlightMarkers.innerHTML = '';

    // Reset playhead
    playhead.style.transition = 'none';
    playhead.style.left = '0%';

    demoStatus.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;color:var(--c-primary)">
        <svg class="spin-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        <span>AI sedang menganalisis video... memindai scene demi scene</span>
      </div>`;

    const startTime = performance.now();
    const duration  = 3500; // 3.5s scan

    function animatePlayhead(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease     = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      playhead.style.transition = 'none';
      playhead.style.left = `${ease * 100}%`;

      // Reveal markers progressively
      highlights.forEach((h, i) => {
        const trigger = (i + 1) / (highlights.length + 1);
        if (progress >= trigger && !document.getElementById(`hm-${i}`)) {
          const m = document.createElement('div');
          m.className = 'highlight-marker';
          m.id = `hm-${i}`;
          m.style.left  = h.left;
          m.style.width = h.width;
          highlightMarkers.appendChild(m);
        }
      });

      if (progress < 1) {
        animFrame = requestAnimationFrame(animatePlayhead);
      } else {
        finishDemo();
      }
    }

    requestAnimationFrame(animatePlayhead);
  });

  function finishDemo() {
    demoRunning = false;
    demoRunBtn.disabled = false;
    demoRunBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
      Jalankan Ulang`;

    demoResults.innerHTML = `
      <div class="demo-clip-results">
        ${highlights.map((h, i) => `
          <div class="demo-clip-tag" style="animation-delay:${i * 100}ms">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
            ${h.label} &nbsp;<span style="opacity:.7;font-weight:500">${h.time}</span>
          </div>
        `).join('')}
        <div class="demo-clip-tag" style="animation-delay:300ms; background:rgba(79,70,229,.1);color:var(--c-primary);border-color:rgba(79,70,229,.3)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
          3 clip siap diexport
        </div>
      </div>`;
  }

  /* ── 9. PRICING TOGGLE ── */
  const billingToggle = document.getElementById('billingToggle');
  const priceAmounts  = document.querySelectorAll('.price-amount');

  billingToggle && billingToggle.addEventListener('change', () => {
    const isYearly = billingToggle.checked;
    priceAmounts.forEach(el => {
      const val = isYearly
        ? +el.getAttribute('data-yearly')
        : +el.getAttribute('data-monthly');
      el.textContent = val === 0 ? '0' : val.toLocaleString('id-ID');
    });
  });

  /* ── 10. EXPORT OPTION TOGGLE (how it works) ── */
  document.querySelectorAll('.export-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      opt.closest('.export-options').querySelectorAll('.export-opt').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });

  /* ── 11. UPLOAD BOX DRAG VISUAL ── */
  const uploadBox = document.getElementById('uploadDemo');
  if (uploadBox) {
    ['dragenter', 'dragover'].forEach(evt => uploadBox.addEventListener(evt, e => {
      e.preventDefault();
      uploadBox.style.borderColor = 'var(--c-primary)';
      uploadBox.style.background  = 'var(--c-primary-l)';
    }));
    ['dragleave', 'drop'].forEach(evt => uploadBox.addEventListener(evt, e => {
      e.preventDefault();
      uploadBox.style.borderColor = '';
      uploadBox.style.background  = '';
    }));
    uploadBox.addEventListener('click', () => {
      uploadBox.style.transform = 'scale(0.97)';
      setTimeout(() => { uploadBox.style.transform = ''; }, 150);
    });
  }

  /* ── 12. SMOOTH ACTIVE NAV LINK HIGHLIGHT ── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = '';
          a.style.background = '';
          if (a.getAttribute('href') === `#${id}`) {
            a.style.color = 'var(--c-primary)';
            a.style.background = 'var(--c-primary-l)';
          }
        });
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => sectionObs.observe(s));

  /* ── 13. PARALLAX BLOBS (subtle) ── */
  window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelectorAll('.blob-1').forEach(b => {
      b.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
    });
    document.querySelectorAll('.blob-2').forEach(b => {
      b.style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`;
    });
  }, { passive: true });

  /* ── 14. ANALYSIS BARS ANIMATION ── */
  const analysisViz = document.querySelector('.ai-analysis-viz');
  if (analysisViz) {
    const bars = analysisViz.querySelectorAll('.analysis-bar');
    setInterval(() => {
      bars.forEach(bar => {
        const h = Math.floor(Math.random() * 70 + 20);
        bar.style.height = `${h}%`;
        bar.classList.toggle('active', h > 75);
      });
    }, 800);
  }

  /* ── 15. CTA BUTTON RIPPLE EFFECT ── */
  document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
        background:rgba(255,255,255,0.3);
        border-radius:50%;
        transform:scale(0);
        animation:ripple 0.5s ease-out forwards;
        pointer-events:none;
      `;
      if (!this.style.position || this.style.position === 'static') {
        this.style.position = 'relative';
      }
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  /* Ripple keyframe injected dynamically */
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `@keyframes ripple { to { transform: scale(3); opacity: 0; } }`;
  document.head.appendChild(rippleStyle);

})();
