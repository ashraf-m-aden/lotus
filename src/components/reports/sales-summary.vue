<template>
  <div class="col-xl-8 col-md-6">
    <px-card title="Sales Summary">
      <div class="card-body sell-graph">
        <apexchart
          type="line"
          height="320"
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
          name: "",
          data: [10, 50, 0, 80, 10, 70]
        },
        {
          name: "",
          data: [20, 40, 15, 70, 30, 27]
        },
        {
          name: "",
          data: [5, 30, 20, 40 , 50, 20]
        }
      ],
      chartOptions: {
        chart: {
          height: 200,
          type: "line",
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }     
        },
        colors: ["#38C9CA", "#A5A5A5", "#F98085"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "smooth",
          dashArray: [0, 0, 0]
        },
        title: {
          show: true
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
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
            sizeOffset: 8
          }
        },
        xaxis: {
          categories: [
            "1 min",
            "10 min",
            "20 min",
            "30 min",
            "40 min",
            "50 min"
          ]
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function(val) {
                  return val;
                }
              }
            },
            {
              title: {
                formatter: function(val) {
                  return val;
                }
              }
            },
            {
              title: {
                formatter: function(val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: "#f1f1f1",
          padding: {
            top: -20,
            right: 0,
            bottom: 0,
            left: 0
          }, 
        }
      }
    };
  }
};
</script>

<style>

</style>