document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu");
    const sideMenu = document.getElementById("side-menu");
    const closeMenu = document.getElementById("close-menu");
    const logo = document.getElementById("logo");
    const body = document.body;

    menuToggle.addEventListener("click", () => {
        sideMenu.style.left = "0vh"; // Open side menu
        body.classList.add("menu-open");
        logo.classList.add("hidden");
        menuToggle.classList.add("hidden"); // Hide menu icon
    });

    closeMenu.addEventListener("click", () => {
        sideMenu.style.left = "-24vh"; // Close side menu
        body.classList.remove("menu-open");
        logo.classList.remove("hidden");
        menuToggle.classList.remove("hidden"); // Show menu icon again
    });
});