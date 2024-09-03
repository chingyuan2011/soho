<template>
  <div class="SeaweedContent Page">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="SEAWEED"
          zh="海藻學堂"
        ></Title>
        <Breadcrumb :link-data="[{title: 'SEAWEED', path: '/seaweedContent.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="SeaweedContent_content">
      <div class="SeaweedContent_img wow fadeInUp">
        <img src="/soho/img/seaweedContent/seaweedContent_main.jpg">
      </div>
      <div class="SeaweedContent_main wow fadeInUp">
        <div class="container">
          <div>
            <div class="SeaweedContent_time">
              2024/07/05
            </div>
          </div>
          <div>
            <h2 class="SeaweedContent_title">
              味素的由來
            </h2>
            <br>
            <p>
              味精裡面含有人類的第五味覺「鮮味」<br>
              跟酸，甜.苦.鹹一樣都是我們人類的味覺，只是鮮味比較晚才被發現，<br>
              而提到鮮味，就必須要介紹到它的發現者與發明者池田菊苗教授的故事了
            </p>
            <br>
            <p>
              1908年的一天，日本東京帝國大學池田菊苗化學教授，晚上下班後正吃著妻子準備的可口飯菜。他發現湯的味道特別鮮美，用小勺攪動幾下，發現碗中只不過是一些海帶和幾片黃瓜。「海帶和黃瓜都是非常普通的食物，怎麼會產生這樣的鮮味呢?」池田自言自語起來，「嗯,也許海帶里有奧妙。」
            </p>
            <br>
            <p>
              職業敏感使的教授離開飯桌，跑進了實驗室里。他取來一些海帶，細細地研究。半年後，池田菊苗教授發表了他的研究成果，在海帶中可提取出一和叫做麩胺酸的化學物質，如把極少量的麩胺酸鈉加到湯里去，就能使味道鮮美至極。
            </p>
            <br>
            <p>
              這個發現發表之後，立即被一個叫鈴木三郎的日本商人看上，他放棄了當時從海帶中提取碘的計劃，轉而開始了從海帶中提取麩胺酸鈉的計劃。於是這位商人就和池田菊苗一拍即合，開始了「味素」的提煉。終於有一天，一種叫「味之素」的產品在東京淺草的一家商店裡面世了，廣告詞是這樣寫的：「家有味之素,白水變雞汁!」沒有想到的是，味素一下就被流傳使用開，最終變成了家喻戶曉的調味品。
            </p>
            <br>
            <img src="/soho/img/seaweedContent/seaweedContent_content1.jpg">

            <br><br><br>
            <h2 class="SeaweedContent_title">
              這也就是味素的由來。
            </h2>
            <br>
            <p>
              而其實在肉類與蔬果裡面其實都能找到「麩胺酸」的蹤跡，簡單舉個例子來說除了昆布以外干貝.乾香菇.柴魚.乾番茄.玉米.豬肉.雞肉......等，這些都是用來熬湯頭的食材其實本身都含有豐富的麩胺酸，而昆布高湯之所以要用昆布與柴魚片一起熬煮是為了讓這些天然食材裡的麩胺酸釋放在湯頭裡，使湯頭變得鮮美。
            </p>
          </div>
          <div class="SeaweedContent_tool">
            <button class="SeaweedContent_like">
              <img src="/soho/img/seaweedContent/seaweedContent_like.png">
              <span>6201</span>
            </button>
            <a
              class="SeaweedContent_prePage"
              href="/soho/seaweed.html"
            >
              <span class="arrow"></span>
              <span>回上一頁</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="SeaweedContent_recommend">
      <div class="SeaweedContent_recommendTitle">
        相關學堂
      </div>
      <div class="SeaweedContent_recommendList">
        <a
          class="SeaweedContent_recommendItem wow fadeInRight"
          href="/soho/seaweedContent.html"
        >
          <div class="SeaweedContent_recommendTime">2024/07/02</div>
          <div class="SeaweedContent_recommendContent">
            <div class="SeaweedContent_recommendSubTitle">
              六種最常見的食用海藻品種
            </div>
            <div class="SeaweedContent_recommendText">
              不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。
              因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。
            </div>
          </div>
          <div class="SeaweedContent_recommendImg">
            <img
              src="/soho/img/seaweedContent/seaweedContent_new1.jpg"
            >
          </div>
          <div class="SeaweedContent_recommendArrow"></div>
        </a>
        <a
          class="SeaweedContent_recommendItem wow fadeInRight"
          href="/soho/seaweedContent.html"
        >
          <div class="SeaweedContent_recommendTime">2024/06/28</div>
          <div class="SeaweedContent_recommendContent">
            <div class="SeaweedContent_recommendSubTitle">
              六種常見海藻－營養及熱量
            </div>
            <div class="SeaweedContent_recommendText">
              不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。
              因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。
            </div>
          </div>
          <div class="SeaweedContent_recommendImg">
            <img
              src="/soho/img/seaweedContent/seaweedContent_new2.jpg"
            >
          </div>
          <div class="SeaweedContent_recommendArrow"></div>
        </a>
        <a
          class="SeaweedContent_recommendItem wow fadeInRight"
          href="/soho/seaweedContent.html"
        >
          <div class="SeaweedContent_recommendTime">2024/06/18</div>
          <div class="SeaweedContent_recommendContent">
            <div class="SeaweedContent_recommendSubTitle">
              六種最常見的食用海藻品種
            </div>
            <div class="SeaweedContent_recommendText">
              不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。
              因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。
            </div>
          </div>
          <div class="SeaweedContent_recommendImg">
            <img
              src="/soho/img/seaweedContent/seaweedContent_new3.jpg"
            >
          </div>
          <div class="SeaweedContent_recommendArrow"></div>
        </a>
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
