<!-- pages/work/_slug.vue -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div v-if="project" class="space-y-8">
      <!-- Header -->
      <div class="flex items-center space-x-4">
        <img
          :src="project.icon.startsWith('https') ? project.icon : require(`@/assets/img/${project.icon}`)"
          :alt="project.name"
          class="w-16 h-16 object-contain"
        />
        <div>
          <h1 class="text-3xl font-bold">{{ project.name }}</h1>
          <p class="text-gray-600 dark:text-gray-400">{{ project.year }}</p>
        </div>
      </div>

      <!-- Description -->
      <div class="prose dark:prose-invert max-w-none">
        <p>{{ project.details.fullDescription || project.description }}</p>
      </div>

      <!-- Tech Stack -->
      <div>
        <h2 class="text-2xl font-bold mb-4">Tech Stack</h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.details.techStack"
            :key="tech"
            class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Screenshots -->
      <div v-if="project.details.screenshots && project.details.screenshots.length">
        <h2 class="text-2xl font-bold mb-4">Screenshots</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            v-for="(screenshot, index) in project.details.screenshots"
            :key="index"
            :src="screenshot"
            :alt="`${project.name} screenshot ${index + 1}`"
            class="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <!-- Features -->
      <div v-if="project.details.features && project.details.features.length">
        <h2 class="text-2xl font-bold mb-4">Features</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li v-for="feature in project.details.features" :key="feature">
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Challenges & Solutions -->
      <div v-if="project.details.challenges">
        <h2 class="text-2xl font-bold mb-4">Challenges & Solutions</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-xl font-semibold mb-2">Challenges</h3>
            <p>{{ project.details.challenges }}</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-2">Solutions</h3>
            <p>{{ project.details.solutions }}</p>
          </div>
        </div>
      </div>

      <!-- Back Button -->
      <div class="mt-8">
        <NuxtLink to="/" class="text-blue-500 hover:text-blue-600 transition-colors duration-300">
          &larr; Back to Projects
        </NuxtLink>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="text-center py-8">
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, error }) {
    try {
      const project = await $axios.$get(`/api/projects/${params.slug}`);
      return { project };
    } catch (e) {
      error({ statusCode: 404, message: 'Project not found' });
    }
  },

  head() {
    if (!this.project) return {};

    return {
      title: `${this.project.name} - Portfolio Project`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description
        }
      ]
    };
  }
};
</script>
