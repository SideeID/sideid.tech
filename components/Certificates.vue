<!-- components/Certificates.vue -->
<template>
  <div class="mt-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <template v-if="isLoaded">
        <CertificateCard
          v-for="cert in certificates"
          :key="cert.id"
          :cert="cert"
        />
      </template>
      <template v-else>
        <CertificateSkeleton v-for="i in 6" :key="i" />
      </template>
    </div>
  </div>
</template>

<script>
import CertificateCard from './CertificateCard.vue'
import CertificateSkeleton from './CertificateSkeleton.vue'

export default {
  components: {
    CertificateCard,
    CertificateSkeleton
  },
  data() {
    return {
      isLoaded: false,
      certificates: [
        {
          id: 1,
          name: "MSIB Projek Terbaik",
          issuer: "MSIB",
          date: "Agustus 2024",
          image: require("~/assets/img/MSIB-terbaik.png"),
          link: "https://drive.google.com/file/d/1K5nbw5IXSBTiMFfVerc6yWv6YYGSG4Xz/view?usp=sharing"
        },
        {
          id: 2,
          name: "React Expert",
          issuer: "Dicoding Indonesia",
          date: "Mei 2024",
          image: require("~/assets/img/React-expert.png"),
          link: "https://www.dicoding.com/certificates/72ZDV81VLZYW"
        },
        {
          id: 3,
          name: "Backend Developer",
          issuer: "Inagata Technosmith",
          date: "Desember 2024",
          image: require("~/assets/img/BE-inagata.png"),
          link: "https://drive.google.com/file/d/1Ntqoozr0TMxxvllJ6a-xK4pMwIrxZquv/view?usp=sharing"
        },
        {
          id: 4,
          name: "Cyber Security",
          issuer: "BNSP - VSGA",
          date: "Juli 2024",
          image: require("~/assets/img/ciber-sec.png"),
          link: "https://drive.google.com/file/d/1L-15clzIvKPfwjFL7MmcH1FA_iTsSD7c/view?usp=sharing"
        },
        {
          id: 5,
          name: "Web Development(KOMDIGI)",
          issuer: "BNSP - VSGA",
          date: "Mei 2024",
          image: require("~/assets/img/web-dev-bwi.png"),
          link: "https://drive.google.com/file/d/1QcQ0Ji3bhP8mpDiuMgAuPK6o9eTlx8Su/view?usp=sharing"
        },
        {
          id: 6,
          name: "Web Development(POLIJE)",
          issuer: "BNSP - VSGA",
          date: "Juli 2023",
          image: require("~/assets/img/web-dev-jbr.png"),
          link: "https://drive.google.com/file/d/1OBmXSscuYq3DtlJoSxfGaBnD6gltimGi/view?usp=sharing"
        },
        {
          id: 7,
          name: "Backend Developer",
          issuer: "Dicoding Indonesia",
          date: "Mei 2024",
          image: require("~/assets/img/BE-pemula.png"),
          link: "https://www.dicoding.com/certificates/0LZDZJQKXZ6M"
        },
        {
          id: 8,
          name: "Frontend Developer",
          issuer: "Dicoding Indonesia",
          date: "Mei 2024",
          image: require("~/assets/img/FE-pemula.png"),
          link: "https://www.dicoding.com/certificates/53XEY62N9PRN"
        },
        {
          id: 9,
          name: "Fundamental React",
          issuer: "Dicoding Indonesia",
          date: "Mei 2024",
          image: require("~/assets/img/Fundamental-web-react.png"),
          link: "https://www.dicoding.com/certificates/07Z60KM1YZQR"
        },
        {
          id: 10,
          name: "Meniti Karier sebagai Software Developer",
          issuer: "Dicoding Indonesia",
          date: "Mei 2024",
          image: require("~/assets/img/Karir-dev.png"),
          link: "https://www.dicoding.com/certificates/KEXL10LG4XG2"
        },
        {
          id: 11,
          name: "Belajar Dasar Pemrograman JavaScript",
          issuer: "Dicoding Indonesia",
          date: "Maret 2024",
          image: require("~/assets/img/Dasar-js.png"),
          link: "https://www.dicoding.com/certificates/JMZVD7WROZN9"
        },
        {
          id: 12,
          name: "Belajar Membuat Aplikasi Web dengan React",
          issuer: "Dicoding Indonesia",
          date: "Maret 2024",
          image: require("~/assets/img/React-app.png"),
          link: "https://www.dicoding.com/certificates/1RXY1511KPVM"
        },
        {
          id: 13,
          name: "Belajar Dasar Git dengan GitHub",
          issuer: "Dicoding Indonesia",
          date: "Februari 2024",
          image: require("~/assets/img/Git.png"),
          link: "https://www.dicoding.com/certificates/4EXGKGY8GZRL"
        },
        {
          id: 14,
          name: "Belajar Dasar Pemrograman Web",
          issuer: "Dicoding Indonesia",
          date: "Maret 2024",
          image: require("~/assets/img/Dasar-web.png"),
          link: "https://www.dicoding.com/certificates/N9ZOORLE8ZG5"
        }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true
    }, 1000)
  }
}
</script>
