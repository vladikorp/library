<template>
  <ChangePanel/>
  
  <PageContent class="">
    <div class="flex flex-row w-full">
      <div class="details flex flex-col mr-auto w-[500px]">
        <LInputField
          title='Назва'
          :text="mockTest.title"
          :disabled="true"
        />
        <LInputField
          title='Автор'
          :text="mockTest.publisher"
          :disabled="true"
        />
        <LInputField
          title='Тип'
          :text="mockTest.type"
          :disabled="true"
        />
        <LAreaField
          title='Опис'
          :text="mockTest.notes"
          :disabled="true"
        />
        <LInputFileField 
        :disabled="true"/>
      </div>
      <div class="viewBook flex">
        <iframe src="test.pdf" frameborder="0"
        class="rounded-md h-auto w-[1240px] m-2"></iframe>
      </div>
    </div>
  </PageContent>
  
</template>

<script setup>
import PageContent from '../components/layout/LPageContent.vue';
import ChangePanel from '../components/layout/ChangePanel.vue';
import LInputField from '../components/controls/LInputField.vue';
import LAreaField from '../components/controls/LAreaField.vue';
import LInputFileField from '../components/controls/LInputFileField.vue';

const mockTest = {
  type: "article",
  title: "TitleBook",
  publisher: "Publisher",
  notes: "Notes: Younus, Arjumand ; Qureshi, M Atif ; Saeed, Muhammad ; Ali, Syed Asim ; Touheed, Nasir ; Qureshi, M Shahid International journal of computer science issues, 2011, Vol.8 (3), p.438"
}
</script>

<style lang="scss" scoped>

</style>