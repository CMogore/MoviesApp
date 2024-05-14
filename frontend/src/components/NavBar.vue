<template>
  <header class="pl-2 space-x-96 bg-yellow-400 p-4 text-lg text-black font-bold md:sticky md:top-0 md:z-50">
    <nav class="flex justify-between items-center w-[92%] mx-auto">
      <div class="w-16 font-bold text-2xl">IMOVIES</div>
      <div
        class="nav-links duration-500 md:static md:-mt-12 pt-12 bg-yellow-400 absolute md:min-h-fit min-h-[60vh] pr-20 left-0 top-[-100%] md:w-auto w-full flex items-center px-5"
        :class="{ 'top-[6%] z-10': isMenuOpen }"
      >
        <!-- Navigation Links -->
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 items-center ml-12 md:ml-2">
          <li><router-link to="/" class="pt-96 hover:text-gray-500">Home</router-link></li>
          <li><router-link to="/about" class="hover:text-gray-500">About</router-link></li>
          <li><h8>Movies</h8><span class="fa fa-chevron-down"></span></li>
          <li><h8>Genres</h8><span class="fa fa-chevron-down"></span></li>
          <li>
            <div class="relative mb-8 -mt-6 md:mt-2 md:mb-4">
              <span class="fa fa-search absolute top-1/2 transform  -translate-y-1/2 left-3 text-gray-500"></span>
              <input
                v-model="searchTerm"
                @input="handleSearch"
                type="text"
                placeholder="Search titles"
                class="bg-transparent border-b border-black pl-10 "
              />
            </div>
          </li>
          <li class="-mt-10 md:mt-2 md:space-x-8">
            <router-link to="/login" class="md:ml-24">Login</router-link>
            <span class="invisible md:visible">|</span>
          </li>
          <li class="-pt-24 md:pt-2 md:-ml-6">
            <router-link to="/signup">Signup</router-link>
          </li>
        </ul>
      </div>
      <!-- Mobile Menu Icon -->
      <div class="flex items-center gap-6">
        <ion-icon @click="toggleMenu" name="menu" class="text-3xl cursor-pointer md:hidden text-white"></ion-icon>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      searchTerm: ''
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleSearch() {
      if (this.searchTerm.trim()) {
        // Navigate to SearchResults route with search term as query parameter
        this.$router.push({ name: 'SearchResults', query: { term: this.searchTerm.trim() } });
      } else {
        // Clear search results if search term is empty
        this.$router.push({ name: 'SearchResults', query: { term: '' } });
      }
    }
  }
};
</script>

<style>
/* Add your scoped styles here */
</style>
