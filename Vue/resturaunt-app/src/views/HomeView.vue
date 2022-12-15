<template>
  <Teleport to="body">
    <Transition>
      <BaseModelVue v-if="!isLogged" @login="setLogged" @leave="(isLogged = true)"></BaseModelVue>
    </Transition>
    <Transition>
      <div v-if="isLogged" class="absolute left-[160px] top-[25vh] sm:left-0 sm:right-0 sm:mx-auto scale-150 w-96 h-96 bg-primary-alt dark:bg-secondary-alt rounded-lg border-primary-light dark:border-primary-dark border-4">
        <div class="scale-75 mx-2 gap-8 text-black dark:text-white flex flex-col justify-evenly items-center flex-nowrap text-lg h-full">
          <div class="flex gap-2 w-full -translate-x-14">
            <img class="w-32 h-32 object-scale-down rounded-md" src="https://i.pinimg.com/236x/3f/0f/6b/3f0f6b3a4d994857b3c56e99d8f2f192.jpg" alt="t-thumbnail-1">
            <img class="w-32 h-32 object-scale-down rounded-md" src="https://i.pinimg.com/236x/a5/fe/d7/a5fed7320ae93c335ae5c94092413016.jpg" alt="t-thumbnail-2">
            <img class="w-32 h-32 object-scale-down rounded-md" src="https://i.pinimg.com/236x/93/d5/71/93d571a6b0fcf966604a3eff2b6d55ab.jpg" alt="t-thumbnail-3">
            <img class="w-32 h-32 object-scale-down rounded-md" src="https://i.pinimg.com/236x/cc/ed/95/cced95b46e8c688d89a0bd064040b0b3.jpg" alt="t-thumbnail-4">
          </div>

          <span>Welcome To Delicacy Center~</span>
          <span>Order around, Check our menu</span>
          <span>A world of delicious food await you!</span>

          <div class="flex gap-2 w-full -translate-x-14">
            <img class="w-32 h-32 object-scale-down rounded-md" src="https://i.pinimg.com/236x/bf/9d/3e/bf9d3eea871a6d1918d59fca33faa716.jpg" alt="b-thumbnail-1">
            <img class="w-32 h-32 object-scale-down rounded-md" src="https://i.pinimg.com/236x/fc/00/f4/fc00f46b3835456dc75701c7a78a5e0f.jpg" alt="b-thumbnail-2">
            <img class="w-32 h-32 object-scale-down rounded-md" src="https://i.pinimg.com/236x/3a/6f/70/3a6f705a38f12d987c829a84ae11d0b5.jpg" alt="b-thumbnail-3">
            <img class="w-32 h-32 object-scale-down rounded-md" src="https://i.pinimg.com/236x/2b/4e/77/2b4e77a1fa77b3eaf1edd27a935a8932.jpg" alt="b-thumbnail-4">
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import BaseModelVue from '../components/BaseModel.vue';

let userInfo = ref([]);
let isLogged = ref(JSON.parse(localStorage.getItem('my-log') || '{"logged": false}').logged);

const setLogged = () => {
  localStorage.setItem('my-log', '{"logged": true}')
}
</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>