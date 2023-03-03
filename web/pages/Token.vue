<script setup lang="ts">
/* Import modules. */
import { ref } from 'vue'

const blank = ref(null)
</script>

<template>
    <main class="w-11/12 lg:max-w-2xl px-3 py-5 bg-rose-100 border-4 border-rose-500 rounded-xl shadow-lg shadow-inner">
        <img src="~/assets/logo.png" class="w-20 h-20 float-right" />

        <h1 class="text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            $AVAS
        </h1>

        <p class="w-10/12 py-2 text-sm">
            The "official" governance and revenue sharing token of Ava's DAO.
            Participate in <strong>Community Voting</strong> proposals that shape the direction of the DAO.
            Qualified stakers will receive <strong>Daily Payouts</strong> from each respective DAO revenue channel.
        </p>

        <h2 class="mt-5 text-3xl font-medium">
            Key Facts
        </h2>

        <ul class="mt-2 pl-5 text-sm leading-6 sm:leading-8">
            <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                </svg>

                <span class="sm:hidden">
                    nexa:tzt4kqdn ... ehaff0k3
                </span>
                <span class="hidden sm:block">
                    nexa:tzt4kqdnpykrhqedcutnka90ylpc8fjv9jp0gvfjxvxhj4yelgqqqehaff0k3
                </span>

                <em>(Group ID)</em>
            </li>

            <li class="hidden sm:flex items-center gap-2">
                <svg class="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                </svg>

                <NuxtLink
                    class="text-blue-500 font-medium hover:underline"
                    to="https://explorer.nexa.org/tx/7e0dfe6a3cc364250423149c3957abf5eca63e716ffbf13d058f208f83beb0f0"
                    target="_blank"
                >
                    <span class="sm:hidden">
                        7e0dfe6a3cc3 ... 208f83beb0f0
                    </span>
                    <span class="hidden sm:block">
                        7e0dfe6a3cc364250423149c3957abf5eca63e716ffbf13d058f208f83beb0f0
                    </span>

                </NuxtLink>

                <em>(Genesis)</em>
            </li>

            <li class="hidden sm:flex items-center gap-2">
                <svg class="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                </svg>

                <NuxtLink
                    class="text-blue-500 font-medium hover:underline"
                    to="https://explorer.nexa.org/address/nexa:nqtsq5g5tg5pxkzn0llyrmqc0aukkj3aj5svses8lwtex89n"
                    target="_blank"
                >
                    <span class="sm:hidden">
                        nexa:nqtsq5g5tg5p ... ses8lwtex89n
                    </span>
                    <span class="hidden sm:block">
                        nexa:nqtsq5g5tg5pxkzn0llyrmqc0aukkj3aj5svses8lwtex89n
                    </span>

                </NuxtLink>

                <em>(Minter)</em>
            </li>

            <li>
                <span class="text-rose-500 text-lg font-bold">
                    1,000,000,000 <small class="text-xs">(1 BILLION)</small>
                </span>
                Total Supply

                <ul class="pl-5 list-disc leading-6">
                    <li>
                        500,000,000 (NexaPOW) Token Mining
                    </li>

                    <li>
                        100,000,000 Management Team <em>(3yr vesting)</em>
                    </li>

                    <li>
                        100,000,000 Legal / Regulatory Fees
                    </li>

                    <li>
                        270,000,000 Unallocated
                    </li>

                    <li>
                        30,000,000 Crowdfunding Allocation <em>(3x bootstrap campaigns)</em>
                    </li>
                </ul>

            </li>

        </ul>
    </main>
</template>
