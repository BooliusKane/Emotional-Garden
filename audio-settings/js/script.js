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

// function to control worms stays as you have it
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