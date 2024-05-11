<template>
<div class="home ">
    <Carousel :pagination="true" :navigation="false" :timeout="5000" :startAutoplay="true" class="h-screen relative " v-slot="{ currentSlide}">
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
            <div v-show="currentSlide === index + 1" class=" md:h-[46rem]  absolute w-full">
                <img class="w-screen md:h-[46rem]   md:bottom-96" :src="require(`../assets/${slide}.png`)">
            </div>
        </Slide>
    </Carousel>

    <div class="featured">
        <div>
            <h2 class="text-2xl ml-4 text-left font-semibold mb-4">Featured Movies</h2>
            <Card :movies="featuredMovies" />
        </div>
    </div>

    <div class="latest">
        <div>
            <h2 class="text-2xl ml-4 text-left font-semibold mb-4">Latest Movies</h2>
            <Card :movies="featuredMovies" />
        </div>
    </div>

</div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Slide from '@/components/Slide.vue'
import Card from '@/components/card.vue'

// @ is an alias to /src

export default {
    name: 'HomeView',
    components: {
        Carousel,
        Slide,
        Card

    },
    setup() {
        const carouselSlides = ['image', 'image1', 'image3'];
        const featuredMovies = [{
                title: 'Inception',
                year: '2010',
                poster: 'image.png'
            },
            {
                title: 'Interstellar',
                year: '2014',
                poster: 'image1.png'
            },
            {
                title: 'Interstellar',
                year: '2014',
                poster: 'image3.png'
            },
            {
                title: 'Interstellar',
                year: '2014',
                poster: 'image.png'
            },
            {
                title: 'Interstellar',
                year: '2014',
                poster: 'image1.png'
            },
            {
                title: 'Interstellar',
                year: '2014',
                poster: 'image3.png'
            },
            // Add more movie objects as needed
        ];
        return {
            carouselSlides,
            featuredMovies
        };

    }
}
</script>
