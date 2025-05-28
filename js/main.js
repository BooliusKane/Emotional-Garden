$(document).ready(function() {
  // LOADING SCREEN
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  function load(randomNumber) {
    let img = document.createElement('img');
    switch (randomNumber) {
      case 1: img.src = './img/leafgrub.png'; break;
      case 2: img.src = './img/sleepygrubsky.png'; break;
      case 3: img.src = './img/pupasoilgrub.png'; break;
      case 4: img.src = './img/barrowgrub.png'; break;
      case 5: img.src = './img/watergrub.png'; break;
      case 6: img.src = './img/unpaidgrub.png'; break;
    }
    return img;
  }

  let loadingscreen = load(randomNumber);
  $("#output").html(loadingscreen);

  let counter = 5;
  const counterInterval = setInterval(() => {
    counter--;
    if (counter <= 0) {
      clearInterval(counterInterval);
      // Hide the loading screen div after countdown
      $("#output").fadeOut(500, function () {
        // Enable interactions and show the emotion wheel AFTER loading screen fades out
        activateInteractions();
      });
    }
  }, 1000);

  // Function to activate all click interactions and show emotion wheel
  function activateInteractions() {
    // CHIA CLICK INTERACTION
    let isAwake = false;
    $("#chia").on("click", function () {
      if (!isAwake) {
        $(".chia-wrapper").removeClass("resting").addClass("active");
        isAwake = true;
      }
    });

    // GREENHOUSE CLICK
    $("#greenhouse").on("click", function () {
      window.location.href = "greenhouse/index.html";
    });

    // EMOTION WHEEL
    const segmentIds = ["anger", "disgust", "fear", "happiness", "sadness", "surprise"];
    segmentIds.forEach(id => {
      const segment = document.getElementById(id);
      if (segment) {
        segment.classList.remove('hidden'); // Now make it visible
        segment.style.cursor = "pointer";

        segment.addEventListener("click", () => {
          let currentCount = parseInt(localStorage.getItem(id + "_clicks")) || 0;
          currentCount++;
          localStorage.setItem("activeEmotion", id);
          localStorage.setItem(id + "_clicks", currentCount);
          window.location.href = "greenhouse/index.html";
        });
      }
    });
  }
});