<template>
  <div
    class="relative dark:bg-gray-900 bg-gray-50 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24"
  >
    <div class="relative mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h4 class="block text-blue-600 text-md pb-2">Features</h4>

        <h2
          class="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl md:text-5xl"
        >
          Key Features
        </h2>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <div
          v-for="post in posts"
          :key="post.title"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div
            class="pt-5 px-6 grid grid-cols-2 items-center bg-gray-800 dark:bg-white"
          >
            <div class="flex justify-start">
              <component
                :is="post.icon"
                class="h-9 w-7 flex-none text-blue-600"
                aria-hidden="true"
              />
            </div>
            <div class="flex justify-self-end">
              <StarIcon
                v-for="rating in [0, 1, 2, 3, 4]"
                :key="rating"
                :class="[
                  5 > rating ? 'text-blue-600' : 'text-gray-300',
                  'size-5 shrink-0',
                ]"
                aria-hidden="true"
              />
            </div>
          </div>
          <div
            class="flex flex-1 flex-col justify-between bg-gray-800 dark:bg-white p-6"
          >
            <div class="flex-1">
              <div class="text-gray-50 dark:text-gray-900">
                {{ post.title }}
              </div>
              <div class="mt-2 block">
                <p class="mt-3 text-base dark:text-gray-500 text-gray-400">
                  {{ post.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from "@heroicons/vue/20/solid";
import {
  BellAlertIcon,
  BookOpenIcon,
  BeakerIcon,
  PhoneXMarkIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/vue/24/outline";
const posts = [
  {
    title: "AI Symptom Analysis",
    description:
      "Quickly assess symptoms with AI-powered insights to support early detection and informed care decisions.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    title: "Menstrual & Reproductive Health Tracker",
    description:
      "Easily monitor your cycle, symptoms, and reproductive health with personalized tracking and insights.",
    icon: BeakerIcon,
  },
  {
    title: "Prenatal & Maternal Health",
    description:
      "Access expert-guided tools and tips to support a safe and healthy pregnancy journey from start to birth.",
  },
  {
    title: "Preventive Alerts",
    description:
      "Get timely reminders for vaccinations, health check-ups, and screenings to stay ahead of illness.",
    icon: BellAlertIcon,
  },
  {
    title: "Health Record System",
    description:
      "Securely store and manage personal medical records, prescriptions, and visit history—all in one place.",
    icon: BookOpenIcon,
  },
  {
    title: "Offline-First Technology",
    description:
      "Enjoy full functionality even without internet, ensuring access to critical health tools anytime, anywhere.",
    icon: PhoneXMarkIcon,
  },
];
</script>