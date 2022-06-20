<script>
import UtilityText from "./UtilityText.vue";
export default {
  props: {
    property: { type: Object, default: undefined },
  },
  components: { UtilityText },
};
</script>

<template>
  <div class="search-save-card">
    <div
      class="card-header"
      :style="{
        '--primary': property.agency.brandingColors.primary,
      }"
    >
      <img class="logo-image" :src="property.agency.logo" />
    </div>
    <div
      class="card-image"
      :style="{
        'background-image': `url(${property.mainImage})`,
      }"
    />
    <div class="card-footer">
      <UtilityText heading size="m">{{ property.price }}</UtilityText>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
.search-save-card {
  width: 320px;
  height: 336px;
  margin: 0 12px 32px 12px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.card-header {
  height: 32px;
  padding: 8px;
  background-color: var(--primary);
}
.logo-image {
  height: 100%;
}
.card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card-footer {
  height: 32px;
  padding: 12px;
  background-color: var(--primary);
}
</style>
