<template>
  <div class="col-lg-6">
    <px-card title="Sales / purchase">
      <div class="card-body sales-chart">
        <apexchart
          type="bar"
          height="360"
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

  created() {},
  computed: {},
  props: {
    setting: String,
    data: String,
    options: String
  },
  data() {
    return {
      series: [
        {
          name: "Net Profit",
          data: [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
        },
        {
          name: "Revenue",
          data: [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8]
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 400,
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          width: 1,
          colors: ["#A7A7A7", "#F98C91"]
        },
        xaxis: {
          categories: ["100", "200", "300", "400", "500", "600", "700", "800"]
        },
        yaxis: {
          title: {
            text: ""
          }
        },
        fill: {
          opacity: 2,
          colors: ["#F98C91", "#A7A7A7"]
        },
        legend: {
          show: false
        },
        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: "32%",
            distributed: false
          }
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        },
        grid: {
            padding: {
                top: -23,
                right: 0,
            },  
        },
      }
    };
  },
  methods: {
    onChartReady(chart, google) {
      this.chartsLib = google;
    }
  }
};
</script>