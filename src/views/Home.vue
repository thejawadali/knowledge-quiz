<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue-demi";
import { questionStore } from "../store/questions";
const question_store = questionStore();

const categories = computed(() => question_store.categories);
const categorySelected = ref("");

onMounted(() => {
  localStorage.clear();
  question_store.fetchCategories();
});

function selectCategory(category: string) {
  localStorage.clear();
  localStorage.setItem("selected-category", category);
  categorySelected.value = category;
}
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
          <li
            :class="{ 'text-white bg-dark': categorySelected === '' }"
            @click="selectCategory('')"
            class="w-56 py-3 px-4 cursor-pointer"
          >
            Random
          </li>
          <li
            v-for="i in categories"
            :key="i"
            @click="selectCategory(i)"
            :class="{ 'text-white bg-dark': categorySelected === i }"
            class="w-56 py-3 px-4 hover:bg-dark hover:text-white cursor-pointer"
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
        @click="$router.push('/main')"
      >
        Start Quiz
      </button>
    </div>
  </div>
</template>