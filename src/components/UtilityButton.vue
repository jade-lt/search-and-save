<script setup>
import UtilityText from "../components/UtilityText.vue";
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
      <UtilityText heading size="s">
        {{ label }}
      </UtilityText>
    </button>
  </div>
</template>

<style>
@import "@/assets/base.css";
.search-save-button button {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
}
</style>
