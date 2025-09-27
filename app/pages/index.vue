<template>
  <div
  class="hero min-h-screen bg-base-300"
  style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
>
  <div class="hero-overlay"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button :disabled="loading" @click="signIn" class="btn btn-primary">
          <span v-if="loading" class="loading loading-spinner"></span>
        sign in with GitHub <Icon name="tabler:brand-github" size="28" /></button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth"

const {loading,signIn} = useAuthStore()
</script>