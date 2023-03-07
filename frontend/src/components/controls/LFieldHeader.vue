<template>

  <article class="prose prose-sm max-w-none select-none">
    <h3> {{props.title}} </h3>
    <p> {{props.description}} </p>
  </article>

</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>