<template>
  <div class="CartProcess1">
    <div class="container">
      <Title
        en="SHOPPING CART"
        zh="我的購物車"
      ></Title>
      <Breadcrumb :link-data="[{title: 'MEMBER CENTER', path: '/cartProcess1.html'}]"></Breadcrumb>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'CartProcess1',
  components: {
    Title,
    Breadcrumb
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
