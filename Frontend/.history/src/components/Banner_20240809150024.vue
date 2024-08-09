<template>
    <div class="max-h-full bg-cover">
        <vueper-slides :autoplay="3000" :visible-slides="1">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :title="slide.title"
                :content="slide.content"
                :image="slide.image"
            >
                <div
                    class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-24 xl:py-40"
                >
                    <div
                        class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10"
                    >
                        <span class="font-mitr uppercase text-indigo-500"
                            >Lorem ipsum</span
                        >

                        <h1
                            class="font-roboto-slab text-4xl sm:text-6xl text-red-400 leading-tight mt-4"
                        >
                            Let's go <br />
                            back to school
                        </h1>

                        <div class="max-w-md">
                            <p
                                class="font-source-sans-pro text-indigo-500 mt-6 text-lg"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit tincidunt cras sociis,
                                parturient enim montes.
                            </p>
                        </div>

                        <a
                            href="#"
                            class="block bg-indigo-500 hover:bg-indigo-400 py-2 px-4 rounded-full text-sm font-mitr text-white uppercase mt-10"
                            >Get started</a
                        >
                    </div>
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
