
// 5 seconds timer
setTimeout(function() {
    // Hide the GIF after
    document.getElementById("front-vid").style.display = "none";
    
    // Body
    document.getElementById("front-content").style.display = "block";
}, 5000); // 5000 milliseconds = 5 seconds

// Delay the fading animation of the background image by 23 seconds
setTimeout(function() {
    document.body.classList.add('animate-background');
}, 5000); // 1000 per seconds in milliseconds
