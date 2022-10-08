let clicksNumber = 0;
let run = true;
let alreadyClicked = false;
let start;
document.getElementById("reset").style.visibility = "hidden";

function clicked(number, otherNumber){
    number = number;
    otherNumber = otherNumber;
    if (clicksNumber < number){
        document.getElementById("reset").style.visibility = "visible";
        document.getElementById(number+"clicks").innerText = "click";
        document.getElementById(otherNumber+"clicks").style.visibility = "hidden";
        clicksNumber += 1;
        document.getElementById("clicks").innerText = "Clicks : " + clicksNumber;
        if (alreadyClicked == false){
            start = Date.now();
            alreadyClicked = true;
                                }

    if (clicksNumber > 1){
        let end = Date.now();
        let elapsed = end - start;
        let cps = clicksNumber/(elapsed/1000);
        cps = Math.round(cps);
        document.getElementById("clickspersecond").innerText =  cps + " clicks per second.";
    }}
}
function reset(){
    location.reload();
}
