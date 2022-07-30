<template>
  <div class="col-xl-4 col-md-6">
    <px-card class="report-employee o-hidden">
      <div class="card-header">
        <h2>75%</h2>
        <h6>Employee satisfied</h6>
      </div>
      <div class="card-body p-0">
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
  data() {
    return {
      series: [
        {
          name: "STOCK ABC",
          data: [5, 9, 7, 8, 5, 3, 5]
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
         toolbar: {
            show: false
          } ,
        stroke: {
          curve: "smooth"
        },
        colors: ["#F98085"],
        title: {
          show: false
        },
        subtitle: {
          show: false
        },
        labels: ["0", "1", "2", "3", "4", "5", "6"],
        xaxis: {
            show: false,
            labels: {
              show: false,
            },
            axisBorder: {
                show: false,
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: false,
                offsetX: 0,
                offsetY: 0
            },
            tooltip: {
                enabled: false,
                offsetY: 0,
            },
        },
        yaxis: {
          opposite: false,
          labels: {
              show: false,
            },
            axisBorder: {
                show: false,
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: false,
                offsetX: 0,
                offsetY: 0
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
            },    
            padding: {
                top: 0,
                right: 0,
                bottom: -20,
                left: -20
            },  
        },
        legend: {
          show: false
        }
      }
    };
  }
};
</script>