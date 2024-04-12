var combination = [0, 0, 0]; // Initial combination
var maxDigitValue = 9; // Maximum digit value

function toggleMenu() {
    var menu = document.querySelector('.menu-container');
    var box = document.querySelector('.menu-button');
    

    if (menu.classList.contains("open")) {
        console.log('300');
        menu.classList.add("closed");
        menu.classList.remove("open");
        
    } else {
        console.log('-300');
        menu.classList.add("open");
        menu.classList.remove("closed");
        box.classList.remove("startanimation")
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
    var targetCombination = [6, 8, 4]; // The target combination to match
    if (combination.join('') === targetCombination.join('')) {
        console.log('Victory!');
    }
}



