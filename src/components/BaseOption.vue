<script lang="ts" setup>
const props = defineProps({
  correct: {
    type: Boolean,
  },
});
</script>


<template>
  <div
    :class="[correct ? 'active:bg-green-500' : 'active:bg-red-500']"
    class="
      flex
      items-center
      bg-white
      cursor-pointer
      p-5
      w-72
      sm:w-96
      h-12
      sm:h-16
      overflow-hidden
      rounded-xl
      shadow-lg
      hover:bg-secondary
      group
    "
  >
    <div>
      <div
        class="
          bg-primary
          w-7
          h-7
          text-dark
          font-bold
          flex
          shadow-md
          justify-center
          items-center
          rounded-full
          group-hover:text-white group-hover:bg-dark
        "
      >
        <slot></slot>
      </div>
    </div>
    <p class="ml-3 text-dark text-sm group-hover:text-white">
      <slot name="title"></slot>
    </p>
  </div>
</template>

