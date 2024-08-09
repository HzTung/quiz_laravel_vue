<template>
    <div class="h-[20px] max-h-full">
        <vueper-slides :autoplay="3000" :visible-slides="1">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :title="slide.title"
                :content="slide.content"
                :image="slide.image"
            >
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
