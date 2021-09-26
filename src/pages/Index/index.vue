<template>
  <div class="Index">
    <Modal
      id=""
      class="Index__popUp"
    >
      <img
        class="modal__popUpLine"
        src="/img/decoration.png"
      >
      <div class="Modal__body">
        <img
          class="modal__popUpLine"
          src="/img/index/popup.jpg"
        >
      </div>
    </Modal>
    <IndexBannerCarousel></IndexBannerCarousel>
    <IndexPrompter></IndexPrompter>
    <IndexNewsCarousel></IndexNewsCarousel>
    <IndexMenuCarousel></IndexMenuCarousel>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import IndexBannerCarousel from '@/components/IndexBannerCarousel'
import IndexPrompter from '@/components/IndexPrompter'
import IndexNewsCarousel from '@/components/IndexNewsCarousel'
import IndexMenuCarousel from '@/components/IndexMenuCarousel'

export default {

  name: 'Index',
  components: {
    Modal,
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
.Index {
  .Modal__contentWrap {
    width: 50%;
    min-width: 360px;
    max-width: 500px;
    padding: 20px;
  }

  .Modal__body {
    margin-top: 20px;
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
