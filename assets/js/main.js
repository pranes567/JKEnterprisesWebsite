// main.js - simple behaviors
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('mobile-nav-button');
  const nav = document.getElementById('mobile-nav');
  if(btn && nav){ btn.addEventListener('click', ()=> nav.classList.toggle('hidden')); }
});
document.addEventListener('scroll', () => {
  const bg = document.querySelector('.bg-fixed');
  const offset = window.pageYOffset * 0.4;
  bg.style.transform = `translateY(${offset}px)`;
});
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
