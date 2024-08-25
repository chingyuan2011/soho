<template>
  <div id="app">
    <ProjectHeader></ProjectHeader>
    <router-view class="app__view"></router-view>
    <MobileToolBar></MobileToolBar>
    <ProjectFooter></ProjectFooter>
    <FloatBtn></FloatBtn>
  </div>
</template>

<script>
import ProjectHeader from '@/components/ProjectHeader'
import ProjectFooter from '@/components/ProjectFooter'
import MobileToolBar from '@/components/MobileToolBar'
import FloatBtn from './components/FloatBtn/FloatBtn.vue'

export default {
  name: 'App',
  components: {
    ProjectHeader,
    ProjectFooter,
    MobileToolBar,
    FloatBtn
  },
  metaInfo () {
    return {
      title: '藻作坊',
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
}

</style>
