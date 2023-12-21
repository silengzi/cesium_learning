<template>
  <div id="cesium_map">
  </div>
</template>

<script>
import {initCesiumMap} from "../../utils/cesium/cesium"
export default {
  name: 'Init',
  mounted() {
    initCesiumMap('cesium_map')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #cesium_map {
    width: 100%;
    height: 100%;
  }
</style>
