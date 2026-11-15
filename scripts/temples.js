// --*FOOTER (YEAR)*--//
document.getElementById("currentyear").textContent = new Date().getFullYear();
// *--LAST MODIFIED --* //
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
// *--Hambuger Menu--* //
const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
    
}); 