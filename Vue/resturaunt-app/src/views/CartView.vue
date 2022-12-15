<template>
    <div class="mx-2 my-2 flex flex-col gap-y-8">
        <div class="flex flex-col overflow-y-auto border-primary-alt dark:border-secondary-alt border-2 sm:h-[36em] gap-2">
            <div v-for="(Product, key) in orderItems" class="border-primary-alt dark:border-secondary-alt  border-2 py-3 px-1 m-1 flex justify-between items-center">
                <img :src="Product[0]" alt="" class="w-20 h-16 object-scale-down">
                <span>{{Product[1]}}</span>
                <span>${{Product[2]}}</span>
                <button @click="removeItem(key)" class="w-20 h-16 bg-red-500 hover:bg-red-700 text-white rounded-lg">Remove</button>
            </div>
        </div>
        <div class="border-primary-alt dark:border-secondary-alt border-2 h-20 flex justify-between items-center">
            <span class="ml-1">Products: {{Object.keys(orderItems).length}}</span>
            <span>Total: ${{totalPrice.toFixed(2)}}</span>
            <span>Delivery: ${{deliveryPrice.toFixed(2)}}</span>
            <span>Final: ${{(totalPrice+deliveryPrice).toFixed(2)}}</span>
            <div class="flex flex-col gap-2 mr-1">
                <button @click="removeItemAll" class="w-24 bg-red-500 hover:bg-red-700 text-white rounded-lg py-1">Remove all</button>
                <button class="w-24 bg-primary-alt hover:bg-primary-light dark:bg-secondary-alt dark:hover:bg-secondary-dark rounded-lg py-1">Purchase</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

let orderItems = JSON.parse(localStorage.getItem('my-cart') || '{"cart": []}').cart;
let totalPrice = 0;
let deliveryPrice = 0.00;

for(let product of orderItems) {
    totalPrice = totalPrice + Number(product[2]);
} 

const removeItem = (key) => {
    orderItems.splice(key, 1);
    localStorage.setItem('my-cart', JSON.stringify({"cart":orderItems}));
    router.go();
}
const removeItemAll = () => {
    orderItems.splice(0);
    localStorage.setItem('my-cart', JSON.stringify({"cart":orderItems}));
    router.go();
}
</script>
