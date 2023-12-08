

let getComputerChoice = ()=>{
    let int = Math.floor((Math.random()*3))+1;
    
    let choice;
    switch(int){
        case 1: return "rock"; break;
        case 2: return "paper"; break;
        case 3: return "scissor"; break;
    }
}

let getPlayerChoice = () => prompt(`"Make your selection of "rock", "paper" or "scissor".`)

let calculateWinner = (playerSelection, computerSelection) => {
    if(playerSelection===computerSelection){
        return "Tie! Play again!"
    }
    else if( playerSelection==="rock" && computerSelection=="scissor" ||
    playerSelection==="paper" && computerSelection=="rock" ||
    playerSelection==="sciccor" && computerSelection=="paper"){
        return `You win! ${playerSelection} beats ${computerSelection}!`
    }
    else return `You loose! ${computerSelection} beats ${playerSelection}!`
}

let playRound = () => {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let winnerStatement = calculateWinner(playerSelection,computerSelection);
    if(winnerStatement==="Tie! Play again!"){
        console.log(winnerStatement);
        playRound();
    } 
    else console.log(winnerStatement);
}
