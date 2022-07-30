<template>
  <div class="col-xl-6 xl-100">
    <div class="order-graph xl-space">
      <h6>Revenue for last month</h6>
      <div class="ct-4 flot-chart-container">
        <apexchart
          type="area"
          height="400"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "STOCK ABC",
          data: [5, 9, 7, 8, 5, 3, 5, 4]
        }
      ],
      chartOptions: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          } 
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        colors:["#F98085"],
        title: {
          show: false
        },
        subtitle: {
          show: false
        },
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        xaxis: {},
        yaxis: {
          opposite: false
        },
        legend: {
          show: true
        }
      }
    };
  }
};
</script>

<style>

</style>