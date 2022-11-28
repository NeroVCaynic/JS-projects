<template>
  <div class="bg-light-primary dark:bg-dark-primary dark:text-white">
    <RouterView />
    <div :class="[isNavActive ? 'top-0':'top-[-100px]']" class="absolute ease-in-out duration-300">
      <navbarVue></navbarVue>
    </div>
    <button @click="OpenNav" :class="[isNavActive ? 'top-[6rem] ss:top-16 border-b-4 border-x-4 dark:border-b-dark-alt-secondary dark:border-x-dark-alt-secondary border-b-light-alt-secondary border-x-light-alt-secondary':'top-0']" class="box-border bg-light-alt-primary dark:bg-dark-alt-primary rounded-full w-12 h-12 m-4 flex justify-center items-center absolute ease-in-out duration-150">
      <i v-if="isNavActive" class="fa-solid fa-xmark"></i>
      <i v-else class="fa-solid fa-bars"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import navbarVue from "./components/navbar.vue";

let isNavActive = ref(false)

function OpenNav() {
  isNavActive.value = !isNavActive.value
}

</script>

<style>
::-webkit-scrollbar {
  width: 0.9em;
}

::-webkit-scrollbar-track {
  background-color: #D2D2D2;
  border-radius: 100vw;
}

::-webkit-scrollbar-thumb {
  background-color: #7D7D7D;
  border-radius: 100vw;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #9D9D9D ;
}
</style>