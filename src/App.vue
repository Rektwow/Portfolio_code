<template>
  <!-- <HeroSection /> -->
  <div class="bg-[#1a1a1a] min-h-screen">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <ExperienceAndSkills />z
    <AboutSection />
    <LatestProjects />
  </div>
</template>
<script setup>
/* import HeroSection from "@/components/HeroSection.vue"; */
import { defineAsyncComponent } from "vue";
//Import components asynchronously
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const HeroSection = defineAsyncComponent(() => import("@/components/HeroSection.vue"));
const ServicesSection = defineAsyncComponent(() => import("@/components/ServicesSection.vue"));
const AboutSection = defineAsyncComponent(() => import("@/components/AboutSection.vue"));
const ExperienceAndSkills = defineAsyncComponent(() => import("@/components/ExperienceAndSkills.vue"));
const LatestProjects = defineAsyncComponent(() => import("@/components/LatestProjects.vue"));
</script>
