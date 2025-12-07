
/* Reveal */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
reveals.forEach(r => observer.observe(r));

/* Counter */
let started = false;
const counterEl = document.getElementById('countKids');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      started = true;
      animateCounter();
    }
  });
}, { threshold: 0.5 });
counterObs.observe(counterEl);

let count = 0, target = 240;
function animateCounter() {
  if (count < target) {
    count++;
    counterEl.innerText = count;
    requestAnimationFrame(animateCounter);
  }
}

/*Perguntas frequentes*/
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

/*Testemunhos Carroussel*/
const groups = document.querySelectorAll('.testimonial-group');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let current = 0;

function showGroup(index) {
  groups.forEach((group, i) => {
    group.classList.remove('active');
    if (i === index) group.classList.add('active');
  });
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % groups.length; // ciclo infinito
  showGroup(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + groups.length) % groups.length;
  showGroup(current);
});

// Inicializa
showGroup(current);