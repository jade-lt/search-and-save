<script setup>
import UtilityText from "./UtilityText.vue";
import PropertyCard from "../components/PropertyCard.vue";
</script>
<script>
export default {
  props: {
    properties: { type: Array, default: undefined },
    title: { type: String, default: null },
    type: { type: String, default: null },
  },
  methods: {
    handleClick(property) {
      const event = this.type === "result" ? "add" : "remove";
      this.$emit(event, property);
    },
  },
};
</script>

<template>
  <div class="search-save-list">
    <UtilityText class="list-title" heading size="m">
      {{ title }}
    </UtilityText>
    <PropertyCard
      v-for="property in properties"
      :key="property.id"
      :property="property"
      :type="type"
      @action-clicked="handleClick(property)"
    />
  </div>
</template>

<style>
@import "@/assets/base.css";
.list-title {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}
</style>
