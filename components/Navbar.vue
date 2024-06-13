<template>
  <div class="mx-5 my-4">
    <div class="flex flex-row">
      <div class="select-none">
        <h1 class="flex items-center">
          <img
            src="~/assets/img/avatar.webp"
            class="inline w-10 h-10 rounded-lg avatar"
            alt="Avatar"
            @click="toggleFurry"
          />
          <span class="ml-2 text-lg font-bold">SideID</span>
        </h1>
      </div>

      <div class="ml-auto">
        <ThemeSwitcher />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleFurry() {
      const avatars = document.getElementsByClassName('avatar')
      for (const a of avatars) {
        a.src = a.src.includes('redpanda')
          ? require('~/assets/img/avatar.webp')
          : '/redpanda.jpg'
      }

      const favicon = document.querySelectorAll('[rel="icon"]')[0]
      favicon.href = favicon.href.includes('favicon')
        ? '/redpanda.jpg'
        : '/favicon.png'
    },
  },
}
</script>
