  const slides = document.querySelectorAll('.hero-image-card .slide');
  const dots = document.querySelectorAll('.hero-image-card .dot');
  const prevBtn = document.querySelector('.hero-image-card .prev');
  const nextBtn = document.querySelector('.hero-image-card .next');

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
  }

  prevBtn.addEventListener('click', () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });
    setInterval(() => {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  }, 4000);
