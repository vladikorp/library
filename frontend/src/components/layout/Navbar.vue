<template>
  <div class="pl-16 pr-16">
    <div class="navbar bg-base-100 flex justify-center">

      <div class="navbar-start">
        <LBackButton/>
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

import LBackButton from '../controls/buttons/LBackButton.vue';
</script>

<style lang="scss" scoped>

</style>