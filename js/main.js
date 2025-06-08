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

    // AUDIO MODAL
    $("#openModal").on("click", function () {
      $("#myModal").fadeIn();
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

document.addEventListener("DOMContentLoaded", function () {
  // get modal
  const modal = document.getElementById("myModal");

  // get audio control buttons
  const plus1 = document.getElementById("plus1");
  const minus1 = document.getElementById("minus1");
  const plus2 = document.getElementById("plus2");
  const minus2 = document.getElementById("minus2");

  // get audio elements
  const music = document.getElementById("music");
  const click = document.getElementById("click");

  // initialize volume
  music.volume = 0;
  click.volume = 0;
  chiaSound.volume = 0;
  const step = 0.25;

  // Setup worms for music
  setupWormControls(
    ["frstWorm25", "frstWorm50", "frstWorm75", "frstWorm100"],
    plus1,
    minus1,
    music
  );

  // Setup worms for click sounds
  setupWormControls(
    ["scndWorm25", "scndWorm50", "scndWorm75", "scndWorm100"],
    plus2,
    minus2,
    click
  );

  // iframe stuff
  window.addEventListener("message", function (event) {
    switch (event.data) {
      case "playMusic":
        music.play();
        break;
      case "pauseMusic":
        music.pause();
        break;
      case "volUp":
        music.volume = Math.min(1, music.volume + step);
        break;
      case "volDown":
        music.volume = Math.max(0, music.volume - step);
        break;
      case "playClick":
        click.currentTime = 0;
        click.play();
        break;
    }
  });
});

// function to control worms
function setupWormControls(wormIds, plusBtn, minusBtn, audioElement) {
  const wormLevels = wormIds.map((id) => document.getElementById(id));
  const step = 0.25;

  function updateDisplay(volume) {
    let level = Math.round(volume / step);
    wormLevels.forEach((el, idx) => {
      if (el) {
        el.style.display = idx === level - 1 ? "block" : "none";
      }
    });

    if (volume === 0) {
      wormLevels.forEach((el) => {
        if (el) el.style.display = "none";
      });
    }
  }

  plusBtn.addEventListener("click", () => {
    if (audioElement.volume < 1) {
      audioElement.volume = Math.min(1, audioElement.volume + step);
      updateDisplay(audioElement.volume);
      console.log("Volume up:", audioElement.volume);
    }
  });

  minusBtn.addEventListener("click", () => {
    if (audioElement.volume > 0) {
      audioElement.volume = Math.max(0, audioElement.volume - step);
      updateDisplay(audioElement.volume);
      console.log("Volume down:", audioElement.volume);
    }
  });

  // initial state
  audioElement.volume = 0;
  updateDisplay(audioElement.volume);
}