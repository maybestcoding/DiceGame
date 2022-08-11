

var randomNumber1 = Math.floor(Math.random()*6)+1;
var imgSrc1 = document.querySelector(".img1");//document.querySelectorAll("img")[0]
var randomImg1 = "images/dice"+randomNumber1+".png"
imgSrc1.setAttribute("src",randomImg1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imgSrc2 = document.querySelector(".img2");//document.querySelectorAll("img")[1]
var randomImg2 = "images/dice"+randomNumber2+".png"
imgSrc2.setAttribute("src",randomImg2);

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//
// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//
// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//
// var image1 = document.querySelectorAll("img")[0];
//
// image1.setAttribute("src", randomImageSource);
//
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩May Won!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Will Won!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
