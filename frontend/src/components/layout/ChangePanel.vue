<template>
    <div class="pl-16 pr-16">
      <div class="bg-base-100 flex justify-end">
        
        <button class="btn btn-active btn-accent ml-5">Змінити</button>

        <LModalButton
            bg_color="neutral"
            title="Зберегти"
            modal="Ви дійсно бажаєте зберегти редагування?"
        />
        <LModalButton
            bg_color='primary'
            title="Видалити"
            modal="Ви дійсно бажаєте видалити книгу?"
        />
   
     </div>
    </div>
  </template>
  
  <script setup>
  import LModalButton from '../controls/LModalButton.vue';
  </script>
  
  <style lang="scss" scoped>
  
  </style>