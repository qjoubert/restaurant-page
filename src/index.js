import "./css/style.css";
import about from "./modules/about";

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
    page === "about" ? about : document.createElement("p");

  main.appendChild(content);
}
