<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" v-model="searchQuery" placeholder="Search for a city or state" class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]">
      <button class="px-4 py-2 bg-black my-2" @click="previewCity(searchQuery)">Search</button>
    </div>
  </main>
</template>

<script setup>
import {ref} from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const searchQuery = ref("")
const previewCity = (searchQuery) => {
  const [city, state] = searchQuery.split(",")
  router.push({
    name: 'cityView',
    params: {state: state.replaceAll(" ", ""), city: city},
    query: {
      lat: -89.468928,
      lng: 41.557535,
      preview: true,
    }
  })
}
</script>