document.addEventListener("DOMContentLoaded", () => {
    const containerSidbar = document.getElementById("containerSidbar");
    const toggleMenu = document.getElementById("toggleMenu");
    const toggleClose = document.getElementById("toggleClose");

    toggleMenu.addEventListener("click", () => {
        containerSidbar.classList.toggle("translate-x-0");
    })

    toggleClose.addEventListener("click", () => {
        containerSidbar.classList.toggle("translate-x-0");
    })
})