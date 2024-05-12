<template>
    <div>
      <!-- Table to display movie-genres relationships -->
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Movie ID</th>
            <th class="px-4 py-2">Genre ID</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Display movie-genres data -->
          <tr v-for="(relationship, index) in movieGenres" :key="index">
            <td class="border px-4 py-2">{{ relationship.movie_id }}</td>
            <td class="border px-4 py-2">{{ relationship.genre_id }}</td>
            <td class="border px-4 py-2">
              <button @click="editMovieGenre(index)" class="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">Edit</button>
              <button @click="deleteMovieGenre(index)" class="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Add Movie-Genre Relationship button -->
      <div class="mt-4">
        <button @click="openAddRelationshipModal" class="px-4 py-2 bg-blue-500 text-white rounded-md">Add Relationship</button>
      </div>
  
      <!-- Add Movie-Genre Relationship modal -->
      <AddMovieGenreModal ref="addRelationshipModal" @closeModal="closeAddRelationshipModal" :relationshipToEdit="selectedRelationship" />
    </div>
  </template>
  
  <script>
  import AddMovieGenreModal from '@/components/admin/CreateMovieGenres.vue';
  
  export default {
    components: {
      AddMovieGenreModal
    },
    data() {
      return {
        movieGenres: [
          { movie_id: 1, genre_id: 1 },
          { movie_id: 1, genre_id: 2 }
          // Add more movie-genres data
        ],
        selectedRelationship: null // Store the selected relationship for editing
      };
    },
    methods: {
      openAddRelationshipModal() {
        if (this.$refs.addRelationshipModal) {
          this.selectedRelationship = null; // Reset selected relationship for add operation
          this.$refs.addRelationshipModal.openModal();
        }
      },
      closeAddRelationshipModal() {
        if (this.$refs.addRelationshipModal) {
          this.$refs.addRelationshipModal.closeModal();
        }
      },
      editMovieGenre(index) {
        // Set the selected relationship for editing
        this.selectedRelationship = { ...this.movieGenres[index] };
        this.$refs.addRelationshipModal.openModal();
      },
      deleteMovieGenre(index) {
        // Implement delete movie-genre relationship functionality
        
        this.movieGenres.splice(index, 1);
        console.log('Deleted Movie-Genre Relationship at index:', index);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles */
  </style>
  