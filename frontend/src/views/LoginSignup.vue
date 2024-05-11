<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="p-6 bg-white shadow-md rounded-md max-w-lg w-full">
        <div class="flex justify-between bg-white text-center mb-6 mx-2 mr-4">
          <a
            :class="{ 'bg-yellow-400': activeForm === 'login' }"
            @click.prevent="activeForm = 'login'"
            href="#"
            class="text-sm font-semibold py-2 md:px-24 px-14 focus:outline-none transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-white"
          >
            Login
          </a>
          <a
            :class="{ 'bg-yellow-400': activeForm === 'signup' }"
            @click.prevent="activeForm = 'signup'"
            href="#"
            class="text-sm font-semibold py-2 md:pr-20 px-14 md:pl-20 focus:outline-none transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-white"
          >
            Sign Up
          </a>
        </div>
  
        <!-- Login Form -->
        <div v-if="activeForm === 'login'">
          <h2 class="text-3xl font-semibold mb-6">Login</h2>
          <form @submit.prevent="login">
            <div class="mb-4">
              <label for="username" class="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input type="text" id="username" v-model="loginForm.username" required class="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500">
            </div>
            <div class="mb-6">
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input type="password" id="password" v-model="loginForm.password" required class="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500">
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none transition-colors duration-300 ease-in-out">Login</button>
          </form>
        </div>
  
        <!-- Sign Up Form -->
        <div v-if="activeForm === 'signup'">
          <h2 class="text-3xl font-semibold mb-6">Sign Up</h2>
          <form @submit.prevent="signup">
            <div class="mb-4">
              <label for="newUsername" class="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input type="text" id="newUsername" v-model="signupForm.username" required class="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label for="newEmail" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="newEmail" v-model="signupForm.email" required class="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input type="password" id="newPassword" v-model="signupForm.password" required class="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500">
            </div>
            <div class="mb-6">
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" v-model="signupForm.confirmPassword" required class="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:border-blue-500">
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none transition-colors duration-300 ease-in-out">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeForm: 'login',
        loginForm: {
          username: '',
          password: ''
        },
        signupForm: {
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }
      };
    },
    methods: {
      login() {
        // Implement login functionality
        console.log('Logging in:', this.loginForm);
      },
      signup() {
        // Implement sign-up functionality
        console.log('Signing up:', this.signupForm);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles here */
  </style>
  