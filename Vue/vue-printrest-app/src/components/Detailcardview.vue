<!-- eslint-disable prettier/prettier -->
<template>
    <div class="flex justify-center items-center">
        <div class="border-light-secondary dark:border-dark-secondary  rounded border-2 p-2 flex flex-col md:flex-row justify-center my-24 gap-10">
            <div class="flex justify-center items-center">
                <img class="box-border border-2 border-light-alt-secondary dark:border-dark-alt-secondary rounded h-64 md:h-96 object-scale-down w-64 object-cover" :src="router.params.img" alt="img">
            </div>
            <div class=" w-96 flex flex-col items-center justify-between md:items-start gap-10">
                <div class="flex w-full justify-between">
                    <h1 class="text-4xl">{{router.params.title}}</h1>
                    <button class="flex text-lg items-center justify-center rounded-full border-2 border-light-secondary dark:border-dark-secondary hover:border-light-alt-primary dark:hover:border-dark-alt-primary w-12 h-12">U</button>
                </div>
                <div class="flex w-full justify-between mb-2">
                    <button class="flex text-lg items-center justify-center rounded-full bg-light-alt-primary dark:bg-dark-alt-primary hover:bg-light-alt-secondary dark:hover:bg-dark-alt-secondary w-28 h-10">Twitter</button>
                    <button class="flex text-lg items-center justify-center rounded-full bg-light-alt-secondary dark:bg-dark-alt-secondary hover:bg-light-alt-primary dark:hover:bg-dark-alt-primary w-20 h-10">User</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useRoute } from 'vue-router';

const router = useRoute();

</script>