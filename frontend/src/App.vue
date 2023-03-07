<template>

  <div id="app" class="font-sans text-lg font-semibold">

    <Navbar/>
    <router-view></router-view>

  </div>

</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style scoped>
</style>
