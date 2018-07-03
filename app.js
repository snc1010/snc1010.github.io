//Open secure links in new tab
const $secureLinks = $('a[href^="https://"]');
$secureLinks.attr('target', '_blank');

//Open non-secure links in new tab
const $nonsecureLinks = $('a[href^="http://"]');
$nonsecureLinks.attr('target', '_blank');

//slide down "I ❤️ hot dogs"
$('#intro').hide().slideDown(3500);


//Click heart emoji to change colors "I ❤️ hot dogs"
function display_randomHeart(){
  const heartArray = ["🧡 ","💛 ", "💚 ","💙 ","💜 ","🖤 "];
  const randomIndex = Math.floor(heartArray.length * Math.random());
  const randomValue = heartArray[randomIndex];

  document.getElementById("hearts").innerText = randomValue;
}
