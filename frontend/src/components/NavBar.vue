<template>

<!-- <nav class="pl-24 flex space-x-96 bg-yellow-400 p-8 text-lg text-black font-bold">
    <div class="flex justify-left space-x-8">
        <h8 class="-mt-0.5 text-2xl"> IMOVIES </h8>
        <router-link to="/"> Home </router-link> 
        <router-link to="/about"> About </router-link> 
        <div>
            <h8>Movies </h8>
            <span class="fa fa-chevron-down"></span>
        </div>
        <div>
            <h8>Genres </h8>
            <span class="fa fa-chevron-down"></span>
        </div>
        <div>
            <span class="fa fa-search"></span>
            <input type="text" placeholder=" Search titles" class="bg-transparent border-b border-black">
        </div>
    </div>
    <div class="space-x-4 pl-8">
        <router-link to="/about">Login</router-link> 
        <span>|</span>
        <router-link to="/about">Signup</router-link>

    </div>

</nav> -->
  <header class="pl-2 space-x-96 bg-yellow-400 p-6 text-lg text-black font-bold ">
    <nav class="flex justify-between items-center w-[92%] mx-auto">
      <div class="w-16 font-bold text-2xl ">
        IMOVIES
      </div>
      <div
        class="nav-links duration-500 md:static md:-mt-12 pt-12 bg-yellow-400 absolute md:min-h-fit min-h-[60vh] pr-20 left-0 top-[-100%] md:w-auto w-full flex items-center px-5"
        :class="{ 'top-[12%]': isMenuOpen }"
      >
        <ul class="flex md:flex-row flex-col  md:items-center md:gap-[4vw] gap-8">
          <li class="">
            <a class="pt-96 hover:text-gray-500" href="#">Home</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">About</a>
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
            <div class="-mt-72  pb-10 md:mt-4 md:pb-2">
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
