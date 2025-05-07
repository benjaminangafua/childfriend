<template>
  <main class="py-14 bg-gray-900/80">
    <div class="mx-auto max-w-7xl">
      <div class="px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8 pb-20 lg:pb-28">
        <!-- Banner -->
        <div
          class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left"
        >
          <div>
            <h1
              class="my-6 text-6xl font-bold leading-16 tracking-wider text-white sm:text-5xl md:text-6xl"
            >
              Smart Health, <br />
              Stronger Futures
            </h1>
            <div class="block text-2xl">
              <span class="text-white"> Well Leading... Better Foundation</span>
            </div>
          </div>
        </div>

        <div class="mt-8 lg:col-span-6 lg:mt-0">
          <div class="sm:mx-auto sm:w-full sm:max-w-2xl sm:overflow-hidden">
            <div class="px-6 py-8 sm:px-10">
              <img src="/impact/checking.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <divider />

    <Impact />

    <Services id="services" />
    <Features />
    <partners />
  </main>
</template>
<script setup>
import Services from "./Services.vue";
import Divider from "../components/Divider.vue";
import Impact from "../components/Impact.vue";
import Features from "../components/Features.vue";
import Partners from "../components/Partners.vue";
const stats = [
  {
    title: "Year of experience",
    content: "4",
  },
  {
    title: "Clients",
    content: "5",
  },
  {
    title: "Projects",
    content: "80+",
  },
];
</script>
