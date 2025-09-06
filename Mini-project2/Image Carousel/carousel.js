// Get references
let images = document.querySelectorAll(".carousel-images img");
let nextBtn = document.querySelector("#nextBtn");
let previousBtn = document.querySelector("#prevBtn");

let currentIndex = 0;

// Function to show the image at currentIndex
function showImage(currentIndex) {
  images.forEach(image => {
    image.classList.remove('active');
  });

  if (currentIndex >= 0 && currentIndex < images.length) {
    images[currentIndex].classList.add('active');
  }
}

// Next button click
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
});

// Previous button click
previousBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
});

// ✅ Initialize by showing the first image
showImage(currentIndex);
