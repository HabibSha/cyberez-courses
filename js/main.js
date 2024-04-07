// Scroll Vertically and fixed navbar
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
  document
    .querySelector(".navbar")
    .classList.toggle("scroll_nav_menu", window.scrollY > 0);
});

// Active NavLink
document.addEventListener("DOMContentLoaded", function () {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("active_link");
    }
  });
});

// Toggle Navbar Menu
const navbar_btn = document.querySelector(".mobile_navbar_btn");
const nav_header = document.querySelector("nav");

navbar_btn.addEventListener("click", () => {
  nav_header.classList.toggle("active");
});

// goal slider
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const goals = document.querySelectorAll(".our-goals_body");
  const sliderElements = document.querySelector(".slider_element");
  const sliderDots = document.querySelector(".slider_dots");

  function createSliderDots() {
    for (let i = 0; i < goals.length; i++) {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => moveToGoal(i));
      sliderDots.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function moveToGoal(index) {
    currentIndex = index;
    const offset = -(20.4 * currentIndex); // Assuming each testimonial is 100% of the width
    sliderElements.style.transform = `translateX(${offset}%)`;
    updateDots();
    resetInterval();
  }

  function nextGoal() {
    currentIndex = (currentIndex + 1) % goals.length;
    moveToGoal(currentIndex);
  }

  let autoMove = setInterval(nextGoal, 3000);

  function resetInterval() {
    clearInterval(autoMove);
    autoMove = setInterval(nextGoal, 3000);
  }

  createSliderDots();
  moveToGoal(0);
});
