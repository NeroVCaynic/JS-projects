<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <Webnavigator />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Webnavigator from "./components/Webnavigator.vue";
</script>

<style lang="scss" scoped>

</style>