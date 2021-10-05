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
    bottom: 21%;
    left: 52%;
    width: 82.5%;
    padding-bottom: 75%;
    overflow: hidden;
    border-radius: 50%;
    transform: translate(-50%, 0);
  }

  &__flowInner {
    position: absolute;
    bottom: -2%;
    left: 0;
    width: 120%;
    height: 100%;
    background-image: url('/img/bloodFlow.png');
    background-repeat: repeat-x;
    background-position: left 100% bottom 0;
    background-size: 250%;
    transform: rotate(-8deg);
    animation: flow 10s linear infinite;

    &-light {
      bottom: 0;
      background-position: left -100% bottom 0;
      opacity: .6;
      transform: rotate(2deg);
      animation-duration: 12s;
      animation-delay: -1.5s;
    }
  }

  @keyframes flow {
    0%,
    100% {
      background-position: left 83.5% bottom 0;
    }

    99.9% {
      background-position: left 0 bottom 0;
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
