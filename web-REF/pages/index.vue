<template>
    <main class="w-11/12 lg:max-w-2xl mx-auto h-screen flex flex-col justify-center">
        <div>
            <div class="px-3 sm:px-7 py-5 bg-rose-100 border-4 border-rose-500 rounded-xl shadow-lg shadow-inner">
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

                    <p class="mt-3 sm:mt-5 px-3 text-base text-rose-900">
                        Ava Nakamoto showcases her life's work in a DAO that carries on where <a href="https://bitcointalk.org/index.php?topic=2228.msg29479#msg29479" target="_blank" class="text-rose-700 font-bold hover:underline">her father left off in 2010</a>.

                        <span class="hidden mt-3 sm:inline sm:mt-0">
                            Residing in-between HOTlanta and São Paulo, Ava finds herself in the perfect position to grow her Crypto empire throughout the Americas and beyond.
                        </span>
                    </p>
                </section>

                <section class="mt-5 flex flex-col gap-4 sm:flex-row justify-around">
                    <NuxtLink to="/roadmap" class="px-5 sm:px-10 py-2 sm:py-3 text-center border-4 border-rose-700 bg-rose-500 rounded-2xl shadow-lg">
                        <span class="text-3xl sm:text-3xl text-rose-100 font-bold">
                            Roadmap
                        </span>
                    </NuxtLink>

                    <NuxtLink to="https://avas.cash/bootstrap" target="_blank" class="px-5 sm:px-10 py-2 sm:py-3 text-center border-4 border-rose-700 bg-rose-500 rounded-2xl shadow-lg">
                        <span class="text-3xl sm:text-3xl text-rose-100 font-bold">
                            Bootstrap
                        </span>
                    </NuxtLink>
                </section>
            </div>

            <Footer />
        </div>
    </main>
</template>
