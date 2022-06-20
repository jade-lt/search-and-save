<script setup>
import { RouterLink } from "vue-router";
import UtilityText from "../components/UtilityText.vue";
import HomeIcon from "./icons/HomeIcon.vue";
</script>

<template>
  <div class="search-save-header">
    <UtilityText>
      {{ "Search and Save" }}
    </UtilityText>
    <nav>
      <RouterLink to="/">
        <HomeIcon />
      </RouterLink>
      <RouterLink to="/about">
        <UtilityText heading size="s">
          {{ "About" }}
        </UtilityText>
      </RouterLink>
    </nav>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
