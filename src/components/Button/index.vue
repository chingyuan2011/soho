<template>
  <a
    v-if="typeSetting.href"
    :href="typeSetting.href"
    class="Button"
    :target="typeSetting.target"
  >
    <span
      v-if="icon"
      class="Button__icon"
    >
      <img
        :src="`/img/icon_${icon}.png`"
        :alt="text"
      >
    </span>
    {{ text.toUpperCase() }}
  </a>
  <router-link
    v-else-if="typeSetting.to"
    :to="{name: typeSetting.to}"
    class="Button"
  >
    <span
      v-if="icon"
      class="Button__icon"
    >
      <img
        :src="`/img/icon_${icon}.png`"
        :alt="text"
      >
    </span>
    {{ text.toUpperCase() }}
  </router-link>
  <button
    v-else
    class="Button"
  >
    <span
      v-if="icon"
      class="Button__icon"
    >
      <img
        :src="`/img/icon_${icon}.png`"
        :alt="text"
      >
    </span>
    {{ text.toUpperCase() }}
  </button>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      require: true,
      default: '22'
    },
    config: {
      type: Object,
      default: () => ({})
    },
    icon: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const typeSetting = computed(() => {
      const content = props.config
      if (content.href) {
        return {
          href: content.href,
          target: content.target || '_self'
        }
      } else if (content.to) {
        return {
          to: content.to,
          replace: content.replace || false
        }
      }
      return content
    })

    return {
      typeSetting
    }
  }
}
</script>

<style lang="scss">
.Button {
  margin-top: 5px;
  margin-right: 5px;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  letter-spacing: 1.2px;
  background-color: #a78a70;
  box-shadow: 5px -5px 0 #000;

  &__icon {
    display: inline-block;
    width: 16px;
    height: 16px;
  }

  @include screen(md) {
    font-size: 16px;
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
