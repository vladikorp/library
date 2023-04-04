<template>
    <button class="btn-primary" @click="emit('click')">
      <div v-if="props.title">{{ props.title }}</div>
      <slot></slot>
    </button>
</template>

<script setup>

const emit = defineEmits(['click'])

const props = defineProps({
  title: String
})

</script>

<style scoped>

</style>