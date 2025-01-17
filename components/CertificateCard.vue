<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <img :src="cert.image" :alt="cert.name" class="w-full h-48 object-cover" loading="lazy" />
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2">{{ cert.name }}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ cert.issuer }}</p>
      <p class="text-sm text-gray-500 dark:text-gray-500">{{ cert.date }}</p>
      <a v-if="cert.link" :href="cert.link" target="_blank" rel="noopener noreferrer" class="mt-2 inline-block text-blue-500 hover:text-blue-600 transition-colors duration-300">
        Lihat Sertifikat
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cert: {
      type: Object,
      required: true
    }
  }
}
</script>
