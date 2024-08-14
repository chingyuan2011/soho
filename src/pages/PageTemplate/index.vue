<template>
  <div class="PageTemplate">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="RETURNS & REFUNDS"
          zh="退換貨說明"
        ></Title>
        <Breadcrumb :link-data="[{title: 'RETURNS & REFUNDS', path: '/returnsAndRefunds.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="container">
      <h2 class="ReturnsAndRefunds_pageTitle">
        退換貨說明 /
      </h2>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Bonus',
  components: {
    Title,
    Breadcrumb
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
