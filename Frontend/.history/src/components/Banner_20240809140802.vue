<template>
    <fwb-carousel :pictures="pictures" animation />
</template>

<script setup>
import { FwbCarousel } from "flowbite-vue";

const pictures = [
    { src: "/img/banner.jpg", alt: "Image 1" },
    { src: "/img/banner.jpg", alt: "Image 2" },
    // { src: "/img/banner.jpg", alt: "Image 3" },
];
</script>
