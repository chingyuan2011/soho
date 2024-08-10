<template>
  <div class="CartProcess2">
    <div class="container container-page">
      <div class="page_commonTitleArea">
        <Title
          en="SHOPPING CART"
          zh="我的購物車"
        ></Title>
        <Breadcrumb
          :link-data="[{ title: 'MEMBER CENTER', path: '/cartProcess2.html' }]"
        ></Breadcrumb>
      </div>
      <div class="memberCenter_progressBar">
        <div
          class="memberCenter_progressBar-step memberCenter_progressBar-step-active memberCenter_progressBar-step-cartProcess"
        >
          <div class="memberCenter_progressBar-step-icon">
            <img
              src="/soho/img/icon_process1.png"
              alt="購物車"
            >
          </div>
          <p>購物車</p>
        </div>
        <div
          class="memberCenter_progressBar-step memberCenter_progressBar-step-active memberCenter_progressBar-step-confirmData"
        >
          <div class="memberCenter_progressBar-step-icon">
            <img
              src="/soho/img/icon_process2.png"
              alt="商品及資料確認"
            >
          </div>
          <p>商品及資料確認</p>
        </div>
        <div
          class="memberCenter_progressBar-step memberCenter_progressBar-step-completeOrder"
        >
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
          <div class="CartProcess2_total-charge-zh">
            商品合計
          </div>
          <div class="CartProcess2_total-charge-data">
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
              <div class="product_discount"></div>
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
              <div class="product_discount"></div>
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
      <div class="CartProcess2_discount">
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
      <div class="CartProcess2_final">
        <div class="CartProcess2_final-price">
          <div class="CartProcess2_final-price-row">
            <div>小計</div>
            <div>NT$1450</div>
          </div>
          <div class="CartProcess2_final-price-row">
            <div>首次購物折50</div>
            <div>-NT$50</div>
          </div>
          <div class="CartProcess2_final-price-row">
            <div>運費</div>
            <div>免運</div>
          </div>
          <div class="CartProcess2_final-price-row">
            <div>合計</div>
            <div>NT$1400</div>
          </div>
        </div>
        <div class="CartProcess2_final-coupon">
          <div class="CartProcess2_final-price-row">
            <div>訂單完成後獲得紅利點數</div>
            <div>+NT$36</div>
          </div>
        </div>
      </div>
      <button class="CartProcess2_divide-btn"></button>
      <div class="CartProcess2_client">
        <div class="CartProcess2_client-delivery">
          <div class="CartProcess2_title">
            寄送地址 /
          </div>
          <div class="CartProcess2_client-form">
            <div class="CartProcess2_client-form-item required">
              <label for="name">姓名</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="請填入真實姓名"
              >
            </div>
            <div class="CartProcess2_client-form-item required">
              <label for="email">聯絡信箱</label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="請填入電子信箱"
              >
            </div>
            <div class="CartProcess2_client-form-item required">
              <label for="phone">聯絡電話</label>
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="請填入手機號碼"
              >
            </div>
            <div class="CartProcess2_client-form-item">
              <label for="note">訂單備註</label>
              <textarea
                id="note"
                type="text"
                name="note"
                placeholder="請輸入備註留言訊息"
              ></textarea>
            </div>
            <div class="CartProcess2_client-form-item">
              <label
                for="agree-read"
                class="checkbox_wrap"
              >
                <input
                  id="agree-read"
                  type="checkbox"
                  checked="checked"
                >我已仔細閱讀並明瞭
                「會員註冊條款」、「隱私權政策」、「訂購須知」所載內容及其意義茲同意該等條款規定，並願遵守網站現今、嗣後規範的各種規則。
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="CartProcess2_client-form-item">
              <label>是否索取公司統編發票</label>
              <div class="CartProcess2_client-form-item-radio">
                <label class="radio_wrap">
                  <input
                    name="ifNeedTaxNumber"
                    type="radio"
                  >
                  <span class="checkmark">否</span>
                </label>
                <label class="radio_wrap">
                  <input
                    name="ifNeedTaxNumber"
                    type="radio"
                    checked="checked"
                  >
                  <span class="checkmark">是</span>
                </label>
              </div>
            </div>
            <div class="CartProcess2_client-form-item required">
              <label for="companyName">公司抬頭</label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                placeholder="請填入公司抬頭"
              >
            </div>
            <div class="CartProcess2_client-form-item required">
              <label for="taxNumber">公司統編</label>
              <input
                id="taxNumber"
                type="text"
                name="taxNumber"
                placeholder="請填入8位數字公司統編"
              >
            </div>
          </div>
        </div>
        <div class="CartProcess2_client-payment">
          <div class="CartProcess2_client-paymentOptions">
            <div class="CartProcess2_title">
              付款方式 /
            </div>
            <button class="CartProcess2_client-paymentOption active">
              信用卡
            </button><button class="CartProcess2_client-paymentOption">
              ATM匯款
            </button>
          </div>
          <div class="CartProcess2_client-creditCard active">
            <div class="CartProcess2_title">
              付款資料 /
            </div>
            <div class="CartProcess2_client-form">
              <div class="CartProcess2_client-form-item required">
                <label for="cardName">持卡人姓名</label>
                <input
                  id="cardName"
                  type="text"
                  name="cardName"
                  placeholder="與信用卡上名稱相同"
                >
              </div>
              <div class="CartProcess2_client-form-item required">
                <label for="cartNumber">信用卡號碼</label>
                <input
                  id="cartNumber"
                  type="text"
                  name="cartNumber"
                  placeholder="**** **** **** ****"
                >
              </div>
              <div class="CartProcess2_client-form-item required">
                <label for="expireDate">有效日期</label>
                <input
                  id="expireDate"
                  type="text"
                  name="expireDate"
                  placeholder="MM/YY"
                >
              </div>
              <div class="CartProcess2_client-form-item required">
                <label for="cvc">安全碼（CVC）</label>
                <input
                  id="cvc"
                  type="text"
                  name="cvc"
                  placeholder="後三碼"
                >
              </div>
            </div>
          </div>
          <div class="CartProcess2_client-agreement">
            <div class="CartProcess2_client-form-item">
              <label
                for="agree-privacy"
                class="checkbox_wrap"
              >
                <input
                  id="agree-privacy"
                  type="checkbox"
                  checked="checked"
                >我同意網站<a href="javascript;'">服務條款</a>及<a
                  href="javascript;'"
                >隱私權政策</a>
                <span class="checkmark"></span>
              </label>
              <span>您必須同意細則和私隱條款</span>
            </div>
          </div>
        </div>
      </div>
      <div class="CartProcess2_footer">
        <router-link :to="{ name: 'CartProcess1' }">
          <div class="deco"></div>
          返回購物車
        </router-link>
        <button
          id="submit-client-form"
          class="active"
        >
          提交訂單
        </button>
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
