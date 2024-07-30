document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('.cover-section');

  const options = {
    rootMargin: '0px',
    threshold: 0,
  };

  function addToggleAnimation(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        coversSection.classList.add('animate');
        console.log('Animation added');
      } else {
        coversSection.classList.remove('animate');
        console.log('Animation removed');
      }
    });
  }

  const observer = new IntersectionObserver(addToggleAnimation, options);

  if (coversSection) {
    observer.observe(coversSection);
  }
});
