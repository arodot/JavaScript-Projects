// Function utilizing the concat() method to join multiple strings
function full_Sentence() {
  var part_1 = "I have ";
  var part_2 = "made this ";
  var part_3 = "into a complete ";
  var part_4 = "sentence.";
  
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  
  document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Slice a different part of the existing sentence
function slice_Method() {
  var sentence = "JavaScript makes web development interactive and fun.";
  var section = sentence.slice(0, 10); // Extracts "JavaScript"
  
  document.getElementById("Slice").innerHTML = section;
}

// Converts all characters in a string to uppercase letters without altering the original string
function upper_Method() {
  var text = "hello world! I'm a Developer!";
  var result = text.toUpperCase(); // Returns "Hello World! I'm a Developer!"
  document.getElementById("Upper").innerHTML = result;
}

//
function search_Method() {
  var sentence = "Learn JavaScript to build interactive web apps.";
  var position = sentence.search("JavaScript"); // Returns 6
  document.getElementById("Search").innerHTML = position;
}

// Function utilizing the toString() method to return a number as a string
function string_Method() {
  var X = 182;
  document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// Function utilizing the toPrecision() method to format a number to a specified length
function precision_Method() {
  var X = 12938.3012987376112;
  document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// toFixed() method implementation
function fixed_Method() {
  var num = 5.56789;
  var n = num.toFixed(2);
  document.getElementById("Fixed").innerHTML = n;
}

// valueOf() method implementation
function value_Method() {
  var num = 123;
  var n = num.valueOf();
  document.getElementById("Value").innerHTML = n;
}