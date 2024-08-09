<template>
    <vueper-slides>
        <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :title="slide.title"
            :content="slide.content"
            :image="slide.img"
        >
        </vueper-slide>
    </vueper-slides>
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
        title: "Slide #2",
        content: "Slide 2 content.",
    },
];
</script>
