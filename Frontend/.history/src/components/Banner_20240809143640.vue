<template>
    <div class="div">
        <vueper-slides :autoplay="3000" :progress="true" :visible-slides="1">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :title="slide.title"
                :content="slide.content"
                :image="slide.image"
            >
                <div class="slide-content">
                    <h3>{{ slide.title }}</h3>
                    <p>{{ slide.content }}</p>
                </div>
            </vueper-slide>
        </vueper-slides>
    </div>
</template>

<script setup>
import "vueperslides/dist/vueperslides.css";
import { VueperSlides, VueperSlide } from "vueperslides";

const slides = [
    {
        image: "/img/banner.jpg",
        title: "Slide #1",
        content: "Slide 1 content.",
    },
    {
        image: "/img/banner.jpg",
        title: "Slide #2",
        content: "Slide 2 content.",
    },
    {
        image: "/img/banner.jpg",
        title: "Slide #3",
        content: "Slide 3 content.",
    },
];
</script>

<style scoped>
/* Add your custom styles here */
.slide-content {
    color: white;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
}
</style>
