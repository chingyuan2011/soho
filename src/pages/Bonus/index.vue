<template>
  <div class="Bonus">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="BONUS POINTS"
          zh="我的紅利點數"
        ></Title>
        <Breadcrumb :link-data="[{title: 'BONUS POINTS', path: '/Bonus.html'}]"></Breadcrumb>
      </div>
    </div>

    <Tabs></Tabs>

    <div class="container">
      <div class="Bonus__wrap">
        <div class="Bonus__title">
          我的紅利點數 /
        </div>
        <div class="Bonus_total">
          目前紅利點數為<span>100</span>點
        </div>
        <div class="Bonus_table">
          <div class="Bonus_table-row Bonus_table-header">
            <div class="Bonus_table-cell">
              日期
            </div>
            <div class="Bonus_table-cell">
              訂單編號
            </div>
            <div class="Bonus_table-cell">
              獲得 / 使用紀錄
            </div>
            <div class="Bonus_table-cell">
              轉入點數
            </div>
            <div class="Bonus_table-cell">
              使用點數
            </div>
            <div class="Bonus_table-cell">
              到期日
            </div>
          </div>
          <div class="Bonus_table-body">
            <div class="Bonus_table-row">
              <div class="Bonus_table-cell">
                <div class="product-pic">
                  <img
                    src="/soho/img/Bonus/Bonus_item1.png"
                    alt=""
                  >
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="product_name">
                  六色海藻
                </div>
              </div>
              <div class="Bonus_table-cell product_amount">
                <div class="customSelect">
                  <select>
                    <option value="1">
                      1
                    </option>
                    <option value="2">
                      2
                    </option>
                  </select>
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="product_price">
                  $330
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="product_status">
                  <button>加入購物車</button>
                  <button class="secondary">
                    立即購買
                  </button>
                </div>
              </div>
              <div class="Bonus_table-cell product_delete ">
                <button class=""></button>
              </div>
            </div>
          </div>
        </div>
        <div class="Bonus_pageControl">
          <button>PREVIOUS</button>
          <div class="Bonus_pageControl-pages">
            <button class="active">
              1
            </button>
            <button class="">
              2
            </button>
          </div>
          <button>NEXT</button>
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
  name: 'Bonus',
  components: {
    Title,
    Breadcrumb,
    Tabs
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
