const choicesList = ["rock", "paper", "scissors"];

function game(choice){
    let random = Math.random();
    let randomIndex = Math.floor(random * choicesList.length);
    let randomChoice = choicesList[randomIndex];

if(choice == randomChoice){
    //Nothing is actuallt supposed to happen lol
    console.log("0|0");
}

else if((choice == "rock" && randomChoice == "paper") || (choice =="scissors" && randomChoice == "rock" ) || (choice == "paper" && randomChoice == "scissors")){
    //lost
    console.log(choice, randomChoice,"u lost");
}

else{
    //win   
    console.log(choice, randomChoice,"u won");
}

}