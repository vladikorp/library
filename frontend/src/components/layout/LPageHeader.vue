<template>
  <div class="h-14 flex justify-center ml-16 mr-16 bg-gray-200 rounded-xl shadow border">
    

    <!-- Header text -->
    <div class="flex flex-row items-center grow desktop-drag-zone ml-3">
      <div class="uppercase text-accent-content font-bold">{{ props.pageTitle }}</div>
    </div>

    <!-- Action buttons -->
    <div class="flex flex-row items-center md:gap-4 mr-3">
      <slot name="actions">
        <div class="w-24"></div>
      </slot>
    </div>

  </div>
</template>

<script setup>

const props = defineProps({
  pageTitle: {
    type: String,
    default: ''
  }
})

</script>

<style scoped>

</style>