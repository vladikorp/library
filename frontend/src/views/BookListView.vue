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