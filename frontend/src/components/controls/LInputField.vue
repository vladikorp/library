<template>
  <div class="m-2">

    <div class="ml-1">
      <LFieldHeader :title="props.title" :description="props.description"/>
    </div>

    <div class="flex gap-x-4 gap-y-2 mt-2 flex-wrap justify-end relative">

      <input class="input input-bordered focus:outline-none bg-base-300 grow"
        :disabled="props.disabled"
        :placeholder="props.placeholder"
        :type="isPassword && !showPassword ? 'password' : 'text'"
        :value="props.text"
        @input="emit('update:text', $event.target.value)"
      />

      <LButton class="btn-outline"
        v-if="isPassword" @click="togglePasswordVisible()">
          <EyeIcon      v-if="!showPassword" class="w-6 h-6"></EyeIcon>
          <EyeSlashIcon v-if="showPassword"  class="w-6 h-6"></EyeSlashIcon>
      </LButton>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import LButton from './LButton.vue';
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