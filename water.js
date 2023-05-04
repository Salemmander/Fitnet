let totalWater = 0;
const goal = 2000;

function addWater() {
    const waterInput = document.getElementById("water-input");
    const progressBar = document.getElementById("progress-bar");
    const waterInfo = document.getElementById("water-info");

    let waterAmount = parseInt(waterInput.value);
    if (!isNaN(waterAmount) && waterAmount > 0) {
        totalWater += waterAmount;
        if (totalWater > goal) {
            waterInfo.textContent = "You went over your goal!";
        } else {
            let progress = totalWater;
            progressBar.style.width = progress + "%";
            waterInfo.textContent = totalWater + "/" + goal + "ml";
        }
    }

    waterInput.value = "";
}
