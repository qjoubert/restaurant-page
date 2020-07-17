import "./css/style.css";
import about from "./modules/about";
import menu from "./modules/menu";
import contact from "./modules/contact";

const main = document.querySelector("main");
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", (e) =>  {
    const requestedPage = e.target.dataset.page;
    removeAllChildren(main);
    showPage(requestedPage);
  })
});

function removeAllChildren(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function showPage(page) {
  const content = 
    page === "about" ? about : 
    page === "menu" ? menu : 
    page === "contact" ? contact :
    null;

  if (content) main.appendChild(content);
}
