function play () {
    var userChoice = prompt("Do you choose rock, paper, scissors, lizard or spock?");
    var computerChoice = Math.random();

    if (computerChoice <= 0.20) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.40) {
        computerChoice = "paper";
    } else if (computerChoice <= 0.60) {
        computerChoice = "scissors";
    }
    else if (computerChoice <= 0.80) {
        computerChoice = "lizard";
    }
    else {
        computerChoice = "spock";
    }

    console.log("Player: " + userChoice);
    console.log("Computer: " + computerChoice);

    return compare(userChoice, computerChoice);
}

var IsInputCorrect = function(input) {
    var possibleChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    for (var i in possibleChoices) {
        if (possibleChoices[i] === input) {
            return true;
        }
    }
    return false;
}

function compare(choice1, choice2) {
    
    if (IsInputCorrect(choice1) === false) {
        return "Non-valid input!";
    }
    else if (choice1 === choice2) {
        return "The result is a tie!";
    }

    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock crushes Scissors!";
        }
        else if (choice2 === "lizard") {
            return "Rock crushes Lizard!"
        }
        else if (choice2 === "paper") {
            return "Paper covers Rock!";
        }
        else {
            return "Spock vaporizes Rock!"
        }
    }

    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper covers Rock!";
        }
        else if (choice2 === "Spock") {
            return "Paper disproves Spock!";
        }
        else if (choice2 === "scissors") {
            return "Scissors cuts Paper!"
        }
        else {
            return "Lizard eats Paper!";
        }
    }

    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "Scissors cuts Paper";
        }
        else if (choice2 === "lizard") {
            return "Scissors decapitates Lizard!";
        }
        else if (choice2 === "rock") {
            return "Rock crushes Scissors!";
        }
        else {
            return "Spock smashes Scissors!";
        }
    }

    else if (choice1 === "lizard") {
        if (choice2 === "paper") {
            return "Lizard eats Paper!";
        }
        else if (choice2 === "Spock") {
            return "Lizard poisons Spock!";
        }
        else if (choice2 === "rock") {
            return "Rock crushes Lizard!";
        }
        else {
            return "Scissors decapitates Lizard!";
        }
    }

    else {
        if (choice2 === "rock") {
            return "Spock vaporizes Rock!";
        }
        else if (choice2 === "paper") {
            return "Paper disproves Spock!";
        }
        else if (choice2 === "scissors") {
            return "Spock smashes Scissors!";
        }
        else {
            return "Lizard poisons Spock!";
        }
    }
}

