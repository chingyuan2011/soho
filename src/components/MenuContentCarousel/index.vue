<template>
  <div class="MenuContentCarouselWrap">
    <Modal
      id="Modal"
      class="MenuContentCarousel__popUp"
    >
    </Modal>
    <div
      id="MenuContentCarousel"
      class="MenuContentCarousel nk-carousel"
      data-dots="true"
    >
      <div class="nk-carousel-inner">
        <div
          class="carousel__item"
        >
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
import Modal from '@/components/Modal'

export default {
  name: 'MenuContentCarousel',
  components: {
    Modal
  },
  setup (props, context) {
  }
}
</script>

<style lang="scss">
.MenuContentCarousel {
  .nk-carousel-inner {
    width: 100%;
    height: 780px;
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
    width: 410px;
    height: 720px;
    cursor: pointer;
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
    height: 620px;
    opacity: .85;
    transition: all .5s;
  }

  @include screen(xl) {
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
    .flickity-page-dots {
      .dot {
        width: 10px;
        height: 10px;
      }
    }
  }
  @include screen(md) {
    .nk-carousel-inner {
      height: 500px;
    }

    .carousel__item {
      width: 320px;
      height: 460px;
    }
  }
}

.MenuContentCarouselWrap {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 100px;

  .Modal__contentWrap {
    height: 90%;
    max-height: 900px;
  }

  .Modal__content {
    width: 100%;
    height: 100%;
  }

  .Modal__popPic {
    max-width: initial;
    height: 100%;
  }

  .Modal__close {
    background-color: #fff;

    &::before,
    &::after {
      background-color: #142638;
    }
  }
  @include screen(xl) {
    padding: 0;
  }
  @include screen(md) {
    padding: 0;

    .Modal__contentWrap {
      height: auto;
    }

    .Modal__popPic {
      max-width: 280px;
      height: auto;
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
