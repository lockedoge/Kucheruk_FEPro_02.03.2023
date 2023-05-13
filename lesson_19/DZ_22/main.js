// DZ 22.

var images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg"
];

var currentIndex = 0;
var sliderImage = document.getElementById("slider-image");
var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");

function updateImage() {
  sliderImage.src = images[currentIndex];
  
  if (currentIndex === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }
  
  if (currentIndex === images.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

prevButton.addEventListener("click", function() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
});

nextButton.addEventListener("click", function() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
});

updateImage();