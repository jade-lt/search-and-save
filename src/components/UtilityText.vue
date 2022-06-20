<script>
export default {
  props: {
    heading: { type: Boolean, default: false },
    size: { type: String, default: "body" },
  },
};
</script>

<template>
  <div class="search-save-text">
    <span :class="[size, { heading: heading }]">
      <slot />
    </span>
  </div>
</template>

<style>
@import "@/assets/base.css";
/* equivalent to <p> */
.body {
  font-size: 1em;
}
/* equivalent to <h6> */
.xxs {
  font-size: 0.67em;
}
/* equivalent to <h5> */
.xs {
  font-size: 0.83em;
}
/* equivalent to <h4> */
.s {
  font-size: 1em;
}
/* equivalent to <h3> */
.m {
  font-size: 1.17em;
}
/* equivalent to <h2> */
.l {
  font-size: 1.5em;
}
/* equivalent to <h1> */
.xl {
  font-size: 2em;
}
/* bold */
.heading {
  font-weight: 700;
}
</style>
