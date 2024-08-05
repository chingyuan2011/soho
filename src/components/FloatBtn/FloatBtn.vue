<template>
  <div class="FloatBtn">
    <a
      href="javascript:;"
      target="_blank"
    >
      <img
        src="/soho/img/floatBtn_chat.png"
        alt="chat"
      >
    </a>
    <a
      href="javascript:;"
      target="_blank"
    >
      <img
        src="/soho/img/floatBtn_cart.png"
        alt="cart"
      >
    </a>
    <button id="btn__quickTop">
      <img
        src="/soho/img/floatBtn_up.png"
        alt="up"
      >
    </button>
  </div>
</template>
<script>

export default {
  name: 'FloatBtn',
  setup (props, context) {
  }
}
</script>

  <style lang="scss">

.FloatBtn {
  position: fixed;
  right: 20px;
  bottom: 40px;
  z-index: 10;
  max-width: 115px;

  a,
  button {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    background-color: transparent;
  }

  @include screen(lg) {
    right: 20px;
    bottom: 40px;
    max-width: 80px;

    a {
      img {
        width: 40px;
      }
    }

    a,
    button {
      margin-bottom: 10px;
    }
  }
}
// xxl | xl | lg | md | sm
// @include screen (xl) {}
  </style>
