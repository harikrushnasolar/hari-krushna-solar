console.log("Script Loaded");
console.log("Hari Krushna Solar Website Loaded Successfully");
// Back To Top

const backToTop = document.getElementById("backToTop");

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
/* Sticky Header */

const header = document.querySelector(".header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});
/* Mobile Menu */

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});
/* ==========================
   COUNTER
========================== */

const counters = document.querySelectorAll(".counter");

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