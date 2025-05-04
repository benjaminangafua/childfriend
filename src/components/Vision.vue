
<template>
  <div class="relative overflow-hidden bg-white">
    <div class="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
      <svg
        class="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform"
        width="640"
        height="784"
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          y="72"
          width="640"
          height="640"
          class="text-gray-50"
          fill="currentColor"
        />
        <rect
          x="118"
          width="404"
          height="784"
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div>

    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <main class="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:mt-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left"
          >
            <h1>
              <span
                class="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg"
                >Vision</span
              >
              <span
                class="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
              >
                <span class="block text-gray-800">Our Vision</span>
              </span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              Child Friend envisions a future where every child in Liberia has
              access to quality on-campus healthcare and a healthy, supportive
              learning environment.
            </p>
          </div>
          <div
            class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center"
          >
            <svg
              class="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x="118"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y="72"
                width="640"
                height="640"
                class="text-gray-50"
                fill="currentColor"
              />
              <rect
                x="118"
                width="404"
                height="784"
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div
              class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
            >
              <button
                type="button"
                class="relative block w-full overflow-hidden rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                <span class="sr-only">Watch our video to learn more</span>
                <img class="w-full" src="/serving.jpg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>