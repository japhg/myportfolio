<script setup lang="ts">
import { Head } from "@inertiajs/vue3";

defineProps({
    title: String,
});
</script>

<template>
    <Head :title="title" />
    <div class="bg-[#800000] w-full h-screen">
        <div>
            <h3 class="text-white font-bold text-xl">James Philip</h3>
        </div>
    </div>
</template>
<style>
.body {
    background: url(https://cdn.shopify.com/s/files/1/0564/7617/2332/files/GrainBackround.gif?v=1667804647);
}
</style>
