<template>
  <div>
    <!-- <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search projects..."
        class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
      />
    </div> -->
    <h1 class="mt-4 text-2xl font-bold">Major Projects</h1>
    <transition-group name="project-list" tag="div" class="flex flex-col mt-2">
      <Project
        v-for="project in filteredMajorProjects"
        :key="project.name"
        :icon="project.icon"
        :name="project.name"
        :link="project.link"
        :year="project.year"
        :description="project.description"
        :color="project.color"
      />
    </transition-group>
    <button
      class="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      @click="showAllProjects = !showAllProjects"
    >
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="transition duration-300 transform mr-2"
        :class="showAllProjects ? '-rotate-180' : ''"
      />
      {{ showAllProjects ? 'Hide' : 'Show' }} All Projects
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
          icon: 'next-js-svgrepo-com.svg',
          name: 'Logbook Cargo - Bandara Adi Soemarmo',
          link: '#',
          year: 'Februari 2025',
          description:
            'Logbook Cargo adalah aplikasi berbasis web yang dirancang untuk membantu pengelolaan data logistik di Bandara Adi Soemarmo. Dengan fitur-fitur yang lengkap dan mudah digunakan, aplikasi ini memungkinkan pengguna untuk mencatat, melacak, dan mengelola data logistik dengan efisien. Dengan PWAs, aplikasi ini juga dapat diakses secara offline dan diinstal di perangkat pengguna.',
          color: 'bg-green-500',
        },
        {
          icon: 'laravel-svgrepo-com.svg',
          name: 'Bali Trip Center',
          link: 'https://balitripcenter.com/',
          year: 'Januari 2025',
          description:
            'Bali Trip Center adalah platform penyedia layanan perjalanan wisata yang menyediakan berbagai paket perjalanan wisata di Bali. Dibangun menggunakan teknologi modern, platform ini memungkinkan pengguna untuk menemukan dan memesan paket perjalanan wisata dengan mudah dan cepat.',
          color: 'bg-blue-500',
        },
        {
          icon: 'ezyapi.webp',
          name: 'Ezy API - Documentation',
          link: 'https://ezy.side.my.id/',
          year: 'Januari 2025',
          description:
            'Dokumentasi lengkap untuk EzyAPI, dirancang untuk memandu pengembang dalam memanfaatkan fitur-fitur platform API dengan mudah. Dokumentasi ini mencakup panduan integrasi, contoh penggunaan, dan referensi endpoint, sehingga pengembang dapat dengan cepat memulai atau mengembangkan proyek berbasis API dengan pendekatan santai namun profesional.',
          color: 'bg-red-500',
        },
        {
          icon: 'API.webp',
          name: 'Ezy-Engine - Rest API',
          link: 'https://api.side.my.id',
          year: 'Januari 2025',
          description:
            'EzyAPI adalah platform API gratis yang mudah digunakan dengan pendekatan yang santai namun tetap fungsional. Dibangun dengan teknologi modern, EzyAPI bertujuan untuk menyederhanakan interaksi dengan model AI canggih seperti Claude, GPT, dan Gemini, serta menyediakan berbagai fitur yang berguna untuk pengembangan aplikasi.',
          color: 'bg-green-500',
        },
        {
          icon: 'neoside.webp',
          name: 'NeoSide - WhatsApp Chatbot',
          link: 'https://wa.me/6281949601347',
          year: 'Desember 2024',
          description:
            'NeoSide adalah chatbot WhatsApp yang dibangun menggunakan Node.js dan TypeScript. Bot ini memanfaatkan teknologi Baileys untuk komunikasi dengan WhatsApp dan berbagai LLM (Large Language Model) yang tersedia untuk menjawab pertanyaan pengguna, dan berbagai fitur lainnya.',
          color: 'bg-blue-500',
        },
        {
          icon: 'AI.webp',
          name: 'Ask Dimas Chatbot',
          link: 'https://ask.side.my.id/',
          year: 'Desember 2024',
          description:
            'Interactive AI-powered, AI untuk menjawab pertanyaan seputar diri saya, portofolio, dan lainnya.',
          color: 'bg-red-500',
        },
        {
          icon: 'darunnajah.webp',
          name: 'Content Management System PPAI Darun Najah 2 Malang',
          link: 'https://darunnajah.project.inagata.com/',
          year: 'November 2024',
          description:
            'Sistem manajemen konten untuk SMP Darunnajah 2 Karangploso Malang.',
          color: 'bg-green-500',
        },
        {
          icon: 'dimsa.webp',
          name: 'Content Management System Pondok Pesantren Darul Ihsan Muhammadiyah Sragen',
          link: 'https://dimsa.project.inagata.com/',
          year: 'Desember 2024',
          description:
            'Sistem manajemen konten untuk Pondok Pesantren Darul Ihsan Muhammadiyah Sragen.',
          color: 'bg-blue-500',
        },
        {
          icon: 'CLI.webp',
          name: 'AI-CLI - Artificial Intelligence Command Line Interface',
          link: 'https://github.com/SideeID/AI-CLI',
          year: 'Desember 2024',
          description:
            'AI-CLI adalah Command Line Interface (CLI) yang memungkinkan Anda berinteraksi dengan model Language Learning Model (LLM) secara langsung dari terminal. Dengan berbagai mode kerja dan fitur yang fleksibel, AI-CLI dirancang untuk mempermudah tugas seperti terjemahan, ringkasan, pembuatan kode, dan lainnya.',
          color: 'bg-red-500',
        },
        {
          icon: 'API.webp',
          name: 'Crowdfunding API',
          link: 'https://github.com/SideeID/Crowdfunding-Backend',
          year: 'Mei 2024',
          description:
            'Backend platform crowdfunding menggunakan Node.js, Express.js, Express Validator, MongoDB, Passport.js dll. Mendukung registrasi pengguna, autentikasi, manajemen kampanye dan terintegrasi dengan payment gayeway Midtrans.',
          color: 'bg-green-500',
        },
        {
          icon: 'quran.webp',
          name: "My Qur'an",
          link: 'https://al-qur-an.vercel.app/',
          year: 'Maret 2024',
          description:
            'Temukan kenyamanan membaca Al Quran di era digital! Jelajahi berbagai surat dan ayat dengan mudah, serta temukan koleksi doa sehari-hari yang bisa menginspirasi hari Anda.',
          color: 'bg-indigo-500',
        },
        {
          icon: 'API.webp',
          name: 'BookCollection Rest API',
          link: 'https://github.com/SideeID/API-Bookshelf',
          year: 'Mei 2024',
          description:
            'RESTful API untuk mengelola koleksi buku. Terdapat fitur CRUD untuk mengelola koleksi buku.',
          color: 'bg-red-500',
        },
        {
          icon: 'dpr-icon.webp',
          name: 'Forum rapat DPR :v',
          link: 'https://rapat-dpr.vercel.app/',
          year: 'April 2024',
          description:
            'Forum rapat penting untuk DPR. Jangan lupa bawa kopi!, tapi boong 😂.',
          color: 'bg-blue-500',
        },
        {
          icon: 'rapi.webp',
          name: 'Rekap Kopi',
          link: 'https://github.com/SideeID/rekap-kopi',
          year: 'April 2024',
          description:
            'Website untuk prediksi kwalitas biji kopi berdasarkan citra biji kopi menggunakan metode Convolutional Neural Network.',
          color: 'bg-green-500',
        },
        {
          icon: 'notes.webp',
          name: 'Notes app',
          link: 'https://notes-app-beta-seven.vercel.app/',
          year: 'Maret 2024',
          description:
            'Web app untuk mencatat catatan harian, tugas, dan lainnya. Login untuk menggunakannya',
          color: 'bg-purple-500',
        },
        {
          icon: 'bookshelf.webp',
          name: 'Books shelf',
          link: 'https://sideeid.github.io/Bookshelf-App/',
          year: 'Maret 2024',
          description:
            'Aplikasi untuk menyimpan koleksi buku yang dimiliki. Memanfaatkan DOM dan local storage.',
          color: 'bg-blue-500',
        },
        {
          icon: 'to-do-list.webp',
          name: 'Todo App',
          link: 'https://sideeid.github.io/Todo-Apps/',
          year: 'Maret 2024',
          description:
            'Aplikasi untuk mencatat daftar kegiatan yang harus dilakukan. Memanfaatkan DOM dan local storage.',
          color: 'bg-green-500',
        },
        {
          icon: 'react.webp',
          name: 'New Year Countdown',
          link: 'https://sideid-new-year-coundown.vercel.app/',
          year: 'Desember 2023',
          description: 'Countdown menuju tahun baru 2024.',
          color: 'bg-yellow-500',
        },
        {
          icon: 'kominfo.svg',
          name: 'Kominfo News',
          link: 'https://github.com/SideeID/simple-kominfo-news',
          year: 'Oktober 2023',
          description:
            'Website berita yang menampilkan berita tentang kominfo.',
          color: 'bg-blue-500',
        },
        {
          icon: 'herta.webp',
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
          icon: 'sip.webp',
          name: 'Chatbot - JEMPOL',
          link: 'https://jempol.side.my.id/',
          year: 'Agustus 2024',
          description:
            'JEMPOL - Jaringan Edukasi dan Informasi Layanan Mandiri POLIJE adalah chatbot yang dibuat untuk membantu menjawab pertanyaan seputar akademik, kemahasiswaan, dan layanan lainnya di Politeknik Negeri Jember.',
          color: 'bg-blue-500',
        },
        {
          icon: 'kemenag.svg',
          name: 'Kinerja Tahunan Kementerian Agama',
          link: '#',
          year: 'Agustus 2024',
          description:
            'Aplikasi ini dibuat untuk membantu Kementerian Agama dalam memonitoring kinerja tahunan, serta memudahkan dalam pengelolaan data dan laporan.',
          color: 'bg-green-500',
        },
        {
          icon: 'bersamaPalestina.svg',
          name: 'Bersama Palestina',
          link: 'https://bersama-palestina.vercel.app/',
          year: 'Juni 2024',
          description:
            'Platform crowdfunding untuk palestina menggunakan React.js, Tailwind CSS, dan Redux. Mendukung registrasi pengguna, autentikasi, manajemen kampanye dan terintegrasi dengan payment gayeway Midtrans.',
          color: 'bg-red-500',
        },
        {
          icon: 'pdp-gis.webp',
          name: 'PDP GIS',
          link: 'https://pdp-jember.com/',
          year: 'Agustus 2023',
          description:
            'Sistem pendukung keputusan pemilihan tanaman berdasarkan kandungan tanah berbasis Sistem Informasi Geografis menggunakan metode Learning Vector Quantization.',
          color: 'bg-purple-500',
        },
        {
          icon: 'sip.webp',
          name: 'CF Warehouse Politeknik Negeri Jember',
          link: 'https://cfwarehouse.wsmif.id/',
          year: 'Agustus 2023',
          description:
            'Platform penyimpanan dataset yang memungkinkan pengguna untuk mengunggah, melihat, dan mengunduh dataset dalam berbagai format.',
          color: 'bg-blue-400',
        },
      ],
      searchQuery: '',
    }
  },
  computed: {
    filteredMajorProjects() {
      return this.majorProjects.filter(
        (project) =>
          project.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      )
    },
    filteredProjects() {
      return this.projects.filter(
        (project) =>
          project.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      )
    },
  },
}
</script>

<style scoped>
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.5s ease;
}
.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
