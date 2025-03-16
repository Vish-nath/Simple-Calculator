let memory = 0;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        alert("Invalid Expression");
    }
}

// Memory Functions
function memoryClear() {
    memory = 0;
    alert("Memory Cleared");
}

function memoryRecall() {
    document.getElementById('display').value = memory;
}

function memoryAdd() {
    let currentValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(currentValue)) {
        memory += currentValue;
    }
}

function memorySubtract() {
    let currentValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(currentValue)) {
        memory -= currentValue;
    }
}