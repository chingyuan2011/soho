<template>
  <div
    class="Modal"
  >
    <div
      id="Modal__back"
      class="Modal__back"
    ></div>
    <div class="Modal__content">
      <button
        id="btn__close"
        class="btn__close"
      >
      </button>
      <!-- <div class="modal-header">
          <h4
            id="mySmallModalLabel"
            class="modal-title nk-title"
          >
            Small modal
          </h4>
        </div>
        <div class="modal-body">
        </div> -->
      <slot></slot>
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
  .Modal {
    display: block;
  }
}

.Modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  display: none;

  &__back {
    width: 100%;
    height: 100%;
    background-color: rgba(#000, .4);
  }

  &__content {
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #152638;
    transform: translateX(-50%) translateY(-50%);
  }

  .btn__close {
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

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
