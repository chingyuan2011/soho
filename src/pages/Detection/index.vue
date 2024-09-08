<template>
  <div class="Detection Page">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="DETECTION"
          zh="檢驗認證"
        ></Title>
        <Breadcrumb :link-data="[{title: 'DETECTION', path: '/detection.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="Detection_block">
      <div class="container">
        <h1 class="Detection_mainTitle">
          海裡多少會有重金屬
        </h1>
        <div class="Detection_note">
          不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。<br>
          因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。<br>
          提供重金屬檢驗服務的台美檢驗，為我們整理出幾種重金屬對人體的危害：
        </div>
        <div class="Detection_decoration">
          <img src="/soho/img/detection/detection_decoration.jpg">
        </div>
      </div>
    </div>
    <div class="Detection_block Detection_video">
      <iframe
        src="https://www.youtube.com/embed/LFaKMm0Gulw?si=Xxsd0ZIrcUfX1fCQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div class="Detection_block Detection_item">
      <div class="Detection_content">
        <div>
          <h2 class="Detection_title">
            1. 重金屬<span>汞</span>
          </h2>
          <p>
            汞，主要有元素汞、無機汞及有機汞三種型態。<br>
            通常提及海鮮中的汞，多指的是「甲基汞」，為有機汞在所有型態中毒性最大。<br>
            日本 1956 年的「水俁病」就是由甲基汞所引發。<br>
            當地居民出現智力低下、神經錯亂、視力障礙甚至死亡等現象。
          </p>
          <div class="Detection_links">
            <img src="/soho/img/detection/detection_link.jpg">
            <a href="">
              <span>藻作坊安心檢驗</span>
              <span class="arrow"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="Detection_img">
        <img src="/soho/img/detection/detection_main1.jpg">
      </div>
    </div>
    <div class="Detection_block Detection_item Detection_itemPureText">
      <div class="Detection_content">
        <div>
          <h2 class="Detection_title">
            2. 重金屬<span>砷</span>
          </h2>
          <p>
            砷，可分為有機砷和無機砷兩種型態。<br>
            在海鮮中常見的是有機砷，但是對人體的毒性較低，且可以經由尿液排出體外。<br>
            然而，無機砷則會累積在人體的器官，引起慢性砷中毒。嚴重一點，甚至有引發癌症的可能。
          </p>
        </div>
      </div>
    </div>
    <div class="Detection_block Detection_item">
      <div class="Detection_content">
        <div>
          <h2 class="Detection_title">
            3. 重金屬<span>鎘</span>
          </h2>
          <p>
            汞，主要有元素汞、無機汞及有機汞三種型態。<br>
            通常提及海鮮中的汞，多指的是「甲基汞」，為有機汞在所有型態中毒性最大。<br>
            日本 1956 年的「水俁病」就是由甲基汞所引發。<br>
            當地居民出現智力低下、神經錯亂、視力障礙甚至死亡等現象。
          </p>
          <div class="Detection_links">
            <img src="/soho/img/detection/detection_link.jpg">
            <a href="">
              <span>藻作坊安心檢驗</span>
              <span class="arrow"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="Detection_img">
        <img src="/soho/img/detection/detection_main3.jpg">
      </div>
    </div>
    <div class="Detection_block Detection_slogan">
      <div class="container">
        <div class="text">
          藻，最好的海藻
        </div>
        <div class="pic">
          <img src="/soho/img/detection/detection_slogan1.jpg">
        </div>
        <div class="textPic">
          <img src="/soho/img/detection/detection_slogan2.jpg">
        </div>
      </div>
    </div>

    <div class="Detection_block Detection_slider">
      <div class="Detection_sliderContentWrap">
        <button
          id="Detection_sliderPrev"
          class="Detection_sliderPrev"
        >
          <img src="/soho/img/detection/icon_marqueeL.png">
        </button>
        <button
          id="Detection_sliderNext"
          class="Detection_sliderNext"
        >
          <img src="/soho/img/detection/icon_marqueeR.png">
        </button>

        <div
          id="Detection_sliderContent"
          class="Detection_sliderContent"
        >
          <div class="Detection_sliderItem">
            <img src="/soho/img/detection/detection_item1.jpg">
          </div>
          <div class="Detection_sliderItem">
            <img src="/soho/img/detection/detection_item2.jpg">
          </div>
          <div class="Detection_sliderItem">
            <img src="/soho/img/detection/detection_item3.jpg">
          </div>
          <div class="Detection_sliderItem">
            <img src="/soho/img/detection/detection_item4.jpg">
          </div>
          <div class="Detection_sliderItem">
            <img src="/soho/img/detection/detection_item5.jpg">
          </div>
          <div class="Detection_sliderItem">
            <img src="/soho/img/detection/detection_item6.jpg">
          </div>
          <div class="Detection_sliderItem">
            <img src="/soho/img/detection/detection_item7.jpg">
          </div>
          <div class="Detection_sliderItem">
            <img src="/soho/img/detection/detection_item8.jpg">
          </div>
          <div class="Detection_sliderItem">
            <img src="/soho/img/detection/detection_item9.jpg">
          </div>
        </div>
      </div>
      <div class="Detection_sliderDots">
        <button
          data-slider-index="0"
          class="Detection_sliderDot"
        >
          <img src="/soho/img/detection/detection_item1.jpg">
        </button>

        <button
          data-slider-index="1"
          class="Detection_sliderDot"
        >
          <img src="/soho/img/detection/detection_item2.jpg">
        </button>

        <button
          data-slider-index="2"
          class="Detection_sliderDot"
        >
          <img src="/soho/img/detection/detection_item3.jpg">
        </button>

        <button
          data-slider-index="3"
          class="Detection_sliderDot"
        >
          <img src="/soho/img/detection/detection_item4.jpg">
        </button>

        <button
          data-slider-index="4"
          class="Detection_sliderDot"
        >
          <img src="/soho/img/detection/detection_item5.jpg">
        </button>

        <button
          data-slider-index="5"
          class="Detection_sliderDot"
        >
          <img src="/soho/img/detection/detection_item6.jpg">
        </button>

        <button
          data-slider-index="6"
          class="Detection_sliderDot"
        >
          <img src="/soho/img/detection/detection_item7.jpg">
        </button>

        <button
          data-slider-index="7"
          class="Detection_sliderDot"
        >
          <img src="/soho/img/detection/detection_item8.jpg">
        </button>

        <button
          data-slider-index="8"
          class="Detection_sliderDot"
        >
          <img src="/soho/img/detection/detection_item9.jpg">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Bonus',
  components: {
    Title,
    Breadcrumb
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
