<template>
  <div class="flex flex-1">
    <div
      class="bg-base-200 p-2 transition-all duration-800 ease-in-out"
      :class="sidebarOpen ? 'w-64' : 'w-18'"
    >
      <div @click="toggleSidebar" class="flex justify-end p-3">
        <div
          class="btn btn-circle text-primary transition-transform duration-500 ease-in-out"
          :class="sidebarOpen ? 'rotate-180' : ''"
        >
          <Icon name="tabler:chevron-right" size="26" />
        </div>
      </div>

      <div class="flex flex-col gap-1 overflow-hidden">
        <NuxtLink
          to="/dashboard"
          class="btn btn-ghost justify-start transition-all duration-300 ease-in-out"
        >
          <Icon name="tabler:map" size="20" />
          <transition name="fade-slide">
            <span v-if="sidebarOpen" class="ml-2">Location</span>
          </transition>
        </NuxtLink>

        <NuxtLink
          to="/dashboard/projects"
          class="btn btn-ghost justify-start transition-all duration-300 ease-in-out"
        >
          <Icon name="tabler:plus" size="20" />
          <transition name="fade-slide">
            <span v-if="sidebarOpen" class="ml-2">Add Location</span>
          </transition>
        </NuxtLink>

        <div class="divider"></div>

        <div
          @click="logOut"
          class="btn btn-ghost justify-start text-error transition-all duration-300 ease-in-out"
        >
          <Icon name="tabler:logout" size="20" />
          <transition name="fade-slide">
            <span v-if="sidebarOpen" class="ml-2">Log Out</span>
          </transition>
        </div>
      </div>
    </div>

    <div class="flex-1"></div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
import { useUiStore } from '~/stores/ui'
import { storeToRefs } from 'pinia'

const { logOut } = useAuth()
const ui = useUiStore()
const { toggleSidebar } = ui
const { sidebarOpen } = storeToRefs(ui)
</script>

<style>
.router-link-active {
  background-color: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
