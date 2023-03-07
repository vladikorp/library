<template>
  <LFieldHeader :title="props.title" :description="props.description"/>

  <div class="flex gap-x-4 gap-y-2 mt-2 flex-wrap justify-end relative">
    <input
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      class="input input-bordered focus:outline-none bg-base-300 grow"
      v-bind:type="isPassword && !showPassword ? 'password' : 'text'"
      :value="props.value"
      @input="emit('update:value', $event.target.value)"
    />

    <LButton class="btn-outline"
      v-if="isPassword" @click="togglePasswordVisible()">
        <EyeIcon      v-if="!showPassword" class="w-6 h-6"></EyeIcon>
        <EyeSlashIcon v-if="showPassword"  class="w-6 h-6"></EyeSlashIcon>
    </LButton>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import LButton from './LButton.vue';
import LFieldHeader from './LFieldHeader.vue';
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['update:value'])

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
  placeholder: {
    type: String,
    default: ''
  },
  isPassword: {
    type: Boolean,
    default: false
  },
  value: {
    type: Boolean,
    defult: ''
  }
})

const showPassword = ref(false)

const togglePasswordVisible = () =>{
  showPassword.value = !showPassword.value
}

</script>

<style scoped>

</style>