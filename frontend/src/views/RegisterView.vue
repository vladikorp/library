<template>
  <LPageContent>

    <div class="flex flex-col items-center gap-4">

      <LInputField
        title="Електронна адреса"
      />

      <LInputField
        title="Логін"
      />

      <LInputField
        title="Пароль"
        :is-password="true"
      />


    
    </div>

  </LPageContent>
</template>

<script setup>
import LInputField from '../components/controls/LInputField.vue';
import LPageContent from '../components/layout/PageContent.vue'

</script>

<style scoped>

</style>