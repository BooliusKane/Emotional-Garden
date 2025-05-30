// General click effect
const clickSound = document.getElementById("click");

document.addEventListener("click", function (e) {
  if (e.target.closest("#chia")) return; // skip if clicked element is #chia or inside it

  clickSound.currentTime = 0;
  clickSound.play();
});