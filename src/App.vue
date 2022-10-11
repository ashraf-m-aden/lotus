<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>

</style>

<script>
export default {
  async beforeCreate() {
    await this.$store.dispatch('checkAuth')
      ;
  },
}
</script>
