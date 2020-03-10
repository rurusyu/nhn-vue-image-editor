<template>
  <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="40"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
            :cols="4"
    >
        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
                <am-chart></am-chart>
        </grid-item>
        <grid-item >
                <chart></chart>
        </grid-item>
        
    </grid-layout>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import AmChart from '@/views/AmChart.vue';
import Chart from '@/views/Chart.vue';

var testLayout = [
	    {"x":0,"y":0,"w":2,"h":2,"i":"0"},
	];
    
export default {
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,
        AmChart,
        Chart,
         
    },

    data(){
        return {
            layout: testLayout,
        }
    },
    beforeUpdate(){
        console.log('layout', this.layout);
    }

}
</script>

<style>
.item{
    border: 1px solid red;
}
</style>