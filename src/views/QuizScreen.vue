<script lang="ts" setup>
import { onMounted, ref } from "vue-demi";
import { questionStore } from "../store/questions";
import BaseOption from "../components/BaseOption.vue";

const question_store = questionStore();
const questions = ref([] as any);

onMounted(() => {
  question_store.fetchQuestions((obj: any) => {
    questions.value = obj;
    console.dir(questions.value);
  });
});

const categorySelected = localStorage.getItem("selected-category") || "random";
</script>

<template>
  <div class="bg-primary h-full w-full rounded-lg overflow-hidden">
    <!-- loader -->
    <div class="w-full h-3 bg-gray-50">
      <div class="w-4/5 h-full text-center text-xs text-white bg-dark"></div>
    </div>

    <!-- main -->
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-full my-6 flex flex-col items-center">
        <!-- Counter -->
        <p class="text-dark font-semibold text-sm font-mono">Questions 3/10</p>
        <!-- question -->
        <p
          class="
            text-dark
            font-semibold
            text-xl text-center
            uppercase
            font-mono
            px-20
            tracking-wider
            my-3
          "
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          optio illum expedita!
        </p>
        <div class="h-2 w-full shadow-inner shadow-dark" />
        <!-- options -->
        <div class="my-12 h-full">
          <div v-for="i in 4" :key="i" class="my-5">
            <base-option></base-option>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
