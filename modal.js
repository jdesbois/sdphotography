document.addEventListener('DOMContentLoaded', function(){ 
    //selecting elements
    var image = document.getElementsByTagName("img");
    var blackOut = document.getElementById("blackOut");
    var close = document.getElementById("close");
    var modalImage = document.getElementById("modal-image");


    //loop through image array add onclick to each img
    for (var i=0; i < image.length; i++) {
    image[i].onclick = function() {
        blackOut.style.display = "block";
        modalImage.src = this.src;
    }
    }

    //close out modal/blackout screen
    close.onclick = function() {
    blackOut.style.display = "none";
    }
}, false);