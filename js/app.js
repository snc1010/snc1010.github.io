//$(document).ready(function(){
//console.log($("body").length)
//$("div").css('cursor','url(../img/hotdogwithmustardandketchup_vw0_icon.icog), default');
//});

//example jQuery animation for header
//$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();


const $secureLinks = $('a[href^="https://"]');
$secureLinks.attr('target', '_blank');

const $nonsecureLinks = $('a[href^="http://"]');
$nonsecureLinks.attr('target', '_blank');

//slide down "I ❤️ hot dogs"
//$('#intro').hide().slideDown(3500);




  //const heartArray = [0x1F9E1,0x1F49B,0x1F49A,0x1F499,0xF49C,0x1F584];

function display_randomHeart(){
  const heartArray = ["🧡 ","💛 ", "💚 ","💙 ","💜 ","🖤 "];
  const randomIndex = Math.floor(heartArray.length * Math.random());
  const randomValue = heartArray[randomIndex];

  document.getElementById("hearts").innerText = randomValue;
}







//var myArray = [
  //"Apples",
//  "Bananas",
//  "Pears"
//];

//var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

//document.body.innerHTML = randomItem;
