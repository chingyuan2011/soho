<template>
  <div class="Blood">
    <img
      src="/img/bloodBack.png"
      alt=""
      draggable="false"
    >
    <div class="Blood__flow">
      <div class="Blood__flowInner"></div>
      <div class="Blood__flowInner Blood__flowInner-light"></div>
    </div>
  </div>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'Blood',
  setup (props, context) {
  }
}
</script>

<style lang="scss">
.Blood {
  position: relative;

  img {
    margin: 0 auto;
  }

  &__flow {
    position: absolute;
    bottom: 120px;
    left: calc(50% + 10px);
    width: 330px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
    transform: translate(-50%, 0);
  }

  &__flowInner {
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 120%;
    height: 100%;
    background-image: url('/img/bloodFlow.png');
    background-repeat: repeat-x;
    background-position: left 100% bottom 0;
    transform: rotate(-8deg);
    animation: flow 10s linear infinite;

    &-light {
      bottom: -62px;
      background-position: left -100% bottom 0;
      opacity: .6;
      transform: rotate(2deg);
      animation-duration: 12s;
      animation-delay: 3s;
    }
  }

  @keyframes flow {
    to {
      background-position: left 0 bottom 0;
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
