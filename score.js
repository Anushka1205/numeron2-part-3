// Iteration 8: Making scoreboard functional

let score = localStorage.getItem("gameScore");
let scoreBox = document.getElementById("score-board").innerText=score;
document.getElementById("play-again-button").onclick=()=>{
    location.href="./game.html"
}