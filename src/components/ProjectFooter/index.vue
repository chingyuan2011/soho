<template>
  <footer class="ProjectFooter">
    <div class="container">
      我是 footer
      <div class="ProjectFooter__logoWrap">
        <div class="ProjectFooter__pic">
          <img
            src="/img/logo.png"
            alt="logo"
            draggable="false"
          >
        </div>
        <div class="ProjectFooter__note">
          Copyright  {{ new Date().getFullYear() }} ©  All rights reserved.
        </div>
      </div>
      <div class="ProjectFooter__content">
      </div>
    </div>
  </footer>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'ProjectFooter',
  setup (props, context) {}
}
</script>

<style lang="scss">
.ProjectFooter {}
// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
