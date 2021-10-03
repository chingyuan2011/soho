<template>
  <footer class="CtFooter">
    <div class="container">
      <div class="CtFooter__logoWrap">
        <div class="CtFooter__pic">
          <img
            src="/img/logo.png"
            alt="logo"
            draggable="false"
          >
        </div>
        <div class="CtFooter__note">
          2021 © 西堤 Designed By 耘想科技網頁設計
        </div>
      </div>
      <div class="CtFooter__content">
        <ul class="CtFooter__webMap">
          <li><a href="">禮券查詢</a></li>
          <li><a href="contact.html">聯絡我們</a></li>
          <li><a href="">集團品牌</a></li>
          <li>
            <a
              href="https://ehrweb.104.com.tw/job.do?key=03E610518BB8EF8F36E97DCD9D11D6B08CF407DF"
            >人才招募</a>
          </li>
          <li><a href="https://wowfoods.wowprime.com/privacy.php">隱私權政策</a></li>
        </ul>
        <div class="CtFooter__time">
          <div class="CtFooter__title">
            營業時間：
          </div>
          <p>
            11:30~14:30 (最後點餐時間14:00)<br>
            17:30~22:00 (最後點餐時間21:00)
          </p>
        </div>
        <div class="CtFooter__links">
          <a
            class="CtFooter__linkBtn"
            href="https://www.facebook.com/tw.TASTy/"
          >
            <img
              src="/img/btn_fb.jpg"
              draggable="false"
            >
          </a>
          <a
            class="CtFooter__linkBtn"
            href=""
          >
            <img
              src="/img/btn_line.jpg"
              draggable="false"
            >
          </a>
          <a
            class="CtFooter__linkBtn"
            href=""
          >
            <img
              src="/img/btn_message.jpg"
              draggable="false"
            >
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'CtFooter',
  setup (props, context) {}
}
</script>

<style lang="scss">
.CtFooter {
  position: relative;
  z-index: 1;
  padding: 75px 0;
  color: #fff;
  background-color: #142638;

  .container {
    display: flex;
    align-items: center;
  }

  .CtFooter__logoWrap {
    flex-shrink: 0;
    width: 300px;
    margin-right: 20px;

    .CtFooter__pic {
      img {
        display: block;
        margin: 0 auto;
      }
    }

    .CtFooter__note {
      margin-top: 10px;
      font-size: 12px;
      text-align: center;
      letter-spacing: 1px;
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 700px;
    margin-left: 200px;
    letter-spacing: 2px;
  }

  .CtFooter__webMap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 10px;

    li ~ li {
      margin-left: 80px;
    }

    a {
      transition: all .2s;
    }

    a:hover {
      font-weight: bold;
      transform: scale(1.1);
    }
  }

  .CtFooter__time {
    display: flex;
  }

  .CtFooter__links {
    display: flex;
    align-self: center;

    .CtFooter__linkBtn {
      margin: 0 5px;
    }
  }
  @include screen(xxl) {
    &__content {
      margin-left: 100px;
    }

    .CtFooter__webMap {
      justify-content: space-between;

      li ~ li {
        margin-left: 0px;
      }
    }

    .CtFooter__time {
      margin-bottom: 20px;
    }

    .CtFooter__links {
      margin-bottom: 20px;
    }
  }
  @include screen(lg) {
    margin-top: 20px;
    padding: 40px 0 20px;

    .container {
      position: relative;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 600px;
    }

    .CtFooter__logoWrap {
      margin-bottom: 20px;
    }

    .CtFooter__note {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
    }

    .CtFooter__pic {
      max-width: 100%;
      margin: 0 auto;
    }

    &__content {
      margin-left: 0px;
    }

    .CtFooter__webMap {
      order: 2;
    }

    .CtFooter__time {
      order: 1;
      margin-bottom: 10px;
    }

    .CtFooter__links {
      justify-content: center;
      order: 3;
      width: 100%;
      padding-bottom: 20px;

      .CtFooter__linkBtn {
        margin: 0 10px;
      }
    }
  }

  @include screen(sm) {
    padding: 30px 0 20px;

    .container {
      max-width: 400px;
    }

    .CtFooter__logoWrap {
      width: 280px;
      margin-right: 0;
    }

    .CtFooter__webMap {
      justify-content: flex-start;

      li {
        width: 33.33%;
        margin: 5px 0px;
        text-align: center;
      }
    }

    .CtFooter__time {
      flex-wrap: wrap;
      margin-right: 0px;
      margin-left: 20px;

      .CtFooter__title {
        width: 100%;
      }
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
