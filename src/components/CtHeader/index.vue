<template>
  <header class="CtHeader">
    <div class="container">
      <router-link
        class="CtHeader__logo"
        :to="{name: 'index'}"
      >
        <img
          src="/img/logo.png"
          alt="logo"
          draggable="false"
        >
      </router-link>
      <button
        id="CtHeader__ham"
        class="CtHeader__ham"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <nav class="CtHeader__menu">
      <ul class="futuraExtraBlack">
        <li>
          <a
            class="CtHeader__menuItem"
            href="./news/list.html"
          >
            <div class="CtHeader__en">NEWS</div>
            <div class="CtHeader__chi">最新消息</div>
          </a>
        </li>
        <li>
          <a
            class="CtHeader__menuItem"
            href="./menu/list.html"
          >
            <div class="CtHeader__en">
              MENU
            </div>
            <div class="CtHeader__chi">
              菜單介紹
            </div></a>
        </li>
        <li>
          <a
            class="CtHeader__menuItem"
            href="./member.html"
          >
            <div class="CtHeader__en">
              MEMBER
            </div>
            <div class="CtHeader__chi">
              會員中心
            </div></a>
        </li>
        <li>
          <a
            class="CtHeader__menuItem"
            href="./shop/list.html"
          >
            <div class="CtHeader__en">
              STORE
            </div>
            <div class="CtHeader__chi">
              分店據點
            </div></a>
        </li>
        <li>
          <a
            class="CtHeader__menuItem"
            href="./event.html"
          >
            <div class="CtHeader__en">
              BLOOD DONATION
            </div>
            <div class="CtHeader__chi">
              捐血公益
            </div></a>
        </li>
        <li>
          <a
            class="CtHeader__menuItem"
            href="https://cct.wowprime.com/cct/cctapp/cctwebreservation.do?&prog=cctweb_reservation&brnd_fid=SUEBQ&stor"
          >
            <div class="CtHeader__en">
              BOOKING
            </div>
            <div class="CtHeader__chi">
              線上訂位
            </div></a>
        </li>
        <li>
          <a
            class="CtHeader__menuItem"
            href=""
          >
            <div class="CtHeader__en">
              ORDER
            </div>
            <div class="CtHeader__chi">
              線上點餐
            </div></a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import {} from '@vue/composition-api'

export default {
  name: 'CtHeader',
  setup (props, context) {
  }
}
</script>

<style lang="scss">
body.hamOpen {
  height: 100vh;
  overflow: hidden;

  .CtHeader__ham span {
    &:nth-child(1) {
      transform: rotate(35deg);
    }

    &:nth-child(2) {
      transform: translateX(-100%);
    }

    &:nth-child(3) {
      transform: rotate(-35deg);
    }
  }

  .CtHeader__menu {
    pointer-events: initial;
    transform: translateY(0%);
  }
}

.CtHeader {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 200;
  height: 125px;
  padding: 10px 0px;
  background-color: #951e23;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .CtHeader__logo {
    width: 250px;
  }

  .CtHeader__ham {
    position: relative;
    z-index: 11;
    width: 50px;
    height: 30px;
    overflow: hidden;
    background-color: transparent;
    border: 0;

    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transition: transform .5s;
      transform-origin: 0 50%;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2) {
        top: calc(50% - 1px);
      }

      &:nth-child(3) {
        top: calc(100% - 2px);
      }
    }
  }

  .CtHeader__menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    pointer-events: none;
    background-color: rgba(#962233, .9);
    transition: transform .3s;
    transform: translateY(-100%);

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow-y: auto;
      line-height: 1.2;
      text-align: center;

      li {
        margin: 15px 0;
      }

      .CtHeader__menuItem {
        color: #fff;

        .CtHeader__en {
          font-size: 38px;
          transition: all .2s;

          &::first-letter {
            color: #152638;
          }
        }

        .CtHeader__chi {
          font-size: 20px;
          transition: all .2s;
        }

        &:hover {
          .CtHeader__en {
            font-size: 75px;
            color: #152638;
          }

          .CtHeader__chi {
            font-size: 24px;
          }
        }
      }
    }
  }

  @include screen(xl) {
    height: 80px;

    .CtHeader__logo {
      width: 150px;
    }

    .CtHeader__ham {
      width: 30px;
      height: 20px;

      span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transition: transform .5s;
        transform-origin: 0 50%;

        &:nth-child(1) {
          top: 0;
        }

        &:nth-child(2) {
          top: calc(50% - 1px);
        }

        &:nth-child(3) {
          top: calc(100% - 2px);
        }
      }
    }

    .CtHeader__menu {
      ul .CtHeader__menuItem {
        line-height: 1.5;

        .CtHeader__en {
          font-size: 24px;
        }

        .CtHeader__chi {
          font-size: 16px;
        }

        &:hover {
          .CtHeader__en {
            font-size: 30px;
          }

          .CtHeader__chi {
            font-size: 20px;
          }
        }
      }
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
