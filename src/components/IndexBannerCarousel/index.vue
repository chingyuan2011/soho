<template>
  <div
    id="IndexBannerCarousel"
    class="IndexBannerCarousel nk-carousel"
    data-autoplay="8000"
  >
    <div class="nk-carousel-inner">
      <div class="carousel__item">
        <div
          class="carousel__itemImg"
          style="background-image: url('/img/index/banner1.jpg');"
        ></div>
      </div>
      <div class="carousel__item">
        <div
          class="carousel__itemImg"
          style="background-image: url('/img/index/banner2.jpg');"
        ></div>
      </div>
      <div class="carousel__item">
        <div
          class="carousel__itemImg"
          style="background-image: url('/img/index/banner3.jpg');"
        ></div>
      </div>
    </div>
    <div class="nk-carousel-prev">
    </div>
    <div class="nk-carousel-next">
    </div>
  </div>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'IndexBannerCarousel',
  setup (props, context) {
  }
}
</script>

<style lang="scss">
.IndexBannerCarousel {
  .nk-carousel-inner {
    width: 100%;
  }

  .flickity-slider {
    width: 100%;
  }

  .carousel__item {
    width: 100%;

    &Img {
      padding-bottom: 50%;
      background-position: center;
      background-size: cover;
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
