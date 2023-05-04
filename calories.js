let totalCalories = 0;
const goal = 2500;

function addCalories() {
    const calorieInput = document.getElementById("calorie-input");
    const progressBar = document.getElementById("progress-bar");
    const calorieInfo = document.getElementById("calorie-info");

    let calorieAmount = parseInt(calorieInput.value);
    if (!isNaN(calorieAmount) && calorieAmount > 0) {
        totalCalories += calorieAmount;
        if (totalCalories > goal) {
            waterInfo.textContent = "You went over your goal!";
        } else {
            let progress = totalCalories;
            progressBar.style.width = progress + "%";
            calorieInfo.textContent = totalCalories + " / " + goal + " cals";
        }
    }

    calorieInput.value = "";
}
