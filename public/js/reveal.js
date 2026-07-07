(function () {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window && !reduced) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.rv').forEach(function (el) { el.classList.add('in'); });
    }
  })();
