<template>
<div class="navbar bg-primary text-primary-content fixed top-0 z-50">
    <div class="navbar-start">
  <NuxtLink to="/" class="btn btn-ghost text-xl">Berim App</NuxtLink>
  </div>
  <div class="navbar-end gap-4">
    <app-toggle-theme/>
    <button class="btn">SIGN IN <Icon name="tabler:login-2" size="22" /></button>

  </div>
</div>
</template>