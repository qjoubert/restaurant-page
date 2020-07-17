
export default (function() {

  const content = document.createElement("div");
  const heading = getHeading();
  const hoursPara = getPara("Monday to Saturday, from 8 am to 8 pm")
  const adressPara = getPara("42 Gyatso Street, Wellington");
  const infoPara = getInfoPara();

  content.classList.add("content");
  content.appendChild(heading);
  content.appendChild(hoursPara);
  content.appendChild(adressPara);
  content.appendChild(infoPara);

  function getHeading() {
    const h2 = document.createElement("h2");
    h2.textContent = "How to find us";
    return h2;
  }

  function getPara(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
  }

  function getInfoPara() {
    const a = document.createElement("a");
    a.setAttribute("href", "https://www.theodinproject.com/");
    a.setAttribute("target", "_blank");
    a.textContent = "The Odin Project";
    
    const p = document.createElement("p");
    p.setAttribute("class", "info");
    p.textContent = "This is a fictional business created as an assignment for ";
    p.appendChild(a);
    
    return p;
  }

  return content;
})();
