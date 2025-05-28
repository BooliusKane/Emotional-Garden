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

$(document).ready(function() {
    let isAwake = false;
 
    $("#chia").on("click", function(){
        if (!isAwake) {
            $(".chia-wrapper").removeClass("resting").addClass("active");
            isAwake = true;
        }
    });
 
    $("#greenhouse").on("click", function(){
         window.location.href = "greenhouse/index.html";
    });
 });

//  emotion wheel:
// appear after loading screen (???)
setTimeout(()=>{
    const finite=document.getElementById('output');
    finite.style.display='none';
      // Now that loading is done, initialize the emotion wheel
  initializeEmotionWheel();
}, 3000);

// interaction
function initializeEmotionWheel() {
    const segmentIds = ["anger", "disgust", "fear", "happiness", "sadness", "surprise"];
    const emotionText = document.getElementById("selected-emotion");
  
    segmentIds.forEach(id => {
      const segment = document.getElementById(id);
      if (segment) {
        segment.style.cursor = "pointer";
  
        segment.addEventListener("click", () => {
          // Deselect all segments
          segmentIds.forEach(otherId => {
            const otherSegment = document.getElementById(otherId);
            if (otherSegment) {
              otherSegment.classList.remove("selected");
            }
          });
  
          // Highlight selected segment
          segment.classList.add("selected");
  
          // Update selected emotion text
          const label = id.slice(1);
          if (emotionText) {
            emotionText.textContent = `Selected: ${label}`;
          }
  
          // Redirect user to relevant page
          window.location.href = "greenhouse/index.html";
        });
      }
    });
  }
  