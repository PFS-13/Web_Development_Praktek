const posterImages = [
    'assets/images/movies1.jpg',
    'assets/images/movies2.jpg',
    'assets/images/movies3.jpg'
    // Add more poster images as needed
];

let currentIndex = 0;

function changePoster() {
    currentIndex = (currentIndex + 1) % posterImages.length;
    document.getElementById('poster-image').src = posterImages[currentIndex];
}

setInterval(changePoster, 3000); // Change poster every 3 seconds
