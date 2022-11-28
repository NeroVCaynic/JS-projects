<!-- eslint-disable prettier/prettier -->
<template>
    <div class="ss:h-screen overflow-y-auto">
        <div class="my-5 columns-1 gap-3 md:w-[1200px] mx-auto space-y-3 ss:columns-2 md:columns-4">
            <div class="break-inside-avoid relative" v-for="item in vueImageList">
                <div class="absolute ease-in duration-75 opacity-0 hover:opacity-100 w-full h-full flex flex-col justify-center items-center bg-gradient-to-t from-black to-transparent">
                    <button @click="redirectToProduct(item[0], item[1])" class="text-2xl py-[1px] px-[2.5rem] rounded bg-light-alt-primary dark:bg-dark-alt-primary my-2">{{item[1]}}</button>
                </div>
                <img :src="item[0]" alt="img">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

let vueImageList = {
    1:["https://i.pinimg.com/236x/0e/cc/32/0ecc326f733a01dc288a5bb6c3e09454.jpg","choke"],
    2:["https://i.pinimg.com/564x/eb/71/5f/eb715f5572b5c8d82abb6da06e308d0e.jpg","Title"],
    3:["https://i.pinimg.com/564x/1d/75/e8/1d75e85b40b0f1ec5b6f7958745869ab.jpg","Something"],
    4:["https://i.pinimg.com/236x/c4/e3/94/c4e394eb057a72da12cbb52a606e9018.jpg","view"],
    5:["https://i.pinimg.com/564x/e1/bd/80/e1bd80e856c8ed6e89cd80cc602507e4.jpg","Image"],
    6:["https://i.pinimg.com/236x/e5/38/c2/e538c2e49c4eaa2f984950fa4faa3d37.jpg","Anime"],
    7:["https://i.pinimg.com/236x/76/df/ac/76dfacb4f1bc17d1a2fbb7e1d5d6ef2b.jpg","Somethingv2"],
    8:["https://i.pinimg.com/736x/aa/c4/da/aac4da01873b15f56f19ce70d70ca394.jpg","Hello"],
    9:["https://i.pinimg.com/236x/31/ce/68/31ce6855d2a81d434dcf18afd859fc15.jpg","Epic"],
    10:["https://i.pinimg.com/236x/a3/58/98/a3589820a40e895db8eb9c165f7e0531.jpg","Something the revival"],
    11:["https://i.pinimg.com/236x/d9/68/0b/d9680b40bff900acfe3e55b2aaf46364.jpg","something comes again"],
    12:["https://i.pinimg.com/236x/8d/b3/3e/8db33e3c8a321eb54df8c87dbfab5cc6.jpg","What"],
    13:["https://i.pinimg.com/236x/b0/0b/2a/b00b2ad2e60481e2e3f8846439f0dbee.jpg","What returned"],
    14:["https://i.pinimg.com/236x/17/a1/2f/17a12f356b8bf504e0507f9cc8869717.jpg","What, what happened"],
}

const redirectToProduct = (img, title) => {
    router.push({name: 'itemPage', params: {img: img, title, title}});
}

</script>
  
<style setup scoped>
div, img {
    border-radius: 15px;
}
  
img {
    width: 100%;
}
</style>