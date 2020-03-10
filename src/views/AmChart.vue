<template>

    <div>
      <apexchart width="500" type="radar" :options="options" :series="series"></apexchart>
    </div>

</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
    components: {
        'apexchart': VueApexCharts,
    },
    data(){
        return {
            options: {
              
              chart: {
                id: 'vuechart-example'
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
              },
              zoom:{
                  enabled: true,
              }
            },
           series: [
      {
        name: "Radar Series 1",
        data: [45, 52, 38, 24, 33, 10]
      },
      {
        name: "Radar Series 2",
        data: [26, 21, 20, 6, 8, 15]
      }
    ],
    labels: ['April', 'May', 'June', 'July', 'August', 'September']
        }
    }

}
</script>

<style>

</style>