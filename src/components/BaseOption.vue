<script lang="ts" setup>
</script>


<template>
  <div
    class="
      flex
      items-center
      bg-white
      cursor-pointer
      p-5
      w-96
      h-16
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

