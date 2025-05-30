function toggleImage() {
  var img = document.getElementById("overview");
  if (img.src.match("img/overview.png")) {
    img.src = "img/instructions.png";
  } else {
    img.src = "img/overview.png";
  }
}