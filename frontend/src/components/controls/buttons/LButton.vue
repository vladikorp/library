<template>
    <button class="btn" @click="emit('click')">
      <slot></slot>
      
      <div v-if="props.title" class="m-2">{{ props.title }}</div>
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