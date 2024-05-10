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
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let computerChoice, humanChoice, result;
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice().toLowerCase();
        result = playRound(humanChoice, computerChoice);
        switch (result){
            case "win":
                humanScore+=1;
                break;
            case "lose":
                computerScore+=1;
                break;
            default:
                break;
        }
    }
    if (humanScore > computerScore) {
        console.log(`U win`);
    } else if (humanScore < computerScore) {
        console.log(`U lose`);
    } else {
        console.log(`Draw`);
    }
}