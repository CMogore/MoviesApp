<template>
  <div>
    <!-- Table to display genres -->
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Display genres data -->
        <tr v-for="genre in genres" :key="genre.id">
          <td class="border px-4 py-2">{{ genre.id }}</td>
          <td class="border px-4 py-2">{{ genre.name }}</td>
          <td class="border px-4 py-2">
            <button @click="editGenre(genre)" class="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">Edit</button>
            <button @click="deleteGenre(genre.id)" class="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Create Genre button -->
    <div class="mt-4">
      <button @click="openCreateGenreModal" class="px-4 py-2 bg-blue-500 text-white rounded-md">Add Genre</button>
    </div>

    <!-- Genre creation/edit modal -->
    <GenreModal ref="genreModal" @closeModal="closeCreateGenreModal" :genreData="selectedGenre" />
  </div>
</template>

<script>
import GenreModal from '@/components/admin/CreateGenres.vue';

export default {
  components: {
    GenreModal
  },
  data() {
    return {
      genres: [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Comedy' }
        // Add more genre data
      ],
      selectedGenre: null
    };
  },
  methods: {
    openCreateGenreModal() {
      if (this.$refs.genreModal) {
        this.selectedGenre = null; // Reset selected genre for add operation
        this.$refs.genreModal.openModal();
      }
    },
    closeCreateGenreModal() {
      if (this.$refs.genreModal) {
        this.$refs.genreModal.closeModal();
      }
    },
    editGenre(genre) {
      this.selectedGenre = { ...genre }; // Clone genre object for editing
      this.$refs.genreModal.openModal();
    },
    deleteGenre(genreId) {
      // Implement delete genre functionality (e.g., send request to delete genre from backend)
      const index = this.genres.findIndex(genre => genre.id === genreId);
      if (index !== -1) {
        this.genres.splice(index, 1);
        console.log('Delete Genre ID:', genreId);
      }
    }
  }
};
</script>

<style scoped>
/* Add scoped styles */
</style>
