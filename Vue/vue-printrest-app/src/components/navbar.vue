<template>
    <div class="bg-light-primary dark:bg-dark-primary box-border border-4 border-light-alt-secondary dark:border-dark-alt-secondary rounded-b-2xl p-6 flex justify-center items-center gap-4 space-x-4">
        <div class="text-2xl text-light-alt-secondary dark:text-dark-alt-secondary cursor-pointer"><span>Not Printerest</span></div>
        <router-link class=" py-[3px] px-4 text-lg text-light-alt-secondary hover:text-light-alt-secondary dark:text-dark-alt-secondary dark:hover:text-dark-alt-primary" to="/">Home</router-link>
        <button @click="toggleMode()" class="px-4 py-1 bg-light-alt-secondary hover:bg-light-alt-primary rounded dark:bg-dark-alt-secondary dark:hover:bg-dark-alt-primary" ><span v-if=isDark>Dark</span><span v-else>Light</span></button>
    </div>
</template>

<script setup>
import {useDark, useToggle} from '@vueuse/core';

const isDark = useDark();
const toggleMode = useToggle(isDark);

</script>