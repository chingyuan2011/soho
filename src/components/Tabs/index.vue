<template>
  <div class="Tabs">
    <div class="Tabs__container">
      <div class="Tabs__content">
        <router-link
          :to="{ name: 'Member' }"
          :class="{active: isActive('/member.html')}"
        >
          會員中心
        </router-link>
        <router-link
          :to="{ name: 'OrderList' }"
          :class="{active: isActive('/orderList.html')}"
        >
          訂單查詢
        </router-link>
        <router-link
          :to="{ name: 'Collect' }"
          :class="{active: isActive('/collect.html')}"
        >
          我的收藏
        </router-link>
        <router-link
          :to="{ name: 'Coupon' }"
          :class="{active: isActive('/coupon.html')}"
        >
          我的折價券
        </router-link>
        <router-link
          :to="{ name: 'Bonus' }"
          :class="{active: isActive('/bonus.html')}"
        >
          我的紅利點數
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'ProjectFooter',
  setup (props, context) {
    const isActive = (path) => {
      console.log(window.location.pathname)
      return window.location.pathname === path
    }

    return {
      isActive
    }
  }
}
</script>

<style lang="scss">
.Tabs {
  border-color: #333;
  border-style: solid;
  border-width: 1px 0;

  &__container {
    width: 57%;
    margin: 0 auto;
    padding: 0 30px;

    @include screen(lg) {
      width: 100%;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;

    a {
      position: relative;
      padding: 20px 0;
      font-size: 16px;
      color: #333;
      text-decoration: none;
    }

    .router-link-active {
      font-size: 700;
      color: #002c18;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: #d3865a;
        border-radius: 1px;
      }
    }
  }
}
// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
