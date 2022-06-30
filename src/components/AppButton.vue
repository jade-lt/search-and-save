<script setup>
import AppText from "./AppText.vue";
</script>

<script>
export default {
  props: {
    label: { type: String, default: null },
  },
};
</script>

<template>
  <div class="search-save-button">
    <button type="button">
      <slot />
      <AppText v-if="label" heading size="s">
        {{ label }}
      </AppText>
    </button>
  </div>
</template>

<style>
@import "@/assets/base.css";
.search-save-button button {
  display: flex;
  align-items: center;
  padding: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #54acfc;
  color: #fff;
  fill: #fff;
}
.search-save-text {
  margin: 0 4px 0 8px;
}
</style>
