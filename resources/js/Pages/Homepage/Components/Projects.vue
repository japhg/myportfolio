<template>
    <div class="w-full max-w-7xl flex flex-col gap-5">
        <h1 class="text-primary text-2xl md:text-5xl leading-2 font-bold">
            Projects
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCard
                url="https://mtap.dev6.trdx.com/"
                img="/images/thumbnails/mtapsystems.png"
                title="MTAP Systems"
                :icons="['vue', 'inertia', 'tailwind', 'laravel', 'git']"
            />
            <ProjectCard
                url="https://jobs.hrdpcnpromopro.com/index1.php"
                img="/images/thumbnails/hrdpcnpromopro.png"
                title="PCN Job Portal"
                :icons="['bootstrap', 'php', 'mysql', 'git']"
            />
            <ProjectCard
                url="https://portal.hrdpcnpromopro.com/index1.php"
                img="/images/thumbnails/pcn_hrms.png"
                title="PCN - HRMS"
                :icons="['bootstrap', 'php', 'mysql', 'git']"
            />
            <ProjectCard
                url="https://clinic.pcnpromopro.com/"
                img="/images/thumbnails/pcn_clinic.png"
                title="Clinic Management System"
                :icons="['bootstrap', 'php', 'mysql', 'git']"
            />
            <ProjectCard
                url="https://training.pcnpromopro.com/"
                img="/images/thumbnails/pcn_training.png"
                title="Training Management System"
                :icons="['bootstrap', 'php', 'mysql', 'git']"
            />
            <ProjectCard
                url="https://room.pcnpromopro.com/Room/index.php"
                img="/images/thumbnails/room_reservation.png"
                title="Room Reservation System"
                :icons="['bootstrap', 'php', 'mysql', 'git']"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from "./Partials/ProjectCard.vue";
</script>
