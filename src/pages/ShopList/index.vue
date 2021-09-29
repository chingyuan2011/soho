<template>
  <div class="ShopList">
    <Banner
      class="pink"
      page="shop"
    >
    </Banner>
    <div class="ShopList__content">
      <p class="ShopList__note note">
        <span>※即日起，各店營業時間隨疫情調整，請電洽各門店。歡迎來電洽詢外帶或外送服務唷！</span>
      </p>
      <div class="container">
        <div class="breadcrumbs">
          <router-link
            class="breadcrumbs__link breadcrumbs__home"
            :to="{name: 'index'}"
          >
            <img
              src="/img/breadcrumbs_home.png"
              alt="home"
            >
          </router-link>
          <router-link
            class="breadcrumbs__link"
            :to="{name: 'shopList'}"
          >
            / 找門市
          </router-link>
        </div>
        <div class="ShopList__shops row">
          <div class="ShopList__shopsArea col-12">
            <button class="ShopList__shopsAreaBtn active">
              北北基
            </button>
            <button class="ShopList__shopsAreaBtn">
              桃竹苗
            </button>
            <button class="ShopList__shopsAreaBtn">
              中彰投
            </button>
            <button class="ShopList__shopsAreaBtn">
              雲嘉南
            </button>
            <button class="ShopList__shopsAreaBtn">
              宜花東
            </button>
            <button class="ShopList__shopsAreaBtn">
              高 屏
            </button>
          </div>
          <div
            class="ShopList__shop col-6 col-md-12 wow fadeInUp"
            data-wow-duration="1s"
          >
            <div class="ShopList__shopInner">
              <div class="ShopList__shopName">
                <router-link :to="{name: 'shopContent'}">
                  新店民權店
                </router-link>
              </div>
              <div class="ShopList__shopPhone futuraBTMedium">
                <span class="prefix">TEL / </span><a href="tel:+86222181400">02-2218-1400</a>
              </div>
              <div class="ShopList__shopAdd">
                <span class="futuraBTMedium prefix">ADD / </span><a
                  target="_blank"
                  href="https://www.google.com.tw/maps?q=%E6%96%B0%E5%8C%97%E5%B8%82%E6%96%B0%E5%BA%97%E5%8D%80%E6%B0%91%E6%AC%8A%E8%B7%AF82%E8%99%9F2%E6%A8%93"
                >新北市新店區民權路82號2樓</a>
              </div>
              <div class="ShopList__shopNote">
                8月23日起新店民權店進行裝修，暫停營業。<br>裝修期間持續提供外帶服務，歡迎來電訂購。<br>新美東時尚新裝將於10月嶄新登場，屆時歡迎蒞臨體驗。西堤牛排感謝您的支持與鼓勵。
              </div>
              <div class="ShopList__shopBtns">
                <Button
                  text="線上訂位"
                  :config="{href: 'bookingUrl'}"
                ></Button>
                <Button
                  text="外帶自取"
                  :config="{href: 'toGoUrl'}"
                ></Button>
              </div>
            </div>
          </div>
          <div
            class="ShopList__shop col-6 col-md-12 wow fadeInUp"
            data-wow-duration="1s"
          >
            <div class="ShopList__shopInner">
              <div class="ShopList__shopName">
                <router-link :to="{name: 'shopContent'}">
                  台中金典綠園道店
                </router-link>
              </div>
              <div class="ShopList__shopPhone futuraBTMedium ">
                <span class="prefix">TEL / </span><a href="tel:0423102522">04-2310-2522</a>
              </div>
              <div class="ShopList__shopAdd">
                <span class="futuraBTMedium prefix">ADD / </span><a
                  target="_blank"
                  href="https://www.google.com.tw/maps?q=%E5%8F%B0%E4%B8%AD%E5%B8%82%E8%A5%BF%E5%8D%80%E5%81%A5%E8%A1%8C%E8%B7%AF1049%E8%99%9F4%E6%A8%93"
                >台中市西區健行路1049號4樓</a>
              </div>
              <div class="ShopList__shopNote">
                本門店無提供販售禮券服務, 如需購買請洽其他門店（可持禮券消費)。
              </div>
              <div class="ShopList__shopBtns">
                <Button
                  text="線上訂位"
                  :config="{href: 'bookingUrl'}"
                ></Button>
                <Button
                  text="外帶自取"
                  :config="{href: 'toGoUrl'}"
                ></Button>
              </div>
            </div>
          </div>
          <div
            class="ShopList__shop col-6 col-md-12 wow fadeInUp"
            data-wow-duration="1s"
          >
            <div class="ShopList__shopInner">
              <div class="ShopList__shopName">
                <router-link :to="{name: 'shopContent'}">
                  楠梓後昌新店
                </router-link>
              </div>
              <div class="ShopList__shopPhone futuraBTMedium ">
                <span class="prefix">TEL / </span><a href="tel:073646210">07-3646210</a>
              </div>
              <div class="ShopList__shopAdd">
                <span class="futuraBTMedium prefix">ADD / </span><a
                  target="_blank"
                  href="https://www.google.com.tw/maps?q=%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E5%BE%8C%E6%98%8C%E6%96%B0%E8%B7%AF152%E8%99%9F"
                >高雄市楠梓區後昌新路152號</a>
              </div>
              <div class="ShopList__shopNote"></div>
              <div class="ShopList__shopBtns">
                <Button
                  text="線上訂位"
                  :config="{href: 'bookingUrl'}"
                ></Button>
                <Button
                  text="外帶自取"
                  :config="{href: 'toGoUrl'}"
                ></Button>
              </div>
            </div>
          </div>
          <div
            class="ShopList__shop col-6 col-md-12 wow fadeInUp"
            data-wow-duration="1s"
          >
            <div class="ShopList__shopInner">
              <div class="ShopList__shopName">
                <router-link :to="{name: 'shopContent'}">
                  楠梓後昌新店
                </router-link>
              </div>
              <div class="ShopList__shopPhone futuraBTMedium ">
                <span class="prefix">TEL / </span><a href="tel:073646210">07-3646210</a>
              </div>
              <div class="ShopList__shopAdd">
                <span class="futuraBTMedium prefix">ADD / </span><a
                  target="_blank"
                  href="https://www.google.com.tw/maps?q=%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E5%BE%8C%E6%98%8C%E6%96%B0%E8%B7%AF152%E8%99%9F"
                >高雄市楠梓區後昌新路152號</a>
              </div>
              <div class="ShopList__shopNote"></div>
              <div class="ShopList__shopBtns">
                <Button
                  text="線上訂位"
                  :config="{href: 'bookingUrl'}"
                ></Button>
                <Button
                  text="外帶自取"
                  :config="{href: 'toGoUrl'}"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slogan futuraExtraBlack">
      Let’s TASTy, <br>Let’s Enjoy!
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
