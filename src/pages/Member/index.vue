<template>
  <div class="Member">
    <div class="container container-page">
      <div class="page_commonTitleArea">
        <Title
          en="MEMBER ACCOUNT"
          zh="會員中心"
        ></Title>
        <Breadcrumb
          :link-data="[{ title: 'MEMBER ACCOUNT', path: '/Member.html' }]"
        ></Breadcrumb>
      </div>

      <div class="Member_client">
        <div class="Member_client-delivery">
          <div class="Member_title">
            會員資料 /
          </div>
          <div class="Member_client-form">
            <div class="Member_client-form-item required">
              <label for="name">姓名</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="請填入真實姓名"
              >
            </div>
            <div class="Member_client-form-item required">
              <label for="email">聯絡信箱</label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="請填入電子信箱"
              >
            </div>
            <div class="Member_client-form-item required">
              <label for="phone">聯絡電話</label>
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="請填入手機號碼"
              >
            </div>
            <div class="Member_client-form-item">
              <label for="note">訂單備註</label>
              <textarea
                id="note"
                type="text"
                name="note"
                placeholder="請輸入備註留言訊息"
              ></textarea>
            </div>
            <div class="Member_client-form-item">
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
            <div class="Member_client-form-item">
              <label>是否索取公司統編發票</label>
              <div class="Member_client-form-item-radio">
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
            <div class="Member_client-form-item required">
              <label for="companyName">公司抬頭</label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                placeholder="請填入公司抬頭"
              >
            </div>
            <div class="Member_client-form-item required">
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
        <div class="Member_client-payment">
          <div class="Member_client-paymentOptions">
            <div class="Member_title">
              密碼 /
            </div>
            <button class="Member_client-paymentOption Member_client-payment-creditCard  active">
              信用卡
            </button><button class="Member_client-paymentOption Member_client-payment-ATM">
              ATM匯款
            </button>
          </div>
          <div class="Member_client-creditCard active">
            <div class="Member_title">
              社群帳號 /
            </div>
            <div class="Member_client-form">
              <div class="Member_client-form-item required">
                <label for="cardName">持卡人姓名</label>
                <input
                  id="cardName"
                  type="text"
                  name="cardName"
                  placeholder="與信用卡上名稱相同"
                >
              </div>
              <div class="Member_client-form-item required">
                <label for="cartNumber">信用卡號碼</label>
                <input
                  id="cartNumber"
                  type="text"
                  name="cartNumber"
                  placeholder="**** **** **** ****"
                >
              </div>
              <div class="Member_client-form-item required">
                <label for="expireDate">有效日期</label>
                <input
                  id="expireDate"
                  type="text"
                  name="expireDate"
                  placeholder="MM/YY"
                >
              </div>
              <div class="Member_client-form-item required">
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
          <div class="Member_client-agreement">
            <div class="Member_client-form-item">
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
      <div class="Member_footer">
        <button
          id="submit-client-form"
          class="active"
        >
          更新
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Member',
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
