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
          :to="{ name: 'OrderStatus' }"
          :class="{active: isActive('/orderStatus.html')}"
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
      const pathname = window.location.pathname
      return pathname.indexOf(path) !== -1
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
    margin: 0 auto;
    padding: 0 20px;
  }

  &__content {
    display: flex;
    gap: 6%;
    justify-content: center;

    @include screen(768) {
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
      padding: 10px;
      font-size: 18px;
    }

    a {
      position: relative;
      padding: 20px 0;
      font-size: 18px;
      color: #333;

      @include screen(1600) {
        font-size: 18px;
      }
      @include screen(768) {
        padding: 0;
      }
    }

    .active {
      font-weight: 700;
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
</style>
