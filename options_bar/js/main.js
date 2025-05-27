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