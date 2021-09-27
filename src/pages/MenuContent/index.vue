<template>
  <div class="MenuContent">
    <Banner
      class="pink"
      page="menu"
    >
    </Banner>
    <div class="MenuContent__content">
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
            :to="{name: 'menuList'}"
          >
            / 嚐美食
          </router-link>
          <router-link
            class="breadcrumbs__link"
            :to="{name: 'menuContent'}"
          >
            / CLASSIC SET MENU - 經典套餐
          </router-link>
        </div>
      </div>
      <div class="MenuContent__menu container">
        <div class="MenuContent__menuName futuraExtraBlack">
          CLASSIC SET MENU - 經典套餐
        </div>
        <p class="MenuContent__menuInfo">
          <span>本菜單不適用台北復興南店、台北重慶南店、桃園南華店、新竹中正店、家樂福文心店、嘉義文化店、鳳山家
            樂福店、屏東自由店</span><br><span>※疫情期間，實際提供餐點依現場為準</span>
        </p>
      </div>
      <MenuContentCarousel class="MenuContentCarousel"></MenuContentCarousel>
      <div class="container">
        <p class="MenuContent__menuInfo">
          ※為了提供您更好的用餐品質，如有需要「xxxx套餐」， 請於前一日來電預約。<br>
          ※肉品來源以各門店公告為準。圖片僅共參考，餐點呈現方式依實物為準。<br>
          ※為了提供您更好的用餐品質，如有需要「xxxx套餐」， 請於前一日來電預約。<br>
          ※肉品來源以各門店公告為準。圖片僅共參考，餐點呈現方式依實物為準。
        </p>
      </div>
    </div>
    <div class="footer__deco-brown">
      <div class="MenuContent__Btns">
        <Button
          text="菜單下載"
          icon="download2x"
          :config="{href:'/img/menu/set2/p1.jpg', target: '_balnk'}"
          download="MENU"
        ></Button>
        <Button
          text="back"
          class="futuraBTMedium"
          :config="{to: 'menuList'}"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
