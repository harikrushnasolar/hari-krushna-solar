// ===============================
// BACK TO TOP
// ===============================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ===============================
// STICKY HEADER
// ===============================

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

}

// ===============================
// COUNTER
// ===============================

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let count = 0;

        const updateCounter = () => {

            const increment = Math.max(1, Math.ceil(target / 100));

            if (count < target) {

                count += increment;

                if (count > target) count = target;

                if (counter.classList.contains("percent")) {

                    counter.innerHTML = count + "%";

                } else if (target === 5) {

                    counter.innerHTML = count + " MW+";

                } else {

                    counter.innerHTML = count + "+";

                }

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

    });

}

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".menu-overlay");
const closeBtn = document.querySelector(".close-menu");

function openMenu(){

    mobileMenu.classList.add("active");

    overlay.classList.add("active");

}

function closeMenu(){

    mobileMenu.classList.remove("active");

    overlay.classList.remove("active");

}

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        if (mobileMenu.classList.contains("active")) {

            closeMenu();

        } else {

            openMenu();

        }

    });

}
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", closeMenu);

});