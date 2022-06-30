<script setup>
import axios from "axios";

import TheHeader from "./TheHeader.vue";
import PropertyList from "./PropertyList.vue";
import AppPopup from "./AppPopup.vue";
</script>

<script>
export default {
  data() {
    return {
      results: [],
      saved: [],
      resultsLoaded: false,
      savedLoaded: false,
      showError: false,
    };
  },
  created() {
    this.getResults();
    this.getSaved();
  },
  methods: {
    async getResults() {
      const { data } = await axios.get("http://localhost:4000/results");
      this.results = data;
      this.resultsLoaded = true;
    },
    async getSaved() {
      const { data } = await axios.get("http://localhost:4000/saved");
      this.saved = data;
      this.savedLoaded = true;
    },
    async add(property) {
      // ensure there are no duplicate saved properties:
      const existing = this.saved.find((el) => el.id === property.id);
      if (existing) {
        this.showError = true;
      } else {
        const { data } = await axios.post("http://localhost:4000/saved", {
          price: property.price,
          agency: {
            brandingColors: {
              primary: property.agency.brandingColors.primary,
            },
            logo: property.agency.logo,
          },
          id: property.id,
          mainImage: property.mainImage,
        });
        this.saved = [...this.saved, data];
      }
    },
    async remove(property) {
      await axios.delete(`http://localhost:4000/saved/${property.id}`);
      this.getSaved();
    },
  },
};
</script>

<template>
  <div class="search-save-dashboard">
    <TheHeader />
    <div class="search-save-main">
      <PropertyList
        v-if="resultsLoaded"
        ref="results"
        title="Results"
        type="result"
        :properties="results"
        @add="add"
      />
      <PropertyList
        v-if="savedLoaded"
        ref="saved"
        title="Saved Properties"
        type="saved"
        :properties="saved"
        @remove="remove"
      />
    </div>
  </div>
  <AppPopup
    v-if="showError"
    msg="You've already saved this property!"
    @close="showError = false"
  />
</template>

<style>
@import "@/assets/base.css";
.search-save-main {
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin: 0 48px;
}
@media only screen and (max-width: 600px) {
  .search-save-main {
    flex-direction: column;
    align-items: center;
  }
}
@media only screen and (max-width: 900px) {
  .search-save-main {
    margin: 0;
  }
}
</style>
