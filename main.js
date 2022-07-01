/*++++++++++++++++++++++++++++++++++++++++
++Create Variable for player and++++++++++
++++++++++computer choice+++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++*/

/*++++++Game execution+++++ */
let playBtn = document.getElementById("play-btn");
let playerScore = 0;
let compScore = 0;
playBtn.addEventListener("click", function(e){
    play()
});

function play(){
    for (i=0;i<5;i++){
        playRound(playerSelection(), compSelection());
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${compScore}`);
    }
    if (playerScore > compScore){
        console.log("Congrats, you beat the computer!")
    }else if(playerScore < compScore){
        console.log("You lose to a computer, try again!")
    }else if (playerScore === compScore){
        console.log("It's a tie!")
    }
}

/*+++++++++++++++++++++++++++++++++++++++
++Create function for player's selection++
+++++++++++++++++++++++++++++++++++++++++*/
function playerSelection(){
    let selection = prompt("Select your weapon!")
    selection = selection.toLowerCase();
  //  console.log(selection);
    return selection;
}
/*+++++++++++++++++++++++++++++++++++++++
++Create function for computer selection++
+++++++++++++++++++++++++++++++++++++++++*/
 function compSelection (){
    let compChoice = ["rock", "paper", "scissor"]
    compChoice = compChoice[Math.floor(Math.random()*compChoice.length)];
  //  console.log(compChoice);
    return compChoice;
}
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Create the function that compares p1 and computer selection
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function playRound(playerChoice, computerChoice){ 
  
    if (playerChoice === "rock" && computerChoice === "scissor"){
        console.log("You win, rock beats scissor");
        playerScore +=1;
    }else if(playerChoice === "paper" && computerChoice === "rock"){
        console.log("You win, paper beats rock!");
        playerScore +=1;
    }else if(playerChoice === "scissor" && computerChoice === "paper"){
        console.log("You win, scissor beats paper!")
        playerScore +=1;
    }else if(playerChoice === "rock" && computerChoice === "paper"){
        console.log("You lose, paper beats rock!")
        compScore +=1;
    }else if(playerChoice === "paper" && computerChoice === "scissor"){
        console.log("You lose, scissor beats paper!")
        compScore +=1;
    }else if(playerChoice === "scissor" && computerChoice === "rock"){
        console.log("You lose, rock beats scissor!")
        compScore +=1;
    }else if (playerChoice === computerChoice){
        console.log(`It's a tie!Both of you chose ${playerChoice}`);
    }
}