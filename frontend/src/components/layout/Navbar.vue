<template>
  <div class="pl-16 pr-16">
    <div class="navbar bg-base-100 flex justify-center">

      <div class="navbar-start">
          <div class="arrow-left flex">
            <!-- arrow-left -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </div>
      </div>

      <div class="navbar-center lg:flex">
        <ul class="menu menu-horizontal px-1 gap-4">
          <li>
            <router-link :to="{ name: 'Home' }">
              <HomeIcon class="h-6 w-6"/>
              Home
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'BookList' }">
              <BookOpenIcon class="h-6 w-6"/>
              BookList
            </router-link>
          </li>
        </ul>
      </div>

      <div class="navbar-end">
      </div>

    </div>
  </div>
</template>

<script setup>
import { HomeIcon, BookOpenIcon } from '@heroicons/vue/24/solid';
import ArrowLeftIcon from '@heroicons/vue/24/outline';
</script>

<style lang="scss" scoped>

</style>