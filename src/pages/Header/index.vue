<template>
  <ProjectHeader></ProjectHeader>
</template>

<script>
import ProjectHeader from '@/components/ProjectHeader'
export default {

  name: 'Header',
  components: {
    ProjectHeader
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
