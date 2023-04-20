document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("calculate-btn")
        .addEventListener("click", calculateBMI);
});

function calculateBMI() {
    const weightUnit = document.getElementById("weight-unit").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const heightUnit = document.getElementById("height-unit").value;
    const height = parseFloat(document.getElementById("height").value);
    const resultElement = document.getElementById("bmi-result");

    let weightInKg = weight;
    let heightInM = height;

    if (weightUnit === "lbs") {
        weightInKg = weight * 0.453592;
    }

    if (heightUnit === "in") {
        heightInM = height * 0.0254;
    }

    if (weightInKg > 0 && heightInM > 0) {
        const bmi = (weightInKg / (heightInM * heightInM)).toFixed(1);
        const bmiStatus = analyzeBMI(bmi);
        resultElement.textContent = "Your BMI is " + bmi + ". " + bmiStatus;
    } else {
        resultElement.textContent =
            "Please enter valid values for weight and height.";
    }
}

function analyzeBMI(bmi) {
    if (bmi < 18.5) {
        return "You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "You are within the normal weight range.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "You are overweight.";
    } else {
        return "You are obese.";
    }
}
