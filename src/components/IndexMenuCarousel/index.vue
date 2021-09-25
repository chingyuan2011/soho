<template>
  <div
    class="IndexMenuCarousel nk-carousel"
  >
    <div class="nk-carousel-inner">
      <div class="carousel__item">
        <img
          class="carousel__itemPic"
          src="/img/index/index_menu1.png"
        ><div class="carousel__itemContentWrap">
          <img
            class="carousel__itemLine"
            src="/img/index/index_menuDec.png"
          >
          <div class="carousel__itemTitle">
            松露牛排原塊松露牛排原塊松露牛排原塊松露牛排原塊松露牛排原塊
          </div>
          <div class="carousel__itemText">
            肩胛菲力牛排，吃起來嫩口多汁，而牛肉上有刷上一層淡淡的醬，但味道不重肩胛菲力牛排，吃起來嫩口多汁，而牛肉上有刷上一層淡淡的醬，但味道不重
          </div>
        </div>
      </div>
      <div class="carousel__item">
        <img
          class="carousel__itemPic"
          src="/img/index/index_menu2.png"
        >
        <div class="carousel__itemContentWrap">
          <img
            class="carousel__itemLine"
            src="/img/index/index_menuDec.png"
          >
          <div class="carousel__itemTitle">
            牛排肩胛菲力牛排
          </div>
          <div class="carousel__itemText">
            肩胛菲力牛排，吃起來嫩口多汁，而牛肉上有刷上一層淡淡的醬，但味道不重
          </div>
        </div>
      </div>
      <div class="carousel__item">
        <img
          class="carousel__itemPic"
          src="/img/index/index_menu3.png"
        ><div class="carousel__itemContentWrap">
          <img
            class="carousel__itemLine"
            src="/img/index/index_menuDec.png"
          >
          <div class="carousel__itemTitle">
            松露牛排原塊
          </div>
          <div class="carousel__itemText">
            肩胛菲力牛排，吃起來嫩口多汁，而牛肉上有刷上一層淡淡的醬，但味道不重
          </div>
        </div>
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
  name: 'IndexMenuCarousel',
  setup (props, context) {
  }
}
</script>

<style lang="scss">
.IndexMenuCarousel {
  .nk-carousel-inner {
    width: 100%;
  }

  .carousel__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    height: 700px;
    color: #142638;
  }

  .carousel__itemContentWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
  }

  .is-selected {
    .carousel__itemPic {
      width: 100%;
      max-width: 600px;
    }

    .carousel__itemLine {
      max-height: 30px;
      opacity: 1;
    }

    .carousel__itemTitle {
      font-size: 24px;
      opacity: 1;
    }

    .carousel__itemText {
      font-size: 18px;
      opacity: 1;
    }
  }

  .carousel__itemPic {
    width: 70%;
    max-width: 500px;
    transition: all .5s;
  }

  .carousel__itemLine {
    width: 40%;
    max-height: 0;
    margin-bottom: 15px;
    opacity: 0;
    transition: opacity .5s;
  }

  .carousel__itemTitle {
    width: 80%;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    opacity: .6;
    transition: all .5s;
    @include text-overflow();
  }

  .carousel__itemText {
    width: 80%;
    font-size: 20px;
    line-height: 1.5;
    opacity: .6;
    transition: all .5s;

    @include text-overflow(2);
  }

  @include screen(xxl) {
    .carousel__item {
      height: 600px;
    }

    .carousel__itemContentWrap {
      max-width: 400px;
    }
  }
  @include screen(xl) {
    .carousel__item {
      height: 550px;
    }
  }
  @include screen(lg) {
    .carousel__item {
      height: 480px;
    }
  }
  @include screen(md) {
    .carousel__item {
      width: 80%;
      height: 420px;
      padding: 0 20px;
    }

    .carousel__itemPic {
      width: 100%;
    }

    .carousel__itemLine {
      width: 120px;
      max-height: inherit;
    }

    .is-selected {
      padding: 0;

      .carousel__itemPic {
        width: 100%;
        max-width: 300px;
      }
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
