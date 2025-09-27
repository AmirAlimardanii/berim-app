<template>
<div class="navbar bg-primary text-primary-content fixed top-0 z-50">
    <div class="navbar-start">
  <NuxtLink to="/" class="btn btn-ghost text-xl">Berim App</NuxtLink>
  </div>
  <div class="navbar-end gap-4">
    <app-toggle-theme/>
    <button :disabled="loading" @click="signIn" class="btn">
      <span v-if="loading" class="loading loading-spinner"></span>
      SIGN IN <Icon name="tabler:login-2" size="22" /></button>

  </div>
</div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth"

const {loading,signIn} = useAuthStore()


</script>