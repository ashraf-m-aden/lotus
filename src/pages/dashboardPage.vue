<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="" title="Tableau de bord" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { employeeStore } from "@/store/employee";
import { userStore } from "@/store/user";
import { onMounted } from "vue";
const store = userStore();
const storeEmployee = employeeStore();
onMounted(() => {
  storeEmployee.employee;
});
</script>
