const choicesList = ["rock", "paper", "scissors"];
document.getElementById("other").style.display="none";
function play(){

}

function game(choice, other1, other2){
    let random = Math.random();
    let randomIndex = Math.floor(random * choicesList.length);
    let randomChoice = choicesList[randomIndex];

    clickedButton = document.getElementById(choice).style.display="block";
    paperButton = document.getElementById(other1).style.display="none";
    scissorsButton = document.getElementById(other2).style.display="none";
    document.getElementById("other").style.display="block";
    document.getElementById("other").style.backgroundImage ="url(imgs/"+randomChoice+".png)";
if(choice == randomChoice){
    //draw
    document.getElementById("other").innerText =  "Draw.";
}

else if((choice == "rock" && randomChoice == "paper") || (choice =="scissors" && randomChoice == "rock" ) || (choice == "paper" && randomChoice == "scissors")){
    //lost
    document.getElementById("other").innerText =  "You lost.";
}

else{
    //win   
    document.getElementById("other").innerText =  "You won.";
}
}
function reset(){
    location.reload();
}
