// main.js - handles the clickable assets of the three bar options tab
// Used by: index.html (main page)

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const constructionImage = document.querySelector('.under_construction');
    
    menuIcon.addEventListener('click', function() {
        // Toggle the image visibility
        if (constructionImage.style.display === 'block') {
            constructionImage.style.display = 'none';
        } else {
            constructionImage.style.display = 'block';
        }
        
        // Alternative using class toggle:
        // constructionImage.classList.toggle('visible');
    });
});

var expandDetailsButton = document.getElementById("expand-details");
var myTitle = document.getElementById("myTitle");
var myList = document.getElementById("myList");

expandDetailsButton.click(function(){
    expand-details.classList.toggle("active");
    // Append a new div to our output div
    $("#output").html()
});



$("#reveal").click(function(){
    // Append a new div to our output div
    $("#output1").html('<div class="text1"><p>' + "Ajax AKA Childe AKA Tartaglia (Genshin Impact)" + '</p></div>');
});