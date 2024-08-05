<template>
  <div class="CartProcess2">
    <div class="container container-page">
      <div class="page_commonTitleArea">
        <Title
          en="SHOPPING CART"
          zh="我的購物車"
        ></Title>
        <Breadcrumb :link-data="[{title: 'MEMBER CENTER', path: '/cartProcess2.html'}]"></Breadcrumb>
      </div>
      <div class="memberCenter_progressBar">
        <div class="memberCenter_progressBar-step memberCenter_progressBar-step-active memberCenter_progressBar-step-cartProcess">
          <div class="memberCenter_progressBar-step-icon">
            <img
              src="/soho/img/icon_process1.png"
              alt="購物車"
            >
          </div>
          <p>購物車</p>
        </div>
        <div class="memberCenter_progressBar-step memberCenter_progressBar-step-active  memberCenter_progressBar-step-confirmData">
          <div class="memberCenter_progressBar-step-icon">
            <img
              src="/soho/img/icon_process2.png"
              alt="商品及資料確認"
            >
          </div>
          <p>商品及資料確認</p>
        </div>
        <div class="memberCenter_progressBar-step memberCenter_progressBar-step-completeOrder">
          <div class="memberCenter_progressBar-step-icon">
            <img
              src="/soho/img/icon_process3.png"
              alt="訂單完成"
            >
          </div>
          <p>訂單完成</p>
        </div>
      </div>
      <div class="CartProcess2_total">
        <div class="CartProcess2_total-charge">
          <div class="CartProcess2_charge-total-zh">
            商品合計
          </div>
          <div class="CartProcess2_charge-total-data">
            $1450
          </div>
        </div>
        <div class="CartProcess2_total-cart">
          <span>購物車 共<span class="num">3</span>件</span>
          <button id="CartProcess2_toggle-cart"></button>
        </div>
      </div>
      <div class="CartProcess2_cart">
        <div class="CartProcess2_cart-row CartProcess2_cart-header">
          <div class="CartProcess2_cart-cell">
            商品資料
          </div>
          <div class="CartProcess2_cart-cell"></div>
          <div class="CartProcess2_cart-cell">
            優惠
          </div>
          <div class="CartProcess2_cart-cell">
            單件價格
          </div>
          <div class="CartProcess2_cart-cell">
            數量
          </div>
          <div class="CartProcess2_cart-cell">
            小計
          </div>
        </div>
        <div class="CartProcess2_cart-body">
          <div class="CartProcess2_cart-row">
            <div class="CartProcess2_cart-cell">
              <div class="product-pic">
                <img
                  src="/soho/img/cartProcess1/good2.png"
                  alt=""
                >
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_name">
                昆布鹽
              </div>
              <div class="product_content">
                嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_discount">
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_price">
                $230
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_amount">
                1
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_total-price">
                $230
              </div>
            </div>
          </div>
          <div class="CartProcess2_cart-row">
            <div class="CartProcess2_cart-cell">
              <div class="product-pic">
                <img
                  src="/soho/img/cartProcess1/good1.png"
                  alt=""
                >
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_name">
                六色海藻
              </div>
              <div class="product_content">
                嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_discount">
                全館3件以上9.5折
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_price">
                $330
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_amount">
                2
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_total-price">
                $660
              </div>
            </div>
          </div>
          <div class="CartProcess2_cart-row">
            <div class="CartProcess2_cart-cell">
              <div class="product-pic">
                <img
                  src="/soho/img/cartProcess1/good3.png"
                  alt=""
                >
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_name">
                六色海藻組合
              </div>
              <div class="product_content">
                嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_discount">
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_price">
                $890
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_amount">
                1
              </div>
            </div>
            <div class="CartProcess2_cart-cell">
              <div class="product_total-price">
                $890
              </div>
            </div>
          </div>
        </div>
      </div>
      .<div class="CartProcess2_discount-used">
        <div class="CartProcess2_discount-title">
          已享用優惠
        </div>
        <div class="CartProcess2_discount-list">
          <div class="CartProcess2_discount-item">
            <div class="CartProcess2_discount-itemTitle">
              首次購物折 50
            </div>
            <div class="CartProcess2_discount-itemContent">
              -NT$50
            </div>
          </div>
          <div class="CartProcess2_discount-item">
            <div class="CartProcess2_discount-itemTitle">
              國內滿千免運
            </div>
            <div class="CartProcess2_discount-itemContent">
              國內滿千免運
            </div>
          </div>
          <div class="CartProcess2_discount-item">
            <div class="CartProcess2_discount-itemTitle">
              全館3件以上9.5折
            </div>
            <div class="CartProcess2_discount-itemContent">
              -NT$75
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'CartProcess2',
  components: {
    Title,
    Breadcrumb
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
