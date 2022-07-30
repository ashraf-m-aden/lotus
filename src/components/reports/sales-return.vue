<template>
  <div class="col-sm-12">
    <px-card title="Sales Purchase/ Return">
      <div class="card-body report-sale">
        <apexchart
          type="line"
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
          name: "",
          data: [60, 10, 40, 30, 80, 30, 20, 90,0]
        },
        {
          name: "",
          data: [20, 40, 20, 50, 20, 60, 10,40,20]
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
        colors: [ "#A5A5A5", "#F98085"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "straight",
        dashArray: [0, 0, 0]
        },
        title: {
          show: false
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
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ["10", "20", "30", "40 ", "50 ", "60", "70", "80"]
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
              top: -23,
              right: 0,
          },  
        },
      }
    };
  }
};
</script>