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
          icon: 'darunnajah.png',
          name: 'Content Management System PPAI Darun Najah 2 Malang',
          link: 'https://darunnajah.project.inagata.com/',
          year: 'November 2024',
          description:
            'Sistem manajemen konten untuk SMP Darunnajah 2 Karangploso Malang.',
          color: 'bg-green-500',
        },
        {
          icon: 'dimsa.png',
          name: 'Content Management System Pondok Pesantren Darul Ihsan Muhammadiyah Sragen',
          link: 'https://dimsa.project.inagata.com/',
          year: 'Desember 2024',
          description:
            'Sistem manajemen konten untuk Pondok Pesantren Darul Ihsan Muhammadiyah Sragen.',
          color: 'bg-blue-500',
        },
        {
          icon: 'CLI.png',
          name: 'AI-CLI - Artificial Intelligence Command Line Interface',
          link: 'https://github.com/SideeID/AI-CLI',
          year: 'Desember 2024',
          description: 'AI-CLI adalah Command Line Interface (CLI) yang memungkinkan Anda berinteraksi dengan model Language Learning Model (LLM) secara langsung dari terminal. Dengan berbagai mode kerja dan fitur yang fleksibel, AI-CLI dirancang untuk mempermudah tugas seperti terjemahan, ringkasan, pembuatan kode, dan lainnya.',
          color: 'bg-red-500',
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
            'Forum rapat penting untuk DPR. Jangan lupa bawa kopi!, tapi boong oawokwawakoowakwakoawkowakowakowakowakowkaowakokoa',
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
          icon: 'AI.png',
          name: 'Ask Dimas Chatbot',
          link: 'https://ask.sideid.tech/',
          year: 'Desember 2024',
          description:
            'Interactive AI-powered, AI untuk menjawab pertanyaan seputar diri saya, portofolio, dan lainnya.',
          color: 'bg-red-500',
        },
        {
          icon: 'sip.webp',
          name: 'Chatbot - JEMPOL',
          link: 'https://jempol.sideid.tech/',
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
          name: 'Crowdfunding Frontend',
          link: 'https://bersama-palestina.vercel.app/',
          year: 'Juni 2024',
          description:
            'Frontend platform crowdfunding untuk palestina menggunakan React.js, Tailwind CSS, dan Redux. Mendukung registrasi pengguna, autentikasi, manajemen kampanye dan terintegrasi dengan payment gayeway Midtrans.',
          color: 'bg-red-500',
        },
        {
          icon: 'API.webp',
          name: 'Crowdfunding Backend',
          link: 'https://github.com/SideeID/Crowdfunding-Backend',
          year: 'Mei 2024',
          description:
            'Backend platform crowdfunding menggunakan Node.js, Express.js, Express Validator, MongoDB, Passport.js dll. Mendukung registrasi pengguna, autentikasi, manajemen kampanye dan terintegrasi dengan payment gayeway Midtrans.',
          color: 'bg-green-500',
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
    }
  },
}
</script>
