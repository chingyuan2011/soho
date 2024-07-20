<template>
  <footer class="ProjectFooter">
    <div class="container">
      <div class="ProjectFooter_content">
        <div class="ProjectFooter_logoWrap">
          <div class="ProjectFooter_pic">
            <img
              src="/img/footer_logo.png"
              alt="logo"
              draggable="false"
            >
          </div>
        </div>
        <div class="ProjectFooter_linkPart">
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle">
              深入暸解
            </div>
            <div class="ProjectFooter_linkList">
              <a
                href="javascript:;"
                target="_blank"
              >關於我們</a>
              <a
                href="javascript:;"
                target="_blank"
              >永續發展</a>
              <a
                href="javascript:;"
                target="_blank"
              >最新消息</a>
              <a
                href="javascript:;"
                target="_blank"
              >海藻學堂</a>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle">
              藻藻帶回家
            </div>
            <div class="ProjectFooter_linkList">
              <a
                href="javascript:;"
                target="_blank"
              >檢驗認證</a>
              <a
                href="javascript:;"
                target="_blank"
              >產品總覽</a>
              <a
                href="javascript:;"
                target="_blank"
              >分類一</a>
              <a
                href="javascript:;"
                target="_blank"
              >分類二</a>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle">
              藻門市吧
            </div>
            <div class="ProjectFooter_linkList">
              <a
                href="javascript:;"
                target="_blank"
              >彩虹門市</a>
              <a
                href="javascript:;"
                target="_blank"
              >檜意門市</a>
              <a
                href="javascript:;"
                target="_blank"
              >聯絡我們</a>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle">
              會員中心
            </div>
            <div class="ProjectFooter_linkList">
              <a
                href="javascript:;"
                target="_blank"
              >會員登入</a>
              <a
                href="javascript:;"
                target="_blank"
              >歷史訂單</a>
              <a
                href="javascript:;"
                target="_blank"
              >優惠折扣</a>
              <a
                href="javascript:;"
                target="_blank"
              >紅利點數</a>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle">
              會員權益
            </div>
            <div class="ProjectFooter_linkList">
              <a
                href="javascript:;"
                target="_blank"
              >購物須知</a>
              <a
                href="javascript:;"
                target="_blank"
              >退換貨說明</a>
              <a
                href="javascript:;"
                target="_blank"
              >隱私權政策</a>
              <a
                href="javascript:;"
                target="_blank"
              >會員註冊條款</a>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle">
              聯絡資訊
            </div>
            <div class="ProjectFooter_linkList">
              <div
                class="ProjectFooter_linkList-text"
              >
                <img src="/img/footer_phone.png">0910-827-867
              </div>
              <div
                class="ProjectFooter_linkList-text"
              >
                <img src="/img/footer_time.png">AM 9:00-PM 18:00
              </div>
              <div
                class="ProjectFooter_linkList-text"
              >
                <img src="/img/footer_email.png">gzv6726@dr-seaweed.com.tw
              </div>
              <div
                class="ProjectFooter_linkList-text"
              >
                <img src="/img/footer_position.png">嘉義市東區共和路191巷6號
              </div>
            </div>
          </div>
          <div class="ProjectFooter_linkCategory">
            <div class="ProjectFooter_linkTitle">
              關注我們
            </div>
            <div class="ProjectFooter_socialMedia">
              <a
                href="javascript:;"
                target="_blank"
              ><img
                src="/img/footer_line.png"
                alt="LINE"
              ></a>
              <a
                href="javascript:;"
                target="_blank"
              ><img
                src="/img/footer_fb.png"
                alt="fb"
              ></a>
              <a
                href="javascript:;"
                target="_blank"
              ><img
                src="/img/footer_yt.png"
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
        src="/img/footer_layout.jpg"
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

<style lang="scss">
.ProjectFooter {
  position: relative;
  min-height: 626px;
  padding-top: 100px;
  font-weight: bold;
  color: #fff;
  background-color: #002d18;

  &_content {
    padding: 0 25px;
    padding-bottom: 120px;
  }

  &_logoWrap {
    margin-bottom: 40px;
  }

  &_linkPart {
    display: flex;
    flex-wrap: wrap;
  }

  &_linkCategory {
    flex-shrink: 0;
    margin-right: 58px;
    margin-bottom: 20px;
    @include screen(md) {
      margin-right: 38px;
    }
  }

  &_linkTitle {
    margin-bottom: 15px;
    font-size: 24px;

    @include screen(md) {
      font-size: 18px;
    }
  }

  &_linkList {
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: .2rem;
    @include screen(md) {
      font-size: 14px;
    }

    a {
      display: flex;
    }

    &-text {
      display: flex;
      align-items: center;
      letter-spacing: .1rem;

      img {
        margin-right: 5px;
      }
    }
  }

  &_socialMedia {
    a {
      margin-right: 10px;
    }
  }

  &_note {
    padding: 15px 0;
    border-top: 2px solid #fff;
    @include screen(md) {
      font-size: 14px;
    }
  }
}
// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
