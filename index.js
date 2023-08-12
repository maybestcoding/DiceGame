

var randomNumber1 = Math.floor(Math.random()*6)+1;
var imgSrc1 = document.querySelector(".img1");//document.querySelectorAll("img")[0]
var randomImg1 = "images/dice"+randomNumber1+".png"
imgSrc1.setAttribute("src",randomImg1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imgSrc2 = document.querySelector(".img2");//document.querySelectorAll("img")[1]
var randomImg2 = "images/dice"+randomNumber2+".png"
imgSrc2.setAttribute("src",randomImg2);



if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩May Won!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Will Won!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
