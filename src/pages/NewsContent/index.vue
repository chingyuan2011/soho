<template>
  <div class="NewsContent">
    <Banner
      class="pink"
      page="news"
    >
    </Banner>
    <div class="NewsContent__content">
      <div class="container">
        <div class="breadcrumbs">
          <router-link
            class="breadcrumbs__link breadcrumbs__home"
            :to="{name: 'index'}"
          >
            <img
              src="/img/breadcrumbs_home.png"
              alt="home"
            >
          </router-link>
          <router-link
            class="breadcrumbs__link"
            :to="{name: 'newsList'}"
          >
            / 新消息
          </router-link>
          <router-link
            class="breadcrumbs__link"
            :to="{name: 'newsContent'}"
          >
            / 準時父約消費2客經典套餐爸爸免費升級重磅肉肉控
          </router-link>
        </div>
        <div class="NewsContent__item">
          <div class="NewsContent__itemTitle">
            準時父約消費2客經典套餐爸爸免費升級重磅肉肉控
          </div>
          <div class="NewsContent__itemDates">
            <div class="NewsContent__itemDatesFrom">
              <p class="prefix futuraBTMedium">
                FROM
              </p>
              <p class="date futuraExtraBlack">
                2021/08/01
              </p>
            </div>
            <div class="NewsContent__itemDatesTo">
              <p class="prefix futuraBTMedium">
                TO
              </p>
              <p class="date futuraExtraBlack">
                2021/08/31
              </p>
            </div>
          </div>
          <div class="NewsContent__itemContent">
            <p>
              對父親的愛，不受疫情影響。<br>
              準時父約吧 ! 西堤替肉肉控爸爸們準備好了，<br>
              與爸爸赴約西堤牛排，<br>
              內用/電話外帶消費2客經典套餐，<br>
              即享爸爸單客主餐免費升級重磅肉肉控鐵板牛排。
            </p>
            <p>
              注意事項：<br>
              1. 不得與其它折扣或優惠活動併用。<br>
              2. 恕不適用購買禮券、兌現及找零。<br>
              3. 升級商品以現場實物為主，如遇商品售罄，得以同等值商品替代。<br>
              4. 西堤牛排保有活動最終解釋權利。
            </p>
          </div>
          <div class="NewsContent__itemPic">
            <img
              src="/img/news1.jpg"
              alt=""
            >
          </div>
        </div>
        <div class="NewsContent__back">
          <Button
            class="futuraBT"
            text="back"
            :config="{to: 'newsList'}"
          ></Button>
        </div>
      </div>
      <div class="footer__deco-brown">
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
