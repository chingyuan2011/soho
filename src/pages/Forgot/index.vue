<template>
  <div class="Forgot Page">
    <div class="container container-page">
      <div class="page_commonTitleArea">
        <Title
          en="FORGOT PASSWORD"
          zh="忘記密碼"
        ></Title>
        <Breadcrumb :link-data="[{title: 'FORGOT PASSWORD', path: '/forgot.html'}]"></Breadcrumb>
      </div>

      <div class="LoginSignUp_formWrap">
        <div class="LoginSignUp_socialMedia">
        </div>
        <form class="LoginSignUp_member">
          <div class="LoginSignUp_title title">
            忘記密碼 /
          </div>
          <div>請輸入你當初所註冊的信箱，我們將會引導你進行密碼重設</div>

          <div class="LoginSignUp_member-form">
            <label for="">
              <div class="name subtitle"><span>註冊信箱</span></div>
              <input
                placeholder="請輸入註冊信箱"
                type="text"
                name=""
              >
            </label>

            <div class="btnWrap">
              <button class="LoginSignUp_member-form-btn">
                送<span></span>出
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Login',
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

  <style lang="scss" src="./style.scss">

  // xxl | xl | lg | md | sm
  // @include screen (xl) {}
  </style>
