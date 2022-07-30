<template>
  <div class="col-xl-6 xl-100">
    <px-card title="Market Value">
      <div class="card-body">
        <apexchart
          type="bar"
          height="380"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </px-card>
  </div>
</template>
<script>
export default {
  name: "columnchart-component",
  props: {
    setting: String,
    data: String,
    options: String
  },

  components: {},
  created() {},
  computed: {},
  data() {
    return {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
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
        }
      }
    };
  },
  methods: {}
};
</script>

<style>

</style>