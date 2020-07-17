
export default (function() {

  const content = document.createElement("div");
  const heading = getHeading();
  const menuList = getMenuList();

  content.classList.add("content");
  content.setAttribute("data-page", "menu");
  content.appendChild(heading);
  content.appendChild(menuList);

  function getHeading() {
    const h2 = document.createElement("h2");
    h2.textContent = "Our matcha drinks";
    return h2;
  }

  function getMenuList() {
    const ul = document.createElement("ul");
    ul.classList.add("drinks");

    const drinks = [
      "matcha tea",
      "matcha iced tea",
      "matcha chai latte",
      "hot matchocolate",
      "matcha green tea latte",
      "iced matcha tea latte",
      "matcha smoothie"
    ];

    for (let drink of drinks) {
      const li = document.createElement("li");
      li.textContent = drink;
      ul.appendChild(li);
    }

    return ul;
  }

  return content;
})();