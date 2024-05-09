<template>
  <div class="home relative">
    <Carousel :pagination="true" :navigation="false" :timeout="5000"  :startAutoplay="true" class="h-screen relative " v-slot="{ currentSlide}">
      <Slide v-for="(slide, index) in carouselSlides" :key="index" >
        <div v-show="currentSlide === index + 1" class=" md:h-[46rem]  absolute w-full">
          <img class="w-screen md:h-[46rem]   md:bottom-96" :src="require(`../assets/${slide}.png`)">
        </div>
      </Slide>
    </Carousel>

    
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Slide from '@/components/Slide.vue'

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    Carousel,
    Slide,
  },
  setup(){
    const carouselSlides=['image', 'image1', 'image3'];
    return { carouselSlides };

  }
}
</script>
