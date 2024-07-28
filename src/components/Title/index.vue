<template>
  <div class="Title">
    <div class="Title_wrap">
      <div class="Title_en">
        {{ en }}
      </div>
      <div class="Title_zh">
        <span>{{ zh }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Title',
  props: {
    en: {
      type: String,
      required: true
    },
    zh: {
      type: String,
      required: true
    }
  },
  setup (props, context) {

  }
}
</script>

<style lang="scss">
.Title {
  display: flex;
  justify-content: center;
  font-size: 40px;
  color: #002c18;
  text-align: right;

  &_wrap {
  }

  &_en,
  &_zh {
    margin-bottom: 0;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: .1em;
  }

  &_zh {
    font-size: 24px;

    span {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 3px;
        height: 100%;
        background-color: #002c18;
        transform: translate(-500%, -50%) skew(35deg);
        transform-origin: center;
      }
    }
  }
}
// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
