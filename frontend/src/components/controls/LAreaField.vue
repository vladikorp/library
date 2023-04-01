<template>
    <div class="m-2">

        <div class="ml-1">
        <LFieldHeader :title="props.title" :description="props.description"
        class="font-semibold"/>
        </div>
        <div class="flex mt-2 flex-row justify-between relative">

            <textarea type="text" class="focus:outline-none border-2 input input-bordered input-primary w-full color-primary relative h-auto"
            rows="10"
            :disabled="props.disabled"
            :value="props.text"
            :placeholder="props.placeholder"
            @input="emit('update:text', $event.target.value)"
            ></textarea>
        </div>
        

    </div>
</template>
  
<script setup>
    import LFieldHeader from './LFieldHeader.vue';
  
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
        text: {
        type: String,
        default: ''
        }
    })
    
    
</script>
  
  <style scoped>
  
  </style>