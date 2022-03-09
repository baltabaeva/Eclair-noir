/* Online Appointment */

document.getElementById("button").onclick = appointment;

function appointment() {

   var audio = new Audio('audio.mp3');
audio.play();
   let select = document.getElementById("mySelect").value;    
   let name = document.getElementById("getName").value;
    let phone = document.getElementById("getphone").value;

   if (name == 0 || phone == 0) {
       alert("Enter name and phone number!");
   }
   else {
    let nameCount = name.length;
    let upperCase = name.slice(0,1);
    let lowerCase = name.slice(1,nameCount);
    let date = ["20.02.2022", "21.02.2022", "22.02.2022", "23.02.2022", "24.02.2022", "25.02.2022", "26.02.2022", "27.02.2022"];
    let random = date[Math.floor(Math.random() * date.length)];
    let time = ["14:00 p.m", "15:00 p.m", "16:00 p.m", "17:00 p.m", "18:00 p.m", "19:00 p.m"];
    let randomTime = time[Math.floor(Math.random() * time.length)];
    
   alert ("Hello, " + upperCase.toUpperCase() + lowerCase.toLowerCase() + " you have successfully signed up for " + select + "." + " You have an appointment for " + random + " at " + randomTime + ".");
}
}

/* jQuery */

$(".body").hide();
$(document).ready(function() {
   $("#store").on("click", function() {
   $(".body").fadeToggle();
});
});
document.getElementById("store").onclick = play;
function play() {
   var audio = new Audio('audio.mp3');
audio.play();
}

/* Store */ 

document.getElementById("butt_1").onclick = Buy_1;

function Buy_1() {
   var audio = new Audio('audio.mp3');
audio.play();
   alert("You added Redken Brews Daily Shampoo to the cart!");
}
document.getElementById("butt_2").onclick = Buy_2;

function Buy_2() {
   var audio = new Audio('audio.mp3');
audio.play();
   alert("You added Redken Brews Extra Clean Shampoo to the cart!");
}
document.getElementById("butt_3").onclick = Buy_3;

function Buy_3() {
   var audio = new Audio('audio.mp3');
audio.play();
   alert("You added Redken Brews Daily Shampoo to the cart!");
}
document.getElementById("butt_4").onclick = Buy_4;

function Buy_4() {
   var audio = new Audio('audio.mp3');
audio.play();
   alert("You added Redken Brews Extra Clean Gel to the cart!");
}
document.getElementById("butt_5").onclick = Buy_5;

function Buy_5() {
   var audio = new Audio('audio.mp3');
audio.play();
   alert("You added Redken Brews Work Hard Molding to the cart!");
}
document.getElementById("butt_6").onclick = Buy_6;

function Buy_6() {
   var audio = new Audio('audio.mp3');
audio.play();
   alert("You added Redken Brews Wax Pomade to the cart!");
}
document.getElementById("butt_7").onclick = Buy_7;

function Buy_7() {
   var audio = new Audio('audio.mp3');
audio.play();
   alert("You added Redken Brews After Shave Balm to the cart!");
}
document.getElementById("butt_8").onclick = Buy_8;

function Buy_8() {
   var audio = new Audio('audio.mp3');
audio.play();
   alert("You added Redken Brews Shave Cream to the cart!");
}

document.getElementById("butt_9").onclick = Buy_9;

function Buy_9() {
   var audio = new Audio('audio.mp3');
audio.play();
   alert("You added Redken Brews Shave Foam to the cart!");
}
$(".card-text_1").hide();
 $(".img_1").mouseover(function(){
       $(".card-text_1").toggle();
      });