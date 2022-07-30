<template>
  <div class="col-xl-3 col-sm-6 xl-50">
    <div class="order-graph">
      <h6>Orders By Location</h6>
      <!-- order chart -->
      <apexchart
        type="donut"
        :options="chartOptions"
        height="220"
        :series="series"
      ></apexchart>
      <div class="order-graph-bottom">
        <div class="media">
          <div class="order-color-primary"></div>
          <div class="media-body">
            <h6 class="mb-0">
              Saint Lucia
              <span class="pull-right">$157</span>
            </h6>
          </div>
          
        </div>
        <div class="media">
          <div class="order-color-secondary"></div>
          <div class="media-body">
            <h6 class="mb-0">Kenya
              <span class="pull-right">$347</span>
            </h6>
          </div>
          
        </div>
        <div class="media">
          <div class="order-color-danger"></div>
          <div class="media-body">
            <h6 class="mb-0">Liberia
              <span class="pull-right">$468</span>
            </h6>
          </div>
          
        </div>
        <div class="media">
          <div class="order-color-warning"></div>
          <div class="media-body">
            <h6 class="mb-0">
              Christmas Island
               <span class="pull-right">$742</span>
            </h6>
          </div>
         
        </div>
        <div class="media">
          <div class="order-color-success"></div>
          <div class="media-body">
            <h6 class="mb-0">
              Saint Helena
              <span class="pull-right">$647</span>
            </h6>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      series: [300, 50, 100],
      chartOptions: {
        chart: {
          type: "donut"
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          pie: {
            donut: {
              size: "50%"
            }
          }
        },
        colors: ["#F98085", "#39CCCD", "#A5A5A5"],
        responsive: [
          {
            breakpoint: 400,
            options: {
              chart: {
                width: 180
              },
              legend: {
                show: false
              }
            }
          }
        ],
        legend: {
          show: false
        }
      }
    };
  }
};
</script>

<style>

</style>