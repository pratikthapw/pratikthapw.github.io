// Open & Close HamMenu on Mobile

const hamParent = document.querySelector(".ham__container");

const hamMenu = document.querySelector(".ham-menu");
const hamMenuCross = document.querySelector(".ham__menu-cross");

hamMenu.addEventListener("click", function () {
  hamParent.style.display = "block";
});

hamMenuCross.addEventListener("click", () => {
  hamParent.style.display = "none";
});

// Adding Projects files
const container = document.querySelector(".project__container");
const images = ["images/project-img.png", "images/project-img.png"];

function newProject({ languages, name, oneLine }) {
  let html = `
    <div class="project__comp">
      <img class="project__img" src="images/project-img.png" alt="Project" />
      <p class="project__lang">${languages}</p>
      <div class="project__description">
        <h4 class="project__name cl-white">${name}</h4>
        <p class="project__oneline">${oneLine}</p>
        <div class="project__btns">
          <button class="project__btn">Demo</button>
          <button class="project__btn">Code</button>
        </div>
      </div>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", html);
}

newProject({
  languages: "HTML JavaScript SCSS",
  name: "News HomePage",
  oneLine: "Responsive Landing Page",
});

newProject({
  languages: "HTML Bootstrap JavaScript SCSS",
  name: "News HomePage",
  oneLine: "Responsive Landing Page",
});

// Using Intersection Observer Api for Active Nav Links
const sections = document.querySelectorAll(".section");
const navItem = document.querySelectorAll(".nav__item");
const hamContainer = document.querySelector(".ham__container");
const hamItem = document.querySelectorAll(".ham__item");

const options = {
  threshold: "0.2",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    // Active Links For Large Screens
    navItem.forEach((link) => {
      link.classList.remove("cl-white");

      if (entry.target.id === link.dataset.nav) {
        link.classList.add("cl-white");
      }
    });

    // Active Links For HamMenu Mobile Screens
    hamItem.forEach((link) => {
      link.classList.remove("cl-white");

      if (entry.target.id === link.dataset.ham) {
        link.classList.add("cl-white");
      }
    });
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// Hiding HamMenu When Clicked on HamItems
hamItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamContainer.style.display = "";
  });
});
