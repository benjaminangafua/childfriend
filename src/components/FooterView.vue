<template>
  <footer class="bg-gray-900/80">
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <img
            src="/childfriend.jpg"
            alt="Child Friend"
            class="w-24 h-auto transition-all duration-300"
          />
          <p class="text-balance text-sm/6 text-gray-300">
            Well Leading... Better Foundation
          </p>
          <div class="font-bold text-white">Follow Us</div>
          <div class="flex gap-x-6">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-300 hover:text-white"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="size-6" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-8">
            <div>
              <h3 class="text-sm/6 font-semibold text-white">Quick Links</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.quickLinks" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-300 hover:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>

            <div class="mt-10 md:mt-0">
              <h3 class="text-sm/6 font-semibold text-white">Services</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.Services" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-300 hover:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-sm/6 font-semibold text-white">Contact</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.Contacts" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-300 hover:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24"
      >
        <p class="mt-8 text-sm/6 text-gray-200 md:order-1 md:mt-0">
          &copy; {{ new Date().getFullYear() }} Child Friend, Inc. All rights
          reserved.
        </p>
        <a
          href="https://www.ibenz.org"
          target="_blank"
          class="text-gray-500 hover:text-white"
        >
          Built by iBenz</a
        >
        <div class="flex gap-x-6">
          <a
            v-for="item in navigation.legal"
            :key="item.name"
            :href="item.href"
            class="text-gray-300 hover:text-gray-200"
          >
            <span class="text-sm/6">{{ item.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";
const navigation = {
  quickLinks: [
    { name: "Contact", href: "/contact" },
    { name: "Service", href: "/#services" },
    { name: "Impact", href: "/#impact" },
  ],
  Services: [
    { name: "Treatment", href: "/#services" },
    { name: "Health Status", href: "/#services" },
    { name: "Sanitation", href: "/#services" },
  ],
  Contacts: [
    { name: "Contact", href: "/contact" },
    { name: "(+231)776197367", href: "tel:(+231)776197367" },
    {
      name: "childfriend.edu@gmail.com",
      href: "mailto:childfriend.edu@gmail.com",
    },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/benjaminangafua3",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/benjaminangafua/",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "X",
      href: "https://x.com/benjaminangafua",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              d: "M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z",
            }),
          ]),
      }),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@benjaminangafua",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
};
</script>