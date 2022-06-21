<script setup>
import UtilityText from "./UtilityText.vue";
import CloseIcon from "./icons/RemoveIcon.vue";
import UtilityButton from "./UtilityButton.vue";
</script>

<script>
export default {
  props: {
    msg: { type: String, default: null },
  },
};
</script>

<template>
  <div class="search-save-error">
    <div class="error-container">
      <div class="error-header">
        <UtilityButton @click="$emit('close')">
          <CloseIcon />
        </UtilityButton>
      </div>
      <div class="error-message">
        <UtilityText heading size="l">
          {{ msg }}
        </UtilityText>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
.search-save-error {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-container {
  min-height: 160px;
  max-width: 320px;
  padding: 24px;
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
  align-items: center;
  text-align: center;
}
</style>
