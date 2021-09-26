<template>
  <div id="app">
    <CTHeader></CTHeader>
    <router-view class="app__view"></router-view>
    <CTFooter></CTFooter>

    <button
      id="btn__quickTop"
      class="btn__quickTop"
    >
      <img
        src="/img/btn_top.png"
        alt="top"
        draggable="false"
      >
    </button>
  </div>
</template>

<script>
import CTHeader from '@/components/CtHeader'
import CTFooter from '@/components/CtFooter'

export default {
  name: 'App',
  components: {
    CTHeader,
    CTFooter
  },
  metaInfo () {
    return {
      title: 'Title...',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'Description...'
      }]
    }
  }
}
</script>

<style lang="scss">
@use '@/assets/style/main.scss';

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.app__view {
  flex: 1;
  padding-top: 125px;
  @include screen(xl) {
    padding-top: 80px;
  }
}

.btn__quickTop {
  position: fixed;
  right: 60px;
  bottom: 40px;
  z-index: 100;
  padding: 0;
  background-color: transparent;
  border: 0;

  @include screen(lg) {
    right: 30px;
    bottom: 20px;
    width: 50px;
  }
}

// slider
.nk-carousel {
  position: relative;
}

.nk-carousel-prev,
.nk-carousel-next {
  position: absolute;
  top: calc(50% - 20px);
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #a78a70;
  box-shadow: 0px 0px 10px color(black);

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 10px);
    width: 0;
    height: 0;
    border-style: solid;
  }
}

.nk-carousel-prev {
  &::before {
    left: 10px;
    border-color: transparent #000000 transparent transparent;
    border-width: 10px 17.3px 10px 0;
  }
}

.nk-carousel-next {
  right: 0;

  &::before {
    right: 10px;
    border-color: transparent transparent transparent #000000;
    border-width: 10px 0 10px 17.3px;
  }
}
@include screen(lg) {
  .nk-carousel-prev,
  .nk-carousel-next {
    top: calc(50% - 15px);
    width: 30px;
    height: 30px;
    box-shadow: 0px 0px 5px color(gray, 400);

    &::before {
      top: calc(50% - 10px);
      width: 0;
      height: 0;
    }
  }

  .nk-carousel-prev {
    &::before {
      left: 5px;
    }
  }

  .nk-carousel-next {
    right: 0;

    &::before {
      right: 5px;
    }
  }
}
</style>
