<template>
    <div class="movie-slider">
      <div class="flex items-center space-x-4 overflow-x-auto scrollbar-hide ml-2">
        <div
          v-for="(movie, index) in movies"
          :key="index"
          class="movie-card"
          @click="showModal(movie)"
        >
          <img :src="require(`../assets/${movie.poster}`)" alt="Movie Poster" class="w-full h-auto rounded-lg cursor-pointer">
          <div class="mt-2 px-2">
            <h3 class="text-lg font-semibold">{{ movie.title }}</h3>
            <p class="text-sm text-gray-500">{{ movie.year }}</p>
          </div>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="selectedMovie" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="modal-content bg-white p-8 rounded-lg max-w-lg">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold">{{ selectedMovie.title }}</h2>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-800 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <img :src="require(`../assets/${selectedMovie.poster}`)" alt="Movie Poster" class="w-96 h-auto rounded-lg mb-4">
          <p class="text-sm text-gray-600 mb-2">Year: {{ selectedMovie.year }}</p>
          <p class="text-sm text-gray-600 mb-4">Director: {{ selectedMovie.director }}</p>
          <p class="text-gray-800">{{ selectedMovie.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieSlider',
    props: {
      movies: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedMovie: null
      };
    },
    methods: {
      showModal(movie) {
        this.selectedMovie = movie;
        document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
      },
      closeModal() {
        this.selectedMovie = null;
        document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
      }
    }
  };
  </script>
  
  <style scoped>
  .movie-slider {
    padding: 20px 0;
  }
  
  .movie-card {
    flex-shrink: 0;
    width: 300px; /* Set the width of each movie card */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .movie-card:hover {
    transform: translateY(-5px);
  }
  
  /* Style the image to fit within the card */
  .movie-card img {
    width: 100%; /* Make the image take up 100% of the card's width */
    height: auto; /* Ensure the image maintains its aspect ratio */
    object-fit: cover; /* Crop the image to fill the container while preserving aspect ratio */
    border-radius: 8px; /* Apply rounded corners to the image */
  }
  
  /* Style the modal */
  .modal-content {
    max-width: 90%;
  }
  </style>
  