let display = document.getElementById('display');

function appendCharacter(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

const units = {
    length: {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        mile: 1609.34,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254
    },
    mass: {
        gram: 1,
        kilogram: 1000,
        milligram: 0.001,
        pound: 453.592,
        ounce: 28.3495
    },
    time: {
        second: 1,
        minute: 60,
        hour: 3600,
        day: 86400
    }
};

function populateUnits() {
    let unitType = document.getElementById('unit-type').value;
    let unitFrom = document.getElementById('unit-from');
    let unitTo = document.getElementById('unit-to');

    unitFrom.innerHTML = '';
    unitTo.innerHTML = '';

    for (let unit in units[unitType]) {
        let optionFrom = document.createElement('option');
        optionFrom.value = unit;
        optionFrom.text = unit;
        unitFrom.add(optionFrom);

        let optionTo = document.createElement('option');
        optionTo.value = unit;
        optionTo.text = unit;
        unitTo.add(optionTo);
    }
}

function convertUnit() {
    let unitType = document.getElementById('unit-type').value;
    let unitInput = document.getElementById('unit-input').value;
    let unitFrom = document.getElementById('unit-from').value;
    let unitTo = document.getElementById('unit-to').value;

    if (unitInput === '' || unitFrom === '' || unitTo === '') {
        document.getElementById('conversion-result').innerText = 'Please fill all fields';
        return;
    }

    let convertedValue = (unitInput * units[unitType][unitFrom]) / units[unitType][unitTo];
    document.getElementById('conversion-result').innerText = `${unitInput} ${unitFrom} = ${convertedValue.toFixed(2)} ${unitTo}`;
}

// Initialize the units when the page loads
document.addEventListener('DOMContentLoaded', populateUnits);
