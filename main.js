//alert("Hello")



/*++++++++++++++++++++++++++++++++++++++++
++Create Variable for player and++++++++++
++++++++++computer choice+++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++*/
// let player = playerSelection();
// let computer = compSelection();
/*++++++Game execution+++++ */
//game();
playRound(playerSelection(), compSelection());

/*+++++++++++++++++++++++++++++++++++++++
++Create function for player's selection++
+++++++++++++++++++++++++++++++++++++++++*/
function playerSelection(){
    let selection = prompt("Select your weapon!")
    selection = selection.toLowerCase();
    console.log(selection);
    return selection;
}
/*+++++++++++++++++++++++++++++++++++++++
++Create function for computer selection++
+++++++++++++++++++++++++++++++++++++++++*/
 function compSelection (){
    let compChoice = ["rock", "paper", "scissor"]
    compChoice = compChoice[Math.floor(Math.random()*compChoice.length)];
    console.log(compChoice);
    return compChoice;
}
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Create the function that compares p1 and computer selection
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function playRound(playerChoice, computerChoice){ 
    if (playerChoice === "rock" && computerChoice === "scissor"){
        console.log("You win, rock beats scissor");
    }else if(playerChoice === "paper" && computerChoice === "rock"){
        console.log("You win, paper beats rock!");
    }else if(playerChoice === "scissor" && computerChoice === "paper"){
        console.log("You win, scissor beats paper!")
    }else if(playerChoice === "rock" && computerChoice === "paper"){
        console.log("You lose, paper beats rock!")
    }else if(playerChoice === "paper" && computerChoice === "scissor"){
        console.log("You lose, scissor beats paper!")
    
    }else if(playerChoice === "scissor" && computerChoice === "rock"){
        console.log("You lose, rock beats scissor!")
    }else if (playerChoice === computerChoice){
        console.log("It's a tie!")
    }
}

//ROCK - 0 , PAPER - 1 , SCISSOR - 2
// rock > scissor
// paper > rock
// scissor > paper