/*
    Loading Screen
    JavaScript - Grubby Loading Screens
    Daisy Ly
    May 2025
*/

// Array of image URLs - Replace with your image file names
const images = [
   img.src = './img/unpaidgrub.png',
   img.src = './img/barrowgrub.png',
   img.src = './img/sleepygrubsky.png',
   img.src = './img/leafgrub.png',
   img.src = './img/watergrub.png',
   img.src = './img/pupasoilgrub.png',
];

// Function to set a random background image
function setRandomBackgroundImage() {
   // Get a random index from the array of images
   const randomIndex = Math.floor(Math.random() * images.length);

   // Set the selected image as a CSS background-image for the body element
      document.body.style.backgroundImage=`url('${images[randomindex]}')`;
}

// Call the function to initialize a random background image when the page loads

setRandomBackgroundImage();