<template>
<div class="carousel">
    <slot :currentSlide="currentSlide"></slot>

    <!-- navigation -->
    <div class="navigation py-0 px-16 h-full w-full absolute flex justify-center mt-24 md:mt-2 md:items-center space-x-80 ">
        <div class="toggle-page left flex-1 ">
            <i @click="prevSlide" class="fa fa-chevron-left pointer flex justify-center rounded-full  items-center w-6 bg-yellow-400 h-6 text-white "></i>
        </div>
        <div class="toggle-page right  flex-1 md:justify-end ">
            <i @click="nextSlide" class="fa fa-chevron-right pointer flex justify-center items-center w-6 bg-yellow-400 rounded-full h-6 text-white "></i>

        </div>

        <!-- pagination -->
        <div class="pagination absolute bottom-3/4  flex w-full space-x-4 ">
            <span  class=" pointer w-3 h-3 -mt-20 rounded-full -ml-2 bg-white shadow-black active:bg-yellow-400" @click="goToSlide(index)" v-for="(slide, index) in getSlideCount" :key="index" :class="{active : index + 1 === currentSlide }">

            </span>
        </div>

    </div>
</div>
</template>

<script>
import {
    ref,
    onMounted
} from "vue"
export default {
    setup() {
        const currentSlide = ref(1);
        const getSlideCount = ref(null);

        //next
        const nextSlide = () => {
            if (currentSlide.value === getSlideCount.value) {
                currentSlide.value = 1;
                return

            }
            currentSlide.value += 1;
        }

        //prev
        const prevSlide = () => {
            if (currentSlide.value === 1) {
                currentSlide.value = 3;
                return

            }
            currentSlide.value -= 1;
        }

        const goToSlide = (index) => {
            currentSlide.value = index + 1;

        }

        onMounted(() => {
            getSlideCount.value = document.querySelectorAll('.slide').length;
            console.log(getSlideCount.value)
        })
        return {
            currentSlide,
            nextSlide,
            prevSlide,
            getSlideCount,
            goToSlide
        };
    }

}
</script>

<style>
.active {
    background-color: yellow;

}
</style>
