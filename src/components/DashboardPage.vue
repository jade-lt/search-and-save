<script setup>
import UtilityHeader from "../components/UtilityHeader.vue";
import PropertyList from "../components/PropertyList.vue";
import ErrorPopup from "../components/ErrorPopup.vue";
</script>

<script>
export default {
  data() {
    return {
      results: [
        {
          price: "$726,500",
          agency: {
            brandingColors: {
              primary: "#ffe512",
            },
            logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
          },
          id: "1",
          mainImage:
            "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
        },
        {
          price: "$560,520",
          agency: {
            brandingColors: {
              primary: "#fcfa3b",
            },
            logo: "https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif",
          },
          id: "2",
          mainImage:
            "https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg",
        },
        {
          price: "$826,500",
          agency: {
            brandingColors: {
              primary: "#57B5E0",
            },
            logo: "https://i1.au.reastatic.net/170x32/b269b079bf554d2ae9ca01d578bb3d80ec5fbb4f57062bbfcd51bbf1f2d13981/main.gif",
          },
          id: "3",
          mainImage:
            "https://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg",
        },
      ],
      saved: [
        {
          price: "$526,500",
          agency: {
            brandingColors: {
              primary: "#000000",
            },
            logo: "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif",
          },
          id: "4",
          mainImage:
            "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg",
        },
      ],
      showError: false,
    };
  },
  mounted() {
    this.results[0].agency.brandingColors.primary = "#00467f";
    this.saved[0].agency.brandingColors.primary = "#0ebab3";
  },
  methods: {
    add(property) {
      const existing = this.saved.find((el) => el.id === property.id);
      if (existing) {
        this.showError = true;
      } else {
        this.saved.splice(this.saved.length, 0, property);
      }
    },
    remove(property) {
      const index = this.saved.findIndex((el) => el.id === property.id);
      this.saved.splice(index, 1);
    },
  },
};
</script>

<template>
  <div class="search-save-dashboard">
    <UtilityHeader />
    <div class="search-save-main">
      <PropertyList
        title="Results"
        type="result"
        :properties="results"
        @add="add"
      />
      <PropertyList
        title="Saved Properties"
        type="saved"
        :properties="saved"
        @remove="remove"
      />
    </div>
  </div>
  <ErrorPopup
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
</style>
