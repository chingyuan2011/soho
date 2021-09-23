<template>
  <div id="app">
    <router-view></router-view>
    <CTFooter></CTFooter>

    <button class="quickTop">
      <img
        src="/img/btn_top.png"
        alt="top"
        draggable="false"
      >
    </button>
  </div>
</template>

<script>
import CTFooter from '@/components/CtFooter'

export default {
  name: 'App',
  components: {
    CTFooter
  },
  metaInfo () {
    return {
      title: 'Title...',
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

  .quickTop {
    position: fixed;
    right: 60px;
    bottom: 100px;
    padding: 0;
    background-color: transparent;
    border: 0;
  }

</style>
