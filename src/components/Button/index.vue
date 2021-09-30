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
  position: relative;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  letter-spacing: 1.2px;
  background-color: #a78a70;
  box-shadow: 5px -5px 0 #000;
  transition: box-shadow .3s;

  &__icon {
    display: inline-block;
    width: 16px;
    height: 16px;
  }

  &:hover {
    margin-top: 0;
    margin-right: 0;
    box-shadow: -5px 5px 0 #000;
  }

  @include screen(md) {
    font-size: 16px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 200%;
    background: linear-gradient(transparent, rgba($color: #fff, $alpha: .1), transparent );
    transform: rotate(60deg);
    animation: shine 3s infinite linear;
  }

  @keyframes shine {
    0% {
      left: -100%;
    }

    10% {
      left: 100%;
    }

    100% {
      left: 100%;
    }
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
