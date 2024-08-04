<template>
  <div class="breadcrumb">
    <div class="breadcrumb_wrap">
      <div class="breadcrumb_item">
        <a href="/index.html">
          <img src="/soho/img/icon_home.png">HOME</a> {{ linkData.length > 0 && '/' }}
      </div>
      <div
        v-for="item,index in linkData"
        :key="item.title"
        class="breadcrumb_item"
      >
        <a :href="item.pah">{{ item.title }}</a> {{ (linkData.length - 1) > index ? '/' : '' }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: {
    linkData: {
      type: Array,
      required: true
    }
  },
  setup (props, context) {

  }
}
</script>

  <style lang="scss">
.breadcrumb {
  display: flex;
  justify-content: center;

  &_wrap {
    display: flex;
  }

  &_item,
  &_item > a {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    color: #002c18;
    letter-spacing: .2rem;
  }

  &_item > a {
    margin: 0 5px;

    img {
      margin-right: 5px;
    }
  }

  @include screen(md) {
    &_item,
    &_item > a {
      font-size: 13px;
    }
  }
}
// xxl | xl | lg | md | sm
// @include screen (xl) {}
  </style>
