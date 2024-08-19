<template>
  <div class="Store">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="STORE"
          zh="門市據點"
        ></Title>
        <Breadcrumb :link-data="[{title: 'STORE', path: '/store.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="container">
      <div class="Store_blocks">
        <div class="Store_block">
          <div class="Store_imgs">
            <div><img src="/soho/img/store/store_item1-1.jpg"></div>
            <div><img src="/soho/img/store/store_item1-2.jpg"></div>
            <div><img src="/soho/img/store/store_item1-3.jpg"></div>
          </div>
          <div class="Store_content">
            <div class="Store_contentCompany">
              總公司
            </div>
            <div class="Store_contentPhone">
              <img src="/soho/img/store/icon_phone.png">
              0910-827-867
            </div>
            <div class="Store_contentMail">
              <img src="/soho/img/store/icon_mail.png">
              gzv6726@dr-seaweed.com.tw
            </div>
            <div class="Store_contentTime">
              <img src="/soho/img/store/icon_time.png">
              AM 9:00-PM 17:00
            </div>
            <div class="Store_contentLocation">
              <img src="/soho/img/store/icon_location.png">
              高雄市前鎮區擴建路1-29號13樓
            </div>
            <div class="Store_contentLink">
              <a
                class=""
                href="/soho/storeContent.html"
              ></a>
            </div>
          </div>
        </div>
        <div class="Store_block">
          <div class="Store_imgs">
            <div><img src="/soho/img/store/store_item2-1.jpg"></div>
            <div><img src="/soho/img/store/store_item2-2.jpg"></div>
            <div><img src="/soho/img/store/store_item2-3.jpg"></div>
          </div>
          <div class="Store_content">
            <div class="Store_contentCompany">
              彩虹門市
            </div>
            <div class="Store_contentPhone">
              <img src="/soho/img/store/icon_phone.png">
              0910-827-867
            </div>
            <div class="Store_contentMail">
              <img src="/soho/img/store/icon_mail.png">
              gzv6726@dr-seaweed.com.tw
            </div>
            <div class="Store_contentTime">
              <img src="/soho/img/store/icon_time.png">
              AM 10:30-PM 22:00
            </div>
            <div class="Store_contentLocation">
              <img src="/soho/img/store/icon_location.png">
              高雄市左營區高鐵路115號3樓 (新光三越彩虹市集)
            </div>
            <div class="Store_contentLink">
              <a
                class=""
                href="/soho/storeContent.html"
              ></a>
            </div>
          </div>
        </div>
        <div class="Store_block">
          <div class="Store_imgs">
            <div><img src="/soho/img/store/store_item2-1.jpg"></div>
            <div><img src="/soho/img/store/store_item2-2.jpg"></div>
            <div><img src="/soho/img/store/store_item2-3.jpg"></div>
          </div>
          <div class="Store_content">
            <div class="Store_contentCompany">
              檜意門市
            </div>
            <div class="Store_contentPhone">
              <img src="/soho/img/store/icon_phone.png">
              0910-827-867
            </div>
            <div class="Store_contentMail">
              <img src="/soho/img/store/icon_mail.png">
              gzv6726@dr-seaweed.com.tw
            </div>
            <div class="Store_contentTime">
              <img src="/soho/img/store/icon_time.png">
              AM 09:00-PM 18:00
            </div>
            <div class="Store_contentLocation">
              <img src="/soho/img/store/icon_location.png">
              嘉義市東區共和路191巷6號
            </div>
            <div class="Store_contentLink">
              <a
                class=""
                href="/soho/storeContent.html"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <PageControl class="Store_PageControl"></PageControl>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
import PageControl from '@/components/PageControl'

export default {
  name: 'Bonus',
  components: {
    Title,
    Breadcrumb,
    PageControl
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
