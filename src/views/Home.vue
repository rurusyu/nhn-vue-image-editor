<template>
  <div class="home">
    <div class="controls">
      <p>
        <button id="add" onclick="Add()">Add a rectangle</button>
      </p>
    </div>
    <canvas id="c" width="400" height="300" style="border:1px solid #ccc"></canvas>
  </div>
</template>

<script>

export default {
  name: "Home",

  mounted(){
    var vas = document.getElementById('c');
    var cntxt = vas.getContext('2d');
    cntxt.fillStyle = '#FF0000';
    cntxt.fillRect(10,10,80, 100);
  }

};
</script>
<style scoped lang="scss">
.controls {
  	display: inline-block;
  }
</style>