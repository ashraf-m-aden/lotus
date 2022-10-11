<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>

</style>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch('checkAuth')
      ;
  },
}
</script>
