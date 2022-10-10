const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let alive = true;
let score = 0;

function jump(){
    if(dino.classList != "jump"){
    dino.classList.add("jump");
    setTimeout( function (){
        dino.classList.remove("jump");
    },300);} 
}

document.addEventListener("keydown", function(event){
    if (event.keyCode == 32){ 
        jump();
    }
});

let checkCollision = setInterval(function(){
    score +=1;
    let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusPos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusPos < 0){
        cactus.style.display = "none";
    }
    else{
        cactus.style.display = "block";
        if(cactusPos > 0 && cactusPos < 40 &&  dinoPos >520){
            alive = false;
            score = 0;
        }
        else{
            score += 1
            document.getElementById("score").innerText = score;
        }
    }
}, 10);
