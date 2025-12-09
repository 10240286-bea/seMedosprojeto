/* Reveal on scroll */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

reveals.forEach(r => observer.observe(r));

/* Counter – Impacto (0 → 240) */
let started = false;
const counterEl = document.getElementById('countKids');

if (counterEl) {
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        animateCounter();
      }
    });
  }, { threshold: 0.5 });

  counterObs.observe(counterEl);

  let count = 0,
    target = 240;

  function animateCounter() {
    if (count < target) {
      count++;
      counterEl.innerText = count;
      requestAnimationFrame(animateCounter);
    }
  }
}

/* FAQ – abrir/fechar */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  if (!question) return;

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

/* Testemunhos – Carrossel simples */
const groups = document.querySelectorAll('.testimonial-group');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function showGroup(index) {
  groups.forEach((group, i) => {
    group.classList.toggle('active', i === index);
  });
}

if (groups.length > 0) {
  showGroup(current);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % groups.length;
    showGroup(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + groups.length) % groups.length;
    showGroup(current);
  });
}



const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".thumb");

  thumbs.forEach(img => {
    img.addEventListener("mouseenter", () => {
      mainImage.style.opacity = "0";

      setTimeout(() => {
        mainImage.src = img.src;
        mainImage.style.opacity = "1";
      }, 200);
    });
  });
