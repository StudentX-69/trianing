let count = 0;
console.log("Script is connected!");

const countDisplay = document.getElementById('count');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');
const btnReset = document.getElementById('reset');
const changemode = document.getElementById('mode');
const lightmode = document.querySelector('*');
const darkmode = document.querySelector('*');

// Increment logic
if (btnIncrement) {
    btnIncrement.addEventListener('click', () => {
        count++;
        updateDisplay();
    });
}

// Decrement logic
if (btnDecrement) {
    btnDecrement.addEventListener('click', () => {
        count--;
        updateDisplay();
    });
}

// Reset logic
if (btnReset) {
    btnReset.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });
}

function updateDisplay() {
    if (!countDisplay) return;

    countDisplay.textContent = count;

    if (count > 0) countDisplay.style.color = "green";
    else if (count < 0) countDisplay.style.color = "red";
    else countDisplay.style.color = isDark ? "#fff" : "#000";
}


// Dark Mode function
// let isDark = false;
// function ChangeMode(){
//     console.log("script is connected");
//     if(changemode)
//         {darkmode.style.backgroundColor = "#152238";countDisplay.style.color = "#fff";changemode.style.color = "#fff"}
//     else {lightmode.style.backgroundColor = "#fff"}
      
// }
let isDark = false;

function ChangeMode() {
    isDark = !isDark;

    if (isDark) {
        document.body.style.backgroundColor = "#152238";
        document.body.style.color = "#fff";
        changemode.style.color = "#fff";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        changemode.style.color = "#000";
    }

    updateDisplay();
}
