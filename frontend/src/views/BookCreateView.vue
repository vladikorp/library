<template>
    <CreatePanel/>
    <PageContent class="">
      <div class="flex flex-row w-full">
        <div class="details flex flex-col mr-auto w-[500px]">
          <LInputField
            title='Назва'
            :disabled="false"
          />
          <LInputField
            title='Автор'
            :disabled="false"
          />
          <LInputField
            title='Тип'
            :disabled="false"
          />
          <LAreaField
            title='Опис'
            :disabled="false"
          />
          <LInputFileField 
          :disabled="false"/>
        </div>
        <div class="viewBook flex">
          <iframe src="" frameborder="0"
          class="rounded-md h-auto w-[1240px] m-2"></iframe>
        </div>
      </div>
    </PageContent>
    
  </template>
  
  <script setup>
  import PageContent from '../components/layout/PageContent.vue';
  import CreatePanel from '../components/layout/CreatePanel.vue';
  import LInputField from '../components/controls/LInputField.vue';
  import LAreaField from '../components/controls/LAreaField.vue';
  import LInputFileField from '../components/controls/LInputFileField.vue';
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>