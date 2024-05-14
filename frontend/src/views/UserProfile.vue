<template>
    <div class="max-w-4xl mx-auto p-8">
        <h1 class="text-2xl font-bold">User Profile</h1>

      <div class="flex justify-between mb-4">
        <div class="flex space-x-12 bg-yellow-400 p-4 px-12">
          <button @click="activeSection = 'liked'" :class="{ 'font-bold uppercase': activeSection === 'liked' }">Liked Movies</button>
          <button @click="activeSection = 'watchlist'" :class="{ 'font-bold uppercase': activeSection === 'watchlist' }">Watchlist</button>
          <button @click="activeSection = 'watched'" :class="{ 'font-bold uppercase': activeSection === 'watched' }">Watched Movies</button>
          <button @click="activeSection = 'updateInfo'" :class="{ 'font-bold uppercase': activeSection === 'updateInfo' }">Update Info</button>
          <button @click="activeSection = 'changePassword'" :class="{ 'font-bold uppercase': activeSection === 'changePassword' }">Change Password</button>
        </div> 
      </div>
  
      <!-- Display content based on activeSection -->
      <div v-if="activeSection === 'liked'">
        <h2 class="text-xl font-semibold mb-4">Liked Movies</h2>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="movie in likedMovies" :key="movie.id" class="flex flex-col items-center">
            <img :src="require(`@/assets/${movie.poster}.png`)" alt="Movie Poster" class="w-full h-auto rounded-lg mb-2">
            <p class="text-sm">{{ movie.title }}</p>
          </div>
        </div>
      </div>
  
      <div v-else-if="activeSection === 'watchlist'">
        <h2 class="text-xl font-semibold mb-4">Watchlist</h2>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="movie in watchlist" :key="movie.id" class="flex flex-col items-center">
            <img :src="require(`@/assets/${movie.poster}.png`)" alt="Movie Poster" class="w-full h-auto rounded-lg mb-2">
            <p class="text-sm">{{ movie.title }}</p>
          </div>
        </div>
      </div>
  
      <div v-else-if="activeSection === 'watched'">
        <h2 class="text-xl font-semibold mb-4">Watched Movies</h2>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="movie in watchedMovies" :key="movie.id" class="flex flex-col items-center">
            <img :src="require(`@/assets/${movie.poster}.png`)" alt="Movie Poster" class="w-full h-auto rounded-lg mb-2">
            <p class="text-sm">{{ movie.title }}</p>
          </div>
        </div>
      </div>
  
      <!-- Update User Information Section -->
      <div v-if="activeSection === 'updateInfo'" class="mt-8">
        <h2 class="text-xl font-semibold mb-4">Update User Information</h2>
        <form @submit.prevent="updateUserInfo">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input v-model="user.name" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="user.email" type="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update</button>
        </form>
      </div>
  
      <!-- Change Password Section -->
      <div v-if="activeSection === 'changePassword'" class="mt-8">
        <h2 class="text-xl font-semibold mb-4">Change Password</h2>
        <form @submit.prevent="changePassword">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Current Password</label>
            <input v-model="passwords.current" type="password" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">New Password</label>
            <input v-model="passwords.new" type="password" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Change Password</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeSection: 'liked', // Default active section
        likedMovies: [], // Placeholder for liked movies
        watchlist: [], // Placeholder for watchlist
        watchedMovies: [], // Placeholder for watched movies
        user: {
          name: 'John Doe',
          email: 'johndoe@example.com'
        },
        passwords: {
          current: '',
          new: ''
        }
      };
    },
    methods: {
      // Fetch user's liked movies, watchlist, and watched movies
      fetchUserData() {
        // Simulated data (replace with actual API calls)
        this.likedMovies = [
          { id: 1, title: 'Movie A', poster: 'image' },
          { id: 2, title: 'Movie B', poster: 'image' },
          { id: 3, title: 'Movie C', poster: 'image' }
        ];
  
        this.watchlist = [
          { id: 4, title: 'Movie D', poster: 'image' },
          { id: 5, title: 'Movie E', poster: 'image' },
          { id: 6, title: 'Movie F', poster: 'image' }
        ];
  
        this.watchedMovies = [
          { id: 7, title: 'Movie G', poster: 'image' },
          { id: 8, title: 'Movie H', poster: 'image' },
          { id: 9, title: 'Movie I', poster: 'image' }
        ];
      },
      // Update user information
      updateUserInfo() {
        // Simulated update (replace with actual API call)
        console.log('Updating user information:', this.user);
        // Implement API call to update user information
      },
      // Change user password
      changePassword() {
        // Simulated change password (replace with actual API call)
        console.log('Changing password:', this.passwords);
        // Implement API call to change user password
      }
    },
    mounted() {
      // Fetch user data when component is mounted
      this.fetchUserData();
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles here */
  button {
    cursor: pointer;
  }
  </style>
  