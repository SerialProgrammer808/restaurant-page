import {loadHome, loadMenu, loadContact} from "./pageload.js";
import "./styles.css";

//load homepage by default
let page = document.querySelector("#content");
page.appendChild(loadHome());

//load menu, contact, and home on click
document.getElementById("menu-btn").addEventListener("click", () => {
    page.innerHTML = "";
   page.appendChild(loadMenu());
});
document.getElementById("home-btn").addEventListener("click", () => {
    page.innerHTML = "";
    page.appendChild(loadHome());
});
document.getElementById("contact-btn").addEventListener("click", () => {
    page.innerHTML = "";
    page.appendChild(loadContact());
});