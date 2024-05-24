<template>
  <div>
    <div class="max-w-3xl px-8 mx-auto mt-24">
      <div>
        <img
          src="~/assets/img/avatar.png"
          alt="I'm a SideID!"
          class="inline w-32 h-32 rounded-3xl avatar"
        />
      </div>

      <About />
      <Divider />
      <Projects />
      <Divider />
      <!-- <Donations />
      <Divider /> -->
      <Contact />
      <Divider />

      <div class="mb-8 text-center copyright">
        &copy; {{ new Date().getFullYear() }} Side ID |
        <a
          href="https://github.com/SideeID"
          target="_blank"
          class="hover:underline"
          >Built with NuxtJS & TailwindCSS</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
Donations
