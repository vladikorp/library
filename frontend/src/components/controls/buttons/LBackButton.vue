<template>
  <button class="btn btn-circle btn-outline btn-sm btn-primary" @click="goBack()">
    <ArrowLeftIcon class="w-6 h-6"/>
  </button>
</template>

<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';

import { useRouter } from 'vue-router';

const router = useRouter()

const goBack = () => {
  router.go(-1)
}

</script>

<style scoped>

</style>