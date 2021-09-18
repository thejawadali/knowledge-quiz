<script lang="ts" setup>
import { onMounted, ref } from "vue-demi";
import { questionStore } from "../store/questions";

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
  <h3>{{ categorySelected }}</h3>
</template>
