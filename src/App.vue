<template>
  <!-- <HeroSection /> -->
  <div class="bg-[#1a1a1a] min-h-screen">
    <NavBar />
  </div>
</template>
<script setup>
/* import HeroSection from "@/components/HeroSection.vue"; */
import { defineAsyncComponent } from "vue";
//Import components asynchronously
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
</script>
