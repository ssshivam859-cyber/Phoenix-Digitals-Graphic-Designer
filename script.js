/* =====================================================
   PHOENIX DIGITALS
   DEMO PORTFOLIO JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Change menu icon
    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* ================= PORTFOLIO FILTER ================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        portfolioItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {

                item.style.display = "block";

                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";
                }, 50);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(0.9)";

                setTimeout(() => {
                    item.style.display = "none";
                }, 250);

            }

        });

    });

});


/* ================= SCROLL NAVBAR ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5, 5, 5, 0.95)";

    } else {

        navbar.style.background = "rgba(7, 7, 7, 0.78)";

    }

});


/* ================= SMOOTH PORTFOLIO EFFECT ================= */

portfolioItems.forEach(item => {

    item.style.transition =
        "opacity 0.25s ease, transform 0.25s ease";

});


/* ================= CURRENT YEAR ================= */

const year = new Date().getFullYear();

const footerText = document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.textContent =
        `© ${year} Phoenix Digitals. All Rights Reserved.`;

}


/* ================= DEMO CONSOLE ================= */

console.log(
    "🔥 Phoenix Digitals Portfolio Demo Loaded Successfully!"
);