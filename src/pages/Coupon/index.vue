<template>
  <div class="Coupon">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="DISCOUNT COUPON"
          zh="我的折價券"
        ></Title>
        <Breadcrumb :link-data="[{title: 'DISCOUNT COUPON', path: '/coupon.html'}]"></Breadcrumb>
      </div>
    </div>

    <Tabs></Tabs>

    <div class="container">
      <div class="Coupon__wrap">
        <div class="Coupon__title">
          我的折價券 /
        </div>

        <div class="Coupon__tabs">
          <button class="active">
            可使用
          </button>
          <button>
            已使用
          </button>
          <button>
            已過期
          </button>
        </div>

        <div class="Coupon__search">
          <input
            id=""
            class="Coupon__searchInput"
            type="text"
            name=""
            placeholder="輸入折扣碼"
          >
          <button class="Coupon__searchBtn">
            領取
          </button>
        </div>

        <div class="Coupon__couponList">
          <div class="Coupon__coupon">
            <div class="Coupon__price">
              ＄50
            </div>
            <div class="Coupon__info">
              <div class="Coupon__infoTitle">
                首次購物 折$50
              </div>
              <div class="Coupon__infoDateTitle">
                使用日期
              </div>
              <div class="Coupon__infoDate">
                2024/07/01～2024/07/31
              </div>
            </div>
          </div>

          <div class="Coupon__coupon">
            <div class="Coupon__price">
              ＄150
            </div>
            <div class="Coupon__info">
              <div class="Coupon__infoTitle">
                會員專屬 折$150
              </div>
              <div class="Coupon__infoDateTitle">
                使用日期
              </div>
              <div class="Coupon__infoDate">
                2024/07/01～2024/07/14
              </div>
            </div>
          </div>

          <div class="Coupon__coupon">
            <div class="Coupon__price">
              9
              <span>
                折
              </span>
            </div>
            <div class="Coupon__info">
              <div class="Coupon__infoTitle">
                會員生日 當月9折
              </div>
              <div class="Coupon__infoDateTitle">
                使用日期
              </div>
              <div class="Coupon__infoDate">
                2024/07/01～2024/07/31
              </div>
            </div>
          </div>

          <div class="Coupon__coupon">
            <div class="Coupon__price">
              9
              <span>
                折
              </span>
            </div>
            <div class="Coupon__info">
              <div class="Coupon__infoTitle">
                會員生日 當月9折
              </div>
              <div class="Coupon__infoDateTitle">
                使用日期
              </div>
              <div class="Coupon__infoDate">
                2024/07/01～2024/07/31
              </div>
            </div>
          </div>
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
  name: 'Coupon',
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
