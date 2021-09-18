<script lang="ts" setup>
const categorySelected = localStorage.getItem("selected-category") || "random";
</script>

<template>
  <h3>{{ categorySelected }}</h3>
</template>
