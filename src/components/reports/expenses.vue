<template>
  <div class="col-lg-6">
    <px-card title="Expenses">
      <div class="card-body expense-chart">
        <apexchart
          type="area"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </px-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      series: [
        {
          name: "Sales",
          data: [1000, 1170, 660, 1030]
        },
        {
          name: "Expenses",
          data: [300, 400, 1000, 500]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          width: 2
        },
        colors: ["#F98C91","#A7A7A7"],
        xaxis: {
          categories: ["2013", "2014", "2015", "2016"]
        },
        grid: {
            padding: {
                top: -23,
                right: 0,
            },  
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      }
    };
  }
};
</script>