
export default (function() {

  const content = document.createElement("div");
  const heading = getHeading();
  const menuList = getMenuList();

  content.classList.add("content");
  content.appendChild(heading);
  content.appendChild(menuList);

  function getHeading() {
    const h2 = document.createElement("h2");
    h2.textContent = "Menu";
    return h2;
  }

  function getMenuList() {
    const ul = document.createElement("ul");
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