<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-lg max-w-lg">
      <h2 class="text-xl font-semibold mb-4">{{ genreData ? 'Edit Genre' : 'Add Genre' }}</h2>
      <!-- Form to add/edit genre details -->
      <form @submit.prevent="genreData ? updateGenre() : addGenre()">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="name" v-model="formData.name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="flex justify-end">
          <button type="button" @click="closeModal" class="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none">Cancel</button>
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">{{ genreData ? 'Save' : 'Add' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    genreData: Object // Pass selected genre data for editing
  },
  data() {
    return {
      isOpen: false,
      formData: {
        name: ''
      }
    };
  },
  watch: {
    genreData(newVal) {
      // Update form data when genreData changes
      if (newVal) {
        this.formData.name = newVal.name;
      }
    }
  },
  methods: {
    openModal() {
      this.isOpen = true;
      if (this.genreData) {
        // Initialize form data if editing existing genre
        this.formData.name = this.genreData.name;
        this.resetForm();

      } else {
        // Reset form data if adding new genre
        this.resetForm();
      }
    },
    closeModal() {
      this.isOpen = false;
      this.resetForm();
    },
    resetForm() {
      this.formData.name = '';
    },
    addGenre() {
        // Implement add actor relationship functionality (e.g., send data to backend)
        console.log('Adding new Genre:', this.formData);
      this.closeModal();
      },
      updateGenre() {
        // Implement update movie-actor relationship functionality (e.g., send updated data to backend)
        console.log('Updated Genre Data:', this.formData);
        this.closeModal();
      },
    
  }
};
</script>

<style scoped>
/* Add scoped styles */
</style>
