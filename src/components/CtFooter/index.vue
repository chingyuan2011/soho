<template>
  <footer class="CtFooter">
    <div class="container">
      <div class="row">
        <div class="CtFooter__logoWrap col-4 col-lg-12">
          <div class="pic">
            <img
              src="@/assets/img/logo.png"
              alt="logo"
              draggable="false"
            >
          </div>
          <div class="note">
            2021 © 西堤 Designed By 耘想科技網頁設計
          </div>
        </div>
        <div class="CtFooter__content col-7 col-lg-12">
          <ul class="webMap">
            <li><a href="">禮券查詢</a></li>
            <li><a href="">聯絡我們</a></li>
            <li><a href="">集團品牌</a></li>
            <li><a href="">人才招募</a></li>
            <li><a href="">隱私權政策</a></li>
          </ul>
          <div class="time">
            <div class="title">
              營業時間：
            </div>
            <p>
              11:30~14:30 (最後點餐時間14:00)<br>
              17:30~22:00 (最後點餐時間21:00)
            </p>
          </div>
          <div class="links">
            <a
              class="linkBtn"
              href=""
            >
              <img
                src="@/assets/img/btn_fb.jpg"
                draggable="false"
              >
            </a>
            <a
              class="linkBtn"
              href=""
            >
              <img
                src="@/assets/img/btn_line.jpg"
                draggable="false"
              >
            </a>
            <a
              class="linkBtn"
              href=""
            >
              <img
                src="@/assets/img/btn_message.jpg"
                draggable="false"
              >
            </a>
          </div>
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
  padding: 75px 0;
  color: #fff;
  background-color: #142638;

  .row {
    align-items: center;
    justify-content: space-between;
  }

  &__logoWrap {
    .pic {
      img {
        display: block;
        margin: 0 auto;
      }
    }

    .note {
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

    .webMap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 10px;
    }

    .time {
      display: flex;
      margin-right: 20px;
    }

    .links {
      display: flex;
      align-self: center;
      margin-right: 20px;

      .linkBtn {
        margin: 0 5px;
      }
    }
  }
  @include screen(lg) {
    padding: 50px 0;

    .container {
      max-width: 600px;
    }

    .CtFooter__logoWrap {
      margin-bottom: 20px;
    }
  }

  @include screen(sm) {
    padding: 30px 0;

    .container {
      max-width: 350px;
    }

    .CtFooter__logoWrap {
      margin-bottom: 20px;
    }

    &__content {
      .webMap {
        justify-content: flex-start;

        li {
          width: 33.33%;
          margin: 5px 0px;
          text-align: center;
        }
      }

      .time {
        flex-wrap: wrap;
        margin-right: 0px;
        margin-bottom: 20px;

        .title {
          width: 100%;
        }

        p {
          margin-left: 20px;
        }
      }

      .links {
        justify-content: center;
        width: 100%;

        .linkBtn {
          margin: 0 10px;
        }
      }
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
