<template>
  <div id="app">
    <CTHeader></CTHeader>

    <router-view class="app__view"></router-view>
    <CTFooter></CTFooter>

    <button class="quickTop">
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

body {
  padding-top: 125px;
  @include screen(lg) {
    padding-top: 80px;
  }
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.app__view {
  flex: 1;
}

.quickTop {
  position: fixed;
  right: 60px;
  bottom: 100px;
  z-index: 100;
  padding: 0;
  background-color: transparent;
  border: 0;
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
