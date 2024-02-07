<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '/Users/taishiarai/pet-to-do/src/services/lib/supabaseClient.js'

const countries = ref([])

async function getCountries() {
 const { data } = await supabase.from('countries').select()
 countries.value = data
}

onMounted(() => {
 getCountries()
})
</script>

<template>
 <ul>
   <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
 </ul>
</template>

<style></style>