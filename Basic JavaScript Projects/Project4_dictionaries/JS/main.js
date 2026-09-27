function my_Dictionary() {
    var Animal = {
        species:"Dog",
        color: "Black",
        Breed:"Labrador",
        Age:5,
        sound:"Bark!"
    };
    delete Animal.sound;
    document.getElementById("Dictionary").innerHTML = Animal.sound;
}

    // Dictionary object containing key-value pairs (KVPs)
    const techDictionary = {
      "JavaScript": "A lightweight, interpreted or just-in-time compiled programming language with first-class functions.",
      "API": "Application Programming Interface, a set of rules that allows different software entities to communicate.",
      "DOM": "Document Object Model, a programming interface for web documents."
    };

    // Function to retrieve and display a specific value
    function displayDefinition() {
      // Accessing the value for the key "JavaScript"
      const word = "JavaScript";
      const definition = techDictionary[word];

      // Outputting the result to the HTML element with id="Dictionary"
      document.getElementById("Dictionary").innerHTML = `<strong>${word}:</strong> ${definition}`;
    }