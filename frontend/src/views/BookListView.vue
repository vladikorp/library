<template>
  <div>

    <PageContent>
      
      <div class="flex flex-row flex-wrap h-full">

        <div class="flex-col justify-start overflow-auto scroll h-full w-full md:w-72 select-none"
            :class="showFilters ? '': 'hidden md:flex'">
          
          <LInputField
            title="Предмет"
            placeholder="Пошук за предметом"
            v-model:text="bookStore.filter.subject"
          />

          <LInputField
            title="Автор"
            placeholder="Пошук за автором"
            v-model:text="bookStore.filter.author"
          />

          <LInputField
            title="Назва"
            placeholder="Пошук за назвою"
            v-model:text="bookStore.filter.title"
          />

        </div>

      </div>

      <div class="divider lg:divider-horizontal">

      </div>


    </PageContent>

  </div>
</template>

<script setup>

// Vue imports
import { ref } from 'vue'
import { useBookStore } from '../store/bookStore'

// Components
import PageContent from '../components/layout/PageContent.vue';
import LInputField from '../components/controls/LInputField.vue';

// Functions
import { useDebounceFn } from '@vueuse/core'

const bookStore = useBookStore()

const search = useDebounceFn(() => {
  bookStore.listBooks()
}, 500)


</script>

<style scoped>

</style>