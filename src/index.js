import "./css/style.css";

const main = document.querySelector("main");
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", (e) =>  {
    removeAllChildren(main);
    const para = document.createElement("p");
    para.textContent = e.target.dataset.page;
    main.appendChild(para);
  })
});

function removeAllChildren(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
