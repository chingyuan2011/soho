<template>
  <div class="MobileToolBar">
    <div class="container">
      <a
        class="MobileToolBar_item"
        href="/soho/orderStatus.html"
      >
        <img src="/soho/img/navbar/navbar_memberItem1.png">
        <span>訂單查詢</span>
      </a>
      <a
        class="MobileToolBar_item"
        href="/soho/cartProcess1.html"
      >
        <img src="/soho/img/navbar/navbar_memberItem2.png">
        <span>我的購物車</span>
      </a>
      <a
        class="MobileToolBar_item"
        href="/soho/member.html"
      >
        <img src="/soho/img/navbar/navbar_memberItem3.png">
        <span>會員中心</span>
      </a>
      <a
        class="MobileToolBar_item"
        href="/soho/member.html"
      >
        <img src="/soho/img/navbar/navbar_memberItem4.png">
        <span>客服中心</span>
      </a>
    </div>
  </div>
</template>
<script>
import {} from '@vue/composition-api'

export default {
  name: 'MobileToolBar',
  setup (props, context) {
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
