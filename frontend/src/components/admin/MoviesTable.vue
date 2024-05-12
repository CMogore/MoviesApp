<template>
  <div>
    <!-- Table to display movies -->
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">Title</th>
          <th class="px-4 py-2">Director</th>
          <th class="px-4 py-2">Year</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Poster</th>
          <th class="px-4 py-2">Trailer</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Display movies data -->
        <tr v-for="movie in movies" :key="movie.id">
          <td class="border px-4 py-2">{{ movie.title }}</td>
          <td class="border px-4 py-2">{{ movie.director }}</td>
          <td class="border px-4 py-2">{{ movie.year }}</td>
          <td class="border px-4 py-2">{{ movie.description }}</td>
          <td class="border px-4 py-2"><img :src="require(`../../assets/${movie.poster}.png`)" alt="Poster" class="h-20"></td>
          <td class="border px-4 py-2">
            <iframe width="100" height="60" :src="getEmbedUrl(movie.trailer)" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="border px-4 py-2">
            <button @click="editMovie(movie)" class="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">Edit</button>
            <button @click="deleteMovie(movie.id)" class="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Create Movie button -->
    <div class="mt-4">
      <button @click="openCreateMovieModal" class="px-4 py-2 bg-blue-500 text-white rounded-md">Add Movie</button>
    </div>

    <!-- Movie creation/edit modal -->
    <MovieModal ref="movieModal" @closeModal="closeCreateMovieModal" :movieData="selectedMovie" />
  </div>
</template>

<script>
import MovieModal from '@/components/admin/CreateMovies.vue';

export default {
  components: {
    MovieModal
  },
  data() {
    return {
      movies: [
        { id: 1, title: 'Movie 1', director: 'Director 1', year: 2022, description: 'Description of Movie 1', poster: 'image', trailer: 'https://www.youtube.com/embed/trailer1' },
        { id: 2, title: 'Movie 2', director: 'Director 2', year: 2023, description: 'Description of Movie 2', poster: 'image1', trailer: 'https://www.youtube.com/embed/trailer2' }
        // Add more movie data
      ],
      selectedMovie: null
    };
  },
  methods: {
    editMovie(movie) {
      this.selectedMovie = { ...movie }; // Clone movie object for editing
      this.$refs.movieModal.openModal();
    },
    deleteMovie(movieId) {
      // Implement delete movie functionality (e.g., send request to delete movie from backend)
      const index = this.movies.findIndex(movie => movie.id === movieId);
      if (index !== -1) {
        this.movies.splice(index, 1);
        console.log('Delete Movie ID:', movieId);
      }
      
    },
    openCreateMovieModal() {
      if (this.$refs.movieModal) {
        this.selectedMovie = null; // Reset selected movie for add operation
        this.$refs.movieModal.openModal();
      }
    },
    closeCreateMovieModal() {
      if (this.$refs.movieModal) {
        this.$refs.movieModal.closeModal();
      }
    },
    getEmbedUrl(trailerLink) {
      // Helper method to generate embedded YouTube URL
      return trailerLink.replace('watch?v=', 'embed/');
    }
  }
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
