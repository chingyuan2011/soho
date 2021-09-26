<template>
  <div class="IndexNewsCarouselWrap">
    <h2 class="IndexNewsCarousel__title">
      <span class="en futuraExtraBlack">NEWS</span>
      <span class="chi">最新消息</span>
    </h2>
    <div
      class="IndexNewsCarousel nk-carousel"
      data-autoplay="8000"
    >
      <div class="nk-carousel-inner">
        <div class="carousel__item">
          <div class="carousel__itemContent">
            <a
              class="carousel__itemTitle"
              href="news/content.html"
            >西堤牛排官網會員權益公告</a>
            <div class="carousel__itemDate">
              <div>
                <div class="futuraBTMedium carousel__itemDText">
                  FROM
                </div>
                <div class="futuraBT">
                  2021/07/11
                </div>
              </div>
              <div>
                <div class="futuraBTMedium carousel__itemDText">
                  TO
                </div>
                <div class="futuraBT">
                  2021/07/30
                </div>
              </div>
            </div>
            <div class="carousel__itemTextWrap">
              <div class="carousel__itemText">
                為提供西堤會員更多權益及服務，2021/08/03(二)起西堤牛排官網會員服務將轉移至「王品瘋美食App
              </div>
            </div>
            <Button
              class="carousel__btnAll"
              text="view all"
              :config="{href:'news/list.html'}"
            ></Button>
          </div>
          <div
            class="carousel__itemPic"
            style="background-image: url('./img/shop_content.jpg');"
          ></div>
        </div>
        <div class="carousel__item">
          <div class="carousel__itemContent col-6">
            <a
              class="carousel__itemTitle"
              href="news/content.html"
            >西堤牛排官網會員權益公告西堤牛排官網會員權益公告西堤牛排官網會員權益公告西堤牛排官網會員權益公告</a>
            <div class="carousel__itemDate">
              <div>
                <div class="futuraBTMedium carousel__itemDText">
                  FROM
                </div>
                <div class="futuraBT">
                  2021/07/11
                </div>
              </div>
              <div>
                <div class="futuraBTMedium carousel__itemDText">
                  TO
                </div>
                <div class="futuraBT">
                  2021/07/30
                </div>
              </div>
            </div>
            <div class="carousel__itemTextWrap">
              <div class="carousel__itemText">
                為提供西堤會員更多權益及服務，2021/08/03(二)起西堤牛排官網會員服務將轉移至「王品瘋美食App為提供西堤會員更多權益及服務，2021/08/03(二)起西堤牛排官網會員服務將轉移至「王品瘋美食App
              </div>
              <a href="news/content.html">(more)</a>
            </div>
            <Button
              class="carousel__btnAll"
              text="view all"
              :config="{href:'news/list.html'}"
            ></Button>
          </div>
          <div
            class="carousel__itemPic col-6"
            style="background-image: url('./img/shop_content.jpg');"
          ></div>
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
import Button from '@/components/Button'

export default {
  name: 'IndexBannerCarousel',
  components: { Button },
  setup (props, context) {
  }
}
</script>

<style lang="scss">
.IndexNewsCarouselWrap {
  position: relative;
  background-color: #c9222a;

  .IndexNewsCarousel__title {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    padding-top: 100px;
    padding-left: 100px;
    line-height: 1;
    color: #fff;
    letter-spacing: 5px;

    .en {
      font-size: 120px;
    }

    .chi {
      margin-bottom: 10px;
      margin-left: 10px;
      font-size: 42px;
    }
  }

  .carousel__item {
    display: flex;
    width: 100%;
    height: 650px;
    color: #fff;
  }

  .carousel__itemContent {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 960px;
    padding: 0 100px;
    padding-top: 250px;
    padding-left: 100px;
    background-color: #c9222a;
  }

  .carousel__itemPic {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
  }

  .carousel__itemTitle {
    margin-bottom: 20px;
    font-size: 28px;
    @include text-overflow();
  }

  .carousel__itemDate {
    display: flex;
    margin-bottom: 20px;
    font-size: 18px;
    letter-spacing: 2px;
  }

  .carousel__itemDText {
    margin-right: 100px;
    color: #e0ca93;
  }

  .carousel__itemTextWrap {
    margin-bottom: 20px;
    font-size: 22px;
  }

  .carousel__itemText {
    @include text-overflow(2);
  }

  .carousel__btnAll {
    margin-right: 20px;
    margin-left: auto;
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
