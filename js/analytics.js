(function () {
    "use strict";

    // ==========================================
    // GA4 Analytics Helper
    // Hari Krushna Solar & Rooftop
    // Production Version
    // ==========================================

    if (typeof gtag !== "function") {
        console.warn("GA4 not loaded.");
        return;
    }

    const firedEvents = new Set();

    function trackEvent(eventName, parameters = {}) {

        if (!eventName) return;

        const uniqueKey =
            eventName +
            "_" +
            JSON.stringify(parameters);

        if (firedEvents.has(uniqueKey)) {
            return;
        }

        firedEvents.add(uniqueKey);

        gtag("event", eventName, {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
            ...parameters
        });

        console.log("GA4 Event :", eventName, parameters);
    }

    function addClickTracking(selector, eventName) {

        document.querySelectorAll(selector).forEach(function (element) {

            element.addEventListener("click", function () {

                trackEvent(eventName);

            });

        });

    }

    document.addEventListener("DOMContentLoaded", function () {

        // ==========================================
        // Current Page Name
        // ==========================================

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase() || "index.html";

        trackEvent("page_loaded", {
            page: currentPage
        });

        // ==========================================
        // WhatsApp Tracking
        // ==========================================

        document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    let eventName = "whatsapp_click";

                    if (button.closest("header")) {

                        eventName = "whatsapp_header_click";

                    } else if (button.closest(".hero")) {

                        eventName = "whatsapp_hero_click";

                    } else if (button.closest(".contact")) {

                        eventName = "whatsapp_contact_click";

                    } else if (button.classList.contains("floating-whatsapp")) {

                        eventName = "whatsapp_floating_click";

                    }

                    trackEvent(eventName, {
                        page: currentPage
                    });

                });

            });

        // ==========================================
        // Phone Tracking
        // ==========================================

        document.querySelectorAll('a[href^="tel:"]')
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    let eventName = "call_click";

                    if (button.closest("header")) {

                        eventName = "call_header_click";

                    } else if (button.closest(".contact")) {

                        eventName = "call_contact_click";

                    }

                    trackEvent(eventName, {
                        page: currentPage
                    });

                });

            });

        // ==========================================
        // Email Tracking
        // ==========================================

        document.querySelectorAll('a[href^="mailto:"]')
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    trackEvent("email_click", {
                        page: currentPage
                    });

                });

            });
        // ==========================================
        // Contact Form Tracking
        // contact.html
        // ==========================================

        const contactForm =
            document.getElementById("contactForm");

        if (contactForm) {

            contactForm.addEventListener("submit", function () {

                trackEvent("contact_form_submit", {
                    page: currentPage
                });

            });

        }

        // ==========================================
        // Get Quote Buttons
        // Whole Website
        // ==========================================

        document.querySelectorAll("a,button")
            .forEach(function (button) {

                const text =
                    (button.textContent || "")
                    .trim()
                    .toLowerCase();

                if (
                    text.includes("get quote") ||
                    text.includes("free quote") ||
                    text.includes("request quote") ||
                    text.includes("book now") ||
                    text.includes("free site visit") ||
                    text.includes("apply now")
                ) {

                    button.addEventListener("click", function () {

                        trackEvent("get_quote_click", {
                            page: currentPage,
                            text: button.textContent.trim()
                        });

                    });

                }

            });

        // ==========================================
        // Solar Calculator
        // calculator.js
        // ==========================================

        const calculateBtn =
            document.querySelector("#calculateBtn");

        if (calculateBtn) {

            calculateBtn.addEventListener("click", function () {

                trackEvent("calculator_calculate_click", {
                    page: currentPage
                });

            });

        }

        // ==========================================
        // Services Page CTA
        // ==========================================

        document.querySelectorAll(".service-card a,.service-card button")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    trackEvent("service_cta_click", {
                        page: currentPage,
                        service: button.textContent.trim()
                    });

                });

            });

        // ==========================================
        // Projects Page Buttons
        // ==========================================

        document.querySelectorAll(".project-card a,.project-card button")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    trackEvent("project_view_click", {
                        page: currentPage
                    });

                });

            });

                    // ==========================================
        // Brand Logo Tracking
        // ==========================================

        document.querySelectorAll(".brand-card,a[href*='adani'],a[href*='waaree'],a[href*='tata'],a[href*='deye'],a[href*='solaryaan']")
            .forEach(function (brand) {

                brand.addEventListener("click", function () {

                    const url = (brand.href || "").toLowerCase();

                    let eventName = "brand_click";

                    if (url.includes("adani")) {

                        eventName = "brand_adani_click";

                    } else if (url.includes("waaree")) {

                        eventName = "brand_waaree_click";

                    } else if (url.includes("tata")) {

                        eventName = "brand_tata_click";

                    } else if (url.includes("deye")) {

                        eventName = "brand_deye_click";

                    } else if (url.includes("solaryaan")) {

                        eventName = "brand_solaryaan_click";

                    }

                    trackEvent(eventName, {
                        page: currentPage
                    });

                });

            });

        // ==========================================
        // Google Map Tracking
        // ==========================================

        document.querySelectorAll("iframe, a[href*='maps.google'], a[href*='goo.gl/maps']")
            .forEach(function (map) {

                map.addEventListener("click", function () {

                    trackEvent("google_map_click", {
                        page: currentPage
                    });

                });

            });

        // ==========================================
        // FAQ Tracking
        // ==========================================

        document.querySelectorAll("details")
            .forEach(function (faq) {

                faq.addEventListener("toggle", function () {

                    if (faq.open) {

                        trackEvent("faq_open", {
                            page: currentPage
                        });

                    }

                });

            });

        // ==========================================
        // Back To Top Button
        // ==========================================

        addClickTracking(
            "#backToTop",
            "back_to_top_click"
        );

        // ==========================================
        // Navigation Menu
        // ==========================================

        document.querySelectorAll("header nav a")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    trackEvent("navigation_click", {
                        page: currentPage,
                        menu: link.textContent.trim()
                    });

                });

            });

        // ==========================================
        // Footer Links
        // ==========================================

        document.querySelectorAll("footer a")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    trackEvent("footer_click", {
                        page: currentPage,
                        text: link.textContent.trim()
                    });

                });

            });

                    // ==========================================
        // Scroll Tracking
        // ==========================================

        const scrollMilestones = [25, 50, 75, 90];
        const firedScrollEvents = {};

        window.addEventListener("scroll", function () {

            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop;

            const documentHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            if (documentHeight <= 0) return;

            const percentage =
                Math.round((scrollTop / documentHeight) * 100);

            scrollMilestones.forEach(function (point) {

                if (
                    percentage >= point &&
                    !firedScrollEvents[point]
                ) {

                    firedScrollEvents[point] = true;

                    trackEvent(
                        "scroll_" + point + "_percent",
                        {
                            page: currentPage
                        }
                    );

                }

            });

        });

        // ==========================================
        // Time Engagement
        // ==========================================

        [30, 60, 120].forEach(function (seconds) {

            setTimeout(function () {

                trackEvent(
                    "engaged_" + seconds + "_seconds",
                    {
                        page: currentPage
                    }
                );

            }, seconds * 1000);

        });

        // ==========================================
        // Outbound Link Tracking
        // ==========================================

        document.querySelectorAll("a[href]")
            .forEach(function (link) {

                const href = link.getAttribute("href");

                if (
                    href &&
                    href.startsWith("http") &&
                    !href.includes(location.hostname)
                ) {

                    link.addEventListener("click", function () {

                        trackEvent(
                            "outbound_link_click",
                            {
                                page: currentPage,
                                destination: href
                            }
                        );

                    });

                }

            });

        // ==========================================
        // PDF / Brochure Download
        // ==========================================

        document.querySelectorAll("a[href$='.pdf']")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    trackEvent(
                        "pdf_download",
                        {
                            page: currentPage,
                            file: link.getAttribute("href")
                        }
                    );

                });

            });

        // ==========================================
        // Image Gallery Click
        // ==========================================

        document.querySelectorAll(".gallery img")
            .forEach(function (image) {

                image.addEventListener("click", function () {

                    trackEvent(
                        "gallery_image_click",
                        {
                            page: currentPage,
                            image: image.getAttribute("src")
                        }
                    );

                });

            });

        // ==========================================
        // Phone Number Copy
        // ==========================================

        document.querySelectorAll("[data-copy-phone]")
            .forEach(function (element) {

                element.addEventListener("click", function () {

                    trackEvent(
                        "phone_copy_click",
                        {
                            page: currentPage
                        }
                    );

                });

            });

                    // ==========================================
        // Button Click Tracking
        // ==========================================

        document.querySelectorAll("button")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    trackEvent("button_click", {
                        page: currentPage,
                        text: button.innerText.trim()
                    });

                });

            });

        // ==========================================
        // All Internal Link Tracking
        // ==========================================

        document.querySelectorAll("a[href]")
            .forEach(function (link) {

                const href = link.getAttribute("href");

                if (
                    href &&
                    !href.startsWith("http") &&
                    !href.startsWith("mailto:") &&
                    !href.startsWith("tel:") &&
                    !href.includes("wa.me")
                ) {

                    link.addEventListener("click", function () {

                        trackEvent("internal_link_click", {
                            page: currentPage,
                            link: href
                        });

                    });

                }

            });

        // ==========================================
        // Hero Buttons
        // ==========================================

        document.querySelectorAll(".hero a,.hero button")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    trackEvent("hero_cta_click", {
                        page: currentPage
                    });

                });

            });

        // ==========================================
        // Contact Information Click
        // ==========================================

        document.querySelectorAll(".contact-info a")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    trackEvent("contact_info_click", {
                        page: currentPage
                    });

                });

            });

        // ==========================================
        // Window Loaded
        // ==========================================

        window.addEventListener("load", function () {

            trackEvent("page_fully_loaded", {
                page: currentPage
            });

        });

                // ==========================================
        // Error Tracking
        // ==========================================

        window.addEventListener("error", function (event) {

            trackEvent("javascript_error", {
                message: event.message,
                file: event.filename,
                line: event.lineno,
                page: currentPage
            });

        });

        // ==========================================
        // Unhandled Promise Errors
        // ==========================================

        window.addEventListener("unhandledrejection", function (event) {

            trackEvent("promise_error", {
                reason: String(event.reason),
                page: currentPage
            });

        });

        // ==========================================
        // Session Started
        // ==========================================

        if (!sessionStorage.getItem("hk_session_started")) {

            sessionStorage.setItem("hk_session_started", "true");

            trackEvent("session_started", {
                page: currentPage
            });

        }

        // ==========================================
        // Session End
        // ==========================================

        window.addEventListener("beforeunload", function () {

            trackEvent("session_end", {
                page: currentPage
            });

        });

        // ==========================================
        // Console
        // ==========================================

        console.log(
            "%cHari Krushna Solar Analytics Loaded",
            "color:#16a34a;font-size:14px;font-weight:bold;"
        );

    });

})();