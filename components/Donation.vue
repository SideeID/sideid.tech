<template>
  <a
    :href="link"
    target="_blank"
    class="flex-1 p-2 my-1 duration-300 ease-in-out transform rounded-md bg-opacity-30"
    :class="`bg-${color}`"
  >
    <div class="flex flex-row items-center">
      <div class="ml-4 text-xl font-bold">${{ amount }}</div>
      <img
        :src="
          logo
            ? logo.startsWith('https')
              ? logo
              : require(`@/assets/img/${logo}`)
            : null
        "
        class="object-contain w-6 h-6 ml-4"
      />
      <div class="flex flex-col ml-2 sm:flex-row">
        <div class="font-bold">{{ name }}</div>
        <div class="hidden mx-2 sm:block">-</div>
        <div class="hidden sm:block">{{ info }}</div>
      </div>
      <div class="flex flex-row ml-auto mr-1">
        <div>[{{ date }}]</div>
        <div class="hidden ml-3 sm:block">
          <font-awesome-icon :icon="['fas', 'external-link-alt']" />
        </div>
      </div>
    </div>
  </a>
</template >

<script>
export default {
  props: {
    logo: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    amount: {
      type: Number,
      default: 0,
    },
    link: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: null,
    },
    info: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'white',
    },
  },
}
</script>
