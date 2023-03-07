<template>
  <div>

    <PageContent>
      
      <div class="flex flex-row flex-wrap h-full">

        <div class="flex-col justify-start overflow-auto scroll h-full w-full md:w-72 select-none"
            :class="showFilters ? '': 'hidden md:flex'">
          
          <LInputField
            title="some input"
            placeholder="some"
            v-model:text="field1"
          />

          <LInputField
            title="some input"
            placeholder="some"
            v-model:text="field1"
          />

          <LInputField
            title="some input"
            placeholder="some"
            v-model:text="field1"
          />

          <LInputField
            title="some input"
            placeholder="some"
            v-model:text="field1"
          />


        </div>

      </div>

      <div class="divider lg:divider-horizontal">

      </div>


    </PageContent>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageContent from '../components/layout/PageContent.vue';
import LInputField from '../components/controls/LInputField.vue';

const field1 = ref('')


</script>

<style scoped>

</style>