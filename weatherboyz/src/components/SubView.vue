<template>
  <div class="rightContainer">
    <div id="cityNameBox">
      <div class="cityName">
        <p>Seoul</p>
        <p>May 14, 2024</p>
      </div>
    </div>
    <div id="contentsBox">
      <div class="buttonBox">
        <div class="buttonBackground">
          <button class="forecast">forecast</button>
          <button class="airQuality">airQuality</button>
        </div>
      </div>
      <div class="weatherBox">
        <div class="airCondition">
          <p>매우 추움</p>
        </div>
        <div class="detail">
          <div class="title">
            <p>Detail Temporatures</p>
          </div>
          <div class="data">
            <div class="dataName">
              <p></p>
              <p></p>
            </div>
            <div class="dataValue">
              <p>
                <span></span> &deg;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Map/>
    <nav>
      <i class="fas fa-home"></i>
      <i class="fas fa-search-location"></i>
      <i class="fas fa-chart-line"></i>
      <i class="fas fa-cog"></i>
    </nav>
  </div>
</template>

<script>
export default {
  components : {
    Map
  }
} 

</script>

<style lang="scss" scoped>

</style>
