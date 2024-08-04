<template>
  <div class="ProductList">
    <div class="container container-page">
      <div class="page_commonTitleArea">
        <Title
          en="PRODUCTS"
          zh="產品資訊"
        ></Title>
      </div>
      <div class="ProductList_content">
        <div class="ProductList_content-menu">
          <div class="ProductList_content-menuTitle">
            產品資訊
          </div>
          <div class="ProductList_content-menuItemList">
            <div class="ProductList_content-menuItem active">
              <div class="ProductList_content-menuItemTitle">
                查看全部
              </div>
            </div>
            <div class="ProductList_content-menuItem ProductList_content-menuItem-toggle active">
              <div class="ProductList_content-menuItemTitle">
                <span>【 9/01-9/14 】中秋禮盒 - 送你送健康</span>
              </div>
              <div class="ProductList_content-menuItemSub">
                <div class="ProductList_content-menuItemSubItem active">
                  海藻
                </div>
                <div class="ProductList_content-menuItemSubItem">
                  醬料
                </div>
                <div class="ProductList_content-menuItemSubItem">
                  高湯
                </div>
                <div class="ProductList_content-menuItemSubItem">
                  組合搭配
                </div>
              </div>
            </div>
            <div class="ProductList_content-menuItem ProductList_content-menuItem-toggle">
              <div class="ProductList_content-menuItemTitle">
                <span>新品上市</span>
              </div>
              <div class="ProductList_content-menuItemSub">
                <div class="ProductList_content-menuItemSubItem">
                  新品一
                </div>
              </div>
            </div>
            <div class="ProductList_content-menuItem ">
              <div class="ProductList_content-menuItemTitle">
                <span>暢銷熱賣</span>
              </div>
            </div>
            <div class="ProductList_content-menuItem ">
              <div class="ProductList_content-menuItemTitle">
                <span>囤貨必備</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ProductList_content-product">
          <div class="ProductList_content-product-ad">
            <img
              src="/soho/img/productList/productList_ad.jpg"
              alt="海帶芽湯"
            >
          </div>
          <div class="ProductList_content-product-wrap">
            <div class="ProductList_content-product-filters active">
              <div>
                <div class="ProductList_content-product-filter select">
                  <select>
                    <option
                      value=""
                      selected
                    >
                      預設
                    </option>
                    <option value="1">
                      價格低至高
                    </option>
                    <option value="2">
                      價格高至低
                    </option>
                  </select>
                </div>
                <div class="ProductList_content-product-filter price-filter active">
                  <button>金額範圍</button>
                </div>
                <div class="ProductList_content-product-filter select">
                  <select>
                    <option
                      value=""
                      selected
                    >
                      商品評分
                    </option>
                  </select>
                </div>
              </div>
              <div class="ProductList_content-product-filter-advanced price">
                <label class="inputWrap">
                  <span>最低價格</span><span class="symbol">$</span><input
                    inputmode="numeric"
                    value="0"
                  >
                </label>
                <span> - </span>
                <label class="inputWrap">
                  <span>最高價格</span><span class="symbol">$</span><input
                    inputmode="numeric"
                    value="2000"
                  >
                </label>
                <button>搜尋</button>
              </div>
            </div>
            <div class="ProductList_content-product-list">
              <div class="ProductList_content-product-item">
                <div class="productPic">
                  <img
                    src="/soho/img/productList/productList_item1.png"
                    alt=""
                  >
                  <img
                    class="hover"
                    src="/soho/img/productList/productList_item1-hover.png"
                    alt=""
                  >
                </div>
                <div class="productInfo">
                  <div class="productName">
                    六色海藻
                  </div>
                  <div class="productIntro">
                    <p>嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的現代人忙碌而無</p>
                  </div>
                  <div class="deco"></div>
                  <div class="productControl">
                    <button>直接購買</button>
                    <button>加入購物車</button>
                  </div>
                </div>
              </div>
              <div class="ProductList_content-product-item">
                <div class="productPic">
                  <img
                    src="/soho/img/productList/productList_item2.png"
                    alt=""
                  >
                  <img
                    class="hover"
                    src="/soho/img/productList/productList_item1-hover.png"
                    alt=""
                  >
                </div>
                <div class="productInfo">
                  <div class="productName">
                    昆布鹽
                  </div>
                  <div class="productIntro">
                    <p>昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的</p>
                  </div>
                  <div class="deco"></div>
                  <div class="productControl">
                    <button>直接購買</button>
                    <button>加入購物車</button>
                  </div>
                </div>
              </div>
              <div class="ProductList_content-product-item">
                <div class="productPic">
                  <img
                    src="/soho/img/productList/productList_item3.png"
                    alt=""
                  >
                  <img
                    class="hover"
                    src="/soho/img/productList/productList_item1-hover.png"
                    alt=""
                  >
                </div>
                <div class="productInfo">
                  <div class="productName">
                    六色海藻
                  </div>
                  <div class="productIntro">
                    <p>嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的現代人忙碌而無</p>
                  </div>
                  <div class="deco"></div>
                  <div class="productControl">
                    <button>直接購買</button>
                    <button>加入購物車</button>
                  </div>
                </div>
              </div>
              <div class="ProductList_content-product-item">
                <div class="productPic">
                  <img
                    src="/soho/img/productList/productList_item4.png"
                    alt=""
                  >
                  <img
                    class="hover"
                    src="/soho/img/productList/productList_item1-hover.png"
                    alt=""
                  >
                </div>
                <div class="productInfo">
                  <div class="productName">
                    昆布鹽
                  </div>
                  <div class="productIntro">
                    <p>昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的</p>
                  </div>
                  <div class="deco"></div>
                  <div class="productControl">
                    <a href="https://yahoo.com">直接購買</a>
                    <button>加入購物車</button>
                  </div>
                </div>
              </div>
              <div class="ProductList_content-product-item">
                <div class="productPic">
                  <img
                    src="/soho/img/productList/productList_item5.png"
                    alt=""
                  >
                  <img
                    class="hover"
                    src="/soho/img/productList/productList_item1-hover.png"
                    alt=""
                  >
                </div>
                <div class="productInfo">
                  <div class="productName">
                    海苔醬
                  </div>
                  <div class="productIntro">
                    <p>昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的</p>
                  </div>
                  <div class="deco"></div>
                  <div class="productControl">
                    <a href="https://yahoo.com">直接購買</a>
                    <button>加入購物車</button>
                  </div>
                </div>
              </div>
              <div class="ProductList_content-product-item">
                <div class="productPic">
                  <img
                    src="/soho/img/productList/productList_item6.png"
                    alt=""
                  >
                  <img
                    class="hover"
                    src="/soho/img/productList/productList_item1-hover.png"
                    alt=""
                  >
                </div>
                <div class="productInfo">
                  <div class="productName">
                    海苔醬
                  </div>
                  <div class="productIntro">
                    <p>昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的</p>
                  </div>
                  <div class="deco"></div>
                  <div class="productControl">
                    <a href="https://yahoo.com">直接購買</a>
                    <button>加入購物車</button>
                  </div>
                </div>
              </div>
              <div class="ProductList_content-product-item">
                <div class="productPic">
                  <img
                    src="/soho/img/productList/productList_item7.png"
                    alt=""
                  >
                  <img
                    class="hover"
                    src="/soho/img/productList/productList_item1-hover.png"
                    alt=""
                  >
                </div>
                <div class="productInfo">
                  <div class="productName">
                    黑芝麻醬
                  </div>
                  <div class="productIntro">
                    <p>昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的</p>
                  </div>
                  <div class="deco"></div>
                  <div class="productControl">
                    <a href="https://yahoo.com">直接購買</a>
                    <button>加入購物車</button>
                  </div>
                </div>
              </div>
              <div class="ProductList_content-product-item">
                <div class="productPic">
                  <img
                    src="/soho/img/productList/productList_item8.png"
                    alt=""
                  >
                  <img
                    class="hover"
                    src="/soho/img/productList/productList_item1-hover.png"
                    alt=""
                  >
                </div>
                <div class="productInfo">
                  <div class="productName">
                    黑芝麻醬
                  </div>
                  <div class="productIntro">
                    <p>昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的</p>
                  </div>
                  <div class="deco"></div>
                  <div class="productControl">
                    <a href="https://yahoo.com">直接購買</a>
                    <button>加入購物車</button>
                  </div>
                </div>
              </div>
              <div class="ProductList_content-product-item">
                <div class="productPic">
                  <img
                    src="/soho/img/productList/productList_item9.png"
                    alt=""
                  >
                  <img
                    class="hover"
                    src="/soho/img/productList/productList_item1-hover.png"
                    alt=""
                  >
                </div>
                <div class="productInfo">
                  <div class="productName">
                    黑芝麻醬
                  </div>
                  <div class="productIntro">
                    <p>昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的</p>
                  </div>
                  <div class="deco"></div>
                  <div class="productControl">
                    <a href="https://yahoo.com">直接購買</a>
                    <button>加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="ProductList_content-product-pageControl">
              <button>PREVIOUS</button>
              <div class="ProductList_content-product-pageControl-pages">
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
    </div>
    <div class="helper">
      <!-- <img
        src="/soho/img/productList/layout_productList1.jpg"
        alt=""
      > -->
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
export default {
  name: 'ProductList',
  components: {
    Title
  },
  data () {
    return {
    }
  }
}
</script>

  <style lang="scss" src="./style.scss">

  // xxl | xl | lg | md | sm
  // @include screen (xl) {}
  </style>
