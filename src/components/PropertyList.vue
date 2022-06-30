<script setup>
import AppText from "./AppText.vue";
import PropertyCard from "./PropertyCard.vue";
</script>

<script>
export default {
  props: {
    properties: { type: Array, default: undefined },
    title: { type: String, default: null },
    type: { type: String, default: null },
  },
  emits: ["add", "remove"],
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
    <AppText class="list-title" heading size="l">
      {{ title }}
    </AppText>
    <div v-if="properties.length" class="properties">
      <TransitionGroup name="list" tag="div">
        <PropertyCard
          v-for="property in properties"
          ref="cards"
          :key="property.id"
          :property="property"
          :type="type"
          @action-clicked="handleClick(property)"
        />
      </TransitionGroup>
    </div>
    <!-- show an empty state if there are no properties in the list -->
    <div v-else class="empty">
      <AppText size="s">
        {{
          type === "result"
            ? "Search results will appear here"
            : "Your saved properties will appear here"
        }}
      </AppText>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
.search-save-list {
  min-width: 320px;
}
.list-title {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 336px;
  border-radius: 8px;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
