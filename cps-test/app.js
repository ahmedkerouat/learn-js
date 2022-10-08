let clicksNumber = 0;
let run = true;
let alreadyClicked = false;
let start;

function clicked(){
    if (clicksNumber < 100){
        document.getElementById("100clicks").innerText = "click";
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
