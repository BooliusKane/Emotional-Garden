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

$("#expand-details1").click(function(){
    $("#details1").toggleClass("active");
});

$("#expand-details2").click(function(){
    $("#details2").toggleClass("active");
});

$("#expand-details3").click(function(){
    $("#details3").toggleClass("active");
});

$("#expand-details4").click(function(){
    $("#details4").toggleClass("active");
});

$("#expand-details5").click(function(){
    $("#details5").toggleClass("active");
});

$("#expand-details6").click(function(){
    $("#details6").toggleClass("active");
});