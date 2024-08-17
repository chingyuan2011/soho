<template>
  <header class="ProjectHeader">
    <div class="container ProjectHeader-pc">
      <div class="ProjectHeader_area ProjectHeader_area-left">
        <div class="menu">
          <div class="menu_item">
            <a href="/soho/about.html">
              <div class="menu_itemText-zh">
                關於我們
              </div>
              <div class="menu_itemText-en">
                ABOUT
              </div>
            </a>
          </div>
          <div class="menu_item">
            <a href="/soho/detection.html">
              <div class="menu_itemText-zh">
                檢驗認證
              </div>
              <div class="menu_itemText-en">
                DETECTION
              </div>
            </a>
          </div>
          <div class="menu_item">
            <a href="/soho/productList.html">
              <div class="menu_itemText-zh">
                產品資訊
              </div>
              <div class="menu_itemText-en">
                PRODUCTS
              </div>
            </a>
          </div>
          <div class="menu_item">
            <a href="/soho/news.html">
              <div class="menu_itemText-zh">
                最新消息
              </div>
              <div class="menu_itemText-en">
                NEWS
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="logo">
        <img
          src="/soho/img/navbar/logo.png"
          alt="藻作坊"
        >
      </div>
      <div class="ProjectHeader_area ProjectHeader_area-right">
        <div class="menu">
          <div class="menu_item">
            <a href="/soho/seaweedList.html">
              <div class="menu_itemText-zh">
                海藻學堂
              </div>
              <div class="menu_itemText-en">
                SEAWEED
              </div>
            </a>
          </div>
          <div class="menu_item">
            <a href="/soho/storeList.html">
              <div class="menu_itemText-zh">
                門市據點
              </div>
              <div class="menu_itemText-en">
                STORE
              </div>
            </a>
          </div>
          <div class="menu_item">
            <a href="/soho/contact.html">
              <div class="menu_itemText-zh">
                聯絡我們
              </div>
              <div class="menu_itemText-en">
                CONTACT
              </div>
            </a>
          </div>
        </div>
        <div class="functionBar">
          <div
            id="functionBar_member"
            class="functionBar_member"
          >
            <button id="functionBar_memberBtn"></button>
            <div
              id="navbar_toolMember"
              class="navbar_toolMember"
            >
              <div class="navbar_toolMemberMain">
                <a href="/soho/member.html">
                  <img src="/soho/img/navbar/navbar_memberItem1.png">
                  <span>訂單查詢</span>
                </a>
                <a href="/soho/member.html">
                  <img src="/soho/img/navbar/navbar_memberItem2.png">
                  <span>我的購物車</span>
                </a>
                <a href="/soho/member.html">
                  <img src="/soho/img/navbar/navbar_memberItem3.png">
                  <span>會員中心</span>
                </a>
                <a href="/soho/member.html">
                  <img src="/soho/img/navbar/navbar_memberItem4.png">
                  <span>客服中心</span>
                </a>
              </div>
              <ul class="navbar_toolMemberSub">
                <li>
                  <a href="/soho/trackingList.html">
                    <span>我的收藏</span>
                  </a>
                </li>
                <li>
                  <a href="/soho/coupon.html">
                    <span>我的折價券</span>
                  </a>
                </li>
                <li>
                  <a href="/soho/bonus.html">
                    <span>我的紅利點數</span>
                  </a>
                </li>
                <li>
                  <a href="/soho/paymentInstructions.html">
                    <span>付款說明</span>
                  </a>
                </li>
                <li>
                  <a href="/soho/returnsAndRefunds.html">
                    <span>退換貨說明</span>
                  </a>
                </li>
              </ul>
              <div class="navbar_toolMemberStatus">
                <a href="/soho">登出</a>
              </div>
            </div>
          </div>
          <div>
            <button id="functionBar_cartBtn"></button>
          </div>
          <div>
            <div class="functionBar_search">
              <input
                type="text"
                placeholder="SEARCH..."
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container ProjectHeader-mobile">
      <div class="logo">
        <img
          src="/soho/img/navbar/logo.png"
          alt="藻作坊"
        >
      </div>
      <div class="right">
        <div
          class="functionBar"
        >
          <button
            id="functionBar_cart"
          ></button>
        </div>
        <button class="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import {} from '@vue/composition-api'

export default {
  name: 'ProjectHeader',
  setup (props, context) {
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
