<template>
    <a
        :href="props.url"
        target="_blank"
        class="bg-white border border-gray-300 rounded-md shadow-lg p-4 flex flex-col items-center gap-4"
    >
        <div class="w-full">
            <img :src="props.img" class="rounded-md shadow" alt="" />
        </div>
        <div class="text-center">
            <p class="text-lg font-bold text-teal-700">
                {{ props.title }}
            </p>
        </div>
        <div class="flex justify-center items-center">
            <div
                v-for="(icon, index) in props.icons"
                :key="index"
                class="w-full grid grid-cols-5 gap-2"
            >
                <VueIcon v-if="icon.toLowerCase() == 'vue'" class="w-6 h-6" />
                <InertiajsIcon
                    v-if="icon.toLowerCase() == 'inertia'"
                    class="w-6 h-6"
                />
                <LaravelIcon
                    v-if="icon.toLowerCase() == 'laravel'"
                    class="w-6 h-6"
                />
                <TailwindIcon
                    v-if="icon.toLowerCase() == 'tailwind'"
                    class="w-6 h-6"
                />
                <BootstrapIcon
                    v-if="icon.toLowerCase() == 'bootstrap'"
                    class="w-6 h-6"
                />
                <PhpIcon v-if="icon.toLowerCase() == 'php'" class="w-6 h-6" />
                <GitIcon v-if="icon.toLowerCase() == 'git'" class="w-6 h-6" />
                <MysqlIcon
                    v-if="icon.toLowerCase() == 'mysql'"
                    class="w-6 h-6"
                />
            </div>
        </div>
    </a>
</template>
<script setup lang="ts">
import InertiajsIcon from "@/Components/Icons/InertiajsIcon.vue";
import LaravelIcon from "@/Components/Icons/LaravelIcon.vue";
import TailwindIcon from "@/Components/Icons/TailwindIcon.vue";
import VueIcon from "@/Components/Icons/VueIcon.vue";
import BootstrapIcon from "@/Components/Icons/BootstrapIcon.vue";
import PhpIcon from "@/Components/Icons/PhpIcon.vue";
import GitIcon from "@/Components/Icons/GitIcon.vue";
import MysqlIcon from "@/Components/Icons/MysqlIcon.vue";
import CplusIcon from "@/Components/Icons/CplusIcon.vue";
const props = defineProps<{
    url?: string;
    img?: string;
    title?: string;
    icons?: Array<String>;
}>();
</script>
