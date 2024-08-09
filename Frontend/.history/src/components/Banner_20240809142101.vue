<template>
    <vueper-slides>
        <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :title="slide.title"
            :content="slide.content"
        >
        </vueper-slide>
    </vueper-slides>
</template>

<script setup></script>
