<script setup lang="ts">
</script>

<template>
    <main class="bg-gradient-to-b from-purple-300 to-rose-300">
        <slot />
    </main>
</template>

<style>
/* global window */
main::-webkit-scrollbar, section::-webkit-scrollbar {
    /* display: none; */
    width: 4px;
    height: 8px;
    background-color: #a7007a; /* or add it to the track */
}
main::-webkit-scrollbar-thumb, section::-webkit-scrollbar-thumb {
    background: rgb(162, 15, 138);
}

#content-win {
    height: calc(100% - 70px);
}
</style>
