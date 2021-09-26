<template>
  <div class="MenuList">
    <Banner
      class="pink"
      page="menu"
    >
    </Banner>
    <div class="MenuList__content">
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
        </div>
        <div class="MenuList__list row">
          <div class="MenuList__item col-6 col-lg-12">
            <router-link
              class="MenuList__itemLink"
              :to="{name: 'menuContent'}"
            ></router-link>
            <div class="MenuList__itemPic">
              <img
                src="/img/menu/set1/P1.jpg"
                alt=""
              >
            </div>
            <div class="MenuList__itemTitle futuraExtraBlack">
              CLASSIC SET MENU<br>
              - 經典套餐
            </div>
            <div class="MenuList__itemContent">
              <p>本菜單不適用台北復興南店、台北重慶南店、桃園南華店、新竹中正店、家樂福文心店、嘉義文化店、鳳山家樂福店、屏東自由店</p>
              <p>※疫情期間，實際提供餐點依現場為準</p>
            </div>
          </div>
          <div class="MenuList__item col-6 col-lg-12">
            <router-link
              class="MenuList__itemLink"
              :to="{name: 'menuContent'}"
            ></router-link>
            <div class="MenuList__itemPic">
              <img
                src="/img/menu/set2/P1.jpg"
                alt=""
              >
            </div>
            <div class="MenuList__itemTitle futuraExtraBlack">
              美味安心點 - 外帶菜單
            </div>
            <div class="MenuList__itemContent">
              <p>宅享TASTy ! 安心Enjoy !</p>
            </div>
          </div>
          <div class="MenuList__item col-6 col-lg-12">
            <router-link
              class="MenuList__itemLink"
              :to="{name: 'menuContent'}"
            ></router-link>
            <div class="MenuList__itemPic">
              <img
                src="/img/menu/set1/P1.jpg"
                alt=""
              >
            </div>
            <div class="MenuList__itemTitle futuraExtraBlack">
              經典菜單 - 限定店
            </div>
            <div class="MenuList__itemContent">
              <p>本菜單適用台北復興南店、台北重慶南店、桃園南華店、新竹中正店、家樂福文心店、嘉義文化店、鳳山家樂福店、屏東自由店</p>
              <p>※疫情期間，實際提供餐點依現場為準</p>
            </div>
          </div>
          <div class="MenuList__item col-6 col-lg-12">
            <router-link
              class="MenuList__itemLink"
              :to="{name: 'menuContent'}"
            ></router-link>
            <div class="MenuList__itemPic">
              <img
                src="/img/member_logoApp.jpg"
                alt=""
              >
            </div>
            <div class="MenuList__itemTitle futuraExtraBlack">
              美味安心點 - 外帶菜單
            </div>
            <div class="MenuList__itemContent">
              <p>宅享TASTy ! 安心Enjoy !</p>
            </div>
          </div>
        </div>
        <div class="MenuList__note">
          自2019年12月20日起，西堤牛排停售原有蔬食套餐，針對蔬/素食消費者提供代訂服務，造成不便，敬請見諒。★ 另加10%服務費。<br>
          ★ 單點 A LA CARTE：主餐每道360元、開胃品每道50元、沙拉每道80元、前菜/甜點/飲料每道60元、湯品每道80元、沙瓦10元。
          沙瓦僅供套餐使用。<br>
          ★ 以上價格需另加10%服務費。 本餐廳得依季節更替調整菜單內容，菜色呈現樣式依現場實物為準。如遇菜色內容調整，仍可於同
          等值商品中選擇。牛肉來源以各門店公告為準。 凡持禮券消費者，您的消費權益詳見官網禮券查詢區。<br>
          ★ The price is subject to 10% service charge. With the change of seasons comes a few changes in the menu.
        </div>
      </div>
    </div>
    <div class="slogan futuraExtraBlack">
      Let’s TASTy, <br>Let’s Enjoy!
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
