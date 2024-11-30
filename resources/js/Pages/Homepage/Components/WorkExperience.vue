<template>
    <div class="w-full max-w-7xl flex flex-col gap-5">
        <h1 class="text-primary text-2xl md:text-5xl leading-2 font-bold">
            Work Experience
        </h1>

        <Experience
            company="Freelance"
            company-website="#"
            subtitle="March 2024 - Present (Fullstack Web Developer)"
            :descriptions="[
                'A freelance developer who is part of a team developing <strong>MTAP Systems:</strong> An online patient reported functional outcome questionnaire that  identifies specific functional limitations and the general effect of functional limitations on a person\'s ability to work, provide self-care in activities of daily living, and participate in other home and community activities.',
            ]"
        />

        <Experience
            company="Upwork"
            company-website="https://www.upwork.com/freelancers/~0134531ce6db4c80f1"
            subtitle="March 2024 - May 2024 (Web Developer)"
            :descriptions="[
                'A freelance contract where I become part of the team developing a website called <strong>Swingfox</strong>: A dating site dedicated to celebrating fun and sexual exploration in all of its diverse forms.',
            ]"
        />

        <Experience
            company="PCN Promopro Inc."
            company-website="https://www.pcnpromopro.com/"
            subtitle="September 2024 - March 2024 (Fullstack Web Developer / IT
                Support)"
            :descriptions="[
                'As a former Fullstack PHP Developer at PCN Promopro Inc., I played a role in the development and implementation of various systems aimed at enhancing organizational efficiency.',
                'Notable projects include the creation of Room Reservation System with Push Notification, a Training Management System, and a Clinic Management System. However, my biggest contribution was the desing and development of the Human Resource Management System, which enhanced the internal process and significantly improved workflow efficiency of Human Resource Department.',
            ]"
        />
    </div>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import Experience from "./Partials/Experience.vue";
</script>
