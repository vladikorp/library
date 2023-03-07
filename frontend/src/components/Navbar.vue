<template>

  <div class="navbar bg-base-100">

    <div class="navbar-start">
      <ul class="menu menu-horizontal px-1 gap-4">

        <li class="">
          <router-link :to="{ name: 'Home'}">
            Home
          </router-link>
        </li>

      </ul>
    </div>

    <div class="navbar-center lg:flex">

      <ul class="menu menu-horizontal px-1 gap-4">

        <li class="">
          <router-link :to="{ name: 'BookList'}">
            BookList
          </router-link>
        </li>

      </ul>

    </div>

    <div class="navbar-end">
      <a class="btn">Get started</a>
    </div>

  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>