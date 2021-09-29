<template>
  <div class="Event">
    <Banner
      page="blood donation"
    >
    </Banner>
    <div class="Event__content">
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
            :to="{name: 'event'}"
          >
            / 捐血公益
          </router-link>
        </div>
        <div class="Event__pic">
          <img
            src="/img/Eventpic.jpg"
            alt=""
          >
        </div>

        <div class="Event__info">
          <div class="Event__infoContent">
            <div class="Event__infoContentTitle">
              熱血解封，挽袖相挺
            </div>
            <p class="Event__infoContentP">
              全台平均每天約需要7,000袋熱血，西堤牛排十餘年來長期響應公益捐血活動。<br>
              2021 年台灣面對疫情衝擊，捐血意願降低，血庫存量頻頻告急，面對告急的血庫，西堤再次發起「熱血解封，挽袖相挺」捐血活動，捐出萬張愛心 5折券，號召募集10,000袋熱血。<br>
              邀請大家站出來挽袖捐愛，一起解封口罩下那藏不住的熱血！
            </p>
          </div>
          <div class="Event__infoAnimation">
            <div class="Event__infoBlood Blood">
              <Blood class="Event__blood"></Blood>
            </div>
            <div class="Event__infoNumber">
              <span class="prefix">總累積</span><div
                id="blood-accumulation"
                class="futuraExtraBlack blood-accumulation"
                data-count="15000000"
              >
                0
              </div><span class="futuraExtraBlack blood-accumulation">cc</span>
            </div>
          </div>
        </div>
      </div>
      <div class="Event__carousel">
        <div class="Event__carouselTitle container">
          活動照片紀錄
        </div>
        <EventCarousel></EventCarousel>
      </div>
    </div>
    <div class="footer__deco-brown">
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
