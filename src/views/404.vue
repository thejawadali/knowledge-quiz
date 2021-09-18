<template>
  <div
    class="
      bg-primary
      rounded-lg
      w-full
      h-full
      flex-col flex
      justify-center
      items-center
    "
  >
    <div class="flex">
      <img src="../assets/error-404.png" alt="" />
    </div>
    <button
      @click="$router.push('/home')"
      class="mt-10 bg-dark text-white px-3 py-2 rounded-md"
    >
      Back To Home
    </button>
  </div>
</template>
