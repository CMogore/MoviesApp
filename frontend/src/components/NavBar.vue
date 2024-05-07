<template>

<nav class="pl-24 flex space-x-96 bg-yellow-400 p-8 text-lg text-black font-bold">
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

</nav>
</template>

<script>
export default {

}
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
