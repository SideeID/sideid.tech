<template>
  <div>
    <ReminderModal />
    <div class="max-w-3xl px-8 mx-auto mt-24">
      <div>
        <img
          src="~/assets/img/avatar.webp"
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
    <AIFloatingButton />
  </div>
</template>

<script>
import ReminderModal from '~/components/ReminderModal.vue';
import About from '~/components/About.vue';
import Divider from '~/components/Divider.vue';
import Projects from '~/components/Projects.vue';
import Contact from '~/components/Contact.vue';
import AIFloatingButton from '~/components/AIFloatingButton.vue';

export default {
  components: {
    ReminderModal,
    About,
    Divider,
    Projects,
    Contact,
    AIFloatingButton,
  },
};
</script>

<style>
/* Gaya tambahan jika diperlukan */
</style>
