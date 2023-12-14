

let getComputerChoice = ()=>{
    let int = Math.floor((Math.random()*3))+1;
    
    let choice;
    switch(int){
        case 1: return "rock"; break;
        case 2: return "paper"; break;
        case 3: return "scissor"; break;
    }
}

// let getPlayerChoice = () => prompt(`"Make your selection of "rock", "paper" or "scissor".`)

let calculateWinner = (playerSelection, computerSelection) => {
    if(playerSelection===computerSelection){
        return "Tie! Play again!"
    }
    else if( playerSelection==="rock" && computerSelection=="scissor" ||
    playerSelection==="paper" && computerSelection=="rock" ||
    playerSelection==="scissor" && computerSelection=="paper"){
        return `You win! ${playerSelection} beats ${computerSelection}!`
    }
    else return `You loose! ${computerSelection} beats ${playerSelection}!`
}

// let playRound = () => {
//     let playerSelection = getPlayerChoice();
//     let computerSelection = getComputerChoice();
//     let winnerStatement = calculateWinner(playerSelection,computerSelection);
//     if(winnerStatement==="Tie! Play again!"){
//         console.log(winnerStatement);
//         playRound();
//     } 
//     else console.log(winnerStatement);
// }

let playersChoice = '';
let computerChoice = '';
let prefix = './images/';
let suffix = '.png';

const paper = document.querySelector('.paper');

paper.addEventListener('click', ()=> {
    playersChoice = 'paper';
    loadResults();
})


const rock = document.querySelector('.rock');

rock.addEventListener('click', ()=> {
    playersChoice = 'rock';
    loadResults();
})

const scissor = document.querySelector('.scissor');

scissor.addEventListener('click', ()=> {
    playersChoice = 'scissor';
    loadResults();
})

let loadResults = () => {
    computerChoice = getComputerChoice()
    setImage(prefix+playersChoice+suffix,'.left');
    setImage(prefix+computerChoice+suffix,'.right')

    let roundWinner = document.querySelector('.round-winner')
    roundWinner.replaceChildren();
    let winnerStatement = calculateWinner(playersChoice,
        computerChoice);

    winnerStatement = document.createTextNode(winnerStatement);
    let tempParagraph = document.createElement('p');
    tempParagraph.appendChild( winnerStatement);
    roundWinner.appendChild(tempParagraph);

    let tempParagraph2 = document.createElement('p');
    let playAgain = document.createTextNode(`Press "RESET" to play next round`)
    tempParagraph2.appendChild(playAgain);
    roundWinner.appendChild(tempParagraph2);
    
    computerChoice = '';
    playersChoice = '';
}

let setImage = (imageURL,resultPane) =>{
    let results = document.querySelector(resultPane)
    results.replaceChildren();
    let image = document.createElement('img');
    image.src = imageURL;
    results.appendChild(image);
}

let reset = () =>{
    computerChoice = '';
    playersChoice = '';
    setImage('./images/go3.png','.left');
    setImage('./images/go3.png','.right')
    let roundWinner = document.querySelector('.round-winner')
    roundWinner.replaceChildren();
    winnerStatement = document.createTextNode('Make your selection!');
    let tempParagraph = document.createElement('p');
    tempParagraph.appendChild( winnerStatement);
    roundWinner.appendChild(tempParagraph);
}

const resetTiles = document.querySelector('.reset-button')
resetTiles.addEventListener('click',reset)