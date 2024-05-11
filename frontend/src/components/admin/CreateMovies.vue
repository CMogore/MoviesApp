<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg max-w-lg">
        <h2 class="text-xl font-semibold mb-4">{{ isNewMovie ? 'Add Movie' : 'Edit Movie' }}</h2>
        <!-- Form to add/edit movie details -->
        <form @submit.prevent="saveMovie">
          <div class="mb-4">
            <label for="title" class="block text-sm font-medium text-gray-700">Title:</label>
            <input type="text" id="title" v-model="formData.title" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="director" class="block text-sm font-medium text-gray-700">Director:</label>
            <input type="text" id="director" v-model="formData.director" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="year" class="block text-sm font-medium text-gray-700">Year:</label>
            <input type="number" id="year" v-model="formData.year" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
            <textarea id="description" v-model="formData.description" rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div class="mb-4">
            <label for="poster" class="block text-sm font-medium text-gray-700">Poster:</label>
            <input type="file" id="poster" @change="handlePosterUpload" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <img v-if="posterPreview" :src="posterPreview" alt="Poster Preview" class="mt-2 h-24">
          </div>
          <div class="mb-4">
            <label for="trailer" class="block text-sm font-medium text-gray-700">Trailer Link:</label>
            <input type="text" id="trailer" v-model="formData.trailer" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeModal" class="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">{{ isNewMovie ? 'Add' : 'Save' }}</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        isNewMovie: true,
        formData: {
          title: '',
          director: '',
          year: '',
          description: '',
          poster: '',
          trailer: ''
        },
        posterPreview: ''
      };
    },
    methods: {
      openModal() {
        this.isOpen = true;
      },
      closeModal() {
        this.isOpen = false;
        this.resetForm();
      },
      resetForm() {
        this.formData = {
          title: '',
          director: '',
          year: '',
          description: '',
          poster: '',
          trailer: ''
        };
        this.posterPreview = '';
      },
      saveMovie() {
        // Implement save movie functionality (e.g., send data to backend)
        console.log('Form Data:', this.formData);
        this.closeModal();
      },
      handlePosterUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.posterPreview = e.target.result;
            this.formData.poster = e.target.result; // Set poster data to be sent
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles */
  </style>
  