const button = document.getElementById("calculateBtn");

button.addEventListener("click",()=>{

    const bill = Number(document.getElementById("bill").value);

    if(!bill){

        alert("Please enter your monthly electricity bill.");

        return;

    }

    const kw = (bill/1500).toFixed(1);

    const saving = bill*12;

    const subsidy = kw>=3 ? 78000 : 30000;

    document.getElementById("systemSize").innerHTML = kw+" kW";

    document.getElementById("annualSaving").innerHTML =
    "Estimated Annual Saving : ₹"+saving.toLocaleString();

    document.getElementById("subsidy").innerHTML =
    "Estimated Subsidy : ₹"+subsidy.toLocaleString();

});