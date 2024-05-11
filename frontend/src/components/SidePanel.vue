<template>
    <div class="bg-gray-800 text-white p-6">
      <h1 class="text-2xl font-semibold mb-4">Admin Panel</h1>
      <ul>
        <li @click="selectMenuItem('users')" :class="{ 'bg-gray-900': selectedMenuItem === 'users' }" class="py-2 px-4 mb-2 rounded cursor-pointer">Users</li>
        <li @click="selectMenuItem('movies')" :class="{ 'bg-gray-900': selectedMenuItem === 'movies' }" class="py-2 px-4 mb-2 rounded cursor-pointer">Movies</li>
        <!-- Add more menu items as needed -->
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedMenuItem: 'users' // Default selected menu item
      };
    },
    methods: {
      selectMenuItem(item) {
        this.selectedMenuItem = item;
        // Emit event or perform action to switch content based on selected menu item
        this.$emit('menuItemSelected', item); // Emit event to parent component (AdminDashboard.vue)
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles if needed */
  </style>
  