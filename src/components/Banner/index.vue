<template>
  <div
    class="Banner futuraExtraBlack"
    :style="bgStyle"
  >
    <div class="Banner__title">
      {{ page.toUpperCase() }}
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  name: 'Banner',
  props: {
    page: {
      type: String,
      require: true,
      default: ''
    }
  },
  setup (props, context) {
    const bgStyle = computed(() => {
      return {
        backgroundImage: `url('/img/banner_${props.page}.jpg')`
      }
    })

    return {
      bgStyle
    }
  }
}
</script>

<style lang="scss">
.Banner {
  position: relative;
  padding-top: 14%;
  font-size: 180px;
  line-height: 1;
  color: rgba($color: #fff, $alpha: .3);
  background-position: right bottom;
  background-size: 100% auto;

  &.pink {
    color: rgba($color:  #951e23, $alpha: .6);
  }

  &__title {
    position: absolute;
    top: 50%;
    left: 35px;
    font-size: 9vw;
    transform: translateY(-50%);
  }

  @include screen(lg) {
    padding-top: 21%;

    &__title {
      left: 20px;
      font-size: 14vw;
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
