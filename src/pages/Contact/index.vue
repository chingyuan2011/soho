<template>
  <div class="Contact">
    <Banner
      page="contact"
    >
    </Banner>
    <div class="Contact__content">
      <p class="Contact__note">
        <span>親愛的顧客您好：防疫期間客服與門店服務時間隨疫情調整，造成不便之處，敬請見諒。謝謝～</span>
      </p>
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
            :to="{name: 'contact'}"
          >
            / 聯絡我們
          </router-link>
        </div>
        <div class="Contact__title">
          想給我們意見、想與我們合作，<br>請立即聯絡我們
        </div>
        <div class="Contact__boxes row">
          <div class="Contact__box col-6 col-lg-12">
            <div class="Contact__boxTitle">
              一般<br>消費意見
            </div>
            <div class="Contact__boxContentWrap">
              <div class="Contact__boxContent">
                <p>
                  如果您有任何意見，歡迎與我們聯絡：<br>
                  免付費意見專線：0800-440-800 ( 訂位請撥各店電話 )<br>
                  服務時間：<br>
                  週一～週五 AM10:00～PM21:00<br>
                  週六～週日 AM10:00～PM19:00 (含國定假日與連續假日)
                </p>
                <p>服務信箱：service@tasty.com.tw</p>
              </div>
            </div>
          </div>
          <div class="Contact__box col-6 col-lg-12">
            <div class="Contact__boxTitle">
              行銷
              <br>異業合作
            </div>
            <div class="Contact__boxContentWrap">
              <div class="Contact__boxContent">
                <p>
                  如果您有禮贈品供應、異業優惠合作等，歡迎與我們聯絡：<br>E-mail：marketing@tasty.com.tw
                </p>
              </div>
            </div>
          </div>
          <div class="Contact__box col-6 col-lg-12">
            <div class="Contact__boxTitle">
              食材 /
              <br>非食材供應
            </div>
            <div class="Contact__boxContentWrap">
              <div class="Contact__boxContent">
                <p>
                  如果您有食材 / 非食材訊息提供，歡迎與我們聯絡：<br>E-mail：purchase@wowprime.com
                </p>
              </div>
            </div>
          </div>
          <div class="Contact__box col-6 col-lg-12">
            <div class="Contact__boxTitle">
              同仁意見
            </div>
            <div class="Contact__boxContentWrap">
              <div class="Contact__boxContent">
                <p>
                  歡迎集團同仁填寫您的看法及建議<br>
                  https://www.wangsteak.com.tw/part.aspx
                </p>
                <p>
                  任何意見皆會獲得重視，如需回覆請註明您的姓名及E-mail
                  ，以利相關部門可以迅速與您聯絡。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__deco-brown">
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
