<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg max-w-lg">
        <h2 class="text-xl font-semibold mb-4">{{ isNewActor ? 'Add Actor' : 'Edit Actor' }}</h2>
        <!-- Form to add/edit actor details -->
        <form @submit.prevent="saveActor">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" id="name" v-model="formData.name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeModal" class="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">{{ isNewActor ? 'Add' : 'Save' }}</button>
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
        isNewActor: true,
        formData: {
          name: ''
        }
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
          name: ''
        };
      },
      saveActor() {
        // Implement save actor functionality (e.g., send data to backend)
        console.log('Form Data:', this.formData);
        this.closeModal();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles */
  </style>
  