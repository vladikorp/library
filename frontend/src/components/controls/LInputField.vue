<template>
  <div class="m-2">

    <div class="ml-1">
      <LFieldHeader :title="props.title" :description="props.description"
      class="font-semibold"/>
    </div>

    <div class="flex gap-x-2 gap-y-2 mt-2 flex-wrap justify-end relative">
      <input class="input input-bordered grow focus:outline-2 focus:outline-primary focus:outline-offset-0"
        :readonly="readonly"
        :disabled="disabled"
        :placeholder="props.placeholder" 
        v-bind:type="isPassword && !showPassword ? 'password' : 'text'"
        :value="props.text"
        @input="emit('update:text', $event.target.value)"
        tabindex="1"
      />

      <!-- show/hide for password fields -->
      <LButton v-if="isPassword" @click="togglePasswordVisible()" tabindex="-1"
        class="btn-outline btn-primary">
          <EyeIcon      v-if="!showPassword" class="w-6 h-6"></EyeIcon>
          <EyeSlashIcon v-if="showPassword"  class="w-6 h-6"></EyeSlashIcon>
      </LButton>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import LButton from './buttons/LButton.vue';
import LFieldHeader from './LFieldHeader.vue';


import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['update:text'])

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  isPassword: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  }
})

const showPassword = ref(false)

const togglePasswordVisible = () =>{
  showPassword.value = !showPassword.value
}

</script>

<style scoped>

</style>