<template>
  <div class="m-2">

    <div class="ml-1">
      <LFieldHeader :title="props.title" :description="props.description"
      class="font-semibold"/>
    </div>
      <div class="flex mt-2 flex-row justify-between relative">

        <input type="text" class="focus:outline-none border-2 input input-bordered input-primary w-full color-primary relative"
          :disabled="props.disabled"
          :value="props.text"
          :placeholder="props.placeholder"
          :type="isPassword && !showPassword ? 'password' : 'text'"
          @input="emit('update:text', $event.target.value)"
        />

        <LButton class="btn-outline flex w-12 w-full h-full justify-center rounded-xl absolute translate-x-[487%]"
          v-if="isPassword" @click="togglePasswordVisible()">
            <EyeIcon      v-if="!showPassword" class="w-6 h-12"></EyeIcon>
            <EyeSlashIcon v-if="showPassword"  class="w-6 h-12"></EyeSlashIcon>
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