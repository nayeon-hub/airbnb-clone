const sideMenu = document.querySelector(".side-menu");
const globalBtn = sideMenu.querySelector(".global");
const gModalCont = document.querySelector(".global-modal-cont");
const gModalBtn = gModalCont.querySelector("button");

const userBtn = sideMenu.querySelector(".user-user");
const userDropCont = document.querySelector(".user-dropMenu-cont");

globalBtn.addEventListener("click", () => {
  gModalCont.classList.remove("hiding");
});

gModalBtn.addEventListener("click", () => {
  gModalCont.classList.add("hiding");
});

userBtn.addEventListener("click", () => {
  if (userDropCont.classList[1] === "hiding") {
    userDropCont.classList.remove("hiding");
  } else {
    userDropCont.classList.add("hiding");
  }
});

userBtn.addEventListener("focusout", () => {
  userDropCont.classList.add("hiding");
});
