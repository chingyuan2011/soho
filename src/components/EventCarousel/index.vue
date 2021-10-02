<template>
  <div class="EventCarouselWrap">
    <Modal
      id="Modal"
      class="EventCarousel__popUp"
    >
    </Modal>
    <div
      id="EventCarousel"
      class="EventCarousel nk-carousel"
    >
      <div class="nk-carousel-inner">
        <div
          class="carousel__item"
          data-title="2020"
          data-title2="挽袖公益 熱血傳愛"
          data-url="/img/blood.jpg"
        >
          <div class="carousel__itemTitle">
            <div>2020</div>
            <div>挽袖公益 熱血傳愛</div>
          </div>
          <img
            class="carousel__itemPic"
            src="/img/blood.jpg"
            draggable="false"
          >
        </div>
        <div
          class="carousel__item"
          data-title="標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字"
          data-title2="標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字"
          data-url="/img/news1.jpg"
        >
          <div class="carousel__itemTitle">
            <div>標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字</div>
            <div>標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字</div>
          </div>
          <img
            class="carousel__itemPic"
            src="/img/news1.jpg"
            draggable="false"
          >
        </div>
        <div
          class="carousel__item"
          data-title="標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字"
          data-title2="標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字"
          data-url="/img/blood.jpg"
        >
          <div class="carousel__itemTitle">
            <div>標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字標題一超級多字</div>
            <div>標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字標題二超級多字</div>
          </div>
          <img
            class="carousel__itemPic"
            src="/img/blood.jpg"
            draggable="false"
          >
        </div>
        <div
          class="carousel__item"
          data-title="2020"
          data-title2="挽袖公益 熱血傳愛"
          data-url="/img/news2.jpg"
        >
          <div class="carousel__itemTitle">
            <div>2020</div>
            <div>挽袖公益 熱血傳愛</div>
          </div>
          <img
            class="carousel__itemPic"
            src="/img/news2.jpg"
            draggable="false"
          >
        </div>
        <div
          class="carousel__item"
          data-title="2020"
          data-title2="挽袖公益 熱血傳愛"
          data-url="/img/blood.jpg"
        >
          <div class="carousel__itemTitle">
            <div>2020</div>
            <div>挽袖公益 熱血傳愛</div>
          </div>
          <img
            class="carousel__itemPic"
            src="/img/blood.jpg"
            draggable="false"
          >
        </div>
        <div
          class="carousel__item"
          data-title="2020"
          data-title2="挽袖公益 熱血傳愛"
          data-url="/img/news3.jpg"
        >
          <div class="carousel__itemTitle">
            <div>2020</div>
            <div>挽袖公益 熱血傳愛</div>
          </div>
          <img
            class="carousel__itemPic"
            src="/img/news3.jpg"
            draggable="false"
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
  name: 'EventCarousel',
  components: {
    Modal
  },
  setup (props, context) {
  }
}
</script>

<style lang="scss">
.EventCarousel {
  .nk-carousel-inner {
    width: 100%;
    height: 210px;
  }

  .carousel__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 420px;
    height: 210px;
    cursor: pointer;
    transition: transform .2s;
    transform: scale(1);

    &:hover {
      .carousel__itemTitle {
        opacity: 1;
        transition: all .2s;

        div {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }
  }

  .carousel__itemTitle {
    position: absolute;
    top: 15px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    pointer-events: none;
    background-color: rgba(#951e23, .6);
    opacity: 0;
    transition: all .2s;

    >div {
      opacity: 0;
      transition: all .2s;
      transform: translateY(20px);
      @include text-overflow(1);
    }
  }

  .carousel__itemPic {
    position: absolute;
    display: block;
    width: 100%;
    height: auto;
  }

  @include screen(md) {
    .nk-carousel-inner {
      height: 150px;
    }

    .carousel__item {
      width: 250px;
      height: 150px;
    }

    .carousel__itemTitle {
      top: 10px;
      right: 10px;
      bottom: 10px;
      left: 10px;
      padding: 20px;
      font-size: 16px;
    }
  }
}

.EventCarouselWrap {
  max-width: 1920px;
  margin: 0 auto;

  .Modal__contentWrap {
    width: 90%;
    max-width: 600px;
    background-color: transparent;
  }

  .Modal__content {
  }

  .Modal__popTitle {
    position: absolute;
    bottom: calc(100% + 5px);
    width: 100%;
    padding-right: 20px;
    font-weight: bold;
    color: #142638;

    > div {
      @include text-overflow(1);
    }
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
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
