<template>
  <div class="PaymentInstructions Page">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="PAYMENT INSTRUCTIONS"
          zh="付款說明"
        ></Title>
        <Breadcrumb :link-data="[{title: 'PAYMENT INSTRUCTIONS', path: '/paymentInstructions.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="container">
      <h2 class="PaymentInstructions_pageTitle">
        付款說明 /
      </h2>
      <div class="PaymentInstructions_block">
        <h3 class="PaymentInstructions_subTitle">
          Q1.付款方式？
        </h3>
        <p class="PaymentInstructions_text">
          二種付款方式，有信用卡線上刷卡、ATM轉帳。
        </p>
        <p class="PaymentInstructions_text">
          1.信用卡線上刷卡(VISA/MasterCard/JCB)說明<br>
          採用永豐銀行刷卡系統信用卡付費機制平台，提供了絕對安全可靠的網路付款機制。您可直接於網路上付款，在安全與方便之間取得極佳的平衡點。繳款完畢後，無須通知我們，我們會直接與銀行對帳確認。<br>
          ※線上刷卡會需要一些時間進行作業，過程中請勿關閉頁面或重新整理頁面，會影響交易流程，並導致入帳作業延遲或有誤。
        </p>
        <p class="PaymentInstructions_text">
          2.ATM轉帳說明：<br>
          請您於下單後三天內，依照訂單明細提供之匯款帳號(如下)至ATM臨櫃轉帳或線上轉帳，匯款完成後請您登入會員並至會員專區中「訂單查詢」，並於該筆訂單留言填寫您『匯出帳戶的末5碼』或來電告知，以利我們確認是否收到貨款。<br>
          銀行代號：004台灣銀行<br>
          分行名稱：XX分行(分行代號:000)<br>
          帳號：000-001-000000<br>
          戶名：藻作坊有限公司
        </p>
      </div>
      <div class="PaymentInstructions_block">
        <h3 class="PaymentInstructions_subTitle">
          Q2.可以變更付款方式嗎？
        </h3>
        <p class="PaymentInstructions_text">
          由於不同付款方式是採用不同的作業系統，且受限於銀行規定，本網站目前尚未提供您直接更改付款方式的服務。<br>
          請於上班時間使用免付費專線0800-000000（星期一 ~ 星期五，8:30 ~ 17:30 ），我們將有專員協助您處理。
        </p>
      </div>
      <div class="PaymentInstructions_block">
        <h3 class="PaymentInstructions_subTitle">
          Q3.在網路商店輸入信用卡資料，是否安全？信用卡資料會不會外流？
        </h3>
        <p class="PaymentInstructions_text">
          本網路採用SSL(SecureSocket Layer)安全協定，所以非常安全。您個人的資料皆被加密處理，在網路傳輸過程中不會被竊取，敬請安心購買。
        </p>
      </div>
      <div class="PaymentInstructions_block">
        <h3 class="PaymentInstructions_subTitle">
          Q4.信用卡資料輸入錯誤或失敗，要如何處理？
        </h3>
        <p class="PaymentInstructions_text">
          若訂購商品時因信用卡的號碼或有效日期輸入錯誤、或某種理由而造成無法使用信用卡<br>
          請於上班時間使用免付費專線與我們聯絡：0800-000000（星期一 ~ 星期五，8:30 ~ 17:30 ），我們將協助您取消訂單並請您重新購買。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'PaymentInstructions',
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
