<template>
  <div class="ShopContent">
    <div class="fixBg"></div>
    <Banner
      class="pink"
      page="shop"
    >
    </Banner>
    <div class="ShopContent__content">
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
            :to="{name: 'shopList'}"
          >
            / 找門市
          </router-link>
        </div>
        <div class="ShopContent__shopBtns">
          <Button
            class="futuraBT"
            text="線上訂位"
            :config="{href: 'bookingUrl'}"
          ></Button>
          <Button
            text="外帶自取"
            class="futuraBT"
            :config="{href: 'toGoUrl'}"
          ></Button>
        </div>
        <div class="ShopContent__shop">
          <div class="ShopContent__shopNote">
            8月23日起新店民權店進行裝修，暫停營業。裝修期間持續提供外帶服務，歡迎來電訂購。新美東時尚新裝將於10月嶄新登場，屆時歡迎蒞臨體驗。西堤牛排感謝您的支持與鼓勵。
          </div>
          <div class="ShopContent__shopName">
            新店民權店
          </div>
          <div class="ShopContent__shopPhone">
            <span class="prefix">電話：</span><span class="futuraBTMedium number">02-2218-1400</span>
          </div>
          <div class="ShopContent__shopAdd">
            <span class="prefix">地址：</span>新北市新店區民權路82號2樓
          </div>
          <div class="ShopContent__shopOpen">
            午間：11:30 ~ 14:30<br>
            晚間：17:30 ~ 22:00<br>
            (最後點餐時間 14:00 / 21:00)
          </div>
          <div class="ShopContent__shopInfo">
            電梯設備：有<br>
            停車資訊：新店民權店/非特約/新北市新店區民權路82號B2 /停車費平日每小時30元/假日50元。<br>
            交通資訊：捷運「大坪林站」1號出口，往民權路方向步行約5-8分鐘。<br>
            店鋪介紹：捷運大坪林站1號出口，往民權路方向步行約3~5分鐘可達，寬敞舒適的用餐環境，搭配都會簡約風格設計，滿足您的視覺與味蕾，是您約會聚餐最佳選擇。餐後還可到對面的生活館逛逛喔!
          </div>
          <div class="ShopContent__shopPic">
            <img
              src="/img/shop_content.jpg"
              alt=""
            >
          </div>
        </div>
      </div>
      <div class="ShopContent__back">
        <Button
          class="futuraBT"
          text="back"
          :config="{to: 'shopList'}"
        ></Button>
      </div>
    </div>
    <div class="footer__deco-brown">
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
