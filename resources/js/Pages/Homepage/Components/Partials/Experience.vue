<template>
    <div>
        <a
            :href="props.companyWebsite"
            target="_blank"
            class="text-gray-800 text-xl md:text-2xl font-bold hover:underline"
            >{{ props.company }}</a
        >
        <h6 class="text-gray-700 font-semibold text-[15px] md:text-base">
            {{ props.subtitle }}
        </h6>
    </div>

    <p
        v-for="description in descriptions"
        class="text-gray-500 text-sm md:text-base font-medium tracking-wide"
    >
        <span v-html="description" />
    </p>
</template>

<script setup lang="ts">
const props = defineProps<{
    company: string;
    companyWebsite: string;
    subtitle: string;
    descriptions: Array<String>;
}>();
</script>
