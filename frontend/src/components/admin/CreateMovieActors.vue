<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg max-w-lg">
        <h2 class="text-xl font-semibold mb-4">{{ relationshipToEdit ? 'Edit' : 'Add' }} Movie-Actor Relationship</h2>
        <!-- Form to add/edit movie-actor relationship -->
        <form @submit.prevent="relationshipToEdit ? updateRelationship() : addRelationship()">
          <div class="mb-4">
            <label for="movieId" class="block text-sm font-medium text-gray-700">Movie ID:</label>
            <input type="number" id="movieId" v-model="formData.movieId" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="actorId" class="block text-sm font-medium text-gray-700">Actor ID:</label>
            <input type="number" id="actorId" v-model="formData.actorId" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeModal" class="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">{{ relationshipToEdit ? 'Update' : 'Add' }} Relationship</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      relationshipToEdit: Object // If not null, indicates an existing relationship to edit
    },
    data() {
      return {
        isOpen: false,
        formData: {
        movieId: '', // Initialize form data properties
        actorId: ''
      }
      };
    },
    watch: {
    // Watch for changes in relationshipToEdit prop
    relationshipToEdit(newVal) {
      // Update form data when relationshipToEdit changes
      if (newVal) {
        this.formData.movieId = newVal.movie_id;
        this.formData.actorId = newVal.actor_id;
      }
    }
  },
    methods: {
      openModal() {
        this.isOpen = true;
      if (this.relationshipToEdit) {
        // Initialize form data if editing existing relationship
        this.formData.movieId = this.relationshipToEdit.movie_id;
        this.formData.actorId = this.relationshipToEdit.actor_id;
        this.resetForm();

      } else {
        // Reset form data if adding new relationship
        this.resetForm();
      }
      },
      closeModal() {
        this.isOpen = false;
        this.resetForm();
      },
      resetForm() {
         // Reset form data to empty values
          this.formData.movieId = '';
          this.formData.actorId = '';
      },
      addRelationship() {
        // Implement add movie-actor relationship functionality (e.g., send data to backend)
        console.log('Adding new movieactor:', this.formData);
      this.closeModal();
      },
      updateRelationship() {
        // Implement update movie-actor relationship functionality (e.g., send updated data to backend)
        console.log('Updated movieactor Data:', this.formData);
        this.closeModal();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles */
  </style>
  