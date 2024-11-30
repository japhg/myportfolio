<template>
    <div class="w-full max-w-7xl flex flex-col gap-5">
        <h1 class="text-primary text-2xl md:text-5xl leading-2 font-bold">
            Skills / Technologies
        </h1>

        <div
            class="flex flex-wrap flex-row justify-center items-center gap-4 mt-4"
        >
            <SkillSet website="https://vuejs.org/" icon="vue" title="Vue.js" />
            <SkillSet website="https://inertiajs.com/" icon="inertia" title="Inertia.js" />
            <SkillSet website="https://tailwindcss.com/" icon="tailwind" title="Tailwind CSS" />
            <SkillSet website="https://laravel.com/" icon="laravel" title="Laravel" />
            <SkillSet website="https://getbootstrap.com/" icon="bootstrap" title="Bootstrap" />
            <SkillSet website="https://www.php.net/" icon="php" title="Php" />
            <SkillSet website="https://git-scm.com/" icon="git" title="Git" />
            <SkillSet website="https://www.mysql.com/" icon="mysql" title="MySQL" />
            <SkillSet website="https://cplusplus.com/" icon="cplus" title="C++" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SkillSet from "./Partials/SkillSet.vue";
</script>
