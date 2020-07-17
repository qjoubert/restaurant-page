import "./css/style.css";
import about from "./modules/about";
import menu from "./modules/menu";
import contact from "./modules/contact";

(function() {
  const main = document.querySelector("main");
  const links = document.querySelectorAll("nav a");
  
  links.forEach(link => {
    link.addEventListener("click", (e) =>  {
      const requestedPage = e.target.dataset.page;
      const currentPage = document.querySelector("div.content").dataset.page;
      if (requestedPage === currentPage) return;

      hideMainContent();
      setTimeout(() => removeAllChildren(main), 300);
      setTimeout(() => showMainContent(requestedPage), 301);
    });
  });
  
  function hideMainContent() {
    main.style.opacity = "0";
  }
  
  function removeAllChildren(element) {
    while(element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  
  function showMainContent(page) {
    const content = 
      page === "about" ? about : 
      page === "menu" ? menu : 
      page === "contact" ? contact :
      null;
  
    if (content) {
      main.appendChild(content);
      main.style.opacity = "1";
    }
  }
})();
