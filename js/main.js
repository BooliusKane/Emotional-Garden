// main.js - handles global clickable assets like Chia and greenhosue
// Used by: index.html (main page)

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