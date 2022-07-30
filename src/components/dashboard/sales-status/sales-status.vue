<template>
  <div class="col-sm-12">
    <px-card title="Sales Status">
      <div class="card-body">
        <div class="row">
          <!-- Order chart -->
          <orderChart></orderChart>
          <!-- location chart -->
          <location-chart></location-chart>
          <!-- revenue chart -->
          <revenueChart></revenueChart>
        </div>
      </div>
    </px-card>
  </div>
</template>

<script>
import orderChart from "./charts/order-chart.vue";
import locationChart from "./charts/location-chart.vue";
import revenueChart from "./charts/revenue-chart.vue";

export default {
  components: {
    orderChart,
    locationChart,
    revenueChart
  },
  data() {
    return {};
  }
};
</script>

<style>

</style>