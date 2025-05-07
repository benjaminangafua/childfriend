<template>
  <div
    class="relative isolate overflow-hidden px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h4 class="block text-blue-600 text-lg pb-2">Work</h4>

        <h2
          class="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          What We Do
        </h2>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <div
          v-for="card in cards"
          :key="card.name"
          class="flex gap-x-4 rounded-xl bg-gray-50 p-6 py-8 ring-1 ring-inset ring-white/5"
        >
          <component
            :is="card.icon"
            class="h-9 w-7 flex-none text-blue-600"
            aria-hidden="true"
          />
          <div class="text-base/7">
            <h3 class="font-semibold text-gray-900">
              {{ card.name }}
            </h3>
            <p class="mt-2 text-gray-600">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PuzzlePieceIcon,
  LifebuoyIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  CalculatorIcon,
  PresentationChartBarIcon,
} from "@heroicons/vue/20/solid";
const cards = [
  {
    name: "Treatment for Common Illnesses",
    description:
      "We provide timely care for common illnesses such as malaria, typhoid, and fever. On-campus nurses can record symptoms, follow treatment protocols, and help students recover quickly to return to class.",
    icon: LifebuoyIcon,
  },
  {
    name: "Routine Check-Ups",
    description:
      "Regular health assessments help track each student's well-being. Nurses can monitor growth, nutrition, and early warning signs, ensuring preventive care is part of the school experience.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Workshops on Healthy Hygiene",
    description:
      "We organize engaging workshops to teach students the importance of handwashing, menstrual hygiene, and clean environments. These sessions promote long-term healthy habits.",
    icon: BriefcaseIcon, // Suggests cleanliness and health education.
  },
];
</script>