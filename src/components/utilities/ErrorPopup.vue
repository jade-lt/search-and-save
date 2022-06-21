<script setup>
import UtilityText from "./UtilityText.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import UtilityButton from "./UtilityButton.vue";
</script>

<script>
export default {
  props: {
    msg: { type: String, default: null },
  },
  emits: ["close"],
};
</script>

<template>
  <div class="error-overlay"></div>
  <div class="error-wrapper">
    <div class="error-container">
      <div class="error-header">
        <UtilityButton @click="$emit('close')">
          <CloseIcon />
        </UtilityButton>
      </div>
      <div class="error-message">
        <UtilityText heading size="m">
          {{ msg }}
        </UtilityText>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
.error-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  opacity: 0.8;
}
.error-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-container {
  display: flex;
  flex-direction: column;
  min-height: 160px;
  max-width: 320px;
  padding: 12px 12px 48px 12px;
  background-color: #fff;
  border-radius: 12px;
}
.error-header {
  display: flex;
  justify-content: flex-end;
}
.error-message {
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  text-align: center;
}
</style>
