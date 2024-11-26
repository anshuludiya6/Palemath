// Get the carousel container
const carousel = document.getElementById('carousel');

// Clone the cards inside the carousel to create infinite loop effect
const cards = document.querySelectorAll('.Card_Carosal > div');
cards.forEach(card => {
  carousel.appendChild(card.cloneNode(true));  // Clone each card and append it
});

// Function to handle infinite scroll behavior
function handleInfiniteScroll() {
  if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
    // If user scrolls to the halfway point, reset to the beginning
    carousel.scrollLeft = 0;
  }
}

// Add an event listener to detect the scroll position and trigger the reset
carousel.addEventListener('scroll', handleInfiniteScroll);
