<template>
<div class="navbar bg-primary text-primary-content fixed top-0 z-50">
    <div class="navbar-start">
  <NuxtLink to="/" class="btn btn-ghost text-xl">Berim App</NuxtLink>
  </div>
  <div class="navbar-end gap-4">
    <app-toggle-theme/>
    <button :disabled="isLoading" @click="signIn" class="btn">
      <span v-if="isLoading" class="loading loading-spinner"></span>
      SIGN IN <Icon name="tabler:login-2" size="22" /></button>

  </div>
</div>
</template>

<script setup lang="ts">
const { signInWithGithub } = useAuth()
const isLoading = ref(false)

const signIn = async () => {
  try {
    isLoading.value = true
    const result = await signInWithGithub()
    console.log("Sign in successful:", result)
  } catch (err) {
    console.error("Sign in failed:", err)
  }finally{
    isLoading.value = false
  }
}

</script>