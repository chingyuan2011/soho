<template>
  <div class="Login">
    <div class="container container-page">
      <div class="page_commonTitleArea">
        <Title
          en="MEMBER LOGIN"
          zh="會員登入"
        ></Title>
        <Breadcrumb :link-data="[{title: 'MEMBER LOGIN', path: '/login.html'}]"></Breadcrumb>
      </div>
      <div class="LoginSignUp_links">
        <a href="/soho/signup.html">會員註冊</a>
        <a
          href="/soho/login.html"
          class="active"
        >會員登入</a>
      </div>
      <div class="LoginSignUp_formWrap">
        <div class="LoginSignUp_socialMedia">
          <div class="LoginSignUp_title">
            社群帳號登入 /
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
            會員帳號登入 /
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
            <div class="LoginSignUp_member-form-utils">
              <label class="checkbox_wrap">
                <input
                  type="checkbox"
                  checked="checked"
                >記住我
                <span class="checkmark"></span>
              </label>
              <div>
                <a
                  href=""
                  class="forgetPwd"
                >忘記密碼？</a>
              </div>
            </div>
            <button class="LoginSignUp_member-form-btn">
              登<span></span>入
            </button>
            <div class="LoginSignUp_member-form-divider">
              <span>或是</span>
            </div>
            <button class="LoginSignUp_member-form-btn LoginSignvUp_member-form-btn-secondary">
              註<span></span>冊
            </button>
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
