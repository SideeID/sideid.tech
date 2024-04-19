<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Contact</h1>
    <p class="mt-4">
      Feel free to reach out to me! I check Discord most often, but any contact
      method below works.
    </p>
    <div class="flex flex-col md:flex-row justify-center">
      <a
        href="https://discord.gg/2a2WUj2V"
        target="_blank"
        class="bg-indigo-500 bg-opacity-30 flex-1 md:mr-4 px-8 mt-6 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fab', 'discord']" /> @sideid
      </a>
      <a
        href="https://www.instagram.com/side__id/"
        target="_blank"
        class="bg-blue-500 bg-opacity-30 flex-1 md:ml-4 mt-6 px-8 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" /> @side__id
      </a>
    </div>
    <div class="flex flex-col md:flex-row justify-center">
      <a
        href="mailto:anjaymabar"
        target="_blank"
        class="bg-yellow-500 bg-opacity-30 flex-1 md:mr-4 px-8 mt-6 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fa', 'envelope']" /> anjaymabar@gmail.com
      </a>
      <a
        href="https://github.com/SideeID"
        target="_blank"
        class="bg-purple-500 bg-opacity-30 flex-1 md:ml-4 mt-6 px-8 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fab', 'github']" /> SideeID
      </a>
    </div>
  </div>
</template>
