function getComputerChoice() {
    let jankenNum = Math.floor(Math.random() * 3);
    switch (jankenNum) {
        case 0:
            return "rock";
        // just note this is a context appropriate way to stop a js switch statement
        // since the return statement stops fall-through
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
        // something in case jankenNum manages to be anything else? catch block?
        // throw an error? nah easy way to do this is just default to a value
    }
}

function getHumanChoice() {
    // tempted to while loop and use nullish coalescer
    // but I have a feeling they'll ask for that later
    // apparently they just tell you not to bother and to make something more appealing instead
    let humanChoice;
    while (!(['rock', 'paper', 'scissors'].includes(humanChoice))) {
        humanChoice = prompt("Rock, paper, or scissors?");
        if (humanChoice === null) {
            continue;
        }
        humanChoice = humanChoice.toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    // I guarantee you there is a less janky way to do this
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    // write a function for reducing the boilerplate text
                    // receive 1 arg that states win, tie, or lose and return text based on that
                    console.log(`Tie between user:${humanChoice} and comp:${computerChoice}`);
                    return "tie";
                case "paper":
                    console.log(`Computer wins: ${computerChoice} against ${humanChoice}`);
                    return "lose";
                case "scissors":
                    console.log(`You win: ${humanChoice} against ${computerChoice}`);
                    return "win";
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log(`You win: ${humanChoice} against ${computerChoice}`);
                    return "win";
                case "paper":
                    console.log(`Tie between user:${humanChoice} and comp:${computerChoice}`);
                    return "tie";
                case "scissors":
                    console.log(`Computer wins: ${computerChoice} against ${humanChoice}`);
                    return "lose";
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log(`Computer wins: ${computerChoice} against ${humanChoice}`);
                    return "lose";
                case "paper":
                    console.log(`You win: ${humanChoice} against ${computerChoice}`);
                    return "win";
                case "scissors":
                    console.log(`Tie between user:${humanChoice} and comp:${computerChoice}`);
                    return "tie";
            }
            break;
        default:
        // something bad might happen
    }
}

let playerScore = 0, computerScore = 0;
function handleRPS(event) {
    let target = event.target;
    let result;
    switch (target.id) {
        case 'btnRock':
            result = playRound('rock');
            break;
        case 'btnPaper':
            result = playRound('paper');
            break;
        case 'btnScissors':
            result = playRound('scissors');
            break;
    }
    if (result === 'win') {
        playerScore += 1;
    } else if (result === 'lose') {
        computerScore += 1;
    }
    const display = document.querySelector("#results");
    display.textContent=`Player: ${playerScore}, COM: ${computerScore}`;
    if (playerScore===5){
        alert("You wins");
        playerScore=0;
        computerScore=0;
        display.textContent=`Player: 0, COM: 0`;
    } else if(computerScore===5){
        alert("You loss");
        playerScore=0;
        computerScore=0;
        display.textContent=`Player: 0, COM: 0`;
    }
}

const buttonsRPS = document.querySelector("#janken-buttons");
buttonsRPS.addEventListener("click", handleRPS);