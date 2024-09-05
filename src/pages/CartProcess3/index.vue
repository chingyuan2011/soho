<template>
  <div class="CartProcess3 Page">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="SHOPPING CART"
          zh="我的購物車"
        ></Title>
        <Breadcrumb :link-data="[{title: 'SHOPPING CART', path: '/cartProcess3.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="container">
      <div
        class="CartProcess3_check wow bounceIn"
      >
        <img src="/soho/img/cartProcess3/cartProcess3_iconCheck.png">
      </div>
      <div class="CartProcess3_content wow fadeInUp">
        <div>謝謝您！您的訂單已經成立！</div>
        <div class="CartProcess3_orderNumber">
          訂單號碼
          <span>20240829000100101</span>
        </div>
        <div>訂單確認信件已經發送到您的電子信箱</div>
      </div>
      <div class="CartProcess3_note wow fadeInUp">
        <div class="CartProcess3_noteTitle">
          [感謝您的支持]
        </div>
        <div>
          本店絕不會另外通知消費者交易失敗或是付款錯誤等原因,要求您去提款機做任何取消交易或轉帳的動作,請小心不要受騙。
        </div>
      </div>
      <div class="CartProcess3_links">
        <a href="/soho/index.html">回首頁</a>
        <a href="/soho/orderStatus.html">查看訂單</a>
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
