<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <img :src="src" :alt="alt" />
</template>

<style scoped>
img {
  display: block;
  margin: 0 auto;
  max-width: 200px;
  border-radius: 10px;
}
</style>
