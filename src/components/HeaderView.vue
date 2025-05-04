<template>
  <Popover class="py-6 dark:bg-gray-900 bg-white">
    <nav
      class="relative mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between"
      aria-label="Global"
    >
      <div class="flex flex-1 items-center">
        <div class="flex w-full items-center justify-between md:w-auto">
          <router-link to="/">
            <span class="sr-only">iBenz</span>
            <img
              src="/childfriend.jpg"
              alt="Child Friend"
              class="w-24 h-auto transition-all duration-300"
            />
          </router-link>
          <div class="-mr-2 flex items-center md:hidden">
            <PopoverButton
              class="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="size-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div class="hidden space-x-10 md:ml-10 md:flex">
          <a
            v-for="item in internalLink"
            :key="item.name"
            :href="item.href"
            class="font-medium dark:text-gray-300 text-gray-800 dark:hover:text-white hover:text-gray-900"
            >{{ item.name }}</a
          >
          <router-link
            to="/contact"
            class="font-medium dark:text-gray-300 text-gray-800 dark:hover:text-white hover:text-gray-900"
            >Contact</router-link
          >
        </div>
      </div>
      <div class="hidden md:flex">
        <a
          href="#"
          class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >Get In Touch</a
        >
      </div>
    </nav>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
      >
        <div
          class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5"
        >
          <div class="flex items-center justify-between px-5 pt-4">
            <router-link to="/">
              <span class="sr-only">iBenz</span>
              <img
                src="/childfriend.jpg"
                alt="Child Friend"
                class="w-24 h-auto transition-all duration-300"
              />
            </router-link>
            <div class="-mr-2">
              <PopoverButton
                class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              >
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="size-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="space-y-1 px-2 pb-3 pt-2">
            <router-link
              to="/contact"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >Contact</router-link
            >
            <a
              v-for="item in internalLink"
              :key="item.name"
              :href="item.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >{{ item.name }}</a
            >
          </div>
          <a
            href="/contact"
            class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-blue-600 hover:bg-gray-100"
            >Get In Touch</a
          >
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
const navigation = [
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/AboutUs" },
];
const internalLink = [
  { name: "What We Do", href: "/#services" },
  { name: "Impart", href: "/#impact" },
  { name: "About Us", href: "/AboutUs" },
];
</script>
