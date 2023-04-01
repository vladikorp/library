<template>
    <div class="m-2">
        <div class="flex flex-row justify-between relative">

            <input type="file" class="file-input outline-none file-input-primary w-full max-w-xs"
            accept=".pdf .doc .docx" 
            :disabled="props.disabled"/>
        </div>
        

    </div>
</template>
  
<script setup>
    const props = defineProps({
        disabled: {
            type: Boolean,
            default: false
        }
    });
</script>
  
  <style scoped>
  
  </style>