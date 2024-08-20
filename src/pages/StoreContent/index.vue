<template>
  <div class="StoreContent">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="STORE"
          zh="門市據點"
        ></Title>
        <Breadcrumb :link-data="[{title: 'STORE', path: '/store.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="container">
      <div class="StoreContent_block">
        <div class="StoreContent_imgs">
          <div><img src="/soho/img/store/store_item1-1.jpg"></div>
          <div><img src="/soho/img/store/store_item1-2.jpg"></div>
          <div><img src="/soho/img/store/store_item1-3.jpg"></div>
        </div>
        <ul class="StoreContent_payWay">
          <li>信用卡</li>
          <li>現金</li>
        </ul>
        <div class="StoreContent_content">
          <div class="StoreContent_contentCompany">
            總公司
          </div>
          <div class="StoreContent_contentPhone">
            <img src="/soho/img/store/icon_phone.png">
            0910-827-867
          </div>
          <div class="StoreContent_contentMail">
            <img src="/soho/img/store/icon_mail.png">
            gzv6726@dr-seaweed.com.tw
          </div>
          <div class="StoreContent_contentTime">
            <img src="/soho/img/store/icon_time.png">
            AM 9:00-PM 17:00
          </div>
          <div class="StoreContent_contentLocation">
            <img src="/soho/img/store/icon_location.png">
            高雄市前鎮區擴建路1-29號13樓
          </div>
        </div>
        <div class="StoreContent_mainLinks">
          <a
            href="https://www.facebook.com/"
            target="_blank"
          >
            <span>前往臉書</span>
            <span class="StoreContent_mainLinkArrow"></span>
          </a>
          <a
            href="/soho/news.html"
          >
            <span>最新活動</span>
            <span class="StoreContent_mainLinkArrow"></span>
          </a>
        </div>
        <div class="StoreContent_note">
          <h3>
            秋相聚有我陪！連假瘋玩遊戲再賺最高$500回饋！
          </h3>
          <div>
            1、活動期間：2024/9/27~2024/10/1<br>
            2、活動辦法：活動期間內於App Store/Google Play商店使用「台灣大哥大電信帳單代收」付款，累積消費$500,並於此頁面完成登記,狂賺10%帳單折抵金回饋,每人最高回饋$500,名額限量2,000名,額滿為止請火速參加！(額滿不另行通知)。
          </div>
        </div>
        <div class="StoreContent_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.706201454013!2d120.30273659999999!3d22.590089199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e030bf36aaaab%3A0x14a9f80a16da3e98!2zODA26auY6ZuE5biC5YmN6Y6u5Y2A5pO05bu66LevMeS5izMx6JmfMTPmqJM!5e0!3m2!1szh-TW!2stw!4v1724106721224!5m2!1szh-TW!2stw"
            style="border: 0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="StoreContent_backHandler">
          <a
            href="/soho/store.html"
            class="link"
          >
            <span class="arrow"></span>
            <span>回上一頁</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'StoreContent',
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
