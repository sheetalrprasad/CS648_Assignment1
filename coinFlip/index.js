var coinFlip = Math.random();
console.log(coinFlip);
var choice = prompt("Enter your Choice: Heads or Tails");
var isHeads = Boolean (coinFlip > 0.5);


isUserChoiceHeads = (choice == "Heads");
isUserChoiceTails = (choice == "Tails");

if (isHeads) {   
    if (isUserChoiceHeads) {
        window.alert("The flip was heads and you chose heads...you win!");
    } else if (isUserChoiceTails) {
        window.alert("The flip was heads but you chose tails...you lose!");
    } else {
        window.alert("Invalid choice.");
    }
} else {
    
    if (isUserChoiceHeads) {
        window.alert("The flip was tails but you chose heads...you lose!");
    } else if (isUserChoiceTails) {
        window.alert("The flip was tails and you chose tails...you win!");
    } else {
        window.alert("Invalid choice.");
    }
}