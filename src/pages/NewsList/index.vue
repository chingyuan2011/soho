<template>
  <div class="NewsList">
    <Banner
      class="pink"
      page="news"
    >
    </Banner>
    <div class="NewsList__content">
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
            :to="{name: 'newsList'}"
          >
            / 新消息
          </router-link>
        </div>
        <ul class="NewsList__items row">
          <li class="NewsList__item col-6 col-lg-12">
            <div class="NewsList__itemPic">
              <img
                src="/img/news1.jpg"
                alt=""
              >
            </div>
            <div class="NewsList__itemTitleWrap">
              <div class="NewsList__itemTitle title">
                準時父約
              </div>
              <div class="NewsList__itemSubTitle title">
                消費2客經典套餐爸爸免費升級重磅肉肉控
              </div>
            </div>
            <div class="NewsList__itemDates">
              <div class="NewsList__itemDatesFrom">
                <p class="prefix futuraBTMedium">
                  FROM
                </p>
                <p class="date futuraExtraBlack">
                  2021/08/01
                </p>
              </div>
              <div class="NewsList__itemDatesTo">
                <p class="prefix futuraBTMedium">
                  TO
                </p>
                <p class="date futuraExtraBlack">
                  2021/08/31
                </p>
              </div>
            </div>
            <div class="NewsList__itemContent">
              <p>對父親的愛，不受疫情影響。準時父約吧 ! 西堤替肉肉控爸爸們準備好了，與爸爸赴約西堤牛排，內用/電話外帶消費2客經典套餐，即享爸爸單客主餐免費升級重磅肉肉控鐵板牛排。</p>
            </div>
            <div class="NewsList__itemBtn">
              <Button
                class="futuraBT"
                text="view more"
                :config="{to: 'newsContent'}"
              ></Button>
            </div>
          </li>
          <li class="NewsList__item col-6 col-lg-12">
            <div class="NewsList__itemPic">
              <img
                src="/img/news2.jpg"
                alt=""
              >
            </div>
            <div class="NewsList__itemTitleWrap">
              <div class="NewsList__itemTitle title"></div>
              <div class="NewsList__itemSubTitle title">
                2021熱血解封，挽袖相挺
              </div>
            </div>
            <div class="NewsList__itemDates">
              <div class="NewsList__itemDatesFrom">
                <p class="prefix futuraBTMedium">
                  FROM
                </p>
                <p class="date futuraExtraBlack">
                  2021/08/30
                </p>
              </div>
              <div class="NewsList__itemDatesTo">
                <p class="prefix futuraBTMedium">
                  TO
                </p>
                <p class="date futuraExtraBlack">
                  2021/09/03
                </p>
              </div>
            </div>
            <div class="NewsList__itemContent">
              <p>全台平均每天約需要7,000袋熱血，西堤牛排十餘年來長期響應公益捐血活動。 2021年台灣面對疫情衝擊捐血意願降低，血庫存量頻頻告急，面對告急的血庫，西堤再次發起「熱血解封，挽袖相挺」捐血活動，捐出萬</p>
            </div>
            <div class="NewsList__itemBtn">
              <Button
                class="futuraBT"
                text="view more"
                :config="{to: 'newsContent'}"
              ></Button>
            </div>
          </li>
          <li class="NewsList__item col-6 col-lg-12">
            <div class="NewsList__itemPic">
              <img
                src="/img/news3.jpg"
                alt=""
              >
            </div>
            <div class="NewsList__itemTitleWrap">
              <div class="NewsList__itemTitle title"></div>
              <div class="NewsList__itemSubTitle title">
                禮券購 快樂Go
              </div>
            </div>
            <div class="NewsList__itemDates">
              <div class="NewsList__itemDatesFrom">
                <p class="prefix futuraBTMedium"></p>
                <p class="date futuraExtraBlack">
                </p>
              </div>
              <div class="NewsList__itemDatesTo">
                <p class="prefix futuraBTMedium"></p>
                <p class="date futuraExtraBlack">
                </p>
              </div>
            </div>
            <div class="NewsList__itemContent">
              <p>單次購買20張(含)以上享96折，另西堤套餐禮券未授權第三方單位代銷，為確保您個人的消費權益，請至直營門市購買。(宜蘭新月店、台中金典綠園道店、斗六家樂福店、台中家樂福文心店、員林大潤發店、安平家樂福</p>
            </div>
            <div class="NewsList__itemBtn">
              <Button
                class="futuraBT"
                text="view more"
                :config="{to: 'newsContent'}"
              ></Button>
            </div>
          </li>
          <li class="NewsList__item col-6 col-lg-12">
            <div class="NewsList__itemPic">
              <img
                src="/img/member_logoApp.jpg"
                alt=""
              >
            </div>
            <div class="NewsList__itemTitleWrap">
              <div class="NewsList__itemTitle title"></div>
              <div class="NewsList__itemSubTitle title">
                2021熱血解封，挽袖相挺
              </div>
            </div>
            <div class="NewsList__itemDates">
              <div class="NewsList__itemDatesFrom">
                <p class="prefix futuraBTMedium">
                  FROM
                </p>
                <p class="date futuraExtraBlack">
                  2021/08/30
                </p>
              </div>
              <div class="NewsList__itemDatesTo">
                <p class="prefix futuraBTMedium">
                  TO
                </p>
                <p class="date futuraExtraBlack">
                  2021/09/03
                </p>
              </div>
            </div>
            <div class="NewsList__itemContent">
              <p>全台平均每天約需要7,000袋熱血，西堤牛排十餘年來長期響應公益捐血活動。2021年台灣面對疫情衝擊，捐血意願降低，血庫存量頻頻告急，面對告急的血庫，西堤再次發起「熱血解封，挽袖相挺」捐血活動，捐出萬張愛心5折券號</p>
            </div>
            <div class="NewsList__itemBtn">
              <Button
                class="futuraBT"
                text="view more"
                :config="{to: 'newsContent'}"
              ></Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="slogan futuraExtraBlack">
      Let’s TASTy, <br>Let’s Enjoy!
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
