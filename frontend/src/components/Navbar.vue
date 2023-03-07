<template>
  <div class="m-5">
    <ul class="flex flex-row gap-4 text-lg">
      <li>
        <router-link :to="{ name: 'Home'}">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'BookList'}">
          BookList
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>