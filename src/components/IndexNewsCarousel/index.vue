<template>
  <div class="IndexNewsCarouselWrap">
    <div
      class="IndexNewsCarousel nk-carousel"
      data-autoplay="8000"
    >
      <div class="nk-carousel-inner">
        <div class="carousel__item">
          <div class="carousel__itemContent">
            <div class="IndexNewsCarousel__title">
              <span class="en futuraExtraBlack">NEWS</span>
              <span class="chi">最新消息</span>
            </div>
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
              class="carousel__btnAll futuraBT"
              text="view all"
              :config="{to: 'newsList'}"
            ></Button>
          </div>
          <div
            class="carousel__itemPic"
            style="background-image: url('./img/index/news_pic.jpg');"
          ></div>
        </div>
        <div class="carousel__item">
          <div class="carousel__itemContent">
            <div class="IndexNewsCarousel__title">
              <span class="en futuraExtraBlack">NEWS</span>
              <span class="chi">最新消息</span>
            </div>
            <a
              class="carousel__itemTitle"
              href="news/content.html"
            >超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字</a>
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
                超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字超級多字
              </div>
              <a href="news/content.html">(more)</a>
            </div>
            <Button
              class="carousel__btnAll futuraBT"
              text="view all"
              :config="{to: 'newsList'}"
            ></Button>
          </div>
          <div
            class="carousel__itemPic"
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
  background-color: #9d2235;

  .carousel__item {
    position: relative;
    display: flex;
    width: 100%;
    height: 650px;
    overflow: hidden;
    color: #fff;
  }

  .carousel__itemContent {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 100px 100px;
    padding-left: 100px;
    background-color: #9d2235;
  }

  .carousel__itemPic {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  .IndexNewsCarousel__title {
    display: flex;
    align-items: flex-end;
    margin-bottom: 100px;
    line-height: 1;
    color: #fff;
    letter-spacing: 5px;

    .en {
      font-size: 110px;
    }

    .chi {
      margin-bottom: 10px;
      margin-left: 10px;
      font-size: 32px;
    }
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
    width: 200px;
    margin-right: 20px;
    margin-left: auto;
  }
  @include screen(xxl) {
    .carousel__item {
      height: 420px;
    }

    .carousel__itemContent {
      width: 50%;
      min-width: 600px;
      padding: 40px 40px 40px 80px;
    }

    .IndexNewsCarousel__title {
      margin-bottom: 40px;

      .en {
        font-size: 60px;
      }

      .chi {
        margin-bottom: 10px;
        margin-left: 10px;
        font-size: 24px;
      }
    }

    .carousel__itemTitle {
      margin-bottom: 10px;
      font-size: 20px;
    }

    .carousel__itemDate {
      margin-bottom: 10px;
      font-size: 16px;
    }

    .carousel__itemDText {
      margin-right: 80px;
    }

    .carousel__itemTextWrap {
      margin-bottom: 20px;
      font-size: 16px;
    }
  }
  @include screen (md) {
    .carousel__item {
      height: 400px;
    }

    .carousel__itemContent {
      width: 100%;
      min-width: 100%;
      padding: 40px;
      background-color: rgba(#9d2235, .8);
    }

    .carousel__itemPic {
      width: 100%;
    }

    .IndexNewsCarousel__title {
      margin-bottom: 20px;

      .en {
        font-size: 36px;
      }

      .chi {
        margin-bottom: 5px;
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
