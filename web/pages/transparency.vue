<script setup lang="ts">
/* Import modules. */
import moment from 'moment'

useHead({
    title: `Transparency — Ava's DAO`,
    meta: [
        { name: 'description', content: `Ava's DAO makes building your next BIG idea effortless.` }
    ],
})

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <main class="w-full lg:max-w-2xl mx-auto px-3 py-8 bg-rose-100 flex flex-col gap-10">
        <header class="sm:px-3 text-rose-600 font-medium tracking-widest opacity-50">
            <h1 class="text-3xl sm:text-4xl uppercase">
                Ava's DAO
            </h1>

            <h1 class="text-5xl sm:text-6xl uppercase">
                Transparency
            </h1>

            <h3 class="text-lg sm:text-2xl">
                {{moment().format('MMMM')}} 2023
            </h3>
        </header>

        <div class="px-5 -my-5 text-sm">
            <h3 class="text-2xl text-rose-700 font-bold">
                Don't Trust. Verify!
            </h3>

            <p class="text-base text-gray-800 italic">
                Ava is well-respected for her natural ability to lead by example.
                Her DAO has committed to FULL transparency to its community by utilizing the on-chain financial &amp; data capabilities of the Nexa blockchain in 100% of its activities.
            </p>
        </div>

        <section>
            <h2 class="text-2xl text-rose-800 font-medium tracking-widest uppercase">
                Staked Assets
            </h2>

            <div class="grid grid-cols-2 gap-6">
                <div>
                    <h2 class="text-2xl text-rose-700 font-light tracking-tighter">
                        Circulated
                    </h2>

                    <p class="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eius voluptatem minus natus at eveniet dolorum eos mollitia, maxime animi excepturi harum omnis illum odit recusandae pariatur! Unde, explicabo molestias.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl text-rose-700 font-light tracking-tighter">
                        Non-Circulated
                    </h2>

                    <p class="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eius voluptatem minus natus at eveniet dolorum eos mollitia, maxime animi excepturi harum omnis illum odit recusandae pariatur! Unde, explicabo molestias.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h2 class="text-2xl text-rose-800 font-medium tracking-widest uppercase">
                Treasury Streams
            </h2>

            <div class="grid grid-cols-2 gap-6">
                <div>
                    <h2 class="text-2xl text-rose-700 font-light tracking-tighter">
                        Causes Cash DAO
                    </h2>

                    <p class="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eius voluptatem minus natus at eveniet dolorum eos mollitia, maxime animi excepturi harum omnis illum odit recusandae pariatur! Unde, explicabo molestias.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl text-rose-700 font-light tracking-tighter">
                        Nexa Garden DAO
                    </h2>

                    <p class="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eius voluptatem minus natus at eveniet dolorum eos mollitia, maxime animi excepturi harum omnis illum odit recusandae pariatur! Unde, explicabo molestias.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl text-rose-700 font-light tracking-tighter">
                        Nexa Exchange DAO
                    </h2>

                    <p class="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eius voluptatem minus natus at eveniet dolorum eos mollitia, maxime animi excepturi harum omnis illum odit recusandae pariatur! Unde, explicabo molestias.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl text-rose-700 font-light tracking-tighter">
                        Nexa Shell DAO
                    </h2>

                    <p class="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eius voluptatem minus natus at eveniet dolorum eos mollitia, maxime animi excepturi harum omnis illum odit recusandae pariatur! Unde, explicabo molestias.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl text-rose-700 font-light tracking-tighter">
                        Nexa Rocks! DAO
                    </h2>

                    <p class="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eius voluptatem minus natus at eveniet dolorum eos mollitia, maxime animi excepturi harum omnis illum odit recusandae pariatur! Unde, explicabo molestias.
                    </p>
                </div>
            </div>

            <p class="px-5 py-5 text-lg text-rose-700 font-light text-center italic">
                * NOTE: All future <span class="font-medium">Stakehouse Airdrops</span> will begin shortly after the <span class="font-medium">1st Nexa halvening</span> event, scheduled for approximately June of 2026.
            </p>
        </section>
    </main>

    <Footer />
</template>
