// function() {
  // declare variables
    function constructor(correctAnswer, loopCount, nameGuess){
      this.correctAnswer = correctAnswer;
      this.loopCount = loopCount;
      this.nameGuess = nameGuess;
    }

  // test user input
    var ElliotSimpson = new constructor("thomas", 1, prompt("Guess Elliot's middle name if you dare!"));
    // var TristanConant = new constructor("maurice", 1, prompt("Guess Tristan's middle name if you dare!")); "Cool runnings: Yo, you dead mon?"
    // William Thomas Shull "he's the tank engine!"
    // Sue Renee Rosenfield-Hernandez  "it's French"



    while  ElliotSimpson.nameGuess != ElliotSimpson.correctAnswer); {
        ElliotSimpson.nameGuess = prompt("Hint: my initials are E.T. You have incorretly guessed " + ElliotSimpson.loopCount + " times!");
        ElliotSimpson.loopCount++;
    }
    alert("Congratulations! You can now call me an extra terrestrial!");

//} ()
console.log = ()
