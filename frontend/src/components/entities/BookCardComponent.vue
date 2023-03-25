<template>
  <div class="card w-96 bg-base-100 shadow-xl image-full">

    

    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

    <div class="card-body">

      <p>
      {{ props.type }}
      </p>

      <p>
        {{ props.title }}
      </p>

      <p>
        {{ props.publisher }}
      </p>
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>

      <div class="card-actions justify-end">
        <button class="btn btn-primary" @click="emit('navigateToDetails')">Book details</button>
      </div>

    </div>

</div>
</template>

<script setup>

const emit = defineEmits(["navigateToDetails"])

const props = defineProps({
  type: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  publisher: {
    type: String,
    default: ""
  }
})



</script>

<style lang="scss" scoped>

</style>