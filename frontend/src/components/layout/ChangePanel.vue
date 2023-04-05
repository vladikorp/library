<template>
    <div class="w-full h-14 flex flex-none justify-between items-center pl-2 md:pl-4 pr-4 md:pr-10 border-b s-border bg-base-200 select-none">
      <!-- action buttons -->
      <div class="flex flex-row items-center md:gap-4">
            <slot name="actions">
                <div class="w-24"></div>
                <LModalButton
                  bg_color='primary'
                  title="Видалити"
                  modal="Ви дійсно бажаєте видалити книгу?"
                />
            </slot>
        </div>
    </div>

    <!-- <div class="pl-16 pr-16">
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
    </div> -->
  </template>
  
  <script setup>
  import LModalButton from '../controls/buttons/LModalButton.vue';
  </script>
  
  <style lang="scss" scoped>
  
  </style>