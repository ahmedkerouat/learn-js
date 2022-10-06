let clicksNumber = 0;
let alreadyClicked = false;
document.getElementById("clicks").innerText += 0;

function clicked(){
    clicksNumber += 1;
    document.getElementById("clicks").innerText = "Clicks : " + clicksNumber;

}