<template>
  <div
    class="mkt-header"
  >
    <dl class="mkt-header__container">
      <dt>
        廣告企劃
      </dt>
      <dd>
        <span>→ 以下是</span>
        <span>{{ company }}</span>
        <span>提供的內容</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'MktHeader',
  props: {
    company: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
$height: 40px;
$container-max-width: 1200px;

.mkt-header {
  position: relative;
  background-color: #fff;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: $container-max-width;
    min-height: $height;
    margin: 0 auto;
    padding: .2em 15px;
  }

  dt {
    font-size: 17px;
    font-weight: bold;
    color: color(black);
    white-space: nowrap;
  }

  dd {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    font-size: 14px;
    text-align: right;
    white-space: pre-wrap;

    span {
      padding: 0 3px;
    }
  }
}
// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
