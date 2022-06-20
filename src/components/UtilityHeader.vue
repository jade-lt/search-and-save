<script setup>
import { RouterLink } from "vue-router";
import UtilityText from "../components/UtilityText.vue";
import UtilityButton from "../components/UtilityButton.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import AboutIcon from "./icons/AboutIcon.vue";
</script>

<template>
  <div class="search-save-header">
    <UtilityText heading size="xl" class="title">
      {{ "Search and Save" }}
    </UtilityText>
    <nav>
      <RouterLink to="/">
        <UtilityButton label="Home">
          <HomeIcon />
        </UtilityButton>
      </RouterLink>
      <RouterLink to="/about">
        <UtilityButton label="About">
          <AboutIcon />
        </UtilityButton>
      </RouterLink>
    </nav>
  </div>
</template>

<style>
@import "@/assets/base.css";
.title {
  display: flex;
  justify-content: center;
  flex: 1;
}
nav {
  display: flex;
}
</style>
