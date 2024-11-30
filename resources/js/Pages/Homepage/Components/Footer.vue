<template>
    <div class="">
        <h4 class="text-xl font-semibold text-center">Social Links:</h4>
    </div>

    <div class="flex flex-wrap items-center gap-3 mt-3">
        <a href="https://www.facebook.com/Jpgomera19" target="_blank">
            <FacebookIcon class="w-6 md:w-8 h-6 md:h-8" />
        </a>

        <a
            href="https://www.linkedin.com/in/james-philip-gomera-b5b345281/"
            target="_blank"
        >
            <LinkedinIcon class="w-6 md:w-8 h-6 md:h-8" />
        </a>

        <a
            href="https://www.upwork.com/freelancers/~0134531ce6db4c80f1"
            target="_blank"
        >
            <UpworkIcon class="w-6 md:w-8 h-6 md:h-8" />
        </a>

        <a href="https://github.com/japhg" target="_blank">
            <GithubIcon class="w-6 md:w-8 h-6 md:h-8" />
        </a>

        <a href="https://t.me/jphigomera19" target="_blank">
            <TelegramIcon class="w-6 md:w-8 h-6 md:h-8" />
        </a>

        <a href="mailto:jpgomera19@gmail.com" target="_blank">
            <GoogleIcon class="w-6 md:w-8 h-6 md:h-8" />
        </a>
    </div>

    <div class="py-4 text-gray-700 text-sm">
        <p>© 2024 MyPortfolio. All rights Reserved.</p>
    </div>
</template>
<script setup lang="ts">
import FacebookIcon from "@/Components/Icons/FacebookIcon.vue";
import GithubIcon from "@/Components/Icons/GithubIcon.vue";
import LinkedinIcon from "@/Components/Icons/LinkedinIcon.vue";
import TelegramIcon from "@/Components/Icons/TelegramIcon.vue";
import UpworkIcon from "@/Components/Icons/UpworkIcon.vue";
import GoogleIcon from "@/Components/Icons/GoogleIcon.vue";
</script>
