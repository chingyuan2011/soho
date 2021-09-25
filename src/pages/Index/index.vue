<template>
  <div class="Index">
    <IndexBannerCarousel></IndexBannerCarousel>
    <div style="height: 100vh;"></div>
  </div>
</template>

<script>
import IndexBannerCarousel from '@/components/IndexBannerCarousel'
export default {

  name: 'Index',
  components: {
    IndexBannerCarousel
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
