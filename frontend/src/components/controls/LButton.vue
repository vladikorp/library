<template>
    <button class="btn-primary">
        <div v-if="props.title">{{ props.title }}</div>
    </button>
</template>

<script setup>

const props = defineProps({
  title: String
})

</script>

<style scoped>

</style>