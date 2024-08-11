<template>
  <div class="Collect">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="TRACKING LIST"
          zh="我的收藏"
        ></Title>
        <Breadcrumb :link-data="[{title: 'TRACKING LIST', path: '/collect.html'}]"></Breadcrumb>
      </div>
    </div>

    <Tabs></Tabs>

    <div class="container">
      <div class="Collect__wrap">
        <div class="Collect__title">
          我的收藏 /
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
import Tabs from '@/components/Tabs'
export default {
  name: 'Collect',
  components: {
    Title,
    Breadcrumb,
    Tabs
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
