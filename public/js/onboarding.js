(function () {
  var form = document.getElementById('obForm');
  if (!form) return;

  /* Vorbefüllung über URL-Parameter (?firma=…&name=…&email=…) — der Link wird
     dem Kunden personalisiert geschickt, damit er nichts doppelt eintippen muss.
     Nur leere Felder werden befüllt; der Kunde prüft und korrigiert. */
  var params = new URLSearchParams(window.location.search);
  var prefillMap = {
    firma: 'firma',
    name: 'ansprechpartner',
    ansprechpartner: 'ansprechpartner',
    telefon: 'telefon',
    email: 'email',
    strasse: 'strasse',
    plzort: 'plzOrt',
    ort: 'plzOrt',
    inhaber: 'inhaber',
    ustid: 'ustId',
    domain: 'domain',
    website: 'domain',
  };
  var prefilled = false;
  params.forEach(function (value, key) {
    var field = prefillMap[key.toLowerCase()];
    if (field && form.elements[field] && !form.elements[field].value && value.trim()) {
      form.elements[field].value = value.trim();
      prefilled = true;
    }
  });
  if (prefilled) {
    var note = document.getElementById('prefillNote');
    if (note) note.style.display = 'block';
  }
  var steps = Array.prototype.slice.call(form.querySelectorAll('.form-step'));
  var progressBar = document.getElementById('progressBar');
  var stepCount = document.getElementById('stepCount');
  var backBtn = document.getElementById('backBtn');
  var answers = { formularTyp: 'onboarding' };
  var current = 1;
  var TOTAL = 6;

  function show(step) {
    current = step;
    steps.forEach(function (s) {
      s.classList.toggle('active', Number(s.dataset.step) === step);
    });
    if (step <= TOTAL) {
      progressBar.style.width = (step / TOTAL) * 100 + '%';
      stepCount.textContent = 'Schritt ' + step + ' von ' + TOTAL;
      backBtn.classList.toggle('show', step > 1);
    } else {
      progressBar.style.width = '100%';
      stepCount.textContent = 'Fertig ✓';
      backBtn.classList.remove('show');
    }
    var card = document.getElementById('onboarding');
    if (card && step > 1) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function err(step, on) {
    var el = document.getElementById('err' + step);
    if (el) el.classList.toggle('show', !!on);
  }

  /* Auswahl-Buttons (Logo, Stil, Domain): auswählen ohne automatisch weiterzugehen */
  form.querySelectorAll('.choices[data-group]').forEach(function (group) {
    var key = group.dataset.group;
    group.querySelectorAll('.choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        group.querySelectorAll('.choice').forEach(function (b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
        answers[key] = btn.dataset.answer;
      });
    });
  });

  var emailOk = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); };

  var validators = {
    1: function () {
      answers.firma = form.elements.firma.value.trim();
      answers.ansprechpartner = form.elements.ansprechpartner.value.trim();
      answers.telefon = form.elements.telefon.value.trim();
      answers.email = form.elements.email.value.trim();
      return answers.firma && answers.ansprechpartner && answers.telefon && emailOk(answers.email);
    },
    2: function () {
      answers.strasse = form.elements.strasse.value.trim();
      answers.plzOrt = form.elements.plzOrt.value.trim();
      answers.oeffnungszeiten = form.elements.oeffnungszeiten.value.trim();
      return answers.strasse && answers.plzOrt;
    },
    3: function () {
      answers.leistungen = form.elements.leistungen.value.trim();
      answers.ueberUns = form.elements.ueberUns.value.trim();
      answers.besonderes = form.elements.besonderes.value.trim();
      return !!answers.leistungen;
    },
    4: function () {
      answers.farben = form.elements.farben.value.trim();
      answers.links = form.elements.links.value.trim();
      return !!(answers.logoStatus && answers.stil);
    },
    5: function () {
      answers.inhaber = form.elements.inhaber.value.trim();
      answers.ustId = form.elements.ustId.value.trim();
      answers.domain = form.elements.domain.value.trim();
      return !!(answers.inhaber && answers.domainStatus);
    },
  };

  form.querySelectorAll('[data-next]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var step = Number(btn.dataset.next) - 1;
      if (validators[step] && !validators[step]()) { err(step, true); return; }
      err(step, false);
      show(step + 1);
    });
  });

  backBtn.addEventListener('click', function () {
    if (current > 1) show(current - 1);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var consent = form.elements.datenschutz.checked;
    var honeypot = form.elements.firmenfax.value;
    if (!consent) { err(6, true); return; }
    err(6, false);
    answers.wuensche = form.elements.wuensche.value.trim();
    if (honeypot) { show(7); return; }
    var WEBHOOK = window.KMU_ONBOARDING_WEBHOOK_URL || '';
    if (WEBHOOK) {
      var body = new URLSearchParams();
      Object.keys(answers).forEach(function (k) { body.append(k, answers[k]); });
      fetch(WEBHOOK, { method: 'POST', body: body }).catch(function () {});
    } else {
      console.log('Onboarding (Demo-Modus, kein Webhook konfiguriert):', answers);
    }
    show(7);
  });
})();
