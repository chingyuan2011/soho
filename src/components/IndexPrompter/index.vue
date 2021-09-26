<template>
  <div
    id="IndexPrompter"
    class="IndexPrompter"
  >
    <div
      id="IndexPrompter__text"
      class="IndexPrompter__text"
    >
      宅享TASTy ! 安心Enjoy ! 即日起至8月31日，西堤推出全新輕套餐，來店自取全單85折哦！
    </div>
  </div>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'IndexPrompter',
  setup (props, context) {
  }
}
</script>

<style lang="scss">
.IndexPrompter {
  display: flex;
  align-items: center;
  height: 48px;
  overflow: hidden;
  background-color: #951e22;

  &__text {
    position: relative;
    padding: 0 5px;
    font-size: 18px;
    color: #fff;
    white-space: nowrap;
  }
  @include screen (md) {
    &__text {
      font-size: 16px;
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
