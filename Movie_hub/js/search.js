// Contoh array data film
const movies = [
    { title: "Inception", year: 2010 },
    { title: "Interstellar", year: 2014 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Parasite", year: 2019 },
    { title: "The Matrix", year: 1999 },
];

function searchMovie() {
    const input = document.getElementById("movie-input").value.toLowerCase();
    const movieList = document.getElementById("movie-list");

    // Clear previous results
    movieList.innerHTML = "";

    // Filter dan tampilkan film yang sesuai
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(input)
    );

    // Jika tidak ada hasil
    if (filteredMovies.length === 0) {
        movieList.innerHTML = "<p>No movies found.</p>";
    } else {
        // Tampilkan hasil film
        filteredMovies.forEach(movie => {
            const movieItem = document.createElement("div");
            movieItem.classList.add("movie-item");
            movieItem.innerHTML = `<h3>${movie.title}</h3><p>Year: ${movie.year}</p>`;
            movieList.appendChild(movieItem);
        });
    }
}
