<template>
  <div>

    <LPageContent>

      <div class="flex flex-col items-center grow">

        <p>Home page</p>

        <LButton class="btn btn-circle" 
          title="ntcn" 
          @click="getUploadUrl()"
        />

      </div>


    </LPageContent>

  </div>
</template>

<script setup>
import LPageContent from '../components/layout/LPageContent.vue';
import LButton from '../components/controls/buttons/LButton.vue';

import StorageApi from '../api/storageApi'

const getUploadUrl = async () => {
  let result = StorageApi.getUploadUrl('test')
  console.log('get_upload_url result - ', result)
}

</script>

<style scoped>

</style>