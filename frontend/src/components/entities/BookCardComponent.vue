<template>
  <div class="flex flex-col w-full bg-base-100 shadow-xl image-full ">
    

    <div class="flex card bg-gray-200  hover:bg-gray-100" style="border-radius: 0; border-left: 1px solid #d3d4d8;">
      <div class="flex card-body h-38.5 flex-row pb-5">
        <div class="context flex flex-row w-5/6">
          <div class="icon flex">
            <div class="flex" v-if="props.type === 'book'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2.3 2 19 19" stroke-width="0.8" stroke="currentColor" class="flex m-auto w-32 h-32">
                <path class="flex m-auto" color="#8c0327" stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div class="flex" v-if="props.type === 'magazine'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2.3 2 19 19" stroke-width="0.8" stroke="currentColor" class="flex m-auto w-32 h-32">
                <path color="#8c0327" stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
              </svg>
            </div>
            <div class="flex" v-if="props.type === 'newspaper'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2.3 2 19 19" stroke-width="0.8" stroke="currentColor" class="flex m-auto w-32 h-32">
                <path color="#8c0327" stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            </div>
            <div class="flex" v-if="props.type === 'article'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2.3 2 19 19" stroke-width="0.8" stroke="currentColor" class="flex m-auto w-32 h-36">
                <path color="#8c0327" stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
              </svg>
            </div>
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