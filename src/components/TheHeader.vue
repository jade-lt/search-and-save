<script setup>
import AppText from "./AppText.vue";
</script>

<template>
  <div class="search-save-header">
    <img
      alt="Search and save logo"
      class="logo"
      src="@/assets/logo.svg"
      width="32"
      height="32"
    />
    <AppText heading size="xl" class="title">
      {{ "Search & Save" }}
    </AppText>
  </div>
</template>

<style>
@import "@/assets/base.css";
.search-save-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px;
}
@media only screen and (max-width: 600px) {
  .search-save-header {
    padding: 48px;
  }
}
</style>
