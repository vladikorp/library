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

        <LButton class="btn-outline btn-primary" @click="signOut">
          <ArrowLeftOnRectangleIcon class="w-6 h-6"></ArrowLeftOnRectangleIcon>
        </LButton>

      </div>

    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../../store/userStore';
import { useRouter } from 'vue-router';

import LBackButton from '../controls/buttons/LBackButton.vue';
import LButton from '../controls/buttons/LButton.vue';

import { HomeIcon, BookOpenIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/solid';
import router from '../../router/router';

const userStore = useUserStore()

const signOut = () => {
  userStore.signOut()
  router.push({ name: "Login" })
}


</script>

<style lang="scss" scoped>

</style>