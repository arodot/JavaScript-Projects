// Counts by 5s using a while loop
function count_By_Fives() {
    var Digit = "";
    var X = 5;
    
    while (X <= 50) {
        Digit += "<br>" + X;
        X += 5; // Adds 5 to X on each iteration
    }
    
    document.getElementById("Loop").innerHTML = Digit;
}

// Creates a list of instruments using a for loop
function for_Loop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Violin", "Flute"];
    var Text = "";
    var I;
    
    for (I = 0; I < Instruments.length; I++) {
        Text += Instruments[I] + "<br>";
    }
    
    document.getElementById("List_of_Instruments").innerHTML = Text;
}

// Creates an array of dog pictures and displays one of them
function Dog_pics() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "purring";

    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + Dog_Picture[2] + ".";
}

// Demonstrates the use of a constant
const Musical_Instrument = {
    // Create an object using the const keyword with properties and values
  type: "Guitar",
  brand: "Fender",
  color: "Sunburst"
};

function constant_function() {
  // Initial function displaying property values in the HTML element
  document.getElementById("Constant").innerHTML = 
    "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.type + " was $500.";

  // Change a property's value
  Musical_Instrument.color = "Blue";

  // Add a new property with a value
  Musical_Instrument.price = "$900";

  // Update display with the changed property value and the newly added property value
  document.getElementById("Constant").innerHTML = 
    "The " + Musical_Instrument.color + " " + Musical_Instrument.type + " now costs " + Musical_Instrument.price + ".";
}

// Example using the let keyword to declare a variable with block scope
let Instruments = ["Guitar", "Drums", "Piano"];
let Selected_Instrument = Instruments[0];

function let_Function() {
  document.getElementById("Let_Keyword").innerHTML = "My favorite instrument is the " + Selected_Instrument + ".";
}

// Example of an object with properties and a method
let  Car = {
  make: "KIA",
  model: "Sportage",
  year: 2023,
  color: "Gray",
  description: function() {
    return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + ".";
  }
};
document.getElementById("Car_Object").innerHTML = Car.description();