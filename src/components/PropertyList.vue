<script setup>
import UtilityText from "./UtilityText.vue";
import PropertyCard from "../components/PropertyCard.vue";
</script>
<script>
export default {
  props: {
    properties: { type: Array, default: undefined },
    title: { type: String, default: null },
  },
};
</script>

<template>
  <div class="search-save-list">
    <UtilityText heading size="m">
      {{ title }}
    </UtilityText>
    <PropertyCard
      v-for="property in properties"
      :key="property"
      :property="property"
    />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
