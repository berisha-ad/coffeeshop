



//Image Slider


let imageSliderIndex = 0;

const imageSlides = document.querySelectorAll(".slide")

let autoSlide; 
let isPlaying = false; 

// Slider Funktionen

function showImage() {
    for (let i = 0; i < imageSlides.length; i++) {
        imageSlides[i].style.display = "none";
    }
    imageSlides[imageSliderIndex].style.display = "block";
    toggleActivePoint();
}

function nextImage() {
    imageSliderIndex = (imageSliderIndex + 1) % imageSlides.length; // modulusOperator -> Restwert einer Division
    showImage();
}

function prevImage() {
    imageSliderIndex = (imageSliderIndex - 1 + imageSlides.length) % imageSlides.length;
    showImage();
}

function startAutoSlide() {
    autoSlide = setInterval(nextImage, 3000);
    isPlaying = true;
    document.querySelector("#playPauseButton").textContent = "Pause";
}

function stopAutoSlide() {
    clearInterval(autoSlide);
    isPlaying = false;
    document.querySelector("#playPauseButton").textContent = "Play"; // Button-Text ändern
}

function updateSlider() {
    if (isPlaying == true) {
        clearInterval(autoSlide);
        startAutoSlide();
    }
}


// Points

let dotArray = [];
let points = document.getElementById("points");

// Points Funktionen

function createDot(index) {
    let dot = document.createElement("div");
    points.appendChild(dot);
    dot.classList.add("point")
    dotArray.push(dot);
    dot.addEventListener("click", () => {
        imageSliderIndex = index;
        showImage();
        updateSlider();})
}

function toggleActivePoint () {
    dotArray.forEach(dot => dot.classList.remove("point-active"));
    dotArray[imageSliderIndex].classList.add("point-active");
}

// Eventlisteners

document.querySelector("#prevButton").addEventListener("click", function() {
    prevImage();
    updateSlider();
    });

document.querySelector("#nextButton").addEventListener("click", function() {
    nextImage();
    updateSlider(); 
    });

document.querySelector("#playPauseButton").addEventListener("click", function() {
    if (isPlaying) {
        stopAutoSlide();
    } else {
        startAutoSlide();
    }
});

// Zu beginn ausgeführte Funktionen

imageSlides.forEach((slide, index) => createDot(index));

showImage();
startAutoSlide();

