<template>
    <div class="flex min-h-screen flex-col">
        <app-nav-bar />
        <main class="pt-16 flex-1 flex flex-row">
            <slot />
        </main>
    </div>
</template>