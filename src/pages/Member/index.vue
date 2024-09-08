<template>
  <div class="Member Page">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="MEMBER ACCOUNT"
          zh="會員中心"
        ></Title>
        <Breadcrumb
          :link-data="[{ title: 'MEMBER ACCOUNT', path: '/Member.html' }]"
        ></Breadcrumb>
      </div>
    </div>

    <Tabs></Tabs>
    <div class="container">
      <div class="Member__wrap">
        <div class="Member_avatar">
          <div class="Member_avatar-pic">
            <img
              src="/soho/img/member/member_people.png"
              alt=""
            >
            <button>
              <img
                src="/soho/img/member/member_edit.png"
                alt=""
              >
            </button>
          </div>
          <div class="Member_avatar-info">
            <div class="Member_avatar-name">
              吳小可
            </div>
            <div class="Member_avatar-type">
              一般會員
            </div>
          </div>
        </div>
        <div class="Member_info">
          <div class="Member_info-data">
            <div class="Member_title">
              會員資料 /
            </div>
            <div class="Member_info-form">
              <div class="Member_info-form-item required">
                <label for="name">姓名</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value="吳小可"
                  placeholder="請填入真實姓名"
                >
              </div>
              <div class="Member_info-form-item">
                <label for="birthday">生日</label>
                <input
                  id="birthday"
                  type="date"
                  name="birthday"
                  placeholder=""
                >
              </div>
              <div class="Member_info-form-item">
                <label>性別</label>
                <div class="Member_info-form-item-radio">
                  <label class="radio_wrap">
                    <input
                      name="gender"
                      type="radio"
                    >
                    <span class="checkmark">男生</span>
                  </label>
                  <label class="radio_wrap">
                    <input
                      name="gender"
                      type="radio"
                      checked="checked"
                    >
                    <span class="checkmark">女生</span>
                  </label>
                </div>
              </div>
              <div class="Member_info-form-item required">
                <label for="phone">聯絡電話</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  value="0901138130"
                  placeholder="請填入手機號碼"
                >
              </div>
              <div class="Member_info-form-item required">
                <label for="email">電子信箱</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  value="136designco.ltd@gmail.com"
                  placeholder="請輸入電子信箱"
                >
              </div>

              <div class="Member_info-form-item required ">
                <label for="address">收件地址</label>
                <div class="address-select-wrap">
                  <div class="customSelect">
                    <select

                      address-select-wrap
                      name="city"
                    >
                      <option
                        value=""
                        disabled
                        selected
                      >
                        縣市
                      </option>
                    </select>
                  </div>
                  <div class="customSelect">
                    <select name="area">
                      <option
                        value=""
                        disabled
                        selected
                      >
                        區域
                      </option>
                    </select>
                  </div>
                  <input
                    id="code"
                    type="text"
                    name="code"
                    value="000"
                    placeholder="郵遞區號"
                  >
                </div>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="街道地址"
                >
              </div>
            </div>
          </div>
          <div class="Member_info-password">
            <div class="Member_info-passwordOptions">
              <div class="Member_title">
                密碼 /
              </div>
              <div class="Member_info-form-item required">
                <label for="oldPwd">舊密碼</label>
                <input
                  id="oldPwd"
                  type="password"
                  name="oldPwd"
                  placeholder="0901138130"
                >
              </div>
              <div class="Member_info-form-item required">
                <label for="newPwd">新密碼</label>
                <input
                  id="newPwd"
                  type="password"
                  name="newPwd"
                  placeholder="136136136"
                >
              </div>
              <div class="Member_info-form-item required">
                <label for="confirmPwd">確認密碼</label>
                <input
                  id="confirmPwd"
                  type="password"
                  name="confirmPwd"
                  placeholder="136136136"
                >
              </div>
            </div>
            <div class="Member_info-socialMedia active">
              <div class="Member_title">
                社群帳號 /
              </div>
              <div class="Member_line">
                <div class="Member_line-pic">
                  <img
                    src="/soho/img/member/member_line.png"
                    alt=""
                  >
                </div>
                <button>
                  解除綁定
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="Member_footer">
          <button
            id="submit-client-form"
            class="active"
          >
            更 新
          </button>
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
  name: 'Member',
  components: {
    Title,
    Breadcrumb,
    Tabs

  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
