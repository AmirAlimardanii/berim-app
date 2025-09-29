<template>
<div class="navbar bg-primary text-primary-content fixed top-0 z-50">
    <div class="navbar-start">
  <NuxtLink to="/" class="btn btn-ghost text-xl">Berim App</NuxtLink>
  </div>
  <div class="navbar-end gap-4">
    <app-toggle-theme/>


<div v-if="!loading && user">
<button class="btn" popovertarget="popover-1" style="anchor-name:--anchor-1">
 {{ user.name }}
</button>
<ul class="dropdown dropdown-end menu w-48 rounded-box bg-base-200 shadow-sm mt-1"
  popover id="popover-1" style="position-anchor:--anchor-1">
  <li><a class="text-error">LogOut <Icon name=tabler:logout /> </a></li>

</ul>
</div>

    <button v-else  :disabled="loading" @click="signIn" class="btn">
      <span v-if="loading" class="loading loading-spinner"></span>
      SIGN IN <Icon name="tabler:login-2" size="22" /></button>
  </div>
</div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth"
import { useAuth } from  '~/composables/useAuth'

const { user } = useAuth()
const {loading,signIn} = useAuthStore()




</script>