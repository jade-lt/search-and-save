<script setup>
import { RouterView } from "vue-router";
import DashboardPage from "./components/DashboardPage.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <DashboardPage />
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
