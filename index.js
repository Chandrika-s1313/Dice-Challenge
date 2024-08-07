setTimeout(function(){
    
var player2Name = prompt("Enter your name ");
document.querySelector(".player2").innerHTML = player2Name;
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomImageDice1 = "dice" + randomNumber1 +".png";
var randomImage1 = "images/"+randomImageDice1;
document.querySelector(".img1").setAttribute("src",randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageDice2 = "dice" + randomNumber2 +".png";
var randomImage2 = "images/"+randomImageDice2;
document.querySelector(".img2").setAttribute("src",randomImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Chandu wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = player2Name + " wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
}, 1000)