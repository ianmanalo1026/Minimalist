let hamburger = document.querySelector(".hamburger");
let modalBg = document.querySelector(".nav-modal-bg");

// Hamburger NavBar Section
hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

hamburger.addEventListener("click", function () {
  modalBg.classList.toggle("modal-bg-active");
});
