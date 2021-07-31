const sideMenu = document.querySelector(".side-menu");
const globalBtn = sideMenu.querySelector(".global");
const gModalCont = document.querySelector(".global-modal-cont");
const gModalBtn = gModalCont.querySelector("button");

globalBtn.addEventListener("click", () => {
  gModalCont.classList.remove("hiding");
});

gModalBtn.addEventListener("click", () => {
  gModalCont.classList.add("hiding");
});
