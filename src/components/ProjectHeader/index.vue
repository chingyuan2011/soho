<template>
  <header class="ProjectHeader">
    <div class="container ProjectHeader-pc">
      <div class="ProjectHeader_area ProjectHeader_area-left">
        <div class="menu">
          <div class="menu_item">
            <router-link :to="{name: 'Index'}">
              <div class="menu_itemText-zh">
                關於我們
              </div>
              <div class="menu_itemText-en">
                ABOUT
              </div>
            </router-link>
          </div>
          <div class="menu_item">
            <router-link :to="{name: 'Index'}">
              <div class="menu_itemText-zh">
                檢驗認證
              </div>
              <div class="menu_itemText-en">
                DETECTION
              </div>
            </router-link>
          </div>
          <div class="menu_item">
            <router-link :to="{name: 'Index'}">
              <div class="menu_itemText-zh">
                產品資訊
              </div>
              <div class="menu_itemText-en">
                PRODUCTS
              </div>
            </router-link>
          </div>
          <div class="menu_item">
            <router-link :to="{name: 'Index'}">
              <div class="menu_itemText-zh">
                最新消息
              </div>
              <div class="menu_itemText-en">
                NEWS
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="logo">
        <img
          src="/soho/img/navbar/logo.png"
          alt="藻作坊"
        >
      </div>
      <div class="ProjectHeader_area ProjectHeader_area-right">
        <div class="menu">
          <div class="menu_item">
            <router-link :to="{name: 'Index'}">
              <div class="menu_itemText-zh">
                海藻學堂
              </div>
              <div class="menu_itemText-en">
                SEAWEED
              </div>
            </router-link>
          </div>
          <div class="menu_item">
            <router-link :to="{name: 'Index'}">
              <div class="menu_itemText-zh">
                門市據點
              </div>
              <div class="menu_itemText-en">
                STORE
              </div>
            </router-link>
          </div>
          <div class="menu_item">
            <router-link :to="{name: 'Index'}">
              <div class="menu_itemText-zh">
                聯絡我們
              </div>
              <div class="menu_itemText-en">
                CONTACT
              </div>
            </router-link>
          </div>
        </div>
        <div class="functionBar">
          <button id="functionBar_member"></button>
          <button id="functionBar_cart"></button>
          <div class="functionBar_search">
            <input
              type="text"
              placeholder="SEARCH..."
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="helper">
      <img
        src="/soho/img/navbar/layout_1.jpg"
      >
    </div> -->

    <div class="container ProjectHeader-mobile">
      <div class="logo">
        <img
          src="/soho/img/navbar/logo.png"
          alt="藻作坊"
        >
      </div>
      <div class="right">
        <div
          class="functionBar"
        >
          <button
            id="functionBar_cart"
          ></button>
        </div>
        <button class="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import {} from '@vue/composition-api'

export default {
  name: 'ProjectHeader',
  setup (props, context) {
  }
}
</script>

<style lang="scss">
.ProjectHeader {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  // position: relative;
  height: 100px;
  background-color: rgba($color: #000000, $alpha: .6);

  &::after,
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 45%;
    height: 2px;
    background-color: #fff;
  }

  &::before {
    left: 0%;
  }

  &::after {
    left: 55%;
  }

  .container {
    position: relative;
    display: flex;
    height: 100%;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 0;
      width: 200%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, .6) 0%, rgba(255, 255, 255, 0) 100%);
      transform: translate(-50%, 100%);
    }
  }

  .ProjectHeader-mobile {
    display: none;
  }

  &_area {
    z-index: 1;
    flex-basis: 47.5%;
    height: 100%;
    transform-origin: center;

    &-left {
      // margin-right: 15%;
      .menu {
        justify-content: space-around;
      }
    }

    &-right {
      display: flex;
      justify-content: space-between;

      .menu {
        flex: 1;
        flex-shrink: 0;
        justify-content: space-around;
        margin-right: auto;
      }
    }
  }

  .logo {
    z-index: 1;
    flex-basis: 12%;
    min-width: 120px;
    padding-top: 20px;
    text-align: center;

    img {
      width: 60%;
      margin: 0 auto;
    }
  }

  .menu {
    display: flex;
    height: 100%;
    color: #fff;

    a {
      display: block;
      font-weight: 700;
      letter-spacing: .1rem;
    }
  }

  .menu_item {
    position: relative;
    flex-shrink: 0;
    height: 100%;
    margin: 0 20px;
    padding: 35px 0 20px 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      opacity: 0;
      transition: opacity  .3s;
    }

    &::before {
      top: 40px;
      left: -5px;
      width: 45px;
      padding-top: 34px;
      background-image: url('/soho/img/navbar/navbar-active.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      transform: translateX(-100%);
    }

    &::after {
      bottom: 0;
      left: 50%;
      width: 120%;
      height: 4px;
      background-color: #d38759;
      border-radius: 4px;
      transform: translateX(-50%);
    }

    &:hover,
    &-active {
      position: relative;

      &::before {
        opacity: 1;
      }

      &::after {
        opacity: 1;
      }
    }

    &Text {
      &-en {
        font-weight: 500;
      }
    }
  }

  .functionBar {
    display: flex;
    align-items: center;
    height: 100%;

    button {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: 10px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      border-radius: 50%;
    }

    #functionBar_member {
      background-image: url('/soho/img/navbar/navbar_member.png');
    }

    #functionBar_cart {
      background-image: url('/soho/img/navbar/navbar_cart.png');
    }

    &_search {
      position: relative;
      flex: 0;
      margin-left: 10px;
      padding-left: 25px;

      &::before {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 20px;
        height: 20px;
        background-image: url('/soho/img/navbar/navbar_search.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }

      input {
        width: 100px;
        font-weight: 500;
        color: #fff;
        letter-spacing: .1rem;
        background-color: transparent;
        border: none;

        &:focus,
        &:focus-visible {
          border: none;
          outline: none;
        }
      }
    }
  }

  @media screen and (max-width: 1360px) {
    height: 80px;

    .ProjectHeader-pc {
      display: none;
    }

    .ProjectHeader-mobile {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        flex-basis: auto;
        width: 50px;
        min-width: auto;
        padding-top: 0;

        img {
          width: 100%;
        }
      }

      .right {
        display: flex;
        gap: 10px;
        align-items: center;

        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 25px;
          padding: 0;

          span {
            display: block;
            width: 100%;
            height: 2px;
            background-color: #fff;
          }

          span:nth-child(even) {
            width: 80%;
          }
        }
      }
    }

    &::before,
    &::after {
      display: none;
    }
  }
}
// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
