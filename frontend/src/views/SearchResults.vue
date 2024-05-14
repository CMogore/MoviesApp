<template>
  <div class="max-w-7xl mx-auto px-4">
    <h1 class="text-3xl font-bold mb-8 mt-4">Search Results</h1>
    <div v-if="filteredMovies.length === 0" class="text-gray-500">
      <p>No results found.</p>
    </div>
    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        <div v-for="movie in filteredMovies" :key="movie.id" class="flex flex-col items-center space-y-4">
          <img @click="openModal(movie)" :src="require(`@/assets/${movie.poster}.png`)" alt="Movie Poster" class="w-56 h-72 rounded-lg cursor-pointer">
          <div class="text-center">
            <h2 class="text-lg font-semibold mb-2">{{ movie.title }}</h2>
            <!-- <p class="text-gray-600 text-sm mb-2">Director: {{ movie.director }}</p>
            <p class="text-gray-600 text-sm mb-2">Year: {{ movie.year }}</p>
            <p class="text-gray-600 text-sm mb-4">Genre: {{ movie.genre }}</p>
            <button @click="openModal(movie)" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none">View Details</button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- MovieModal component -->
    <MovieModal v-if="selectedMovie" :isOpen="isModalOpen" :movie="selectedMovie" @closeModal="closeModal" />
  </div>
</template>

<script>
import MovieModal from '@/components/MovieModal.vue'; // Import MovieModal component

export default {
  data() {
    return {
      movies: [
        { id: 1, title: 'Movie 1', year: 2022, director: 'Director A', poster: 'image', genre: 'Action' },
        { id: 2, title: 'Movie 2', year: 2023, director: 'Director B', poster: 'image1', genre: 'Comedy' },
        { id: 2, title: 'Movie 2', year: 2023, director: 'Director B', poster: 'image1', genre: 'Comedy' },
        { id: 2, title: 'Movie 2', year: 2023, director: 'Director B', poster: 'image1', genre: 'Comedy' },
        { id: 2, title: 'Movie 2', year: 2023, director: 'Director B', poster: 'image1', genre: 'Comedy' },
        { id: 2, title: 'Movie 2', year: 2023, director: 'Director B', poster: 'image1', genre: 'Comedy' },
        { id: 2, title: 'Movie 2', year: 2023, director: 'Director B', poster: 'image1', genre: 'Comedy' },


        // Add more movie objects as needed
      ],
      filteredMovies: [],
      selectedMovie: null,
      isModalOpen: false
    };
  },
  methods: {
    openModal(movie) {
      this.selectedMovie = movie;
      this.isModalOpen = true;
    },
    closeModal() {
      this.selectedMovie = null;
      this.isModalOpen = false;
    },
    handleSearch() {
      const searchTermLC = this.$route.query.term.trim().toLowerCase();
      if (searchTermLC === '') {
        this.filteredMovies = []; // Clear filtered results if search term is empty
        this.$router.push('/');
      } else {
        this.filteredMovies = this.movies.filter(movie =>
          this.doesMovieMatchSearchTerm(movie, searchTermLC)
        );
      }
    },
    doesMovieMatchSearchTerm(movie, searchTermLC) {
      // Check if any field of the movie matches the search term
      const { title, director, year, genre } = movie;
      return (
        title.toLowerCase().includes(searchTermLC) ||
        director.toLowerCase().includes(searchTermLC) ||
        genre.toLowerCase().includes(searchTermLC) ||
        year.toString().includes(searchTermLC) // Convert year to string before checking
        // Add more fields as needed
      );
    }
  },
  watch: {
    '$route.query.term'(newTerm) {
      this.handleSearch();
    }
  },
  components: {
    MovieModal
  }
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
