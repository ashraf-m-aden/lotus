/* eslint-disable no-unused-vars */
<template>
  <div class="col-md-12">
    <px-card title="Frequence d'accouchement" class="order-graph sales-carousel">
      <div class="card-body">
        <div class="buy-chart">
          <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
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
          name: "Garcon",
          data: [30, 5, 80, 10, 100, 10]
        },

        {
          name: "Fille",
          data: [0, 30, 40, 10, 86, 40]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ["#38C9CA", "#F98085"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "smooth",
          dashArray: [0, 0, 0]
        },
        title: {
          show: false
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Fev",
            "Mars",
            "Avril",
            "Mai",
            "Juin"
          ]
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: "#f1f1f1"
        }
      }
    };
  }
};
</script>

<style>

</style>