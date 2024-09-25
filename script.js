console.log("Hello World")
const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice)
    return choice;

    // console.log("computer")

}

function checkWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Tie";
    }
    else if (
        (humanChoice == "Rock" && computerChoice == "Scissors") ||
        (humanChoice == "Scissors" && computerChoice == "Paper") ||
        (humanChoice == "Paper" && computerChoice == "Rock")
    ) {
        return "Human";
    }
    else {
        return "Computer"
    }

} 

function playRound(humanChoice, computerChoice) {
    const result = checkWinner(humanChoice, computerChoice);
    if (result == "Tie") {
        return "It's a Tie!"
    }
    else if (result == "player") {
        return `You Win! ${humanChoice} beats ${computerChoice}`
    }
    else {
        return `You Lose! ${computerChoice} beats ${humanChoice}`
    }
}

function getHumanChoice() {
    let validInput = false;
    let choice = null;
    while (validInput === false) {
        let input = prompt("Choose Rock, Paper or Scissors")
        if (!choices.includes(input) ) {
           validInput = false;
           console.log("invalid input: "+ input)
        }
        else {
            validInput = true;
            choice = input;
        }
    }
    return choice;
}

// const humanChoice = "Rock"
// const computerChoice = getComputerChoice();
// console.log(playRound(humanChoice, computerChoice));

function playGame() {
    let scoreHuman = 0
    let scoreComputer = 0
    console.log("Hello!")
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));

        let winner = checkWinner(humanChoice, computerChoice);
        if (winner === "Human") {
            scoreHuman++
        }
        else if (winner === "Computer") {
            scoreComputer++;
        }
    }

    if (scoreHuman > scoreComputer) {
        console.log("Human wins!");
    }
    else if (scoreComputer > scoreHuman) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's s tie!");
    }
}
playGame()