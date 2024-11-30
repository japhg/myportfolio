<template>
    <div class="w-full max-w-7xl flex flex-col gap-5">
        <h1 class="text-primary text-2xl md:text-5xl leading-2 font-bold">
            About
        </h1>

        <p class="text-gray-500 font-medium text-sm md:text-lg tracking-wide">
            As a former Full-stack PHP Developer at PCN Promopro Inc., I played
            a role in the development and implementation of various systems
            aimed at enhancing organizational efficiency.
        </p>

        <p class="text-gray-500 font-medium text-sm md:text-lg tracking-wide">
            My foundation in PHP, gained during my Capstone days, enabled me to
            effortlesly translate project requirements into robust, and
            user-friendly solutions. Leveraging this expertise, I consistently
            delivered high-quality outputs that aligned with company
            expectations.
        </p>

        <p class="text-gray-500 font-medium text-sm md:text-lg tracking-wide">
            Eager to expand my skill set, I embarked on a journey to master
            industry-leading frameworks such as Laravel, and Vue.js with
            Inertia.js. This comprehensive training not only deepened my
            understanding of web development but also equipped me with advanced
            problem-solving.
        </p>

        <div class="mt-6">
            <button
                type="button"
                @click="handleProject('#project')"
                class="text-primary border border-[#FFC107] p-4 rounded-md font-bold text-sm md:text-base"
            >
                View Projects
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["clickProject"]);

const handleProject = (value: any) => {
    emit("clickProject", value);
};
</script>
