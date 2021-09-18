<script lang="ts" setup>
const categorySelected = localStorage.getItem("selected-category");
</script>

<template>
  <h3>{{ categorySelected }}</h3>
</template>
