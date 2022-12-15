<template>
  <main class="dark:text-white">
    <navbarViewVue></navbarViewVue>
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import navbarViewVue from './components/navbarView.vue';

</script>