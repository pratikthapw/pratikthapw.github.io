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

const languages = [
  "HTML CSS JavaScript SCSS",
  "HTML CSS JavaScript SCSS",
  "HTML CSS JavaScript SCSS",
];

const names = ["News HomePage", "News HomePage", "News HomePage"];

const onelines = [
  "Responsive Landing Page",
  "Responsive Landing Page",
  "Responsive Landing Page",
];

for (let i = 0; i < images.length; i++) {
  // Creating Component for each project
  const comp = document.createElement("div");
  comp.classList.add("project__comp");

  // Adding Project Image to component
  const img = document.createElement("img");
  img.classList.add("project__img");
  img.src = images[i];
  comp.appendChild(img);

  // Adding Project Languages
  const lang = document.createElement("p");
  lang.classList.add("project__lang");
  const langText = document.createTextNode(languages[i]);
  lang.appendChild(langText);
  comp.appendChild(lang);

  // Creating project description container
  const description = document.createElement("div");
  description.classList.add("project__description");
  comp.appendChild(description);

  // Adding Project Name
  const name = document.createElement("h4");
  name.classList.add("project__name", "cl-white");
  const nameText = document.createTextNode(names[i]);
  name.appendChild(nameText);
  description.appendChild(name);

  // Adding Project oneline description
  const oneline = document.createElement("p");
  oneline.classList.add("project__oneline");
  const onelineText = document.createTextNode(onelines[i]);
  oneline.appendChild(onelineText);
  description.appendChild(oneline);

  // Creating Container for Btns
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("project__btns");
  description.appendChild(btnContainer);

  // Adding Demo btn
  const demo = document.createElement("button");
  demo.classList.add("project__btn");
  const demoText = document.createTextNode("Demo");
  demo.appendChild(demoText);
  btnContainer.appendChild(demo);

  // Adding View Code btn
  const code = document.createElement("button");
  code.classList.add("project__btn");
  const codeText = document.createTextNode("Code");
  code.appendChild(codeText);
  btnContainer.appendChild(code);

  container.appendChild(comp);
}

// Using Intersection Observer
const sections = document.querySelectorAll(".section");
const nav = document.querySelector(".nav");

const navItem = document.querySelectorAll(".nav__item");

const options = {
  // root: document.querySelector(".sections"),
  threshold: "0.2",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target.id);
    navItem.forEach((link) => {
      // Active Section
      link.classList.remove("cl-white");

      if (entry.target.id === link.dataset.nav) {
        link.classList.add("cl-white");
        console.log(entry.target.id);
      }
    });
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
