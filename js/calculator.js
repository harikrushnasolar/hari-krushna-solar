
const button = document.getElementById("calculateBtn");
const whatsappButton = document.getElementById("calculatorWhatsApp");

if (button) {
    button.addEventListener("click", () => {
        const billInput = document.getElementById("bill");
        const bill = Number(billInput?.value);

        const systemSize = document.getElementById("systemSize");
        const annualSaving = document.getElementById("annualSaving");
        const subsidyResult = document.getElementById("subsidy");

        if (!Number.isFinite(bill) || bill <= 0) {
            alert("Please enter a valid monthly electricity bill.");

            if (whatsappButton) {
                whatsappButton.style.display = "none";
            }

            return;
        }

        if (!systemSize || !annualSaving || !subsidyResult) {
            console.error("Solar calculator result elements are missing.");
            return;
        }

        let kw = 0;
        let estimatedSubsidy = 0;

        // Bills above ₹10,000 need a customized assessment.
        if (bill > 10000) {
            systemSize.textContent = "Customized Solar System";

            annualSaving.textContent =
                "Savings depend on electricity usage, tariff and system capacity.";

            subsidyResult.textContent =
                "Commercial/industrial projects require a separate assessment. Residential subsidy eligibility does not automatically apply.";

            if (whatsappButton) {
                const message =
                    `Hello Hari Krushna Solar & Rooftop!\n` +
                    `My monthly electricity bill is ₹${bill.toLocaleString("en-IN")}.\n` +
                    `I need a customized solar quotation.\n` +
                    `Please contact me for a site survey.`;

                whatsappButton.href =
                    `https://wa.me/917859910495?text=${encodeURIComponent(message)}`;

                whatsappButton.style.display = "inline-flex";
            }

            return;
        }

        // Preliminary system-size estimate based on monthly bill.
        if (bill <= 1000) kw = 1;
        else if (bill <= 2000) kw = 2;
        else if (bill <= 3000) kw = 3;
        else if (bill <= 4000) kw = 4;
        else if (bill <= 5000) kw = 5;
        else if (bill <= 6000) kw = 6;
        else if (bill <= 7000) kw = 7;
        else if (bill <= 8000) kw = 8;
        else if (bill <= 9000) kw = 9;
        else kw = 10;

        // Illustrative savings only; actual savings depend on usage and tariff.
        const estimatedAnnualSaving = bill * 12 * 0.7;

        // Potential central residential subsidy estimate, subject to eligibility.
        if (kw === 1) estimatedSubsidy = 30000;
        else if (kw === 2) estimatedSubsidy = 60000;
        else estimatedSubsidy = 78000;

        systemSize.textContent =
            `Approx. ${kw} kW (preliminary estimate)`;

        annualSaving.textContent =
            `Illustrative Annual Saving: ₹${Math.round(estimatedAnnualSaving).toLocaleString("en-IN")} (actual savings may vary)`;

        subsidyResult.textContent =
            `Potential Residential Subsidy: Up to ₹${estimatedSubsidy.toLocaleString("en-IN")}. Subject to eligibility and approval.`;

        // Show WhatsApp quotation button after calculation.
        if (whatsappButton) {
            const message =
                `Hello Hari Krushna Solar & Rooftop!\n` +
                `My monthly electricity bill is ₹${bill.toLocaleString("en-IN")}.\n` +
                `Estimated solar system: ${kw} kW.\n` +
                `Please provide a solar quotation.`;

            whatsappButton.href =
                `https://wa.me/917859910495?text=${encodeURIComponent(message)}`;

            whatsappButton.style.display = "inline-flex";
        }
    });
}
