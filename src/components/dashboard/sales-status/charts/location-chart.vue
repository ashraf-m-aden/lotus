<template>
  <div class="col-xl-3 col-sm-6 xl-50">
    <div class="order-graph sm-order-space">
      <h6>Sales By Location</h6>
      <apexchart
        type="pie"
        height="220"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <div class="order-graph-bottom sales-location">
        <div class="media">
          <div class="order-shape-primary"></div>
          <div class="media-body">
            <h6 class="mb-0 mr-0">
              Germany
               <span class="pull-right">25%</span>
            </h6>
          </div>
         
        </div>
        <div class="media">
          <div class="order-shape-secondary"></div>
          <div class="media-body">
            <h6 class="mb-0 mr-0">
              Brasil
              <span class="pull-right">10%</span>
            </h6>
          </div>
          
        </div>
        <div class="media">
          <div class="order-shape-danger"></div>
          <div class="media-body">
            <h6 class="mb-0 mr-0">
              United Kingdom
              <span class="pull-right">34%</span>
            </h6>
          </div>
        </div>
        <div class="media">
          <div class="order-shape-warning"></div>
          <div class="media-body">
            <h6 class="mb-0 mr-0">
              Australia
              <span class="pull-right">5%</span>
            </h6>
          </div>
          
        </div>
        <div class="media">
          <div class="order-shape-success"></div>
          <div class="media-body">
            <h6 class="mb-0 mr-0">
              Canada
              <span class="pull-right">25%</span>
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
      series: [25, 25, 50, 50],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
          toolbar: {
            show: false
          }
        },
        colors: ["#F98085", "#39CCCD", "#A5A5A5", "#FBBC58"],
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              }
            }
          }
        ],
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        }
      }
    };
  }
};
</script>

<style>

</style>