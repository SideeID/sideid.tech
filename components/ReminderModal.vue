<template>
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur">
    <div class="flex flex-col items-center p-6 text-white bg-gray-900 rounded-md shadow-lg bg-opacity-80 modal-content">
      <h2 class="mb-4 text-lg font-bold text-center">REMINDER</h2>
      <p class="mb-4 text-center">
        Selamat datang di web portofolio saya. Website ini masih dalam tahap pengembangan, jadi mungkin ada beberapa fitur yang belum berjalan dengan sempurna. Terima kasih atas kunjungannya!
      </p>
      <label class="flex items-center mb-4">
        <input v-model="dontShowAgain" type="checkbox" class="mr-2">
        Don't show again
      </label>
      <button class="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
      dontShowAgain: false
    };
  },
  mounted() {
    const dontShow = localStorage.getItem('dontShowReminder');
    if (dontShow) {
      this.showModal = false;
    }
  },
  methods: {
    closeModal() {
      if (this.dontShowAgain) {
        localStorage.setItem('dontShowReminder', 'true');
      }
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.fixed {
  position: fixed;
}
.inset-0 {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.bg-gray-800 {
  background-color: #2d3748;
}
.bg-opacity-75 {
  background-color: rgba(45, 55, 72, 0.75);
}
.backdrop-blur {
  backdrop-filter: blur(10px);
}
.bg-gray-900 {
  background-color: #1a202c;
}
.text-white {
  color: #ffffff;
}
.p-6 {
  padding: 1.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.text-lg {
  font-size: 1.125rem;
}
.font-bold {
  font-weight: 700;
}
.mb-4 {
  margin-bottom: 1rem;
}
.bg-gray-700 {
  background-color: #4a5568;
}
.hover\:bg-gray-600:hover {
  background-color: #718096;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.rounded {
  border-radius: 0.25rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.modal-content {
  width: 50%;
  background-color: rgba(26, 32, 44, 0.8);
}
</style>
