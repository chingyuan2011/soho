<template>
  <div
    class="Modal"
  >
    <div
      id="Modal__back"
      class="Modal__back"
    ></div>
    <div class="Modal__contentWrap">
      <button
        id="Modal__close"
        class="Modal__close"
      >
      </button>
      <div
        id="Modal__content"
        class="Modal__content"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'Modal',
  setup (props, context) {
  }
}
</script>

<style lang="scss">

body.popOpen {
  overflow: hidden;

  .Modal {
    display: block;
  }

  .MenuContent__content,
  .Event__content {
    z-index: 200;
  }
}

.Modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 400;
  display: none;
  min-width: 320px;

  &__back {
    width: 100%;
    height: 100%;
    background-color: rgba(#000, .4);
  }

  &__contentWrap {
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%) translateY(-50%);
  }

  .Modal__close {
    position: absolute;
    top: -15px;
    right: -15px;
    z-index: 1;
    width: 30px;
    height: 30px;
    background-color: #951e23;
    border-radius: 50%;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 5px;
      left: calc(50% - 1px);
      width: 2px;
      height: 20px;
      background-color: #fff;
      transform-origin: center;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
}
</style>
