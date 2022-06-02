<template>
    <!-- Main Screen -->
    <main class="-mt-5 sm:mt-0 flex flex-col w-screen h-screen justify-center items-center bg-gradient-to-r from-purple-300 to-rose-300">

        <!-- Main Window -->
        <section class="w-11/12 lg:max-w-2xl p-5 bg-rose-100 border-4 border-rose-500 rounded-xl shadow-lg shadow-inner">

            <div class="flex flex-col items-center">
                <img
                    class="w-32 sm:w-48"
                    alt="Ava's DAO Logo"
                    :src="require('@/assets/logo.png')"
                />

                <h1 class="mt-3 text-5xl sm:text-6xl text-rose-300 font-extrabold">
                    Ava's DAO
                </h1>

                <p class="mt-0 text-lg sm:text-base text-center font-medium text-rose-500">
                    <span class="hidden sm:inline">Welcome To The</span> Hottest Community In DeFi
                </p>

                <p class="mt-3 sm:mt-5 text-sm">
                    Ava Nakamoto presents her life's work, which she now carries on where her father left off <a href="https://bitcointalk.org/index.php?topic=2228.msg29479#msg29479" target="_blank" class="text-rose-700 font-medium hover:underline">back in 2010</a>.

                    <span class="block mt-3 sm:inline sm:mt-0">
                        Residing in-between Tampa and Rio, Ava finds herself in the perfect position to grow her DeFi empire throughout the Americas.
                    </span>
                </p>

                <p class="hidden sm:block mt-3 text-sm">
                    Fall of 2022, Ava will present the world with the first cross-chain DAO, spanning:
                    Bitcoin, Ethereum, Binance and more..
                </p>
            </div>

            <div class="mt-5 flex justify-around">
                <a href="https://avagogo.io" target="_blank" class="px-5 py-2 border-4 border-rose-700 bg-rose-500 rounded-lg shadow-lg">
                    <span class="text-rose-100 font-bold">
                        Ava GoGo
                    </span>
                </a>

                <a href="https://apns.io" target="_blank" class="px-5 py-2 border-4 border-rose-700 bg-rose-500 rounded-lg shadow-lg">
                    <span class="text-rose-100 font-bold">
                        APNS
                    </span>
                </a>
            </div>

        </section>

        <footer class="mt-2">
            <p class="text-xs sm:text-sm text-rose-700 opacity-50">
                Copyright {{curYear}}. Ava's DAO. All rights reserved.
            </p>
        </footer>

    </main>
</template>

<script>
/* Import modules. */
import moment from 'moment'

export default {
    data: () => ({
        //
    }),
    computed: {
        curYear() {
            return moment().format('YYYY')
        },
    },
    methods: {
        //
    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
