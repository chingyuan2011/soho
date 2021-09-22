<template>
  <div class="Index">
    <h2 class="futuraBT">
      MSOHO
    </h2>
    <h2 class="futuraExtraBlack">
      MSOHO
    </h2>
    <h2 class="">
      MSOHO
    </h2>
    <CTFooter></CTFooter>
  </div>
</template>

<script>
import CTFooter from '@/components/CtFooter'
export default {
  name: 'Index',
  components: {
    CTFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.Index {}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
