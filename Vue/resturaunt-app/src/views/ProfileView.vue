<template>
    <div class="my-2 w-full flex flex-col border-primary-alt dark:border-secondary-alt border-2">
        <div class="flex justify-center items-center mx-2">
            <span class="border-primary-light dark:border-primary-dark border-2 h-0 w-full"></span>
            <h1 class="mx-2 text-xl">Profile</h1>
            <span class="border-primary-light dark:border-primary-dark border-2 h-0 w-full"></span>
        </div>

        <div class="mx-4 my-2 flex flex-col gap-4">
            <h1>Customer Name: {{Object.values(myInfo[0])[3]}}</h1>
            <div class="flex flex-col gap-2">
            <hr class='border-primary-light dark:border-primary-dark'/>
            <h2>City: {{Object.values(myInfo[1])[3]}}</h2>
            <span>Address: {{Object.values(myInfo[2])[3]}}</span>
            </div>
        </div>

        <div class="flex justify-center items-center mx-2">
            <span class="border-primary-light dark:border-primary-dark bg-primary-light dark:bg-primary-dark border-2 h-0 w-full"></span>
            <h1 class="mx-2 text-xl">Order</h1>
            <span class="border-primary-light dark:border-primary-dark bg-primary-light dark:bg-primary-dark border-2 h-0 w-full"></span>
        </div>

        <div class="mx-4 my-2 flex flex-col gap-y-6">
            <div class="flex justify-between w-full">
                <span>Receipt No: {{orderList.Order.id}}</span>
                <span>Receipt Date: {{orderList.Order.date}}</span>
                <span>Order Id: {{orderList.Order.orderId}}</span>
                <span>Delivery Status: {{orderList.Order.status}}</span>
            </div>
            <div class="flex justify-between w-full">
                <span>Order Id: {{orderList.Order.orderId}}</span>
                <span>Order Date/Time: {{orderList.Order.date}}</span>
                <span>Estimation Time Left: {{orderList.Order.arrival}}</span>
                <span>Estimated Arrival Date: {{orderList.Order.arrivalDate}}</span>
                <span>Delivery Status: {{orderList.Order.status}}</span>
            </div>
        </div>

        <div class="flex justify-center items-center mx-2">
            <span class="border-primary-light dark:border-primary-dark bg-primary-light dark:bg-primary-dark border-2 h-0 w-full"></span>
            <h1 class="mx-2 text-xl flex whitespace-nowrap">Past Orders</h1>
            <span class="border-primary-light dark:border-primary-dark bg-primary-light dark:bg-primary-dark border-2 h-0 w-full"></span>
        </div>

        <div class="mx-2 my-2 border-primary-light dark:border-primary-dark border-[1px] rounded overflow-y-auto h-64">
            <div v-for="receipt in orderList.Receipt" class="flex justify-between mx-2 my-2 border-primary-light dark:border-primary-dark border-[1px]">
                <span class="ml-2">Receipt No: {{receipt[0]}}</span>
                <span>Receipt Date: {{receipt[1]}}</span>
                <span>Order Id: {{receipt[2]}}</span>
                <span class="mr-2">Delivery Status: {{receipt[3]}}</span>
            </div>
        </div>
        <div class="h-20 flex justify-center items-center">
            <button class="mx-2 py-2 px-1 bg-secondary-light-alt hover:bg-primary-light-alt dark:bg-secondary-dark-alt dark:hover:bg-primary-dark-alt rounded-md">Download Current</button>
            <button class="mx-2 py-2 px-1 bg-secondary-light-alt hover:bg-primary-light-alt dark:bg-secondary-dark-alt dark:hover:bg-primary-dark-alt rounded-md">Download All</button>
            <button class="mx-2 py-2 px-1 bg-red-500 hover:bg-red-700 text-white rounded-md">Clear All</button>
        </div>
    </div>
</template>

<script setup>
let date = new Date();
let myInfo = Object.values(JSON.parse(localStorage.getItem('my-info') || '{"Name": "", "City": "", "Address": ""}'));
let orderList = {
    'Receipt':[['3423423', `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`, '23hgjkd', 'Waiting'],
    ['3445545', `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`, '35g4kgf', 'Confirmed'],
    ['5675563', `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`, 'fghklj4', 'Confirmed']],
    'Order':{'id':'3423423', 'date':date , 'orderId':'23hgjkd', 'status':'Waiting', 'arrival':'24hr', 'arrivalDate':'13-2-2022'},
}
</script>
