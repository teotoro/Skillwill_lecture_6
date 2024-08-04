document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementsByClassName("closeBtn")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    var changeColorBtn = document.getElementById("changeColorBtn");

    changeColorBtn.onclick = function() {
        var colorInput = document.getElementById("colorInput").value.toLowerCase();
        var validColors = ["red", "blue", "green", "black", "white"];

        if (validColors.includes(colorInput)) {
            document.body.style.backgroundColor = colorInput;
        } else {
            alert("Invalid color! Please enter red, blue, green, black, or white.");
        }
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    var calculateAverageBtn = document.getElementById("calculateAverageBtn");

    calculateAverageBtn.onclick = function() {
        var numbersInput = document.getElementById("numbersInput").value;
        var numbersArray = numbersInput.split(':').map(Number);
        var validNumbers = numbersArray.filter(n => !isNaN(n));

        if (validNumbers.length === numbersArray.length && validNumbers.length > 0) {
            var sum = validNumbers.reduce((acc, num) => acc + num, 0);
            var average = sum / validNumbers.length;
            document.getElementById("result").innerText = "Average: " + average;
        } else {
            document.getElementById("result").innerText = "Please enter valid numbers separated by ':'.";
        }
    }
});