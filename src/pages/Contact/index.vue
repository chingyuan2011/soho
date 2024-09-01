<template>
  <div class="Contact Page">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="CONTACT"
          zh="聯絡我們"
        ></Title>
        <Breadcrumb :link-data="[{title: 'CONTACT', path: '/contact.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="Contact_info">
      <div class="container">
        <div class="Contact_title">
          歡迎您透過以下<br>
          各種方式聯繫我們<br>
          <span>For more information, please contact us.</span>
        </div>
        <div>
          <div class="Contact_note">
            「藻作坊的企業使命與社會責任」<br>
            「藻作坊有限公司」於2018年正式成立，並於嘉義市檜意森活村成立第一家門市。
          </div>
          <div class="Contact_content">
            <div class="Contact_contentCompany">
              <div class="Contact_contentTitle">
                總公司
              </div>
              <div class="Contact_communityLinks">
                <a href="">
                  <img src="/soho/img/contact/icon-line.png">
                </a>
                <a href="">
                  <img src="/soho/img/contact/icon-fb.png">
                </a>
                <a href="">
                  <img src="/soho/img/contact/icon-yt.png">
                </a>
              </div>
            </div>
            <div class="Contact_contentPhone">
              <img src="/soho/img/contact/icon_phone.png">
              0910-827-867
            </div>
            <div class="Contact_contentMail">
              <img src="/soho/img/contact/icon_mail.png">
              gzv6726@dr-seaweed.com.tw
            </div>
            <div class="Contact_contentTime">
              <img src="/soho/img/contact/icon_time.png">
              AM 9:00-PM 17:00
            </div>
            <div class="Contact_contentLocation">
              <img src="/soho/img/contact/icon_location.png">
              高雄市前鎮區擴建路1-29號13樓
            </div>
            <iframe
              class="Contact_map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.706201454013!2d120.30273659999999!3d22.590089199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e030bf36aaaab%3A0x14a9f80a16da3e98!2zODA26auY6ZuE5biC5YmN6Y6u5Y2A5pO05bu66LevMeS5izMx6JmfMTPmqJM!5e0!3m2!1szh-TW!2stw!4v1724106721224!5m2!1szh-TW!2stw"
              style="border: 0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="Contact_form">
      <div class="container">
        <div class="Contact_title">
          SEND US MESSAGE
        </div>
        <div class="Contact_formContent">
          <div class="Contact_formItem">
            <label>
              <div class="Contact_formQuestion">*姓名</div>
              <input type="text">
            </label>
          </div>
          <div class="Contact_formItem">
            <label>
              <div class="Contact_formQuestion">*電話</div>
              <input type="text">
            </label>
          </div>
          <div class="Contact_formItem">
            <label>
              <div class="Contact_formQuestion">信箱</div>
              <input type="text">
            </label>
          </div>
          <div class="Contact_formItem">
            <div class="Contact_formQuestion">
              *留言類型
            </div>
            <select>
              <option value="">
                經銷洽談
              </option>
            </select>
          </div>
          <div class="Contact_formItem">
            <div class="Contact_formQuestion">
              留言
            </div>
            <textarea
              rows="5"
              class="Contact_formTextarea"
              type="textarea"
            >
            </textarea>
          </div>
          <div class="Contact_formItem">
            <label>
              <div class="Contact_formQuestion">*驗證碼</div>
              <div class="Contact_formVerify">
                <input type="text">
                <div class="Contact_formVerifyCode">1234</div>
              </div>
            </label>
          </div>
          <button class="Contact_sendBtn">
            送出
          </button>
        </div>
      </div>
    </div>
    <div class="Contact_links">
      <div class="Contact_item">
        <div class="Contact_linkTitle">
          ONLINE<br>
          SHOP
          <br>
          <span>線上門市</span>
        </div>
        <a
          class="Contact_linkA"
          href="/soho/store.html"
        >立即前往</a>
      </div>
      <div class="Contact_item">
        <div class="Contact_linkTitle">
          DISCOUNT
          <br>
          INFORMATION
          <br>
          <span>優惠資訊</span>
        </div>
        <a
          class="Contact_linkA"
          href="/soho/store.html"
        >前往優惠</a>
      </div>
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
