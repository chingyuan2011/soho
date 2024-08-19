<template>
  <footer class="ProjectFooter">
    <div class="container">
      <div class="ProjectFooter_content">
        <div class="ProjectFooter_logoWrap">
          <div class="ProjectFooter_pic">
            <img
              src="/soho/img/footer/footer_logo.png"
              alt="logo"
              draggable="false"
            >
          </div>
        </div>
        <div class="ProjectFooter_linkPart">
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle notoSerif">
              深入暸解
            </div>
            <div class="ProjectFooter_linkList">
              <a
                href="/soho/about.html"
              >關於我們</a>
              <a
                href="/soho/certification.html"
              >永續發展</a>
              <a
                href="/soho/news.html"
              >最新消息</a>
              <a
                href="/soho/seaweedList.html"
              >海藻學堂</a>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle notoSerif">
              藻藻帶回家
            </div>
            <div class="ProjectFooter_linkList">
              <a
                href="/soho/certification.html"
              >檢驗認證</a>
              <a
                href="/soho/productList.html"
              >產品總覽</a>
              <a
                href="/soho/index.html"
              >分類一</a>
              <a
                href="/soho/index.html"
              >分類二</a>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle notoSerif">
              藻門市吧
            </div>
            <div class="ProjectFooter_linkList">
              <a
                href="/soho/storeContent.html"
              >彩虹門市</a>
              <a
                href="/soho/storeContent.html"
              >檜意門市</a>
              <a
                href="/soho/contact.html"
              >聯絡我們</a>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle notoSerif">
              會員中心
            </div>
            <div class="ProjectFooter_linkList">
              <a
                href="/soho/login.html"
              >會員登入</a>
              <a
                href="/soho/orderStatus.html"
              >歷史訂單</a>
              <a
                href="/soho/coupon.html"
              >優惠折扣</a>
              <a
                href="/soho/bonus.html"
              >紅利點數</a>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle notoSerif">
              會員權益
            </div>
            <div class="ProjectFooter_linkList">
              <a
                href="/soho/paymentInstructions.html"
              >購物須知</a>
              <a
                href="/soho/returnsAndRefunds.html"
              >退換貨說明</a>
              <a
                href="/soho/index.html"
              >隱私權政策</a>
              <a
                href="/soho/registTerm.html"
              >會員註冊條款</a>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle notoSerif">
              聯絡資訊
            </div>
            <div class="ProjectFooter_linkList">
              <div
                class="ProjectFooter_linkList-text"
              >
                <img src="/soho/img/footer/footer_phone.png">0910-827-867
              </div>
              <div
                class="ProjectFooter_linkList-text"
              >
                <img src="/soho/img/footer/footer_time.png">AM 9:00-PM 18:00
              </div>
              <div
                class="ProjectFooter_linkList-text"
              >
                <img src="/soho/img/footer/footer_email.png">gzv6726@dr-seaweed.com.tw
              </div>
              <div
                class="ProjectFooter_linkList-text"
              >
                <img src="/soho/img/footer/footer_position.png">嘉義市東區共和路191巷6號
              </div>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle notoSerif">
              關注我們
            </div>
            <div class="ProjectFooter_socialMedia">
              <a
                href="/soho/index.html"
              ><img
                src="/soho/img/footer/footer_line.png"
                alt="LINE"
              ></a>
              <a
                href="/soho/index.html"
              ><img
                src="/soho/img/footer/footer_fb.png"
                alt="fb"
              ></a>
              <a
                href="/soho/index.html"
              ><img
                src="/soho/img/footer/footer_yt.png"
                alt="yt"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ProjectFooter_note">
      <div class="container">
        {{ new Date().getFullYear() }} © 藻作坊 Designed By 禾藝叁陸巷有限公司
      </div>
    </div>
    <!-- <div class="helper">
      <img
        src="/soho/img/footer/footer_layout.jpg"
      >
    </div> -->
  </footer>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'ProjectFooter',
  setup (props, context) {}
}
</script>

<style lang="scss" src="./style.scss"></style>
