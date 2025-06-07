$(document).ready(function () {
  console.log("jQuery ready!");

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

  let counter = 3;
  const counterInterval = setInterval(() => {
    counter--;
    if (counter <= 0) {
      clearInterval(counterInterval);
      $("#output").fadeOut(500, function () {
        $(this).remove(); 
        activateInteractions();
      });
    }
  }, 1000);

  // Function to activate all interactions
  function activateInteractions() {
  // MENU INTERACTIONS (moved here!)
  $("#menuIcon").on("click", function (event) {
    const $dropdown = $("#menuDropdown");

    if ($dropdown.hasClass("hidden")) {
      $dropdown.removeClass("hidden").css("display", "flex");
    } else {
      $dropdown.addClass("hidden").css("display", "none");
    }

    event.stopPropagation();
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest("#menuIcon, #menuDropdown").length) {
      $("#menuDropdown").addClass("hidden").css("display", "none");
    }
  });

  // CHIA CLICK INTERACTION
  let isAwake = false;
  $("#chia").on("click", function () {
    if (!isAwake) {
      $(".chia-wrapper").removeClass("resting").addClass("active");
      isAwake = true;
    }
  chiaSound.currentTime = 0;
  chiaSound.play();
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
      segment.classList.remove("hidden");
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

console.log("jQuery ready!");

// Audio Effects
const chiaSound = document.getElementById("chiaSound");
const clickSound = document.getElementById("click");

// General click effect
document.addEventListener("click", function (e) {
  if (e.target.closest("#chia")) return; // skip if clicked element is #chia or inside it

  clickSound.currentTime = 0;
  clickSound.play();
});

window.addEventListener("message", function (event) {
  switch (event.data) {
    case "playClick":
      document.getElementById("click").play();
      break;
    case "playChia":
      document.getElementById("chiaSound").play();
      break;
  }
});