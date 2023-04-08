<template>

  <LPageHeader 
    :page-title="book.title || 'Новий матеріал'"
  >
    <template v-slot:actions>

      <!-- Add btn -->
      <LButton v-if="isRecordEdited" class="btn-outline btn-primary" title="Зберегти зміни" @click="navigateToDetails()">
        <CheckIcon class="w-6 h-6"></CheckIcon>
      </LButton>

      <!-- Refresh btn -->
      <LRefreshButton v-if="isExistingRecord" :is-loading='isLoading' @click="search()"/>

    </template>

  </LPageHeader>
  
  <LPageContent>

    <div class="flex flex-row w-full">

      <div class="details flex flex-col mr-auto w-1/3">

        <LInputField
          title='Назва'
          v-model:text="book.title"
          @update:text="bookFieldUpdated()"
        />

        <LInputField
          title='Автор'
          v-model:text="book.author"
          @update:text="bookFieldUpdated()"
        />

        <LInputField
          title='Тип'
          v-model:text="book.type"
          @update:text="bookFieldUpdated()"
        />

        <LAreaField
          title='Опис'
          v-model:text="book.description"
          @update:text="bookFieldUpdated()"
        />

      </div>

      <div class="flex rounded-md h-auto w-2/3 m-2">

        <LButton class="btn-primary mx-auto my-auto" title="Завантажити" @click="showUploadFileModal = true"/>
        <LModal v-model:show-modal="showUploadFileModal">
          <template v-slot:box>
            <UploadFile @fileUploaded="attachFile"></UploadFile>
          </template>
        </LModal>


        <!-- <LInputFileField v-if="!book.src" class="my-auto mx-auto"/> -->

        <iframe v-if="book.src && displayFile" src="test.pdf" frameborder="0">
        </iframe>

        <LButton v-if="book.src && !displayFile" class="btn-primary my-auto mx-auto" title="Перегляд" @click="getFile()">
          <CloudArrowDownIcon class="w-6 h-6"/>
        </LButton>
      </div>

    </div>
  </LPageContent>
  
</template>

<script setup>
// Vue imports
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';

// Functional
import { useBookStore } from '../store/bookStore';
import cloneDeep from 'lodash.clonedeep'
import isEqual from 'lodash.isequal';

// Components
import LPageContent from '../components/layout/LPageContent.vue';
import LInputField from '../components/controls/LInputField.vue';
import LAreaField from '../components/controls/LAreaField.vue';
import LInputFileField from '../components/controls/LInputFileField.vue';
import LPageHeader from '../components/layout/LPageHeader.vue';
import LButton from '../components/controls/buttons/LButton.vue';
import LRefreshButton from '../components/controls/buttons/LRefreshButton.vue';
import LModal from '../components/modal/LModal.vue';
import UploadFile from '../components/functional/UploadFile.vue';

// Icons
import { CheckIcon, CloudArrowDownIcon } from '@heroicons/vue/24/outline';

const showUploadFileModal = ref(false)

const attachFile = async (uri) => {
  // get uri here and write it in book instance
}

const mockTest = {
  type: "article",
  title: "TitleBook",
  publisher: "Publisher",
  notes: "Notes: Younus, Arjumand ; Qureshi, M Atif ; Saeed, Muhammad ; Ali, Syed Asim ; Touheed, Nasir ; Qureshi, M Shahid International journal of computer science issues, 2011, Vol.8 (3), p.438"
}

/*
  Book
*/

const displayFile = ref(false)

const book = ref({})
const bookSnapshot = ref({})

const prepareBook = (bookObj) => {
  book.value = cloneDeep(bookObj)
  bookSnapshot.value = bookObj
}

const getBook = async () => {
  console.log('get book hehe')
}

const getFile = async () => {

}

const saveBook = async () => {

}

const createBook = async () => {

}

const updateBook = async () => {

}

/*
  Helpers
*/

const isExistingRecord = computed(() => {
  return "SK" in book.value
})

const isRecordEdited = ref(false)
const bookFieldUpdated = () => {
  isRecordEdited.value = !isEqual(book.value, bookSnapshot.value)
}

/*
  Store
*/

const bookStore = useBookStore()

/*
  Navigation
*/

const route = useRoute()
const router = useRouter()

const navigateToCreatedBook = () => {
  router.replace({
    name: 'BookDetails',
    params: {
      SK: book.value.SK
    }
  })
}

/*
  Lifecycle
*/
onMounted(async () => {
  await getBook()
})

</script>

<style lang="scss" scoped>

</style>