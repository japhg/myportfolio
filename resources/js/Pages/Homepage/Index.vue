<template>
    <Head title="James Philip Gomera - MyPortfolio" />

    <div class="bg-softWhite w-full h-screen font-sans">
        <img
            id="background"
            class="absolute right-0 top-0 max-w-[877px] hidden lg:block"
            src="/images/gradient.png"
        />
        <div
            class="relative flex flex-col items-center gap-5 justify-center selection:bg-[#FF2D20] selection:text-white"
        >
            <div class="w-full max-w-2xl px-6 lg:max-w-7xl">
                <main>
                    <section class="flex items-center h-screen">
                        <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                            <div
                                class="w-full flex justify-center items-center"
                            >
                                <Home @click-about="handleClick" />
                            </div>
                        </div>
                    </section>

                    <section class="h-screen" id="about">
                        <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                            <div
                                class="w-full flex justify-center items-center"
                            >
                                <About @click-project="handleClick" />
                            </div>
                        </div>
                    </section>

                    <section class="h-full mb-28">
                        <div class="w-full flex justify-center items-center">
                            <Skills />
                        </div>
                    </section>

                    <section class="h-full">
                        <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                            <div
                                class="w-full flex justify-center items-center"
                            >
                                <WorkExperience />
                            </div>
                        </div>
                    </section>

                    <section class="h-full my-28" id="project">
                        <div class="w-full flex justify-center items-center">
                            <Projects />
                        </div>
                    </section>

                    <section class="h-fit my-28">
                        <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                            <div
                                class="w-full flex justify-center items-center"
                            >
                                <GetInTouch />
                            </div>
                        </div>
                    </section>

                    <hr class="border border-gray-300" />

                    <footer class="mt-10">
                        <div
                            class="w-full flex flex-col justify-center items-center"
                        >
                            <Footer />
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import Home from "./Components/Home.vue";
import About from "./Components/About.vue";
import Skills from "./Components/Skills.vue";
import Projects from "./Components/Projects.vue";
import WorkExperience from "./Components/WorkExperience.vue";
import GetInTouch from "./Components/GetInTouch.vue";
import Footer from "./Components/Footer.vue";

const handleClick = (value: string) => {
    window.location.href = value;
};
</script>
