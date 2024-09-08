
document.getElementById('search-icon').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    const navLinks = document.querySelector('.nav-links');
    const searchIcon = document.getElementById('search-icon');

    if (searchInput.classList.contains('hidden')) {
        searchInput.classList.remove('hidden');
        searchInput.classList.add('visible');
        searchInput.focus();
        navLinks.style.display = 'none';  // Sembunyikan navigasi
        searchIcon.style.display = 'none';  // Sembunyikan ikon search
        searchInput.focus(); // Fokus otomatis pada input
    }
});

document.getElementById('search-input').addEventListener('blur', function() {
    const searchInput = document.getElementById('search-input');
    const navLinks = document.querySelector('.nav-links');
    const searchIcon = document.getElementById('search-icon');

    if (searchInput.classList.contains('visible')) {
        searchInput.classList.remove('visible');
        searchInput.classList.add('hidden');
        navLinks.style.display = 'flex';  // Tampilkan kembali navigasi
        searchIcon.style.display = 'block';  // Tampilkan kembali ikon search
    }
});



// Get modal element
const modal = document.getElementById("commentModal");

// Get open modal button
const openModalBtn = document.getElementById("openModalBtn");

// Get close button
const closeBtn = document.getElementsByClassName("close")[0];

// Listen for open click
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Listen for close click
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Listen for outside click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Display the comment (this is just for demo purposes)
    alert(`Thank you, ${name}! Your comment: "${comment}" has been submitted.`);

    // Close the modal
    modal.style.display = "none";

    // Clear the form
    this.reset();
});

