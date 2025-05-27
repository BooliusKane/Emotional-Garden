// main.js - handles global clickable assets like Chia and greenhosue
// Used by: index.html (main page)

// LOADING SCREEN
// Array of image URLs - Replace with your image file names
let randomNumber = Math.floor(Math.random() * 6) + 1;

function load(randomNumber) {
    let img;
    if (randomNumber === 1) {
        img = document.createElement('img');
        img.src = './img/leafgrub.png';
    } else if (randomNumber === 2) {
        img = document.createElement('img');
        img.src = './img/sleepygrubsky.png';
    } else if (randomNumber === 3) {
        img = document.createElement('img');
        img.src = './img/pupasoilgrub.png';
    } else if (randomNumber === 4) {
        img = document.createElement('img');
        img.src = './img/barrowgrub.png';
    } else if (randomNumber === 5) {
        img = document.createElement('img');
        img.src = './img/watergrub.png';
    } else if (randomNumber === 6) {
        img = document.createElement('img');
        img.src = './img/unpaidgrub.png';
    }
    return img;
}
let loadingscreen = load(randomNumber);
$("#output").html(loadingscreen);

setTimeout(()=>{
    const finite=document.getElementById('output');
    finite.style.display='none';
}, 3000);


$(document).ready(function() {
   let isAwake = false;

   $("#chia").on("click", function(){
    if (!isAwake){
        $(".chia-wrapper").removeClass("resting").addClass("active");
        isAwake = true;
    }
   });

   $("#greenhouse").on("click", function(){
        window.location.href= "greenhouse/index.html";
   });
});