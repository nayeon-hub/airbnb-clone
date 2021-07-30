const homeForm = document.querySelector(".home-form");
const locationBtn = homeForm.querySelector(".location-btn");
const lcInput = locationBtn.querySelector("input");
const hiddenCont = document.querySelector(".home-hidden-cont");
const lcLinkBox = hiddenCont.querySelector(".lc-search-link");

lcInput.addEventListener("focus", () => {
  locationBtn.style.background = "#ffff";
  locationBtn.style.boxShadow =
    "rgb(0 0 0 / 15%) 0px 16px 32px, rgb(0 0 0 / 10%) 0px 3px 8px";
  locationBtn.style.pointerEvents = "none";

  lcLinkBox.focus();
  lcLinkBox.classList.remove("hiding");
  lcLinkBox.style.top = `${locationBtn.getBoundingClientRect().bottom + 16}px`;
  lcLinkBox.style.left = `${locationBtn.getBoundingClientRect().left}px`;
});

locationBtn.addEventListener("focusout", () => {
  locationBtn.style.background = "";
  locationBtn.style.boxShadow = "";
  locationBtn.style.pointerEvents = "";

  lcLinkBox.classList.add("hiding");
});
