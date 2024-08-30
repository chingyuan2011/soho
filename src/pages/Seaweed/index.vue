<template>
  <div class="Seaweed">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="SEAWEED"
          zh="海藻學堂"
        ></Title>
        <Breadcrumb :link-data="[{title: 'SEAWEED', path: '/seaweed.html'}]"></Breadcrumb>
      </div>
    </div>
    <div class="container">
      <ul class="Seaweed_list">
        <li class="Seaweed_item">
          <a
            class="Seaweed_link wow fadeInRight"
            href="/soho/seaweedContent.html"
          >
            <div class="Seaweed_time">2024/07/05</div>
            <div class="Seaweed_pic">
              <img src="/soho/img/seaweed/seaweed_item1.jpg">
              <div class="Seaweed_picArrow">
                <span></span>
              </div>
            </div>
            <div class="Seaweed_content">
              <h2>味素的由來</h2>
              <p>味精裡面含有人類的第五味覺「鮮味」跟酸.甜.苦.鹹一樣都是我們人類的味覺，只是鮮味比較晚才被發現，而提到鮮味，就必須味精裡面含有人類的第五味覺「鮮味」跟酸.甜.苦.鹹一樣都是我們人類的味覺，只是鮮味比較晚才被發現，而提到鮮味，就必須</p>
              <span class="Seaweed_arrow"></span>
            </div>
          </a>
        </li>
        <li class="Seaweed_item">
          <a
            class="Seaweed_link wow fadeInRight"
            href="/soho/seaweedContent.html"
          >
            <div class="Seaweed_time">2024/07/02</div>
            <div class="Seaweed_pic">
              <img src="/soho/img/seaweed/seaweed_item2.jpg">
              <div class="Seaweed_picArrow">
                <span></span>
              </div>
            </div>
            <div class="Seaweed_content">
              <h2>六種最常見的食用海藻品種</h2>
              <p>食用海藻是海中的蔬菜，人與海洋生物可以以多種形式食用它。從營養學的角度來說，海藻可以從海洋中濃縮吸收碘。人體不能</p>
              <span class="Seaweed_arrow"></span>
            </div>
          </a>
        </li>
        <li class="Seaweed_item">
          <a
            class="Seaweed_link wow fadeInRight"
            href="/soho/seaweedContent.html"
          >
            <div class="Seaweed_time">2024/06/28</div>
            <div class="Seaweed_pic">
              <img src="/soho/img/seaweed/seaweed_item3.jpg">
              <div class="Seaweed_picArrow">
                <span></span>
              </div>
            </div>
            <div class="Seaweed_content">
              <h2>六種常見海藻－營養及熱量</h2>
              <p>有來自「大海的蔬菜」之稱的「海藻」，在餐桌上最常見的有：
                海帶、昆布、紫菜、海帶芽、珊瑚草、海茸這 6 種，每種都有其</p>
              <span class="Seaweed_arrow"></span>
            </div>
          </a>
        </li>
        <li class="Seaweed_item">
          <a
            class="Seaweed_link wow fadeInRight"
            href="/soho/seaweedContent.html"
          >
            <div class="Seaweed_time">2024/07/02</div>
            <div class="Seaweed_pic">
              <img src="/soho/img/seaweed/seaweed_item4.jpg">
              <div class="Seaweed_picArrow">
                <span></span>
              </div>
            </div>
            <div class="Seaweed_content">
              <h2>海藻的營養價值與好處</h2>
              <p>你知道吃海藻有哪些好處嗎？說到海藻，大部分人會先想到海藻的天然鮮味，以及各異其趣的種類和口感但其實海藻也含有非常</p>
              <span class="Seaweed_arrow"></span>
            </div>
          </a>
        </li>
        <li class="Seaweed_item">
          <a
            class="Seaweed_link wow fadeInRight"
            href="/soho/seaweedContent.html"
          >
            <div class="Seaweed_time">2024/06/11</div>
            <div class="Seaweed_pic">
              <img src="/soho/img/seaweed/seaweed_item5.jpg">
              <div class="Seaweed_picArrow">
                <span></span>
              </div>
            </div>
            <div class="Seaweed_content">
              <h2>海藻熱量全公開 低卡清爽無負擔</h2>
              <p>以下是常見的 6 種海藻熱量一覽，海藻的熱量不高，富含膳食纖維，吃下肚後也會有飽足感，對於在意熱量、但又想滿足口腹之</p>
              <span class="Seaweed_arrow"></span>
            </div>
          </a>
        </li>
      </ul>
      <PageControl></PageControl>
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
