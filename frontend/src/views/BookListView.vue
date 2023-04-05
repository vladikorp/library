<template>
    
  <LPageHeader 
    page-title="Учбові матеріали"
  >
    <template v-slot:actions>

      <!-- Add btn -->
      <LButton class="btn-outline btn-primary" title="Додати матеріал" @click="navigateToDetails()">
        <PlusIcon class="w-6 h-6"></PlusIcon>
      </LButton>

      <!-- Refresh btn -->
      <LRefreshButton :is-loading='isLoading' @click="search()"/>

    </template>
  </LPageHeader>

  <LPageContent>

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
          placeholder="Дата"
          v-model:text="bookStore.filter.title"
        />

        <LInputField
          title="Видавець"
          placeholder="ПІБ"
          v-model:text="bookStore.filter.title"
        />

      </div>

    </div>

    <div class="divider lg:divider-horizontal"></div>

    <div class="bookList flex flex-col">

      <BookCardComponent 
      :type="mockBook.type" 
      :title="mockBook.title"
      :publisher="mockBook.publisher"
      @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
        :type="mockMagazine.type" 
        :title="mockMagazine.title"
        :publisher="mockMagazine.publisher"
        @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
        :type="mockNewspaper.type" 
        :title="mockNewspaper.title"
        :publisher="mockNewspaper.publisher"
        @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
        :type="mockArticle.type" 
        :title="mockArticle.title"
        :publisher="mockArticle.publisher"
        @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
      :type="mockBook.type" 
      :title="mockBook.title"
      :publisher="mockBook.publisher"
      @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
        :type="mockMagazine.type" 
        :title="mockMagazine.title"
        :publisher="mockMagazine.publisher"
        @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
        :type="mockNewspaper.type" 
        :title="mockNewspaper.title"
        :publisher="mockNewspaper.publisher"
        @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
        :type="mockArticle.type" 
        :title="mockArticle.title"
        :publisher="mockArticle.publisher"
        @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
      :type="mockBook.type" 
      :title="mockBook.title"
      :publisher="mockBook.publisher"
      @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
        :type="mockMagazine.type" 
        :title="mockMagazine.title"
        :publisher="mockMagazine.publisher"
        @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
        :type="mockNewspaper.type" 
        :title="mockNewspaper.title"
        :publisher="mockNewspaper.publisher"
        @navigate-to-details="navigateToDetails"
      />
      <BookCardComponent 
        :type="mockArticle.type" 
        :title="mockArticle.title"
        :publisher="mockArticle.publisher"
        @navigate-to-details="navigateToDetails"
      />

    </div>
    
  </LPageContent>

</template>

<script setup>

// Vue imports
import { ref, onMounted } from 'vue'
import { useBookStore } from '../store/bookStore'

// Components
import LPageContent from '../components/layout/LPageContent.vue';
import LPageHeader from '../components/layout/LPageHeader.vue';
import LInputField from '../components/controls/LInputField.vue';
import BookCardComponent from '../components/entities/BookCardComponent.vue';
import LRefreshButton from '../components/controls/buttons/LRefreshButton.vue';
import LButton from '../components/controls/buttons/LButton.vue';

// Functions
import { useDebounceFn } from '@vueuse/core'
import { useRouter } from 'vue-router';

import { PlusIcon } from '@heroicons/vue/24/outline';

const mockBook = {
  type: "book",
  title: "TitleBook",
  publisher: "Publisher",
  notes: "Notes: Younus, Arjumand ; Qureshi, M Atif ; Saeed, Muhammad ; Ali, Syed Asim ; Touheed, Nasir ; Qureshi, M Shahid International journal of computer science issues, 2011, Vol.8 (3), p.438"
}
const mockMagazine = {
  type: "magazine",
  title: "TitleBook",
  publisher: "Publisher",
  notes: "Notes: Younus, Arjumand ; Qureshi, M Atif ; Saeed, Muhammad ; Ali, Syed Asim ; Touheed, Nasir ; Qureshi, M Shahid International journal of computer science issues, 2011, Vol.8 (3), p.438"
}
const mockNewspaper = {
  type: "newspaper",
  title: "TitleBook",
  publisher: "Publisher",
  notes: "Notes: Younus, Arjumand ; Qureshi, M Atif ; Saeed, Muhammad ; Ali, Syed Asim ; Touheed, Nasir ; Qureshi, M Shahid International journal of computer science issues, 2011, Vol.8 (3), p.438"
}
const mockArticle = {
  type: "article",
  title: "TitleBook",
  publisher: "Publisher",
  notes: "Notes: Younus, Arjumand ; Qureshi, M Atif ; Saeed, Muhammad ; Ali, Syed Asim ; Touheed, Nasir ; Qureshi, M Shahid International journal of computer science issues, 2011, Vol.8 (3), p.438"
}

/*
  Books
*/

const search = useDebounceFn(() => {
  bookStore.listBooks()
}, 500)

/*
  Store
*/
const bookStore = useBookStore()

/*
  Navigation
*/

const router = useRouter()

const navigateToDetails = () => {
  router.push({
    name: "BookDetails"
  })
}

/*
  Lifecycle
*/
onMounted(() => {
  // do something here
})

</script>

<style scoped>

</style>