<template>
  <LButton class="btn btn-circle btn-ghost" v-bind:class="{ loading: props.isLoading }">
    <ArrowPathIcon class="w-6 h-6"></ArrowPathIcon>
  </LButton>
</template>

<script setup>
import LButton from './LButton.vue';

import { ArrowPathIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  isLoading: {
    type: String,
    default: false
  }
})

</script>

<style scoped>

</style>