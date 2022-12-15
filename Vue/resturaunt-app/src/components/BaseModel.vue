<template>
    <div class="absolute left-[160px] top-[25vh] sm:left-0 sm:right-0 sm:mx-auto flex flex-col justify-center items-center w-96 h-96 border-2 rounded-lg bg-white text-black">
        <span class="text-xl mb-4">Fill in form</span>
        <form class="flex flex-col items-center w-72 gap-8" @submit.prevent="($emit('login'), $emit('leave'))">
            <div class="flex w-full gap-2 justify-evenly">
                <label for="name">Name</label>
                <input placeholder="Name" class="border-2" type="text" name="name" v-model="name" required>
            </div>
            <div class="flex w-full gap-2 justify-evenly">
                <label for="city">City</label>
                <input placeholder="City" class="border-2" type="text" name="city" v-model="city" required>
            </div>
            <div class="flex w-full gap-2 justify-evenly">
                <label for="address">Address</label>
                <input placeholder="Address" class="border-2" type="text" name="address" v-model="address" required>
            </div>
            <button @click="setInfo" class="bg-blue-500 hover:bg-blue-300 w-36 rounded h-10">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let name = ref('');
let city = ref('');
let address = ref('');

const setInfo = () => {
    localStorage.setItem('my-info', JSON.stringify({"Name":name, "City":city, "Address":address}))
}
</script>