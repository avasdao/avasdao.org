<script setup lang="ts">
/* Import modules. */
import moment from 'moment'

const curYear = moment().format('YYYY')
</script>

<template>
    <main class="w-11/12 lg:max-w-2xl px-3 sm:px-7 py-5 bg-rose-100 border-4 border-rose-500 rounded-xl shadow-lg shadow-inner">
        <section class="flex flex-col items-center">
            <img
                class="w-32 sm:w-48"
                alt="Ava's DAO Logo"
                src="~/assets/logo.png"
            />

            <h1 class="mt-3 text-5xl sm:text-6xl text-rose-300 font-extrabold">
                Ava's DAO
            </h1>

            <p class="mt-0 text-sm sm:text-xl text-center font-medium text-rose-500">
                Best Crypto Experience (CX) For Your Money<sup>&reg;</sup>
            </p>

            <p class="mt-3 sm:mt-5 text-base text-rose-900">
                Ava Nakamoto showcases her life's work in a DAO that carries on where <a href="https://bitcointalk.org/index.php?topic=2228.msg29479#msg29479" target="_blank" class="text-rose-700 font-bold hover:underline">her father left off in 2010</a>.

                <span class="block mt-3 sm:inline sm:mt-0">
                    Residing in-between HOTlanta and São Paulo, Ava finds herself in the perfect position to grow her Crypto empire throughout the Americas and beyond.
                </span>
            </p>
        </section>

        <section class="mt-5 flex flex-col sm:flex-row justify-around">
            <NuxtLink to="/bootstrap" class="px-5 py-2 border-4 border-rose-700 bg-rose-500 rounded-lg shadow-lg">
                <span class="text-rose-100 font-bold">
                    Bootstrap
                </span>
            </NuxtLink>

            <NuxtLink to="/roadmap" class="px-5 py-2 border-4 border-rose-700 bg-rose-500 rounded-lg shadow-lg">
                <span class="text-rose-100 font-bold">
                    Roadmap
                </span>
            </NuxtLink>

            <NuxtLink to="https://github.com/avasdao" target="_blank" class="px-5 py-2 border-4 border-rose-700 bg-rose-500 rounded-lg shadow-lg">
                <span class="text-rose-100 font-bold">
                    FOSS Repo
                </span>
            </NuxtLink>
        </section>
    </main>
</template>
