const elBtn = document.querySelector(".header-btn");
elBtn.addEventListener("click", () => {
  elBtn.closest(".site-header").classList.toggle("open");
  document.body.style.overflow = "hidden";
})