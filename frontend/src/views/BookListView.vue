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

          <LInputField
            title="Рік публікації"
            placeholder="Пошук за назвою"
            v-model:text="bookStore.filter.title"
          />

          <LInputField
            title="Видавець"
            placeholder="Пошук за назвою"
            v-model:text="bookStore.filter.title"
          />

        </div>

      </div>

      <div class="divider lg:divider-horizontal"></div>

      <BookCardComponent 
        :type="mockBook.type" 
        :title="mockBook.title"
        :publisher="mockBook.publisher"
        @navigate-to-details="navigateToDetails"
      />
      
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
import BookCardComponent from '../components/entities/BookCardComponent.vue';

// Functions
import { useDebounceFn } from '@vueuse/core'
import { useRouter } from 'vue-router';

const mockBook = {
  type: "sdfsdfdf",
  title: "sss",
  publisher: "yyy"
}

const bookStore = useBookStore()

const search = useDebounceFn(() => {
  bookStore.listBooks()
}, 500)


const router = useRouter()

const navigateToDetails = () => {
  router.push({
    name: "BookDetails"
  })
}

</script>

<style scoped>

</style>