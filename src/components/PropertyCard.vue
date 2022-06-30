<script setup>
import AppText from "./AppText.vue";
import AppButton from "./AppButton.vue";
import AddIcon from "./icons/AddIcon.vue";
import RemoveIcon from "./icons/RemoveIcon.vue";
</script>

<script>
export default {
  props: {
    property: { type: Object, default: undefined },
    type: { type: String, default: null },
  },
  emits: ["action-clicked"],
  data() {
    return {
      showActions: false,
    };
  },
};
</script>

<template>
  <div
    class="search-save-card"
    @mouseover="showActions = true"
    @mouseleave="showActions = false"
  >
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
      <AppText heading size="s">{{ property.price }}</AppText>
      <div class="card-actions">
        <!-- conditionally render either an add or remove button -->
        <Transition>
          <AppButton
            v-if="showActions"
            ref="action-button"
            :label="type === 'result' ? 'Add' : 'Remove'"
            @click="$emit('action-clicked')"
          >
            <AddIcon v-if="type === 'result'" />
            <RemoveIcon v-else />
          </AppButton>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
.search-save-card {
  width: 320px;
  height: 336px;
  margin-bottom: 32px;
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
.card-actions {
  display: flex;
  justify-content: flex-end;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
