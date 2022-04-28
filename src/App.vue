<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
  },
  data () {
    return {
      company: 'test',
      extNumber: '0000',
      contactEmail: ''
    }
  }
}
</script>

<style lang="scss">
  @use '@/assets/style/main.scss';

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #view {
    flex: 1;
  }
</style>
