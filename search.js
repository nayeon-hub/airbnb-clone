const homeForm = document.querySelector(".home-form");

const locationBtn = homeForm.querySelector(".location-btn");
const lcInput = locationBtn.querySelector("input");

const guestsBtn = homeForm.querySelector(".guests-btn");

const searchBtn = homeForm.querySelector(".search-btn");
const searchSpan = searchBtn.querySelector("span");

const hiddenCont = document.querySelector(".home-hidden-cont");
const lcLinkBox = hiddenCont.querySelector(".lc-search-link");

function lcInputStyle() {
  locationBtn.style.background = "#ffff";
  locationBtn.style.boxShadow =
    "rgb(0 0 0 / 15%) 0px 16px 32px, rgb(0 0 0 / 10%) 0px 3px 8px";
  locationBtn.style.pointerEvents = "none";

  lcInput.focus();
  lcLinkBox.classList.remove("hiding");
  lcLinkBox.style.top = `${locationBtn.getBoundingClientRect().bottom + 16}px`;
  lcLinkBox.style.left = `${locationBtn.getBoundingClientRect().left}px`;
}

function searchBtnStyleIn() {
  searchSpan.innerHTML = "";
  searchSpan.innerHTML = "검색";
  searchSpan.style.marginLeft = "5px";
}

function searchBtnStyleOut() {
  searchSpan.innerHTML = "";
  searchSpan.style.marginLeft = "";
}

// 검색 버튼
searchBtn.addEventListener("click", (e) => {
  if (lcInput.value === "") {
    e.preventDefault();
    searchBtnStyleIn();
    lcInputStyle();
  } else {
    // submit
  }
});

// 게스트 인원 버튼
guestsBtn.addEventListener("focus", () => {
  searchBtnStyleIn();
});

// 위치 버튼
lcInput.addEventListener("focus", () => {
  searchBtnStyleIn();
  lcInputStyle();
});

locationBtn.addEventListener("focusout", () => {
  searchBtnStyleOut();
  locationBtn.style.background = "";
  locationBtn.style.boxShadow = "";
  locationBtn.style.pointerEvents = "";

  lcLinkBox.classList.add("hiding");
});
