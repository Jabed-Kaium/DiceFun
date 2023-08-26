var player1 = prompt("Enter player 1 name");
var player2 = prompt("Enter player 2 name");

document.querySelector(".p1").textContent = player1;
document.querySelector(".p2").textContent = player2;

var random1 = Math.random();
var random2 = Math.random();
random1 = Math.floor(random1 * 6) + 1;
random2 = Math.floor(random2 * 6) + 1;

if(random1 === 1) {
    document.querySelector(".img1").src = "images/dice1.png";
}
else if(random1 === 2) {
    document.querySelector(".img1").src = "images/dice2.png";
}
else if(random1 === 3) {
    document.querySelector(".img1").src = "images/dice3.png";
}
else if(random1 === 4) {
    document.querySelector(".img1").src = "images/dice4.png";
}
else if(random1 === 5) {
    document.querySelector(".img1").src = "images/dice5.png";
}
else {
    document.querySelector(".img1").src = "images/dice6.png";
}

if(random2 === 1) {
    document.querySelector(".img2").src = "images/dice1.png";
}
else if(random2 === 2) {
    document.querySelector(".img2").src = "images/dice2.png";
}
else if(random2 === 3) {
    document.querySelector(".img2").src = "images/dice3.png";
}
else if(random2 === 4) {
    document.querySelector(".img2").src = "images/dice4.png";
}
else if(random2 === 5) {
    document.querySelector(".img2").src = "images/dice5.png";
}
else {
    document.querySelector(".img2").src = "images/dice6.png";
}

if(random1 > random2) {
    var text = "Congtratulation!!! " + player1 +  " wins.";
    document.querySelector("h1").textContent = text;
}
else if(random1 < random2) {
    var text = "Congtratulation!!! " + player2 +  " wins.";
    document.querySelector("h1").textContent = text;
}
else {
    document.querySelector("h1").textContent = "Match draw!";
}

function refreshPage(){
    window.location.reload();
} 