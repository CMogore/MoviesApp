<template>
  <div class="max-w-7xl mx-auto px-4">
    <h1 class="text-3xl font-bold mb-8 mt-4">Genre: {{ genre }}</h1>
    <div v-if="filteredMovies.length === 0" class="text-gray-500">
      <p>No movies found in this genre.</p>
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
      genre: null,
      movies: [
        { id: 1, title: 'Movie 1', year: 2022, poster: 'image1', genre: 'Action' },
        { id: 2, title: 'Movie 2', year: 2023, poster: 'image', genre: 'Comedy' },
        { id: 3, title: 'Movie 3', year: 2021, poster: 'image3', genre: 'Action' },
        { id: 4, title: 'Movie 4', year: 2020, poster: 'image', genre: 'Drama' },
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
    filterMoviesByGenre() {
      if (this.genre) {
        this.filteredMovies = this.movies.filter(movie => movie.genre === this.genre);
      } else {
        this.filteredMovies = [];
      }
    }
  },
  watch: {
    '$route.params.genre'(newGenre) {
      this.genre = newGenre;
      this.filterMoviesByGenre();
    }
  },
  created() {
    this.genre = this.$route.params.genre;
    this.filterMoviesByGenre();
  },
  components: {
    MovieModal
  }
};
</script>

<style>
/* Add scoped styles here */
</style>
