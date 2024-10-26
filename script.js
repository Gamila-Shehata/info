document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.full-bg-gallery img');
    const title = document.getElementById('title');
    const latestSongsBtn = document.getElementById('latest-songs-btn');
    const latestAlbumsBtn = document.getElementById('latest-albums-btn');

    // Define colors for each image
    const colors = [
        { titleColor: '#ffffff', buttonColor: '#ffffff' },  // Colors for photo1
        { titleColor: '#000000', buttonColor: '#000000' },  // Colors for photo2
        { titleColor: '#ffffff', buttonColor: '#ffffff' },  // Colors for photo3
    ];

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
                // Change title and button colors based on the current slide
                title.style.color = colors[currentIndex].titleColor;
                latestSongsBtn.style.color = colors[currentIndex].buttonColor;
                latestAlbumsBtn.style.color = colors[currentIndex].buttonColor;
            }
        });
        currentIndex = (currentIndex + 1) % slides.length;
    }

    // Start slideshow
    showSlides(); // Show the first slide immediately
    setInterval(showSlides, 5000); // Change every 5 seconds
});

function displaySongs() {
    document.getElementById('content-display').style.display = 'block';
    document.getElementById('song-list').style.display = 'block';
    document.getElementById('photo-albums').style.display = 'none';
}

function displayPhotoAlbums() {
    document.getElementById('content-display').style.display = 'block';
    document.getElementById('song-list').style.display = 'none';
    document.getElementById('photo-albums').style.display = 'block';
}
