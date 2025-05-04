
<template>
  <div class="relative overflow-hidden">
    <div class="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
      <svg
        class="absolute bottom-0 right-0 translate-x-1/2 text-gray-700 lg:top-0 lg:mb-0 lg:mt-28 xl:translate-x-0"
        width="364"
        height="384"
        viewBox="0 0 364 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="364"
          height="384"
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        />
      </svg>
    </div>

    <div class="relative">
      <HeaderView />
      <router-view />
      <FooterView />
    </div>
  </div>
</template>
<script setup>
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";
</script>



