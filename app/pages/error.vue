<template>
    <div class="card bg-basse-100 shadow-xl m-4 mt-20 flex items-center justify-center p-8">
    <h1 class="text-3xl font-bold mb-4 text-error">Oh No !</h1>
    <span class="mb-4">{{ error }}</span>
   
<nuxt-link class="hover:text-primary" to="/">
    <div class="flex items-center justify-center">
    <Icon name="tabler:arrow-left" size="20" class="mr-1" />
    Back Home 
    </div>
</nuxt-link>
</div>
</template>

<script setup lang="ts">
const route = useRoute();  
const error = route.query.error || 'An unknown error occurred.';
</script>