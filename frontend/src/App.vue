<template>

  <div id="app" class="font-sans text-lg font-semibold">

    <Navbar v-if="route.meta.showNavbar"/>
    <router-view></router-view>

  </div>

</template>

<script setup>
import { useRoute } from 'vue-router';
import Navbar from './components/layout/Navbar.vue';

const route = useRoute()

</script>

<style scoped>
</style>
