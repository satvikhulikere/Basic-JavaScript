// --- 1pt: Simple Functions ---
function tickUp() {
    const counterElement = document.getElementById('counter');
    let currentVal = parseInt(counterElement.innerText);
    counterElement.innerText = currentVal + 1;
}

function tickDown() {
    const counterElement = document.getElementById('counter');
    let currentVal = parseInt(counterElement.innerText);
    counterElement.innerText = currentVal - 1;
}

// --- 1pt: Simple For Loop ---
function runForLoop() {
    const counter = parseInt(document.getElementById('counter').innerText);
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + (i === counter ? "" : " ");
    }
    document.getElementById('forLoopResult').innerText = result;
}

// --- 1pt: Repetition with Condition ---
function showOddNumbers() {
    const counter = parseInt(document.getElementById('counter').innerText);
    let result = "";
    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    document.getElementById('oddNumberResult').innerText = result.trim();
}

// --- 1pt: Arrays ---
function addMultiplesToArray() {
    const counter = parseInt(document.getElementById('counter').innerText);
    let multiples = [];
    for (let i = 1; i <= counter; i++) {
        if (i % 5 === 0) {
            multiples.push(i);
        }
    }
    // Reverse the order as requested
    multiples.reverse();
    console.log(multiples);
}

// --- 2pts: Objects and Form Fields ---
function printCarObject() {
    const car = {
        type: document.getElementById('carType').value,
        mpg: document.getElementById('carMPG').value,
        color: document.getElementById('carColor').value
    };
    console.log(car);
}

// --- 2pts: Objects and Form Fields pt. 2 ---
function loadCar(carNum) {
    let selectedCar;
    // Accessing the objects defined in the footer of the HTML
    if (carNum === 1) selectedCar = carObject1;
    if (carNum === 2) selectedCar = carObject2;
    if (carNum === 3) selectedCar = carObject3;

    document.getElementById('carType').value = selectedCar.cType;
    document.getElementById('carMPG').value = selectedCar.cMPG;
    document.getElementById('carColor').value = selectedCar.cColor;
}

// --- 2pt: Changing Styles ---
function changeColor(choice) {
    const p = document.getElementById('styleParagraph');
    if (choice === 1) p.style.color = "red";
    if (choice === 2) p.style.color = "green";
    if (choice === 3) p.style.color = "blue";
}
