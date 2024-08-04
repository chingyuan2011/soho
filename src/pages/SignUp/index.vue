<template>
  <div class="SignUp">
    <div class="container container-page">
      <div class="page_commonTitleArea">
        <Title
          en="SIGN UP"
          zh="會員註冊"
        ></Title>
        <Breadcrumb :link-data="[{title: 'SIGN UP', path: '/signup.html'}]"></Breadcrumb>
      </div>
      <div class="LoginSignUp_links">
        <a
          href="/soho/signup.html"
          class="active"
        >會員註冊</a>
        <a
          href="/soho/login.html"
        >會員登入</a>
      </div>
      <div class="LoginSignUp_formWrap">
        <div class="LoginSignUp_socialMedia">
          <div class="LoginSignUp_title">
            社群帳號註冊 /
          </div>
          <button class="LoginSignUp_line">
            <img
              src="/soho/img/login/login_line.jpg"
              alt=""
            >
          </button>
        </div>
        <div class="LoginSignUp_member">
          <div class="LoginSignUp_title">
            會員註冊 /
          </div>
          <div class="LoginSignUp_member-form">
            <label for="">
              <div class="name"><span>電子信箱</span></div>
              <input
                id=""
                placeholder="請輸入電子信箱"
                type="text"
                name=""
              >
            </label>
            <label for="">
              <div class="name">密碼</div>
              <input
                id=""
                type="password"
                name=""
              >
            </label>
            <label for="">
              <div class="name">重新輸入密碼</div>
              <input
                id=""
                type="password"
                name=""
              >
            </label>
            <label
              for=""
              class="last"
            >
              <div class="name"><span>使用者名稱</span></div>
              <input
                id=""
                placeholder="請輸入使用者名稱，字數限10字內"
                type="text"
                name=""
              >
            </label>
            <button class="LoginSignUp_member-form-btn">
              註<span></span>冊
            </button>
            <div class="SignUp_goLogin">
              已有帳號？<a href="/soho/login.html">立即登入</a>
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
export default {
  name: 'SignUp',
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
