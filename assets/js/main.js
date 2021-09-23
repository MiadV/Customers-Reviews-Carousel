// SWITCH THEME
const themeSwitchBtn = document.querySelector(".switch-theme-btn");
const themeSwitchBtnIcon = document.querySelector(".switch-theme-btn > i");
const sunIcon = "bx-sun";
const moonIcon = "bx-moon";

if (themeSwitchBtn && themeSwitchBtnIcon) {
  themeSwitchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // change Icon depending on Dark/Light mode
    if (themeSwitchBtnIcon.classList.contains(moonIcon)) {
      themeSwitchBtnIcon.classList.remove(moonIcon);
      themeSwitchBtnIcon.classList.add(sunIcon);
    } else {
      themeSwitchBtnIcon.classList.add(moonIcon);
      themeSwitchBtnIcon.classList.remove(sunIcon);
    }
  });
}

// SWIPER CONFIG
var reviewsSwiper = new Swiper(".customer-reviews", {
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 2000,
  },
});
