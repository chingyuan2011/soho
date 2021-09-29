<template>
  <div class="Member">
    <Banner
      class="pink"
      page="member"
    >
    </Banner>
    <div class="Member__content">
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
            :to="{name: 'member'}"
          >
            / 加入會員
          </router-link>
        </div>
        <ul class="Member__list row">
          <li
            class="Member__member col-5 col-xl-8 col-md-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div class="Member__memberContent">
              <div class="Member__memberTitle">
                立即加入王品瘋美食App
              </div>
              <div class="Member__memberQRcode">
                <img
                  src="/img/member/appQRcode.png"
                  alt="王品瘋美食App"
                  draggable="false"
                >
              </div>
              <p class="Member__memberText">
                點食成金，筆筆變現金、瘋PAY<br>
                秒付超方便、會員獨享優惠券
              </p>
              <div class="Member__memberLogo">
                <img
                  src="/img/member_logoApp.jpg"
                  alt="王品瘋美食App"
                  draggable="false"
                >
              </div>
            </div>
          </li>
          <li
            class="Member__member col-5 col-xl-8 col-md-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".6s"
          >
            <div class="Member__memberContent">
              <div class="Member__memberTitle">
                立即加入西堤官方LINE
              </div>
              <div class="Member__memberQRcode">
                <img
                  src="/img/member/lineQRcode.jpg"
                  alt="西堤官方LINE"
                  draggable="false"
                >
              </div>
              <p class="Member__memberText">
                LINE好友享好康、入會禮 /<br>
                生日禮不定期、好禮大方送
              </p>
              <div class="Member__memberLogo">
                <img
                  src="/img/member_logoLine.jpg"
                  alt="西堤官方LINE"
                  draggable="false"
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer__deco-brown">
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
