<template>
  <div class="ReturnsAndRefunds Page">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="RETURNS & REFUNDS"
          zh="退換貨說明"
        ></Title>
        <Breadcrumb :link-data="[{title: 'RETURNS & REFUNDS', path: '/returnsAndRefunds.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="container">
      <h2 class="ReturnsAndRefunds_pageTitle">
        退換貨說明 /
      </h2>
      <div class="ReturnsAndRefunds_block">
        <h3 class="ReturnsAndRefunds_subTitle">
          商品鑑賞期
        </h3>
        <p class="ReturnsAndRefunds_text">
          除易於腐敗、保存期限較短（退貨／取消時即將逾期）類之食品、客製化商品、當期之報紙、期刊或雜誌、經拆封之影音商品或電腦軟體、遊戲點數卡、其他點數卡、已拆封之個人衛生用品等按「通訊交易解除權合理例外情事適用準則」不適用 7天鑑賞期之商品外，從商品抵達您手上開始即擁有７天商品鑑賞期 （７天含假日）。
        </p>
        <p class="ReturnsAndRefunds_text">
          如有退貨需求，請於收到商品７天內聯絡客服人員，並提供「姓名」、「訂單編號」、「連絡電話」、「退貨商品名稱」、「退貨原因及照片」等資料，客服人員收到後將會協助您進行退換貨。
        </p>
      </div>
      <div class="ReturnsAndRefunds_block">
        <h3 class="ReturnsAndRefunds_subTitle">
          退貨須知
        </h3>
        <p class="ReturnsAndRefunds_text">
          退貨商品須為未經使用，且無非人為瑕疵所造成的污損、故障，消保法保障 7 天鑑賞期僅供您猶豫並確認商品是否符合您的需求，並非商品的試用期；如本商店有提示您者，請保留完整的原始包裝（含外包裝紙盒），否則恕不接受退貨。
        </p>
        <p class="ReturnsAndRefunds_text">
          以下情況無法接受退貨：
          <ul>
            <li class="ReturnsAndRefunds_text-highlight">
              超過 7 天的商品鑑賞期。
            </li>
            <li>商品已拆封使用，或因人為因素而產生的破壞，如：污損、故障、損毀、磨損、擦傷、刮傷、髒污。</li>
            <li class="ReturnsAndRefunds_text-highlight">
              退貨商品包裝破損不完整，或發票、配件不齊者。
            </li>
            <li>惡意或大量退貨。</li>
          </ul>
        </p>
      </div>
      <div class="ReturnsAndRefunds_block">
        <h3 class="ReturnsAndRefunds_subTitle">
          退貨流程
        </h3>
        <p class="ReturnsAndRefunds_text">
          聯絡客服人員 → 確認可退貨 → 準備完整商品及發票 → 提供收件時間及聯絡資訊、地址 → 將由商店委託之物流進行回收。
        </p>
      </div>
      <div class="ReturnsAndRefunds_block">
        <h3 class="ReturnsAndRefunds_subTitle">
          退款說明
        </h3>
        <p class="ReturnsAndRefunds_text">
          <ul>
            <li>信用卡付款者：確認退貨成功後，會直接把款項刷退至原付款的信用卡帳號中。</li>
            <li>貨到付款者：確認退貨成功後，則將退款費用轉帳至您提供的銀行帳戶中。</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'ReturnsAndRefunds',
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
