<template>
  <div class="About">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="ABOUT"
          zh="關於我們"
        ></Title>
        <Breadcrumb :link-data="[{title: 'ABOUT', path: '/about.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="About_info">
      <div class="container">
        <div class="About_infoText wow fadeInUp">
          <div class="title">
            <h1>
              藻作坊
            </h1>
            <div class="establish">
              於2018年正式成立
            </div>
            <div class="note">
              於嘉義市檜意森活村成立第一家門市
            </div>
          </div>
          <p class="text">
            藻作坊是一家致力於研發海藻商品的企業,海藻對於人體的益處都能在報章雜誌或醫學期刊上找到,但在台灣食用海藻的文化不普及,因消費者不了解如何料理與市面上不常見海藻類的產品而導致對許多家庭主婦與消費者而言是較為陌生的食材。
          </p>
        </div>
        <div
          class="About_infoImg wow fadeInUp"
          data-wow-delay=".5s"
        >
          <img src="/soho/img/about/about_pic1.png">
        </div>
      </div>
    </div>
    <div class="About_mission">
      <div class="container wow fadeInUp">
        <h2>來自大海的恩賜_</h2>
        <p>
          我們希望將大海賜予的恩惠「 海藻 」能讓更多的家庭認識且食用，將產品的料理方式<br>
          「簡單化」與「便利化」是我們的目標<br>
          幫助每一個忙碌的家庭改善膳食纖維攝取不足的問題，這是我們的使命且我們視為是一種社會責任。
        </p>
      </div>
    </div>
    <div class="About_image">
      <div class="wow fadeInLeft">
        <img src="/soho/img/about/about_pic2.png">
      </div>
      <div class="wow fadeInRight">
        <img src="/soho/img/about/about_pic3.png">
      </div>
    </div>
    <div class="About_slogan">
      <div
        class="wow fadeIn"
        data-wow-delay=".5s"
        data-wow-duration="1s"
      >
        <img src="/soho/img/about/about_slogan.png">
      </div>
    </div>
    <div class="About_registerGift">
      <div class="container wow fadeInLeft">
        <h2>註冊禮</h2>
        <div class="note">
          首次註冊領
          <span class="highlight">
            $100
          </span>
          <span class="small">
            優惠券
          </span>
        </div>
        <a
          href="/soho/bonus.html"
          class="link"
        >
          立即領券
          <span class="highlight">GO!</span>
          <span class="arrow">
            <span></span>
          </span>
        </a>
      </div>
    </div>
    <div class="About_lineGift">
      <div class="container">
        <h2>好友禮</h2>
        <span>加Line 好友領</span>
        <span class="highlight">$50</span>
        <span>優惠券</span>
      </div>
    </div>
    <div class="About_good">
      <div class="About_goodItem wow fadeIn">
        <div>
          <img src="/soho/img/about/about_good1.png">
        </div>
        <div class="note">
          <div class="title">
            官網限定3件組
          </div>
          <div>
            焙煎胡麻醬 x1<br>
            和風胡麻醬 x2
          </div>
          <div class="price">
            <span class="originPrice">原價 $1,200</span>
            <span class="benefit">9折優惠價 $1,080</span>
          </div>
        </div>
      </div>
      <div
        class="About_goodItem wow fadeIn"
        data-wow-delay=".5s"
      >
        <div>
          <img src="/soho/img/about/about_good2.png">
        </div>
        <div class="note">
          <div class="title">
            官網限定3件組
          </div>
          <div>
            焙煎胡麻醬 x1<br>
            和風胡麻醬 x2
          </div>
          <div class="price">
            <span class="originPrice">原價 $1,200</span>
            <span class="benefit">9折優惠價 $1,080</span>
          </div>
        </div>
      </div>
    </div>
    <div class="About_links">
      <a
        href="/soho/productList.html"
      >
        <span>所有藻作坊商品</span>
        <span class="arrow"></span>
      </a>
      <a
        href="/soho/store.html"
      >
        <span>尋找藻作坊</span>
        <span class="arrow"></span>
      </a>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'About',
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
