<template>
  <div id="app">
    <CTHeader></CTHeader>
    <router-view class="app__view"></router-view>
    <CTFooter></CTFooter>


  </div>
</template>

<script>
import CTHeader from '@/components/CtHeader'
import CTFooter from '@/components/CtFooter'

export default {
  name: 'App',
  components: {
    CTHeader,
    CTFooter
  },
  metaInfo () {
    return {
      title: '頁面 TITLE',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'Description...'
      }]
    }
  }
}
</script>

<style lang="scss">
@use '@/assets/style/main.scss';

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

.app__view {
  flex: 1;
  width: 100%;
  padding-top: 80px;
  overflow-x: hidden;
  @include screen(sm) {
    padding-top: 60px;
  }
}


</style>
