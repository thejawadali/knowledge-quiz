<script lang="ts" setup>
import { computed, onMounted, ref } from "vue-demi";
import { questionStore } from "../store/questions";
const question_store = questionStore();

const categories = computed(() => question_store.categories);

onMounted(() => {
  question_store.fetchQuestions();
});
</script>


<template>
  <div
    class="w-full h-full flex justify-center items-center bg-primary rounded-lg"
  >
    <div class="h-full w-4/5 flex flex-col items-center justify-evenly">
      <!-- heading -->
      <h1 class="text-7xl font-bold font-gluten text-dark">Quiz</h1>
      <div v-if="categories.length > 0">
        <h1 class="m-1 text-lg text-gray-600 font-semibold">Select Category</h1>
        <ul
          class="
            flex flex-col
            divide divide-y
            bg-white
            shadow-lg shadow-dark
            rounded-lg
            max-h-96
            overflow-y-scroll
          "
        >
          <li class="w-56 py-3 px-4 hover:bg-gray-50 cursor-pointer">Random</li>
          <li
            class="w-56 py-3 px-4 hover:bg-gray-50 cursor-pointer"
            v-for="i in categories"
            :key="i"
          >
            {{ i }}
          </li>
        </ul>
      </div>
      <button
        class="
          bg-dark
          text-primary
          font-mono
          text-xl
          px-3
          py-2
          rounded-md
          hover:shadow-lg
        "
      >
        Start Quiz
      </button>
    </div>
  </div>
</template>
<!-- font-family: 'Gluten', cursive; -->