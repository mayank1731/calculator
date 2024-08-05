// Function to play button sound
function buttonSound() {
    const audio = new Audio('button-click.mp3'); // Path to your sound file
    audio.play();
}

// Function to insert value into the display
function insert(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character in the display
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the expression
function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;

    // Replace math symbols with JavaScript functions
    expression = expression.replace(/sin\(/g, 'Math.sin(');
    expression = expression.replace(/cos\(/g, 'Math.cos(');
    expression = expression.replace(/tan\(/g, 'Math.tan(');
    expression = expression.replace(/log\(/g, 'Math.log10(');
    expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
    expression = expression.replace(/pi/g, 'Math.PI');
    expression = expression.replace(/e/g, 'Math.E');
    expression = expression.replace(/\^/g, '**');

    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to add shake effect
function addShakeEffect() {
    const calculator = document.querySelector('.calculator');
    calculator.classList.add('shake');
    setTimeout(() => calculator.classList.remove('shake'), 500);
}

// Handle button click
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        buttonSound();
        addShakeEffect();
    });
});

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = '0123456789+-*/().';
    const validFunctions = {
        's': 'sin(',
        'c': 'cos(',
        't': 'tan(',
        'l': 'log(',
        'r': 'sqrt(',
        'p': 'pi',
        'e': 'e'
    };

    if (validKeys.includes(key)) {
        buttonSound();
        addShakeEffect();
        insert(key);
    } else if (key === 'Enter') {
        buttonSound();
        addShakeEffect();
        calculate();
    } else if (key === 'Backspace') {
        buttonSound();
        addShakeEffect();
        deleteLast();
    } else if (key === 'Escape') {
        buttonSound();
        addShakeEffect();
        clearDisplay();
    } else if (validFunctions[key]) {
        buttonSound();
        addShakeEffect();
        insert(validFunctions[key]);
    }
});
