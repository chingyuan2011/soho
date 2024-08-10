<template>
  <div class="RegistTerm">
    <div class="container container-page">
      <div class="page_commonTitleArea">
        <Title
          en="MEMBER AGREEMENT"
          zh="會員註冊條款"
        ></Title>
        <Breadcrumb :link-data="[{title: 'MEMBER AGREEMENT', path: '/registTerm.html'}]"></Breadcrumb>
      </div>

      <div class="RegistTerm__content">
        <div class="RegistTerm__block">
          <div class="RegistTerm__title">
            您同意以下會員註冊條款,已進行會員註冊程序：
          </div>
          <div class="RegistTerm__info">
            <div>
              1.  遵守中華民國相關法規及一切使用網際網路之國際慣例。
            </div>
            <div>
              2. 商品下訂單尚未出貨前可以隨意更改訂單狀態,如修改訂單取消訂單(客製化商品除外),一但出貨將無法取消交易。
            </div>
            <div>
              3. 會員保證願意承擔一切因個人行為而直接或間接導致的民事及刑事法律責任。
            </div>
            <div>
              4. 嚴禁惡意刪改、入侵、散播病毒或破壞本站之任何資料或頁面,否則將承擔所有法律責任。
            </div>
            <div>
              5. 會員若有任何問題與爭議,本站保留最終裁決權利。
            </div>
            <div>
              6. 會員若蓄意觸犯上述任何一項條例,本站將立即處以停權處份,並追究相關法律責任。
            </div>
            <div>
              7. 本公司有權利中止取消您的重複可疑訂單。
            </div>
          </div>
        </div>

        <div class="RegistTerm__block">
          <div class="RegistTerm__title">
            會員註冊義務：
          </div>
          <div class="RegistTerm__subTitle">
            為了能使用本服務,會員同意以下事項：
          </div>
          <div class="RegistTerm__info">
            <div>
              依本服務註冊表之提示提供會員本人正確、最新的資料，且不得以第三人之名義註冊為會員。每位會員僅能註冊登錄一個帳號,不可重覆註冊登錄。
            </div>
            <div>
              即時維持並更新會員個人資料，確保其正確性，以獲取最佳之服務。
            </div>
            <div>
              若會員提供任何錯誤或不實的資料、或未按指示提供資料、或欠缺必要之資料、或有重覆註冊帳號等情事時，藻作坊有權不經事先通知，逕行暫停或終止會員的帳號，並拒絕會員使用本服務之全部或一部。
            </div>
          </div>
        </div>

        <div class="RegistTerm__block">
          <div class="RegistTerm__title">
            會員帳號及密碼安全：
          </div>
          <div class="RegistTerm__info">
            1.  完成本服務的登記程序之後，會員將取得一個特定之密碼及會員帳號，維持密碼及帳號之機密安全，是會員的責任。任何依照規定方法輸入會員帳號及密碼與登入資料一致時，無論是否由本人親自輸入，均將推定為會員本人所使用，利用該密碼及帳號所進行的一切行動，會員本人應負完全責任。
          </div>

          <div class="RegistTerm__info">
            <div>
              會員的密碼或帳號遭到盜用或有其他任何安全問題發生時，會員將立即通知藻作坊。
            </div>
            <div>
              每次連線完畢，均結束會員的帳號使用。
            </div>
            <div>
              會員的帳號、密碼及會員權益均僅供會員個人使用及享有，不得轉借、轉讓他人或與他人合用。
            </div>
            <div>
              帳號及密碼遭盜用、不當使用或其他藻作坊無法辯識是否為本人親自使用之情況時，對此所致之損害，除證明係因可歸責於藻作坊之事由所致，藻作坊將不負任何責任。
            </div>
            <div>
              藻作坊若知悉會員之帳號密碼確係遭他人冒用時，將立即暫停該帳號之使用(含該帳號所生交易之處理)。
            </div>
            <div>
              會員需定期自行更改密碼。
            </div>
            <div>
              會員應自行在其所使用之電腦設備或行動裝置上安裝防護軟體。
            </div>
          </div>
        </div>

        <div class="RegistTerm__agree">
          <label for="">
            <input
              id=""
              type="checkbox"
              name=""
            >
            我已經詳細閱讀並同意
          </label>
        </div>

        <div class="RegistTerm__next">
          <button class="RegistTerm__nextBtn">
            <div class="RegistTerm__nextText">
              下一步
            </div>
            <div class="RegistTerm__nextBall"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'RegistTerm',
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
