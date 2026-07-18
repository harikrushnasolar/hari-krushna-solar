const button = document.getElementById("calculateBtn");

// Calculator હોય ત્યારે જ code ચલાવો
if (button) {

    button.addEventListener("click", () => {

        const bill = Number(document.getElementById("bill").value);

        if (!bill || bill <= 0) {
            alert("Please enter your monthly electricity bill.");
            return;
        }

        let kw = 0;
        let subsidy = 0;

        // Residential (Up to ₹10,000 Bill)
        if (bill <= 1000) kw = 1;
        else if (bill <= 2000) kw = 2;
        else if (bill <= 3000) kw = 3;
        else if (bill <= 4000) kw = 4;
        else if (bill <= 5000) kw = 5;
        else if (bill <= 6000) kw = 6;
        else if (bill <= 7000) kw = 7;
        else if (bill <= 8000) kw = 8;
        else if (bill <= 9000) kw = 9;
        else if (bill <= 10000) kw = 10;

        const saving = bill * 12;

        if (kw >= 3) {
            subsidy = 78000;
        } else {
            subsidy = 30000;
        }

        // Commercial / Industrial
        if (bill > 10000) {

            document.getElementById("systemSize").innerHTML =
                "Commercial / Industrial Solution";

            document.getElementById("annualSaving").innerHTML =
                "For electricity bills above ₹10,000/month, we recommend a customized commercial solar system.";

            document.getElementById("subsidy").innerHTML =
                "📞 Contact Hari Krushna Solar & Rooftop for a Free Site Survey & Quotation.";

        } else {

            document.getElementById("systemSize").innerHTML = kw + " kW";

            document.getElementById("annualSaving").innerHTML =
                "Estimated Annual Saving : ₹" + saving.toLocaleString();

            document.getElementById("subsidy").innerHTML =
                "Estimated Subsidy : ₹" + subsidy.toLocaleString();

        }

    });

}