<template>
  <div class="News Page">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="NEWS"
          zh="最新消息"
        ></Title>
        <Breadcrumb :link-data="[{title: 'NEWS', path: '/news.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="News_followerWrap">
      <div
        id="News_follower"
        class="News_follower"
      >
        <div class="News_followerArrow">
          <span></span>
        </div>
        <div
          id="News_followerVideo"
          class="News_followerVideo"
        >
        </div>
      </div>
    </div>
    <div class="container">
      <div
        id="News_list"
        class="News_list"
      >
        <a
          href="/soho/newsContent.html"
          data-youtube-id="KSXTXalqWL8"
          class="News_item"
        >
          <div class="News_time">2024/07/05</div>
          <h2 class="News_title">海裡多少會有重金屬</h2>
          <div class="News_content">
            <p>
              不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。
            </p>
            <div class="News_arrow"></div>
          </div>
        </a>
        <a
          href="/soho/newsContent.html"
          data-youtube-id="mCCAesaJZSo"
          class="News_item"
        >
          <div class="News_time">2024/07/05</div>
          <h2 class="News_title">海裡多少會有重金屬</h2>
          <div class="News_content">
            <p>
              不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。
            </p>
            <div class="News_arrow"></div>
          </div>
        </a>
        <a
          href="/soho/newsContent.html"
          data-youtube-id=""
          class="News_item"
        >
          <div class="News_time">2024/07/02</div>
          <h2 class="News_title">海裡多少會有重金屬</h2>
          <div class="News_content">
            <p>
              不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。
            </p>
            <div class="News_arrow"></div>
          </div>
        </a>
        <a
          href="/soho/newsContent.html"
          data-youtube-id="KSXTXalqWL8"
          class="News_item"
        >
          <div class="News_time">2024/06/28</div>
          <h2 class="News_title">海裡多少會有重金屬</h2>
          <div class="News_content">
            <p>
              不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。
            </p>
            <div class="News_arrow"></div>
          </div>
        </a>
        <a
          href="/soho/newsContent.html"
          data-youtube-id=""
          class="News_item"
        >
          <div class="News_time">2024/06/18</div>
          <h2 class="News_title">海裡多少會有重金屬</h2>
          <div class="News_content">
            <p>
              不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。
            </p>
            <div class="News_arrow"></div>
          </div>
        </a>
        <a
          href="/soho/newsContent.html"
          data-youtube-id="KSXTXalqWL8"
          class="News_item"
        >
          <div class="News_time">2024/06/03</div>
          <h2 class="News_title">海裡多少會有重金屬</h2>
          <div class="News_content">
            <p>
              不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。
            </p>
            <div class="News_arrow"></div>
          </div>
        </a>
        <a
          href="/soho/newsContent.html"
          data-youtube-id=""
          class="News_item"
        >
          <div class="News_time">2024/06/01</div>
          <h2 class="News_title">海裡多少會有重金屬</h2>
          <div class="News_content">
            <p>
              不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。
            </p>
            <div class="News_arrow"></div>
          </div>
        </a>
      </div>
      <PageControl class="News_pageController"></PageControl>
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
