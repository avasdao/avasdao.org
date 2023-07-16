<script setup lang="ts">
/* Import modules. */
import moment from 'moment'

const curYear = moment().format('YYYY')
</script>

<template>
    <footer class="full px-3 sm:px-7 mt-2 flex flex-row justify-between">
        <p class="text-xs sm:text-sm text-rose-700 opacity-50">
            Copyright 2022-{{new Date().getFullYear()}}. Ava's DAO.
            <span class="block sm:inline">All rights reserved.</span>
        </p>

        <div class="flex flex-row gap-3">
            <NuxtLink to="https://github.com/avasdao" target="_blank">
                <svg class="w-4 h-auto hover:scale-110 duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#333" />
                </svg>
            </NuxtLink>

            <NuxtLink to="https://twitter.com/AvasDAO" target="_blank">
                <svg class="w-4 h-auto hover:scale-110 duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                    <path d="M7.548 21.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0 0 24 4.305a9.815 9.815 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195 4.929 4.929 0 0 0-8.391 4.491A13.98 13.98 0 0 1 1.67 2.898a4.928 4.928 0 0 0 1.525 6.573A4.88 4.88 0 0 1 .96 8.855v.063a4.926 4.926 0 0 0 3.95 4.826 4.914 4.914 0 0 1-2.223.085 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.288a13.941 13.941 0 0 0 7.548 2.208" fill="#1DA1F2" />
                </svg>
            </NuxtLink>
        </div>
    </footer>
</template>
