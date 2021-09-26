<template>
  <div class="MenuContentCarouselWrap">
    <div
      id="MenuContentCarousel"
      class="MenuContentCarousel nk-carousel"
      data-dots="true"
    >
      <div class="nk-carousel-inner">
        <div class="carousel__item">
          <img
            class="carousel__itemPic"
            src="/img/menu/set1/P1.jpg"
          >
        </div>
        <div class="carousel__item">
          <img
            class="carousel__itemPic"
            src="/img/menu/set1/P2.jpg"
          >
        </div>
        <div class="carousel__item">
          <img
            class="carousel__itemPic"
            src="/img/menu/set1/P3.jpg"
          >
        </div>
        <div class="carousel__item">
          <img
            class="carousel__itemPic"
            src="/img/menu/set1/P1.jpg"
          >
        </div>
        <div class="carousel__item">
          <img
            class="carousel__itemPic"
            src="/img/menu/set1/P2.jpg"
          >
        </div>
        <div class="carousel__item">
          <img
            class="carousel__itemPic"
            src="/img/menu/set1/P3.jpg"
          >
        </div>
      </div>
      <div class="nk-carousel-prev">
      </div>
      <div class="nk-carousel-next">
      </div>
    </div>
  </div>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'IndexMenuCarousel',
  setup (props, context) {
  }
}
</script>

<style lang="scss">
.MenuContentCarousel {
  &Wrap {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 100px;
  }

  .nk-carousel-inner {
    width: 100%;
    height: 1150px;
  }

  .flickity-page-dots {
    bottom: 0;

    .dot {
      width: 15px;
      height: 15px;
      margin-top: 10px;
      background: #142638;
      opacity: 1;

      &.is-selected {
        background: #951e23;
        transform: scale(1);
      }
    }
  }

  .carousel__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 620px;
    height: 1100px;
    transition: transform .2s;
    transform: scale(1);
  }

  .is-selected {
    z-index: 1;
    transform: scale(1.2);

    .carousel__itemPic {
      opacity: 1;
    }
  }

  .carousel__itemPic {
    width: auto;
    height: 900px;
    opacity: .85;
    transition: all .5s;
  }

  @include screen(xxl) {
    .nk-carousel-inner {
      height: 1150px;
    }
  }
  @include screen(xl) {
    outline: 1px solid red;

    &Wrap {
      padding: 0;
    }

    .nk-carousel-inner {
      height: 650px;
    }

    .flickity-page-dots {
      .dot {
        width: 10px;
        height: 10px;
      }
    }

    .carousel__item {
      width: 410px;
      height: 600px;
      overflow: hidden;
    }

    .is-selected {
      transform: scale(1);
    }

    .carousel__itemPic {
      display: block;
      width: auto;
      height: 100%;
      margin: 0 auto;
    }
  }
  @include screen(lg) {
    .nk-carousel-inner {
      height: 650px;
    }

    .flickity-page-dots {
      .dot {
        width: 10px;
        height: 10px;
      }
    }
  }
  @include screen(md) {
    outline: 1px solid rgb(35, 156, 51);

    .nk-carousel-inner {
      height: 500px;
    }

    .carousel__item {
      width: 320px;
      height: 460px;
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
