document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("nav ul");

    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    const detailButtons = document.querySelectorAll(".car-card button:first-of-type");
    
    detailButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Detalles del auto próximamente disponibles.");
        });
    });
});


