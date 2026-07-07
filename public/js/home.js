(function () {
    var form = document.getElementById('leadForm');
    var steps = Array.prototype.slice.call(form.querySelectorAll('.form-step'));
    var progressBar = document.getElementById('progressBar');
    var stepCount = document.getElementById('stepCount');
    var backBtn = document.getElementById('backBtn');
    var urlReveal = document.getElementById('urlReveal');
    var answers = {};
    var current = 1;
    var TOTAL = 4;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function show(step) {
      current = step;
      steps.forEach(function (s) {
        s.classList.toggle('active', Number(s.dataset.step) === step);
      });
      if (step <= TOTAL) {
        progressBar.style.width = (step / TOTAL) * 100 + '%';
        stepCount.textContent = 'Schritt ' + step + ' von ' + TOTAL + (step === 1 ? ' · unter 60 Sekunden' : '');
        backBtn.classList.toggle('show', step > 1);
      } else {
        progressBar.style.width = '100%';
        stepCount.textContent = 'Fertig ✓';
        backBtn.classList.remove('show');
      }
    }

    form.querySelectorAll('[data-step="1"] .choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        answers.branche = btn.dataset.answer;
        show(2);
      });
    });

    form.querySelectorAll('[data-step="2"] .choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        form.querySelectorAll('[data-step="2"] .choice').forEach(function (b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
        answers.websiteStatus = btn.dataset.answer;
        if (btn.dataset.advance) {
          urlReveal.classList.remove('show');
          answers.website = '';
          show(3);
        } else {
          urlReveal.classList.add('show');
          form.elements.website.focus();
        }
      });
    });
    document.getElementById('next2').addEventListener('click', function () {
      answers.website = form.elements.website.value.trim();
      show(3);
    });

    document.getElementById('next3').addEventListener('click', function () {
      var firma = form.elements.firma.value.trim();
      var ort = form.elements.ort.value.trim();
      var err = document.getElementById('err3');
      if (!firma || !ort) { err.classList.add('show'); return; }
      err.classList.remove('show');
      answers.firma = firma;
      answers.ort = ort;
      show(4);
    });

    backBtn.addEventListener('click', function () {
      if (current > 1) show(current - 1);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var telefon = form.elements.telefon.value.trim();
      var consent = form.elements.datenschutz.checked;
      var honeypot = form.elements.firmenfax.value;
      var err = document.getElementById('err4');
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      if (!name || !emailOk || !telefon || !consent) { err.classList.add('show'); return; }
      err.classList.remove('show');
      if (honeypot) { show(5); return; }
      answers.name = name;
      answers.email = email;
      answers.telefon = telefon;
      answers.quelle = 'kmu-webseiten.de';
      var WEBHOOK = window.KMU_WEBHOOK_URL || '';
      if (WEBHOOK) {
        /* form-urlencoded = "simple request": kein CORS-Preflight, funktioniert
           zuverlässig aus dem Browser zu Make-Webhooks. Fire-and-forget. */
        var body = new URLSearchParams();
        Object.keys(answers).forEach(function (k) { body.append(k, answers[k]); });
        fetch(WEBHOOK, { method: 'POST', body: body }).catch(function () {});
      } else {
        console.log('Lead (Demo-Modus, kein Webhook konfiguriert):', answers);
      }
      show(5);
    });

    document.querySelectorAll('[data-legal]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var overlay = document.getElementById('legal-' + link.dataset.legal);
        if (overlay) overlay.classList.add('open');
      });
    });
    document.querySelectorAll('.legal-overlay').forEach(function (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay || e.target.closest('[data-close]')) overlay.classList.remove('open');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') document.querySelectorAll('.legal-overlay.open').forEach(function (o) { o.classList.remove('open'); });
    });

    /* Scroll-Reveal */
    if ('IntersectionObserver' in window && !reduced) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.rv, .stagger').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.rv, .stagger').forEach(function (el) { el.classList.add('in'); });
    }

    /* Zähler im Hero */
    function animateCount(el) {
      var to = Number(el.dataset.to);
      var dur = 1400, t0 = null;
      function tick(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    document.querySelectorAll('.count').forEach(function (el) {
      if (reduced) { el.textContent = el.dataset.to; return; }
      animateCount(el);
    });
  })();
