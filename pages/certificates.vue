<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-8">Sertifikat & Penghargaan</h2>
    <Certificates />
    <div class="mt-8">
      <NuxtLink to="/" class="text-blue-500 hover:text-blue-600 transition-colors duration-300">
        &larr; Kembali ke Beranda
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import Certificates from '~/components/Certificates.vue'

export default {
  components: {
    Certificates
  },
  head() {
    return {
      title: 'Sertifikat & Penghargaan - Dimas Fajar Katon Prayogo',
      meta: [
        { hid: 'description', name: 'description', content: 'Sertifikat pelatihan dan penghargaan yang telah diraih oleh Dimas Fajar Katon Prayogo' }
      ]
    }
  }
}
</script>
