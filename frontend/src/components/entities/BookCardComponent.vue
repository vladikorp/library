<template>
  <div class="flex flex-col w-full bg-base-100 shadow-xl image-full ">
    

    <div class="flex card bg-gray-200  hover:bg-gray-100" style="border-radius: 0; border-left: 1px solid #d3d4d8;">

      <div class="flex card-body h-38.5 flex-row pb-5">

        <div class="context flex flex-row w-5/6">

          <div class="icon flex">

            <BookOpenIcon               v-if="props.type === 'book'"      class="flex m-auto w-40 h-40 stroke-primary stroke-1"/>
            <BookmarkSquareIcon         v-if="props.type === 'magazine'"  class="flex m-auto w-40 h-40 stroke-primary stroke-1"/>
            <NewspaperIcon              v-if="props.type === 'newspaper'" class="flex m-auto w-40 h-40 stroke-primary stroke-1"/>
            <ClipboardDocumentCheckIcon v-if="props.type === 'article'"   class="flex m-auto w-40 h-40 stroke-primary stroke-1"/>
            
          </div>

          <div class="content flex-col pl-7">
            <div class="flex text-[30px]">{{ props.title }}</div>
            <div class="flex text-[12px] mt-2">{{ props.type }}</div>
            <div class="flex text-[24px] mt-1">{{ props.publisher }}</div>            
            <div class="flex text-[16px] leading-none mt-2.5">{{ props.notes }}</div>
          </div>
        </div>
        <div class="card-actions flex w-1/6">
          <button class="flex btn btn-primary ml-auto mt-auto" @click="emit('navigateToDetails')">Book details</button>
        </div>

    </div>
    </div>
    

</div>
</template>

<script setup>

import { BookOpenIcon, BookmarkSquareIcon, NewspaperIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline'


const emit = defineEmits(["navigateToDetails"])

const props = defineProps({
  type: {
    type: String,
    default: "type"
  },
  title: {
    type: String,
    default: "title"
  },
  publisher: {
    type: String,
    default: "publisher"
  },
  notes: {
    type: String,
    default: "Notes: Younus, Arjumand ; Qureshi, M Atif ; Saeed, Muhammad ; Ali, Syed Asim ; Touheed, Nasir ; Qureshi, M Shahid International journal of computer science issues, 2011, Vol.8 (3), p.438"
  }
})



</script>

<style lang="scss" scoped>

</style>