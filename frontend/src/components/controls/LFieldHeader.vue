<template>

  <article class="prose max-w-none select-none">
    <h1 v-if="props.titleBig" class="text-2xl font-bold pb-[16px]"> {{props.title}} </h1>
    <h3 v-else> {{ props.title }} </h3>

    <p> {{props.description}} </p>
  </article>

</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  titleBig: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>