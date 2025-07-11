/* Create a Random Number */
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImage1 = "/images/" + randomDiceImage1; 
var randomImage2 = "/images/" + randomDiceImage2; 

document.querySelectorAll("img")[0].setAttribute('src', randomImage1 );
document.querySelectorAll("img")[1].setAttribute('src', randomImage2 );

if(randomNumber1 === randomNumber2 || randomNumber2 === randomNumber1){
     document.querySelector("h1").textContent = "Draw!"       
} else if(randomNumber1 > randomNumber2){
     document.querySelector("h1").textContent = "🚩 Player 1 wins"
} else if(randomNumber2 > randomNumber1){
       document.querySelector("h1").textContent = "Player 2 wins 🚩"
}