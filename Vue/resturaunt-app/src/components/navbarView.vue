<template>
    <div class="bg-primary dark:bg-secondary border-b-2 border-primary-alt dark:border-secondary-alt flex justify-between w-max sm:w-auto">
        <router-link to="/" class="cursor-pointer mx-4 flex justify-center items-center gap-2">
            <i class="fa-solid fa-pizza-slice text-2xl"></i>
            <span class="text-xl">Delicacy Center</span>
        </router-link>
        <div class="m-2 flex justify-center items-center">
            <nav class="space-x-6">
                <router-link to="Menu" class="px-4 py-2 rounded-lg border-2 border-primary-alt bg-primary-alt hover:border-primary-light dark:border-secondary-alt dark:bg-secondary-alt dark:hover:border-primary-dark ease-in-out duration-150">Menu</router-link>
                <router-link to="Deal" class="px-4 py-2 rounded-lg border-2 border-primary-alt bg-primary-alt hover:border-primary-light dark:border-secondary-alt dark:bg-secondary-alt dark:hover:border-primary-dark ease-in-out duration-150">Deals</router-link>
                <router-link to="Sides" class="px-4 py-2 rounded-lg border-2 border-primary-alt bg-primary-alt hover:border-primary-light dark:border-secondary-alt dark:bg-secondary-alt dark:hover:border-primary-dark ease-in-out duration-150">Sides</router-link>
            </nav>
        </div>
        <div class="m-2 relative flex justify-center items-center">
            <button @click="goRoute('MyCart')" class="mx-4 w-24 h-10 border-primary-alt dark:border-secondary-alt border-2 rounded bg-primary-alt hover:border-primary-light dark:bg-secondary-alt dark:hover:border-primary-dark ease-in-out duration-150 flex justify-center items-center gap-2">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>My Cart</span>
            </button>
            <button @click="submenuOpen" class="w-10 h-10 border-primary-alt dark:border-secondary-alt border-2 rounded-full bg-primary-alt hover:border-primary-light dark:bg-secondary-alt dark:hover:border-primary-dark ease-in-out duration-150">L</button>
            <div :class="[toggleSubmenu ? '':'hidden']" class="absolute flex flex-col items-center top-14 right-0 bg-white dark:bg-secondary border-2 w-32">
                <button @click="goRoute('Profile')" class="py-3 w-full hover:bg-primary-alt dark:hover:bg-secondary-alt">Profile</button>
                <button @click="toggleMode()" class="flex justify-center items-center py-3 w-full border-t-2">
                    <div class="rounded-full w-20 h-6 border-2 border-primary-alt dark:border-secondary-dark flex relative">
                        <div :class="[isDark ? 'bg-secondary-alt translate-x-14':'bg-primary-alt']" class="bg-primary dark:bg-secondary-alt w-5 h-5 rounded-full absolute ease-in-out duration-150"></div>
                    </div>
                </button>
                <button @click="logOut" class="py-3 w-full border-t-2 hover:bg-primary-alt dark:hover:bg-secondary-alt">Log out</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useDark, useToggle} from '@vueuse/core';
import { useRouter } from 'vue-router';

const router = useRouter();
const isDark = useDark();
const toggleMode = useToggle(isDark);

let toggleSubmenu = ref(false);

const submenuOpen = () => {
    toggleSubmenu.value = !toggleSubmenu.value;
}
const logOut = () => {
    localStorage.setItem('my-log', '{"logged": false}');
    localStorage.setItem('my-info', '{"Name":"", "City":"", "Address":""}');
    router.go();
}
const goRoute = (route) => {
    router.push({name: route});
}
</script>