//alert("Hello")



/*++++++++++++++++++++++++++++++++++++++++
++Create Variable for player and++++++++++
++++++++++computer choice+++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++*/
let player = playerSelection();
let computer = compSelection();
console.log(computer);
/*++++++Game execution+++++ */
//game();
playRound(player, computer);

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
}

//ROCK - 0 , PAPER - 1 , SCISSOR - 2
// rock > scissor
// paper > rock
// scissor > paper