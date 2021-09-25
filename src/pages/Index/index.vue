<template>
  <div class="Index">
    <IndexBannerCarousel></IndexBannerCarousel>
    <IndexMenuCarousel></IndexMenuCarousel>
    <div style="height: 100vh;"></div>
  </div>
</template>

<script>
import IndexBannerCarousel from '@/components/IndexBannerCarousel'
import IndexMenuCarousel from '@/components/IndexMenuCarousel'

export default {

  name: 'Index',
  components: {
    IndexBannerCarousel,
    IndexMenuCarousel
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
