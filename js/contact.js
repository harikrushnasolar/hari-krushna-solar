// ===============================
// EMAILJS INIT
// ===============================

emailjs.init({
    publicKey: "pn-LVDvRW6geg-tAg",
});

// Contact Form
const contactForm = document.getElementById("contactForm");

// Page પર contact form હોય તો જ code ચલાવો
if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = contactForm.querySelector("button");

        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        submitBtn.disabled = true;

        emailjs.sendForm(
            "service_vi9futv",
            "template_gjmp0ms",
            contactForm
        )

        .then(() => {

            contactForm.reset();

            window.location.href = "thankyou.html";

        })

        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send inquiry. Please try again.");

        })

        .finally(() => {

            submitBtn.innerHTML = originalText;

            submitBtn.disabled = false;

        });

    });

}