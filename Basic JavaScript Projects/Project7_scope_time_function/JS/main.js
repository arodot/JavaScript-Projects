// Scope of global variables
var X =10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// Scope of local variable
function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>")
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_number_1() {
    var A = 15;
    console.log(20 + A);
}
function Add_number_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();



function checkTimeGreeting() {
  // Get current hour (0 - 23)
  let currentHour = new Date().getHours();
  
  // Select the element using document.getElementById
  let targetElement = document.getElementById("greetingText");

  // Conditional logic based on the hour
  if (currentHour < 12) {
    targetElement.textContent = "Good morning!";
  } else if (currentHour < 18) {
    targetElement.textContent = "Good afternoon!";
  } else {
    targetElement.textContent = "Good evening!";
  }
}



function Age_Function() {
    Age = document.getElementById("Age").ariaValueMax;
    if (Age >=18) {
        Vote = "You are old enough to vote";
    }
    else {
        vote = "You are not old enough to vote";
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;
}

function checkAge() {
  // 2.2 Retrieve the input element and the output paragraph element
  let age = document.getElementById("ageInput").value;
  let messageElement = document.getElementById("resultMessage");

  // 2.1 Function containing an if / else statement
  if (age >= 18) {
    messageElement.textContent = "You are eligible to vote!";
  } else {
    messageElement.textContent = "You are not old enough to vote yet.";
  }
}

// Else If Statements
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}