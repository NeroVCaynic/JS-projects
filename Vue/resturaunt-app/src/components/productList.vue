<template>
    <div class="mx-4 mt-4 overflow-y-auto flex flex-wrap gap-4 w-fit">
        <div v-for="item in productListItems[route.name]" class="flex flex-col w-64 gap-2 border-primary-light dark:border-primary-dark border-2 rounded bg-primary-alt dark:bg-secondary-alt">
            <img class="border-b-2 border-primary-light dark:border-primary-dark object-cover h-52 rounded" :src="item[0]" alt="">
            <div class="mx-2 mb-2 flex flex-col items-start gap-2">
                <h1 class="text-2xl">{{item[1]}}</h1>
                <button @click="addToCart(item)" class="text-xl flex bg-secondary-light-alt hover:bg-primary-light-alt dark:bg-secondary-dark-alt dark:hover:bg-primary-dark-alt w-32 py-1 rounded-md">
                    <span class="mx-2">${{item[2]}}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const addToCart = (product) => {
    theCart.push(product)
    localStorage.setItem('my-cart', JSON.stringify({"cart":theCart}));
}

let theCart = JSON.parse(localStorage.getItem('my-cart') || '{"cart": []}').cart
let productListItems = {
    'Menu': [
        ['https://i.pinimg.com/236x/9a/f8/e8/9af8e87b94324d0a7c6af07133e155c7.jpg', 'Pasta Greens', '3.00'],
        ['https://i.pinimg.com/236x/48/e5/56/48e556a1759a6149848bec3a95a351c8.jpg','Chicken Rice','5.00'],
        ['https://i.pinimg.com/236x/6e/57/f8/6e57f8974c6309a0197efce2bb1b0f3d.jpg','Sushi Platter','3.00'],
        ['https://i.pinimg.com/236x/64/8a/07/648a074ee1fa9e025714fcb7b4bf5091.jpg','Healthfast','4.00'],
        ['https://i.pinimg.com/236x/d2/3c/ac/d23cacf82d6ab06c4c1b4e87ddf7f091.jpg','Fish Salad','1.00'],
        ['https://i.pinimg.com/236x/30/d5/c1/30d5c1e54962bc518d5c2ba8377fb1d3.jpg','Combo Burger','2.00'],
        ['https://i.pinimg.com/236x/c3/fb/4b/c3fb4bb46c7299943200a3598aac2c6e.jpg','Plain box','2.00'],
    ],
    'Deal': [
        ['https://i.pinimg.com/236x/69/7e/dd/697edd180c697eabec45b1bdee0d577d.jpg','Fast Combo Box','9.99'],
        ['https://i.pinimg.com/236x/ba/63/a7/ba63a78c0ca594e22a4356aca781f732.jpg','Breakfast Stack','2.45'],
        ['https://i.pinimg.com/236x/ce/d0/b0/ced0b01a1d1e467b8d2a522becfed6e8.jpg','Loaded Pan','6.45'],
        ['https://i.pinimg.com/236x/ee/41/59/ee4159c380e4c918eb20aaac875ff7ca.jpg','Healthy Bag-el','8.00'],
    ],
    'Sides': [
        ['https://i.pinimg.com/236x/c7/0a/4f/c70a4f20e5f86d3a4c10a7740e66f061.jpg','Roasted Potato','1.00'],
        ['https://i.pinimg.com/236x/81/19/27/8119273f5f40fb93f7800c61dd040934.jpg','Parm Mushroom','2.34'],
        ['https://i.pinimg.com/236x/c0/9f/f3/c09ff324f6e2f12e862fc66f56d97c75.jpg','Cream-pea Potato','2.00'],
        ['https://i.pinimg.com/236x/ae/88/b7/ae88b74724bf2fa4c9f6f6cc90899f31.jpg','Bread Rolls','0.99'],
        ['https://i.pinimg.com/236x/7e/db/ed/7edbedf82b9af2c9e78fe8a48187890e.jpg','Blue Cheese Salad','3.00'],
        ['https://i.pinimg.com/236x/cf/37/14/cf371439b574e2c99a574b1fdd900e2f.jpg','Pasta Salad Mix','3.24'],
        ['https://i.pinimg.com/236x/7e/38/a9/7e38a90115eb5627b35aab653f457dad.jpg','Zucchini Chips','0.50'],
        ['https://i.pinimg.com/236x/f2/e1/b4/f2e1b4b262ed533f662a3e665244ea05.jpg','Starbshot Smoothie','1.99'],
        ['https://i.pinimg.com/236x/03/c8/26/03c826428ecf79a88382d8972ddc81c0.jpg','Fruitstack Cup','4.00'],
    ]
}

</script>