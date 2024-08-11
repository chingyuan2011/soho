<template>
  <div class="Collect">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="TRACKING LIST"
          zh="我的收藏"
        ></Title>
        <Breadcrumb :link-data="[{title: 'TRACKING LIST', path: '/collect.html'}]"></Breadcrumb>
      </div>
    </div>

    <Tabs></Tabs>

    <div class="container">
      <div class="Collect__wrap">
        <div class="Collect__title">
          我的收藏 /
        </div>
        <div class="Collect_cart">
          <div class="Collect_cart-row Collect_cart-header">
            <div class="Collect_cart-cell">
              商品圖
            </div>
            <div class="Collect_cart-cell">
              商品資訊
            </div>
            <div class="Collect_cart-cell">
              數量
            </div>
            <div class="Collect_cart-cell">
              單價
            </div>
            <div class="Collect_cart-cell">
              購買狀態
            </div>
            <div class="Collect_cart-cell">
            </div>
          </div>
          <div class="Collect_cart-body">
            <div class="Collect_cart-row">
              <div class="Collect_cart-cell">
                <div class="product-pic">
                  <img
                    src="/soho/img/collect/collect_item1.png"
                    alt=""
                  >
                </div>
              </div>
              <div class="Collect_cart-cell">
                <div class="product_name">
                  六色海藻
                </div>
              </div>
              <div class="Collect_cart-cell product_amount">
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
              <div class="Collect_cart-cell">
                <div class="product_price">
                  $330
                </div>
              </div>
              <div class="Collect_cart-cell">
                <div class="product_status">
                  <button>加入購物車</button>
                  <button class="secondary">
                    立即購買
                  </button>
                </div>
              </div>
              <div class="Collect_cart-cell product_delete ">
                <button class=""></button>
              </div>
            </div>
            <div class="Collect_cart-row">
              <div class="Collect_cart-cell">
                <div class="product-pic">
                  <img
                    src="/soho/img/collect/collect_item2.png"
                    alt=""
                  >
                </div>
              </div>
              <div class="Collect_cart-cell">
                <div class="product_name">
                  昆布鹽
                </div>
              </div>
              <div class="Collect_cart-cell product_amount">
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
              <div class="Collect_cart-cell">
                <div class="product_price">
                  $230
                </div>
              </div>
              <div class="Collect_cart-cell">
                <div class="product_status">
                  <button>加入購物車</button>
                  <button class="secondary">
                    立即購買
                  </button>
                </div>
              </div>
              <div class="Collect_cart-cell product_delete">
                <button class=""></button>
              </div>
            </div>
            <div class="Collect_cart-row">
              <div class="Collect_cart-cell">
                <div class="product-pic">
                  <img
                    src="/soho/img/collect/collect_item3.png"
                    alt=""
                  >
                </div>
              </div>
              <div class="Collect_cart-cell">
                <div class="product_name">
                  六色海藻組合
                </div>
              </div>
              <div class="Collect_cart-cell product_amount">
                <div class="customSelect">
                  <select>
                    <option
                      value="1"
                    >
                      1
                    </option>
                    <option value="2">
                      2
                    </option>
                  </select>
                </div>
              </div>
              <div class="Collect_cart-cell">
                <div class="product_price">
                  $890
                </div>
              </div>
              <div class="Collect_cart-cell">
                <div class="product_status">
                  <button>加入購物車</button>
                  <button class="secondary">
                    立即購買
                  </button>
                </div>
              </div>
              <div class="Collect_cart-cell product_delete ">
                <button class=""></button>
              </div>
            </div>
          </div>
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
  name: 'Collect',
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
