<template>
  <div class="Index">
    <IndexBannerCarousel></IndexBannerCarousel>
    <IndexPrompter></IndexPrompter>
    <IndexNewsCarousel></IndexNewsCarousel>
    <IndexMenuCarousel></IndexMenuCarousel>
  </div>
</template>

<script>
import IndexBannerCarousel from '@/components/IndexBannerCarousel'
import IndexPrompter from '@/components/IndexPrompter'
import IndexNewsCarousel from '@/components/IndexNewsCarousel'
import IndexMenuCarousel from '@/components/IndexMenuCarousel'

export default {

  name: 'Index',
  components: {
    IndexBannerCarousel,
    IndexPrompter,
    IndexNewsCarousel,
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
