function getComputerChoice(){
    let choice =["rock", "paper", "scissor"];
    return(choice[Math.floor(Math.random() * choice.length)]);
}

function playGame(){ 

function playRound(playerSelection, computerSelection){
      if (playerSelection === computerSelection) {
        return("tie game play again");
      } else if (playerSelection === `rock`) {
            if (computerSelection === `paper`) {
                return(computerSelection + " beats " + playerSelection + " computer wins");            
            } else{
                return (playerSelection +" beats " + computerSelection + " player wins")
                    }
      } else if (playerSelection === `paper`){
            if(computerSelection === `scissor`){
                return(computerSelection + " beats " + playerSelection + " computer wins");
            }else{
                return(playerSelection +" beats " + computerSelection + " player wins")
                    }
      }else if (playerSelection === `scissor`){
            if(computerSelection === `rock`){
                return(computerSelection + " beats " + playerSelection + " computer wins");
            }else{
                return(playerSelection +" beats " + computerSelection + " player wins")
                    }
      }
}

this.playerSelection = prompt("rock paper scissor");
 this.computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



}