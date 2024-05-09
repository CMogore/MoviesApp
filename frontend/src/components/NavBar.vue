<template>


  <header class="pl-2 space-x-96 bg-yellow-400 p-4 text-lg text-black font-bold md:sticky md:top-0 md:z-50  ">
    <nav class="flex justify-between items-center w-[92%] mx-auto  ">
      <div class="w-16 font-bold text-2xl ">
        IMOVIES
      </div>
      <div
        class="nav-links duration-500 md:static md:-mt-12 pt-12 bg-yellow-400 absolute md:min-h-fit min-h-[60vh] pr-20 left-0 top-[-100%] md:w-auto w-full flex items-center px-5"
        :class="{ 'top-[9%] z-10': isMenuOpen }"
      >
        <ul class="flex md:flex-row flex-col  md:items-center  md:gap-[4vw] gap-8">
          <li class="">
            <router-link to="/" class="pt-96 hover:text-gray-500">Home </router-link> 

          </li>
          <li>
            <a class="hover:text-gray-500" href="/about">About</a>
          </li>
          <li>
            <h8>Movies </h8>
            <span class="fa fa-chevron-down"></span>
          </li>
          <li>
            <h8>Genres </h8>
            <span class="fa fa-chevron-down"></span>
          </li>
          <li class="">
            <div class="-mt-72  pb-10 md:mt-2 md:pb-2">
            <span class="fa fa-search"></span>
            <input type="text" placeholder=" Search titles" class="bg-transparent border-b border-black">
            </div>
            
          </li>
          <li class="-mt-10 md:mt-2 md:space-x-8  ">
            <router-link to="/about" class="md:ml-24">Login </router-link> 
            <span class = "invisible md:visible">|</span>
             
          </li>
          <li class="-pt-24 md:pt-2 md:-ml-6">
            <router-link to="/about" class="">Signup</router-link>


          </li>
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <ion-icon
          @click="toggleMenu"
          name="menu"
          class="text-3xl cursor-pointer md:hidden text-white"
        ></ion-icon>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>




<style>
/* nav {
    padding: 30px;
}

select {
    width: 18px;
    border-style: none;
}

nav a {
    color: black;
    border-bottom: none;
    text-decoration: none;
}

nav a.router-link-exact-active {
    color: #42b983;
} */
</style>
