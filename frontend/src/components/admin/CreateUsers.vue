<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded-lg max-w-md">
        <h2 class="text-2xl font-semibold mb-4">Create New User</h2>
        <form @submit.prevent="createUser">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
            <input v-model="newUser.name" type="text" id="name" name="name" class="mt-1 p-2 border rounded-md w-full" required>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
            <input v-model="newUser.email" type="email" id="email" name="email" class="mt-1 p-2 border rounded-md w-full" required>
          </div>
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username:</label>
            <input v-model="newUser.username" type="text" id="username" name="username" class="mt-1 p-2 border rounded-md w-full" required>
          </div>
          <div class="mb-4">
            <label for="role" class="block text-sm font-medium text-gray-700">Role:</label>
            <input v-model="newUser.role" type="text" id="role" name="role" class="mt-1 p-2 border rounded-md w-full" required>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeModal" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">Create User</button>
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
        newUser: {
          name: '',
          email: '',
          username: '',
          role: ''
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
        this.newUser = {
          name: '',
          email: '',
          username: '',
          role: ''
        };
      },
      createUser() {
        // Handle user creation logic (e.g., send request to backend)
        console.log('Create User:', this.newUser);
        // After successful creation, close modal and reset form
        this.closeModal();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles if needed */
  </style>
  