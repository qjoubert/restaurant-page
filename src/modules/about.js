export default (function() {

  const content = document.createElement("div");
  const mainHeading = getMainHeading();
  const introPara = getIntroPara();

  content.classList.add("content");
  content.appendChild(mainHeading);
  content.appendChild(introPara);

  function getMainHeading() {
    const h1 = document.createElement("h1");
    h1.textContent = "Motcha Moment";
    return h1;
  }

  function getIntroPara() {
    const p = document.createElement("p");
    p.textContent = "Restorative drinks in a peaceful environment";
    return p;
  }

  return content;
})();