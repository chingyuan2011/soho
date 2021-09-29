<template>
  <div class="Index">
    <Modal
      id=""
      class="Index__popUp"
    >
      <img
        class="modal__popUpLine"
        src="/img/decoration.png"
      >
      <div class="Modal__body">
        <img
          class="modal__popUpLine"
          src="/img/index/popup.jpg"
        >
      </div>
    </Modal>
    <IndexBannerCarousel></IndexBannerCarousel>
    <IndexPrompter></IndexPrompter>
    <div class="Index__linksWrap">
      <div class="Index__links">
        <div class="Index__link Index__link-menu futuraExtraBlack">
          <router-link :to="{name: 'menuList'}">
            MENU<br>嚐美食
          </router-link>
        </div>
        <div class="Index__link Index__link-shop futuraExtraBlack">
          <router-link :to="{name: 'shopList'}">
            SHOPS<br>找門市
          </router-link>
        </div>
        <div class="Index__link Index__link-reserve futuraExtraBlack">
          <a
            href="https://cct.wowprime.com/cct/cctapp/cctwebreservation.do?&prog=cctweb_reservation&brnd_fid=SUEBQ&stor"
            target="_blank"
          >RESERVE<br>線上訂位</a>
        </div>
        <div class="Index__link Index__link-takeOut futuraExtraBlack">
          <a
            href="javascript:;"
            target="_blank"
          >TAKE OUT<br>外帶自取</a>
        </div>
      </div>
    </div>
    <div class="Index__tasty futuraExtraBlack">
      Let’s TASTy,<br> Let’s Enjoy!
    </div>
    <IndexNewsCarousel></IndexNewsCarousel>

    <div class="Index__delicious">
      <div class="Index__deliciousTitle">
        <span class="Index__deliciousTitle-en futuraExtraBlack">TASTy MEAL</span> <br>美味推薦
      </div>
      <IndexMenuCarousel class="Index__deliciousCarousel"></IndexMenuCarousel>
      <Button
        class="Index__deliciousBtn futuraBT"
        :config="{to: 'menuList'}"
        text="view menu"
      >
      </Button>
    </div>

    <div class="Index__ads">
      <div class="Index__ad">
        <div
          class="Index__adPic"
          style="background-image: url('./img/blood.jpg');"
        >
        </div>
        <div class="Index__adContent">
          <div class="Index__adTitle">
            <span class="Index__adTitle-en futuraExtraBlack">BLOOD</span>
            <span class="Index__adTitle-zh">捐血公益</span>
          </div>
          <div class="Index__adTitle">
            <span class="Index__adTitle-en futuraExtraBlack">DONATION</span>
          </div>
          <p class="Index__adP">
            西堤牛排十餘年來長期響應公益捐血活動發起「熱血解封，挽袖相挺 」邀請大家站出來，一起解封口罩下那藏不住的熱血!
          </p>
          <Button
            class="Index__adBtn futuraBT"
            :config="{to: 'event'}"
            text="view more"
          >
          </Button>
          <Blood class="Index__adBlood"></Blood>
        </div>
      </div>
    </div>
    <div class="footer__deco-brown">
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import IndexBannerCarousel from '@/components/IndexBannerCarousel'
import IndexPrompter from '@/components/IndexPrompter'
import IndexNewsCarousel from '@/components/IndexNewsCarousel'
import IndexMenuCarousel from '@/components/IndexMenuCarousel'
import Button from '@/components/Button'
import Blood from '@/components/Blood'

export default {

  name: 'Index',
  components: {
    Modal,
    IndexBannerCarousel,
    IndexPrompter,
    IndexNewsCarousel,
    IndexMenuCarousel,
    Button,
    Blood
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
