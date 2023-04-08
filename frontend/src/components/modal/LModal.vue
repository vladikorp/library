<template>
  <Teleport to="body">
    <input type="checkbox" class="modal-toggle" :checked="props.showModal">
    <div id="defaultModal" class="modal" @click.self="emit('update:showModal', false)">

      <div class="modal-box w-11/12 max-w-5xl">
        <slot name="box"></slot>
      </div>

      <div class="modal-action">
        <slot name="action"></slot>
      </div>

    </div>
  </Teleport>
</template>

<script setup>

const emit = defineEmits(['update:showModal'])

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  }
})

</script>

<style lang="scss" scoped>

</style>