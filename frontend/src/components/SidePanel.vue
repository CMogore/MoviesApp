<template>
    <div class="bg-yellow-400 text-white p-6">
      <h1 class="text-2xl font-semibold mb-4">Admin Panel</h1>
      <ul>
        <li @click="selectMenuItem('users')" :class="{ 'bg-gray-900': selectedMenuItem === 'users' }" class="py-2 px-4 mb-2 rounded cursor-pointer">Users</li>
        <li @click="selectMenuItem('movies')" :class="{ 'bg-gray-900': selectedMenuItem === 'movies' }" class="py-2 px-4 mb-2 rounded cursor-pointer">Movies</li>
        <li @click="selectMenuItem('actors')" :class="{ 'bg-gray-900': selectedMenuItem === 'actors' }" class="py-2 px-4 mb-2 rounded cursor-pointer">Actors</li>
        <li @click="selectMenuItem('genres')" :class="{ 'bg-gray-900': selectedMenuItem === 'genres' }" class="py-2 px-4 mb-2 rounded cursor-pointer">Genres</li>
        <li @click="selectMenuItem('movieactors')" :class="{ 'bg-gray-900': selectedMenuItem === 'movieactors' }" class="py-2 px-4 mb-2 rounded cursor-pointer">MovieActors</li>
        <li @click="selectMenuItem('moviegenres')" :class="{ 'bg-gray-900': selectedMenuItem === 'moviegenres' }" class="py-2 px-4 mb-2 rounded cursor-pointer">MovieGenres</li>


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
  