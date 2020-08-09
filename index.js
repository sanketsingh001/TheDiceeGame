var randomnumber1 = Math.floor(Math.random() * 6 + 1);
var randomdiceimg = "dice" + randomnumber1 + ".png";
var randomimgsrc ="images/"+randomdiceimg;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimgsrc);



// code for 2nd dice

var randomnumber2 = Math.floor(Math.random()*6+1);
var randomimg="images/dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src",randomimg);


if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🤖Player 1 Wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins🤖";
}
else{
    document.querySelector("h1").innerHTML="🤖Draw🤖";
}