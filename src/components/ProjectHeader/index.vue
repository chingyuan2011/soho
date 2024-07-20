<template>
  <header class="ProjectHeader">
    <div class="container">
      我是 header
    </div>
  </header>
</template>
<script>
import {} from '@vue/composition-api'

export default {
  name: 'ProjectHeader',
  setup (props, context) {
  }
}
</script>

<style lang="scss">

.ProjectHeader {}
// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
