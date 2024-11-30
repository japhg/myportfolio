.6
<template>
    <div class="w-full max-w-7xl flex flex-col gap-5">
        <h1 class="text-primary text-2xl md:text-6xl leading-2 font-bold">
            Hello! I'm James Philip Gomera
        </h1>

        <p class="text-gray-700 text-sm md:text-lg tracking-wide">
            A
            <strong class="text-teal-600">Full-Stack Web Developer</strong>
            with strong expertise in both front-end and back-end technologies.
            Experienced in building dynamic, responsive, and user-friendly web
            applications using modern frameworks.
        </p>

        <div class="mt-6">
            <button
                type="button"
                @click="handleAbout('#about')"
                class="text-primary border border-[#FFC107] p-4 rounded-md font-bold text-sm md:text-base"
            >
                About more
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["clickAbout"]);

const handleAbout = (value: any) => {
    emit("clickAbout", value);
};
</script>
