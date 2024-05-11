<template>
    <div class="flex h-screen">
      <!-- Side panel -->
      <SidePanel @menuItemSelected="handleMenuItemSelected" />
  
      <!-- Main content area -->
      <div class="flex-1 p-6 bg-gray-100">
        <!-- Display different sections based on selected menu item -->
        <div v-if="selectedMenuItem === 'users'">
          <h2 class="text-2xl font-semibold mb-4">Users Table</h2>
          <UsersTable />
        </div>
        <div v-else-if="selectedMenuItem === 'movies'">
          <h2 class="text-2xl font-semibold mb-4">Movies Table</h2>
          <MoviesTable />
        </div>
        <div v-else-if="selectedMenuItem === 'actors'">
          <h2 class="text-2xl font-semibold mb-4">Actors Table</h2>
          <ActorsTable />
        </div>
        <div v-else-if="selectedMenuItem === 'genres'">
          <h2 class="text-2xl font-semibold mb-4">Genres Table</h2>
          <MoviesTable />
        </div>
        <!-- Add more sections for other menu items -->
  
        <!-- Place additional content for each menu item here -->
      </div>
    </div>
  </template>
  
  <script>
  import SidePanel from '@/components/SidePanel.vue';
  import UsersTable from '@/components/admin/UsersTable.vue';
  import MoviesTable from '@/components/admin/MoviesTable.vue';
  import ActorsTable from '@/components/admin/ActorsTable.vue';

  
  export default {
    components: {
      SidePanel,
      UsersTable,
      MoviesTable,
      ActorsTable
      // Import other components for different sections
    },
    data() {
      return {
        selectedMenuItem: 'users' // Default selected menu item
      };
    },
    methods: {
      handleMenuItemSelected(item) {
        this.selectedMenuItem = item;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles if needed */
  </style>
  