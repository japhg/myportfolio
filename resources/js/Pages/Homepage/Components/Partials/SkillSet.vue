<template>
    <a
        :href="props.website"
        target="_blank"
        class="bg-softWhite border border-gray-200 px-5 py-4 rounded-lg shadow-md hover:bg-white relative group"
    >
        <VueIcon
            v-if="props.icon.toLowerCase() == 'vue'"
            class="w-16 h-16 group-hover:opacity-10 transition-opacity duration-300"
        />

        <InertiajsIcon
            v-else-if="props.icon.toLowerCase() == 'inertia'"
            class="w-16 h-16 group-hover:opacity-10 transition-opacity duration-300"
        />

        <TailwindIcon
            v-else-if="props.icon.toLowerCase() == 'tailwind'"
            class="w-16 h-16 group-hover:opacity-10 transition-opacity duration-300"
        />

        <LaravelIcon
            v-else-if="props.icon.toLowerCase() == 'laravel'"
            class="w-16 h-16 group-hover:opacity-10 transition-opacity duration-300"
        />

        <BootstrapIcon
            v-else-if="props.icon.toLowerCase() == 'bootstrap'"
            class="w-16 h-16 group-hover:opacity-10 transition-opacity duration-300"
        />

        <PhpIcon
            v-else-if="props.icon.toLowerCase() == 'php'"
            class="w-16 h-16 group-hover:opacity-10 transition-opacity duration-300"
        />

        <GitIcon
            v-else-if="props.icon.toLowerCase() == 'git'"
            class="w-16 h-16 group-hover:opacity-10 transition-opacity duration-300"
        />

        <MysqlIcon
            v-else-if="props.icon.toLowerCase() == 'mysql'"
            class="w-16 h-16 group-hover:opacity-10 transition-opacity duration-300"
        />

        <CplusIcon
            v-else-if="props.icon.toLowerCase() == 'cplus'"
            class="w-16 h-16 group-hover:opacity-10 transition-opacity duration-300"
        />

        <div
            class="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
            <span class="text-primary font-bold">{{ props.title }}</span>
        </div>
    </a>
</template>

<script setup lang="ts">
import VueIcon from "@/Components/Icons/VueIcon.vue";
import InertiajsIcon from "@/Components/Icons/InertiajsIcon.vue";
import LaravelIcon from "@/Components/Icons/LaravelIcon.vue";
import TailwindIcon from "@/Components/Icons/TailwindIcon.vue";
import BootstrapIcon from "@/Components/Icons/BootstrapIcon.vue";
import PhpIcon from "@/Components/Icons/PhpIcon.vue";
import GitIcon from "@/Components/Icons/GitIcon.vue";
import MysqlIcon from "@/Components/Icons/MysqlIcon.vue";
import CplusIcon from "@/Components/Icons/CplusIcon.vue";

const props = defineProps<{
    website: string;
    icon: string;
    title: string;
}>();
</script>
