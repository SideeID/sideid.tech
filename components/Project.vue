<template>
  <a
    :href="link"
    target="_blank"
    class="flex-1 p-4 my-2 duration-300 ease-in-out transform rounded-md bg-opacity-30 hover:scale-105 hover:shadow-lg transition-all"
    :class="[color, { 'dark:bg-opacity-20': isDarkMode }]"
  >
    <div class="flex flex-row items-center">
      <img
        :src="
          icon
            ? icon.startsWith('https')
              ? icon
              : require(`@/assets/img/${icon}`)
            : null
        "
        alt="Project Icon"
        class="object-contain w-12 h-12"
      />
      <div class="flex flex-col justify-center ml-4">
        <h2 class="flex items-center text-lg font-bold">
          {{ name }}
          <span v-if="year" class="hidden ml-4 text-sm font-normal sm:block text-gray-600 dark:text-gray-400"
            >[{{ year }}]</span
          >
        </h2>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          {{ description }}
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    year: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'bg-white',
    },
  },
}
</script>
