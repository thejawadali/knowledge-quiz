<script lang="ts" setup>
import { computed, onMounted, ref } from "vue-demi";
import { questionStore } from "../store/questions";
import BaseOption from "../components/BaseOption.vue";
import { random } from "lodash";
import { reloadBrowser } from "../logic/utils";

const question_store = questionStore();
const optionsTexts = ["A", "B", "C", "D"];
const currentQuestion = ref({} as any);
const allQuestions = ref([] as any);
const askedQuestions = ref([] as string[]);
const questionsEnded = ref(false);
const correctAnswers = ref(0);
const progressValue = ref(0);

function loadQuestion() {
  // only load new question if current question <= 10
  if (askedQuestions.value.length >= 10) {
    questionsEnded.value = true;
    return;
  }
  // get any random question
  const newQuestion = allQuestions.value[random(0, allQuestions.value.length)];
  // load unique questions
  if (
    askedQuestions.value.find((q: string) => q === newQuestion._id.toString())
  ) {
    loadQuestion();
    return;
  }
  currentQuestion.value = newQuestion;
  // add that question to asked questions so that, that question never occur again
  askedQuestions.value.push(newQuestion._id);
}

function submitAns(answer: any) {
  // on every submission, increment progress value
  progressValue.value += 10;
  // on every correct answer, increment score
  if (answer.isCorrect) {
    correctAnswers.value++;
  }
  // wait of 30ms and load next question
  setTimeout(() => {
    loadQuestion();
  }, 30);
}

// replay
function playAgain() {
  reloadBrowser();
}

onMounted(() => {
  question_store.fetchQuestions((obj: any) => {
    allQuestions.value = obj;
    loadQuestion();
  });
});
</script>

<template>
  <div class="bg-primary h-full w-full rounded-lg overflow-hidden">
    <!-- loader -->
    <div class="w-full bg-gray-50">
      <div
        class="h-3 text-center text-xs text-white bg-dark"
        :style="{ width: `${progressValue}%` }"
      />
    </div>

    <!-- main -->
    <div class="w-full h-full flex justify-center py-6 sm:items-center">
      <div class="w-full sm:my-6 flex flex-col items-center">
        <!-- Counter -->
        <p class="text-dark font-normal text-xs sm:text-sm font-mono">
          Questions {{ askedQuestions.length }}/10
        </p>
        <!-- question -->
        <p
          class="
            text-dark
            font-extrabold
            text-sm
            sm:text-xl text-center
            uppercase
            font-mono
            px-2
            sm:px-20
            sm:tracking-wider
            my-3
          "
        >
          {{ currentQuestion.question }}
        </p>
        <div class="h-2 w-full shadow-inner shadow-dark" />
        <!-- options -->
        <div class="my-12 h-full">
          <div
            v-for="(ans, i) in currentQuestion.answers"
            :key="ans"
            class="my-3 sm:my-5"
            @click="submitAns(ans)"
          >
            <base-option :correct="ans.isCorrect">
              {{ optionsTexts[i] }}
              <template #title>{{ ans.answerText }}</template>
            </base-option>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Result -->
  <div
    v-if="questionsEnded"
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <!-- Overlay -->
    <div class="absolute w-full h-full bg-black opacity-80" />
    <!-- Here starts the actual modal -->
    <div
      class="
        bg-white
        w-11/12
        md:w-7/12
        mx-auto
        rounded-md
        shadow-lg
        z-50
        overflow-y-auto
      "
    >
      <div class="modal-content text-left">
        <div
          class="flex justify-center items-center p-5 border-b border-gray-300"
        >
          <h1 class="text-2xl font-bold">Result</h1>
        </div>

        <div class="w-full flex flex-col px-5 border-b border-gray-300 py-10">
          <h1 class="text-lg font-bold">Your results are here</h1>
          <div class="flex justify-between mt-2">
            <p>Correct Answers</p>
            <h2 class="font-bold text-dark">{{ correctAnswers }} / 10</h2>
          </div>
          <div class="flex justify-between mt-2">
            <p>Wrong Answers</p>
            <h2 class="font-bold text-dark">{{ 10 - correctAnswers }} / 10</h2>
          </div>
        </div>

        <div class="flex justify-end">
          <div class="py-4 sm:px-4">
            <button
              class="
                px-4
                py-2
                mx-4
                rounded-lg
                focus:outline-none
                text-dark
                hover:bg-primary
              "
              @click="$router.push('/quiz/home')"
            >
              Go To Home
            </button>
            <button
              @click="playAgain"
              class="
                px-4
                bg-dark
                mx-4
                py-2
                rounded-lg
                focus:outline-none
                text-white
              "
            >
              Start Again
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
