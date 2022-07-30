<template>
  <div class="row">
    <salesChart></salesChart>
    <purchaseChart></purchaseChart>
    <transactionChart></transactionChart>
    <depositeChart></depositeChart>
  </div>
</template>

<script>
import salesChart from "./charts/sales-chart.vue";
import purchaseChart from "./charts/purchase-chart.vue";
import transactionChart from "./charts/transaction-chart.vue";
import depositeChart from "./charts/deposite-chart.vue";

export default {
  components: {
    salesChart,
    purchaseChart,
    transactionChart,
    depositeChart
  },
  data() {
    return {};
  }
};
</script>

<style>

</style>