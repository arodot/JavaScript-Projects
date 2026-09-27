function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

// Subtraction Function
function subtraction_Function() {
    var Subtraction = 9 - 2;
    document.getElementById("Math").innerHTML = "9 - 2 = " + Subtraction;
}

// Multiplication Function
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

// Division Function
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

// More Math Function
function more_Math() {
    var simple_Math = (38 + 9) * 5 / 3 - 42;
    document.getElementById("Math").innerHTML = "38 plus 9, multiplied by 5, divided in three and then subracted by 42 equals" + simple_Math;
}

// Modulus or Remainder Function
function modulus_operator() {
    var simple_Math = 35 % 2;
    document.getElementById("Math").innerHTML = "When you divide 35 by 2 you have a remainder of:" + simple_Math;
}

// Negation Operator Function
function negation_Operator() {
    var x = 42;
    document.getElementById("Math").innerHTML = -x;
}

// Unary Increment Operator
var A = 42;
A++;
document.write(A + "<br>");


// Unary Decrement Operator
var A = 42;
A--;
document.write(A);

// Random Function
window.alert(Math.random() * 42);

// Math Object Method Function
function math_Method() {
    document.getElementById("Math").innerHTML = Math.sqrt(64);
}
