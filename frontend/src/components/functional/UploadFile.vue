<template>

  <!-- invisible upload file input element -->
  <input
    ref="inputFileSelect"
    type="file"
    @change="onFileSelected"
    :accept="props.fileType"
    hidden
  />

  <div class="flex flex-col">
    <div v-for="(info, i) in fileInfo" :key="i" class="flex flex-row justify-between">
        <p class="w-48 grow px-4 md:px-6 truncate">{{ info.name }}</p> 

        <div class="flex flex-row items-center justify-end gap-x-4">
            <p>{{ FileHelper.niceBytes(info.size) }}</p>

            <progress 
                class="hidden md:block progress w-48" 
                v-bind:class="{'progress-warning': fileProgress[i]<100, 'progress-success': fileProgress[i] == 100}" 
                :value="fileProgress[i]" 
                max="100"></progress>
            
                <div class="badge md:hidden" v-bind:class="{'badge-warning': fileProgress[i]<100, 'badge-success': fileProgress[i] == 100}">
                    {{fileProgress[i]}}
                </div>

        </div>
    </div>
  </div>

  <!-- no files selected yet -->
  <div>

    <div class="flex flex-col items-center">
      <LFieldHeader title="Завантаження файлів" :title-big="true" class=""/>

      <LButton class="btn-primary content-center" @click="openPickFileDialog" title="Завантажити" :hideNameOnSmallScreen="true" :disable="disableUploadBtn">
        <ArrowUpOnSquareStackIcon class="w-6 h-6"/> 
      </LButton>
    </div>
  </div>

    

</template>

<script setup>

// Functional imports
import { ref } from 'vue';
import axios       from 'axios'
import StorageApi from '../../api/storageApi';

// Components
import LButton from '../controls/buttons/LButton.vue';
import FileHelper from '../../helpers/fileHelper'
import LFieldHeader from '../controls/LFieldHeader.vue'

// Icons
import { ArrowUpOnSquareStackIcon } from '@heroicons/vue/24/outline';


const emit = defineEmits('fileUploaded')

const props = defineProps({
  fileType: {
    type: String,
    default: ''
  }
})
    
const inputFileSelect = ref('')

const fileInfo     = ref([])
const fileData     = ref([])
const fileProgress = ref([])
const fileStatus   = ref([])

const disableUploadBtn = ref(false)

const openPickFileDialog = () => {
  inputFileSelect.value.click();
}

const onFileSelected = (event) => {
  let filesList = Array.from(event.target.files)
  if (filesList.length > 0) {
    disableUploadBtn.value = true
  } 

  filesList.forEach(file => {
    fileInfo.value.push({
        name: file.name,
        size: file.size
    })

    fileData.value.push(file)
    fileProgress.value.push(0)
    fileStatus.value.push('waiting')
  })

  uploadFile(0)
}

const uploadFile = async (index) => {
  let file = fileData.value[index]

  fileStatus.value[index] = 'uploading'

  let response = await StorageApi.getUploadUrl(file.name)
  let uploadDestination = response.upload_url

  if (uploadDestination === null) {
      fileStatus.value[index] = 'waiting'
      return
  }

  const config = {
    onUploadProgress: function (progressEvent) {
      var progressPercent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      fileProgress.value[index] = progressPercent
    }
  };

  let data = new FormData();
  Object.keys(uploadDestination.fields).forEach(key => data.append(key, uploadDestination.fields[key]));
  data.append("file", file);

  axios.post(uploadDestination.url, data, config)
  .then(() => {
      fileStatus.value[index] = 'complete'
      emit('fileUploaded', response.uri)
  })
  .catch((error) => {
      fileStatus.value[index] = 'waiting'
      console.log(error)
  });
}
    
</script>