<script setup lang="ts">
/* Import modules. */
import moment from 'moment'

const curYear = moment().format('YYYY')
</script>

<template>
    <main class="-mt-5 sm:mt-0 pb-10 flex flex-col w-screen h-screen justify-center items-center bg-gradient-to-r from-purple-300 to-rose-300">
        <slot />

        <footer class="mt-2">
            <p class="text-xs sm:text-sm text-rose-700 opacity-50">
                Copyright 2022-{{new Date().getFullYear()}}. Ava's DAO. All rights reserved.
            </p>
        </footer>
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
