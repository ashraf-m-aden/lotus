<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style></style>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { authenticationStore } from "./store/authentication";
const store = authenticationStore();
onBeforeMount(() => {
  store.checkAuth;
});
</script>
