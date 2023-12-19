window.addEventListener('scroll', function() {
    var facts = document.querySelectorAll('.fakts');
    facts.forEach(function(fact) {
        var rect = fact.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.88) {
            fact.style.opacity = '1';
        }
    });
  });
  