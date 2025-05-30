
document.addEventListener("DOMContentLoaded", function () {
  // Get modal and button
  const modal = document.getElementById("myModal");
  const openBtn = document.getElementById("openAudio");

  // Get buttons
  const audioPlus = document.getElementById("audioPlus");
  const audioMinus = document.getElementById("audioMinus");
  const audioPlus2 = document.getElementById("audioPlus2");
  const audioMinus2 = document.getElementById("audioMinus2");

  // Increase/decrease logs
  plus1.onclick = () => console.log("volume increase");
  minus1.onclick = () => console.log("volume decrease");
  plus2.onclick = () => console.log("volume increase!");
  minus2.onclick = () => console.log("volume decrease!");

  // Function to control worms
  function setupWormControls(wormIds, plusBtnId, minusBtnId) {
    const wormLevels = wormIds.map(id => document.getElementById(id));
    let currentLevel = -1;

    function updateDisplay() {
      wormLevels.forEach((el, idx) => {
        el.style.display = idx === currentLevel ? "block" : "none";
      });

      if (currentLevel === -1) {
        wormLevels.forEach(el => el.style.display = 'none');
    }
  }
    document.getElementById(plusBtnId).addEventListener("click", () => {
      if (currentLevel < wormLevels.length - 1) {
        currentLevel++;
        updateDisplay();
      }
    });

    document.getElementById(minusBtnId).addEventListener("click", () => {
      if (currentLevel > -1) {
        currentLevel--;
        updateDisplay();
      }
    });

    updateDisplay(); // Initial display
  }

  // Initialize worm sets
  setupWormControls(
    ["frstWorm25", "frstWorm50", "frstWorm75", "frstWorm100"],
    "plus1",
    "minus1"
  );

  setupWormControls(
    ["scndWorm25", "scndWorm50", "scndWorm75", "scndWorm100"],
    "plus2",
    "minus2"
  );
});

// General click effect
const clickSound = document.getElementById("click");

document.addEventListener("click", function (e) {
  if (e.target.closest("#chia")) return; // skip if clicked element is #chia or inside it

  clickSound.currentTime = 0;
  clickSound.play();
});