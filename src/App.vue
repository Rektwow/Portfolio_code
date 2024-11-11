<template>
  <!-- <HeroSection /> -->
  <div class="bg-[#1a1a1a] min-h-screen">
    <NavBar />
    <HeroSection />
  </div>
</template>
<script setup>
/* import HeroSection from "@/components/HeroSection.vue"; */
import { defineAsyncComponent } from "vue";
//Import components asynchronously
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const HeroSection = defineAsyncComponent(() =>
  import("@/components/HeroSection.vue")
);
</script>
