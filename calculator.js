document.getElementById("standardBtn").onclick = function () {
    this.classList.add("active");
    document.getElementById("metricBtn").classList.remove("active");
    document.getElementById("standardInputs").style.display = "block";
    document.getElementById("metricInputs").style.display = "none";
};

document.getElementById("metricBtn").onclick = function () {
    this.classList.add("active");
    document.getElementById("standardBtn").classList.remove("active");
    document.getElementById("standardInputs").style.display = "none";
    document.getElementById("metricInputs").style.display = "block";
};

function calculateBMI() {
    let feet = parseInt(document.getElementById("feet").value);
    let inches = parseInt(document.getElementById("inches").value);
    let pounds = parseFloat(document.getElementById("pounds").value);

    if (!feet || !pounds) {
        document.getElementById("bmiResult").innerText = "Please enter valid height and weight.";
        return;
    }

    let totalInches = (feet * 12) + (inches || 0);
    let bmi = (pounds / (totalInches * totalInches)) * 703;

    document.getElementById("bmiResult").innerText = "Your BMI: " + bmi.toFixed(2);
}

function calculateMetricBMI() {
    let cm = parseFloat(document.getElementById("cm").value);
    let kg = parseFloat(document.getElementById("kg").value);

    if (!cm || !kg) {
        document.getElementById("bmiResult").innerText = "Please enter valid height and weight.";
        return;
    }

    let meters = cm / 100;
    let bmi = kg / (meters * meters);

    document.getElementById("bmiResult").innerText = "Your BMI: " + bmi.toFixed(2);
}
function calculateCalories() {
    let gender = document.getElementById("gender").value;
    let age = Number(document.getElementById("age").value);
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    let activity = Number(document.getElementById("activity").value);

    if (!gender || !age || !height || !weight) {
        document.getElementById("calorieResult").innerText =
            "⚠️ Please fill all fields correctly!";
        return;
    }

    let bmr;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories = bmr * activity;

    document.getElementById("calorieResult").innerHTML =
        `🔥 Daily Calories Needed: <strong>${Math.round(calories)} kcal</strong>`;
}
