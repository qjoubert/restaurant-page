export default function onWindowLoad() {
  window.addEventListener("load", showContent);

  function showContent() {
    const contentDiv = document.querySelector("#content");
    contentDiv.appendChild(getMainHeading());
    contentDiv.appendChild(getMainImg());
    contentDiv.appendChild(getIntroPara());
  }

  function getMainHeading() {
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Soul Kitchen";
    return heading;
  }

  function getMainImg() {
    const img = document.createElement("img");
    img.setAttribute("src", "../src/media/restaurant.jpg");
    img.setAttribute("alt", "the main room of the restaurant by night");
    return img;
  }

  function getIntroPara() {
    const p = document.createElement("p");
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    p.textContent = text;
    return p;
  }
}