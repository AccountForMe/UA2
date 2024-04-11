var combination = [0, 0, 0]; // Initial combination
var maxDigitValue = 9; // Maximum digit value

function toggleMenu() {
    var menu = document.querySelector('.menu-container');
    if (menu.style.right === '-300px') {
        menu.style.right = '0';
    } else {
        menu.style.right = '-300px';
    }
}



function changeDigit(change, digitIndex) {
    combination[digitIndex] += change;
    if (combination[digitIndex] < 0) {
        combination[digitIndex] = maxDigitValue;
    } else if (combination[digitIndex] > maxDigitValue) {
        combination[digitIndex] = 0;
    }
    document.getElementById('digit' + (digitIndex + 1)).innerText = combination[digitIndex];
}

function checkCombination() {
    // Implement your logic here to check the combination
    alert('Combination: ' + combination.join(''));
}
