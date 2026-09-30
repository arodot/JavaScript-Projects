document.addEventListener("DOMContentLoaded", () => {
    const votingForm = document.getElementById("votingForm");

    if (votingForm) {
        votingForm.addEventListener("submit", checkEligibility);
    }
});



function checkEligibility(event) {
    // Prevent page refresh on form submission
    event.preventDefault();

    const ageInput = document.getElementById("userAge");
    const resultBox = document.getElementById("resultBox");
    const resultIcon = document.getElementById("resultIcon");
    const resultTitle = document.getElementById("resultTitle");
    const resultMessage = document.getElementById("resultMessage");
    const codeDisplay = document.getElementById("codeDisplay");

    const rawValue = ageInput.value.trim();
    const age = Number(rawValue);

    // Validation: Handle empty or invalid numbers
    if (rawValue === "" || isNaN(age) || age < 0) {
        resultBox.className = "p-4 rounded-xl border bg-amber-500/10 border-amber-500/30 text-amber-300 flex items-start gap-3";
        resultIcon.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-amber-400"></i>`;
        resultTitle.textContent = "Invalid Input";
        resultMessage.textContent = "Please enter a valid non-negative age.";
        resultBox.classList.remove("hidden");
        
        codeDisplay.textContent = `// Input Validation Failed\nisNaN(age) || age < 0;`;
        return;
    }

    // CORE LOGIC: Using the Ternary Operator
    const message = age >= 18 ? "You can vote!" : "You are not old enough to vote";

    // Update UI based on eligibility
    if (age >= 18) {
        resultBox.className = "p-4 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-emerald-300 flex items-start gap-3";
        resultIcon.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i>`;
        resultTitle.textContent = "Eligible to Vote";
        resultMessage.textContent = message;
    } else {
        resultBox.className = "p-4 rounded-xl border bg-rose-500/10 border-rose-500/30 text-rose-300 flex items-start gap-3";
        resultIcon.innerHTML = `<i class="fa-solid fa-circle-xmark text-rose-400"></i>`;
        resultTitle.textContent = "Not Eligible";
        resultMessage.textContent = message;
    }

    // Show updated code execution snippet
    codeDisplay.textContent = `const age = ${age};\nconst message = age >= 18 \n  ? "You can vote!" \n  : "You are not old enough to vote";\n\n// Evaluated Result:\n// "${message}"`;

    // Display the result card
    resultBox.classList.remove("hidden");
}

function vehicle(Make, Model, Year, Color) {
    this.vehincle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicel_Year = Year;
    this.vehicle_Color = Color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.vehicle_Color + "-colored" + Erik.vehicle_Model +
    "manufactured in" + Erik.vehicle_Year;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count(){
        var Starting_point = 10;
        function Plus_five() {Starting_point += 5;}
        Plus_one();
        return Starting_point;
    }
}