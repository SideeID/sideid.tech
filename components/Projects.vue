<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Major Projects</h1>
    <div class="flex flex-col mt-2">
      <Project
        v-for="project in majorProjects"
        :key="project.name"
        :icon="project.icon"
        :name="project.name"
        :link="project.link"
        :year="project.year"
        :description="project.description"
        :color="project.color"
      />
    </div>
    <button class="mt-6" @click="showAllProjects = !showAllProjects">
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="transition duration-300 transform"
        :class="showAllProjects ? '-rotate-180' : ''"
      />
      Show All Projects
    </button>
    <transition name="slide">
      <div v-if="showAllProjects" class="flex flex-col mt-2">
        <Project
          v-for="project in projects"
          :key="project.name"
          :icon="project.icon"
          :name="project.name"
          :link="project.link"
          :year="project.year"
          :description="project.description"
          :color="project.color"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAllProjects: false,
      projects: [
        {
          icon: 'rapi.png',
          name: 'Rekap Kopi',
          link: 'https://github.com/SideeID/rekap-kopi',
          year: 'April 2024',
          description:
            'Website untuk prediksi kwalitas biji kopi berdasarkan citra biji kopi menggunakan metode Convolutional Neural Network.',
          color: 'bg-green-500',
        },
        {
          icon: 'notes.png',
          name: 'Notes app',
          link: 'https://notes-app-beta-seven.vercel.app/',
          year: 'Maret 2024',
          description:
            'Web app untuk mencatat catatan harian, tugas, dan lainnya. Login untuk menggunakannya',
          color: 'bg-purple-500',
        },
        {
          icon: 'bookshelf.png',
          name: 'Books shelf',
          link: 'https://sideeid.github.io/Bookshelf-App/',
          year: 'Maret 2024',
          description:
            'Aplikasi untuk menyimpan koleksi buku yang dimiliki. Memanfaatkan DOM dan local storage.',
          color: 'bg-blue-500',
        },
        {
          icon: 'to-do-list.png',
          name: 'Todo App',
          link: 'https://sideeid.github.io/Todo-Apps/',
          year: 'Maret 2024',
          description:
            'Aplikasi untuk mencatat daftar kegiatan yang harus dilakukan. Memanfaatkan DOM dan local storage.',
          color: 'bg-green-500',
        },
        {
          icon: 'react.png',
          name: 'New Year Countdown',
          link: 'https://sideid-new-year-coundown.vercel.app/',
          year: 'Desember 2023',
          description:
            'Countdown menuju tahun baru 2024.',
          color: 'bg-yellow-500',
        },
        {
          icon: 'kominfo.svg',
          name: 'Kominfo News',
          link: 'https://github.com/SideeID/simple-kominfo-news',
          year: 'Oktober 2023',
          description: 'Website berita yang menampilkan berita tentang kominfo.',
          color: 'bg-blue-500',
        },
        {
          icon: 'herta.png',
          name: 'Kuruto',
          link: 'https://sideeid.github.io/kuruto/',
          year: 'Juli 2023',
          description:
            'Situs web untuk Herta, karakter jenius Honkai: Star Rail yang paling lucu dan imut 😋.',
          color: 'bg-red-500',
        },
      ],

      majorProjects: [
        {
          icon: 'pdp-gis.png',
          name: 'PDP GIS',
          link: 'https://pdp-jember.com/',
          year: 'Agustus 2023',
          description:
            'Sistem pendukung keputusan pemilihan tanaman berdasarkan kandungan tanah berbasis Sistem Informasi Geografis menggunakan metode Learning Vector Quantization.',
          color: 'bg-purple-500',
        },
        {
          icon: 'quran.png',
          name: 'My Qur\'an',
          link: 'https://al-qur-an.vercel.app/',
          year: 'Maret 2024',
          description:
            'Temukan kenyamanan membaca Al Quran di era digital! Jelajahi berbagai surat dan ayat dengan mudah, serta temukan koleksi doa sehari-hari yang bisa menginspirasi hari Anda.',
          color: 'bg-indigo-500',
        },
        {
          icon: 'sip.png',
          name: 'CF Warehouse Politeknik Negeri Jember',
          link: 'https://cfwarehouse.wsmif.id/',
          year: 'Agustus 2023',
          description:
            'Platform penyimpanan dataset yang memungkinkan pengguna untuk mengunggah, melihat, dan mengunduh dataset dalam berbagai format.',
          color: 'bg-blue-400',
        },
      ],
    }
  },
}
</script>
