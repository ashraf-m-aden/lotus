<template>
  <div>
    <feather
      v-if="field.item.status"
      type="circle"
      stroke="#FFFFFF"
      stroke-width="1"
      size="12px"
      fill="#81BA01"
      stroke-linejoin="round">
    </feather>
    <feather
      v-if="!field.item.status"
      type="circle"
      stroke="#FFFFFF"
      stroke-width="1"
      size="12px"
      fill="#FBBC58"
      stroke-linejoin="round">
    </feather>
  </div>
</template>

<script setup lang="ts">
export default {
  props: ["field"],
};
</script>
