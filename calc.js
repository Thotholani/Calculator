var buttons = document.getElementsByClassName("btn");
var numbers = [];
var oldValue = "";
var oldDigit = "";
var index = 0;
var numberOfAdditions = 0;

// Receive GUI input
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttonPressed = this.value;

        // if digit pressed
        if (buttonPressed != "+" && buttonPressed != "=") {
            // keep taking in inputed digits as one number
            var newValue = oldValue + buttonPressed;
            oldValue = newValue;
            displayValue(buttonPressed);
        } else {
            // operator pressed
            // save digits in one number
            recordValue(oldValue);
            // reset digit to zero
            oldValue = "";
            displayValue(buttonPressed);
            if (buttonPressed == "=") {
                calculate();
            }
        }
    });
}

// Record input
function recordValue(value) {
    var newNumber = "";
    newNumber = value;
    numbers.push(Number(newNumber));
    console.log(numbers[index]);
    index++;
    numberOfAdditions++;
}

// display entered  values
function displayValue(digit) {
    var newDigit = oldDigit + digit;
    oldDigit = newDigit;
    document.getElementById("display").value = oldDigit;
}

// calculate answer
function calculate() {
    // console.log(numbers);
    // var i = numbers.length - numberOfAdditions;
    var sum = 0;
    for (index = 0; index < numbers.length; index++) {
        sum = sum + numbers[index];
    }
    // console.log(sum);
    // alert(sum);
    document.getElementById("display").value = sum.toString();
}