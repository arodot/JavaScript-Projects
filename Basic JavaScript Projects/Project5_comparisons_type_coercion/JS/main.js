document.write((38 + 9) + "<br>");

// Double equals sign to return “true"
document.write((10 == 10) + "<br>");

// Double equals sign to return “false"
document.write(3 == 11);

// Make the browser display NaN
function my_Function() {
document.getElementById("Test").innerHTML = 0/0;
}

// Utilize isNaN() to display false
document.getElementById("Test").innerHTML = isNAN('007');


// isNaN() to display true
document.getElementById("Test").innerHTML = isNAN('Hello')

// Output on screen: Infinity and -Infinity
const positiveInfinity = 1e309;
const negativeInfinity = -1e309;

document.getElementById("Test").innerHTML = positiveInfinity + " and " + negativeInfinity;


// Displays true because 10 is greater than 5
console.log(10 > 5);

// Displays false because 3 is not less than 2
console.log(3 < 2);

// Performs addition and logs the result (15)
console.log(10 + 5);

// Display “false” in the console using Boolean logic 
console.log(5 > 10);

// Perform equality checks using ==
const equalResult = (10 == "10"); // true (string '10' is coerced to number 10)
const notEqualResult = (10 == 25); // false


// Display the results Double equals sign to return “true" and "false" on the webpage
document.getElementById("TrueTest").innerHTML = equalResult;
document.getElementById("FalseTest").innerHTML = notEqualResult;

// Also log the results to the browser developer console (F12)
console.log("True check:", equalResult);
console.log("False check:", notEqualResult);

// 1. Same data type and same value (true)
document.getElementById("test1").innerHTML = (100 === 100);

// 2. Different data type and different value (false)
document.getElementById("test2").innerHTML = ("apple" === 50);

// 3. Different data type but same value (false)
document.getElementById("test3").innerHTML = ("42" === 42);

// 4. Same data type but different value (false)
document.getElementById("test4").innerHTML = (10 === 20);

// AND Operator (&&)
document.getElementById("and-true").innerHTML = (10 > 5 && 20 > 15); // true
document.getElementById("and-false").innerHTML = (10 > 5 && 20 < 15); // false

// OR Operator (||)
document.getElementById("or-true").innerHTML = (10 > 5 || 5 > 100);  // true
document.getElementById("or-false").innerHTML = (10 < 2 || 5 > 100); // false

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}

// Not Operator (!)
function not_Function() {
    document.getElementById("Not").innerHTML = !(30>15);
}