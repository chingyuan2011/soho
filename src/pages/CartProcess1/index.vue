<template>
  <div class="CartProcess1">
    <div class="container container-page">
      <div class="page_commonTitleArea">
        <Title
          en="SHOPPING CART"
          zh="我的購物車"
        ></Title>
        <Breadcrumb :link-data="[{title: 'MEMBER CENTER', path: '/cartProcess1.html'}]"></Breadcrumb>
      </div>
      <div class="memberCenter_progressBar">
        <div class="memberCenter_progressBar-step memberCenter_progressBar-step-active memberCenter_progressBar-step-cartProcess">
          <div class="memberCenter_progressBar-step-icon">
            <img
              src="/soho/img/icon_process1.png"
              alt="購物車"
            >
          </div>
          <p>購物車</p>
        </div>
        <div class="memberCenter_progressBar-step memberCenter_progressBar-step-confirmData">
          <div class="memberCenter_progressBar-step-icon">
            <img
              src="/soho/img/icon_process2.png"
              alt="商品及資料確認"
            >
          </div>
          <p>商品及資料確認</p>
        </div>
        <div class="memberCenter_progressBar-step memberCenter_progressBar-step-completeOrder">
          <div class="memberCenter_progressBar-step-icon">
            <img
              src="/soho/img/icon_process3.png"
              alt="訂單完成"
            >
          </div>
          <p>訂單完成</p>
        </div>
      </div>
      <div class="CartProcess1_title">
        詳細訂單資料 /
      </div>
      <div class="CartProcess1_content">
        <div class="CartProcess1_orderList">
          <div class="CartProcess1_orderItem">
            <div class="CartProcess1_orderItem-pic">
              <img
                src="/soho/img/cartProcess1/good1.png"
                alt=""
              >
            </div>
            <div class="CartProcess1_orderItem-info">
              <div class="CartProcess1_orderItem-price">
                <div cl>
                  六色海藻
                </div><div>
                  $330
                </div>
              </div>
              <div class="CartProcess1_orderItem-amount">
                數量：<div class="customSelect">
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
              <div class="CartProcess1_orderItem-count">
                小計： $660
              </div>
            </div>
            <button class="CartProcess1_orderItem-delete">
            </button>
          </div>
          <div class="CartProcess1_orderItem">
            <div class="CartProcess1_orderItem-pic">
              <img
                src="/soho/img/cartProcess1/good1.png"
                alt=""
              >
            </div>
            <div class="CartProcess1_orderItem-info">
              <div class="CartProcess1_orderItem-price">
                <div cl>
                  六色海藻
                </div><div>
                  $330
                </div>
              </div>
              <div class="CartProcess1_orderItem-amount">
                數量：<div class="customSelect">
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
              <div class="CartProcess1_orderItem-count">
                小計： $660
              </div>
            </div>
            <button class="CartProcess1_orderItem-delete">
            </button>
          </div>
          <div class="CartProcess1_orderItem">
            <div class="CartProcess1_orderItem-pic">
              <img
                src="/soho/img/cartProcess1/good2.png"
                alt=""
              >
            </div>
            <div class="CartProcess1_orderItem-info">
              <div class="CartProcess1_orderItem-price">
                <div>六色海藻</div><div>$330</div>
              </div>
              <div class="CartProcess1_orderItem-amount">
                數量：<div class="customSelect">
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
              <div class="CartProcess1_orderItem-count">
                小計： $660
              </div>
            </div>
            <button class="CartProcess1_orderItem-delete">
            </button>
          </div>
          <div class="CartProcess1_orderItem">
            <div class="CartProcess1_orderItem-pic">
              <img
                src="/soho/img/cartProcess1/good3.png"
                alt=""
              >
            </div>
            <div class="CartProcess1_orderItem-info">
              <div class="CartProcess1_orderItem-price">
                <div>六色海藻</div><div>$330</div>
              </div>
              <div class="CartProcess1_orderItem-amount">
                數量：<div class="customSelect">
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
              <div class="CartProcess1_orderItem-count">
                小計： $660
              </div>
            </div>
            <button class="CartProcess1_orderItem-delete">
            </button>
          </div>
        </div>
        <div class="CartProcess1_discount">
          <div class="CartProcess1_discount-used">
            <div class="CartProcess1_discount-title">
              已享用優惠
            </div>
            <div class="CartProcess1_discount-list">
              <div class="CartProcess1_discount-item">
                <div class="CartProcess1_discount-itemTitle">
                  首次購物折 50
                </div>
                <div class="CartProcess1_discount-itemContent">
                  -NT$50
                </div>
              </div>
              <div class="CartProcess1_discount-item">
                <div class="CartProcess1_discount-itemTitle">
                  國內滿千免運
                </div>
                <div class="CartProcess1_discount-itemContent">
                  國內滿千免運
                </div>
              </div>
              <div class="CartProcess1_discount-item">
                <div class="CartProcess1_discount-itemTitle">
                  全館3件以上9.5折
                </div>
                <div class="CartProcess1_discount-itemContent">
                  -NT$75
                </div>
              </div>
            </div>
          </div>
          <div class="CartProcess1_discount-unUsed">
            <div class="CartProcess1_discount-title">
              尚有更多輕踩優惠等著你！目前未享用：
            </div>
            <div class="CartProcess1_discount-list">
              <div class="CartProcess1_discount-item">
                <div class="CartProcess1_discount-itemTitle CartProcess1_discount-itemTitle-unused">
                  <div>折價券</div>
                  <div class="CartProcess1_discount-itemTitle-sub">
                    不可與首次購物同時使用
                  </div>
                </div>
                <div class="CartProcess1_discount-itemContent">
                  <div class="customSelect">
                    <select
                      class="CartProcess1_discount-select"
                      disabled
                    >
                      <option
                        value=""
                        disabled
                        selected
                      >
                        可使用折價券選擇
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="CartProcess1_discount-item">
                <div class="CartProcess1_discount-itemTitle CartProcess1_discount-itemTitle-unused CartProcess1_discount-itemTitle-unused">
                  <div>紅利點數回饋</div>
                  <div class="CartProcess1_discount-itemTitle-sub">
                    不可與首次購物同時使用
                  </div>
                </div>
                <div class="CartProcess1_discount-itemContent">
                  <div class="CartProcess1_discount-itemContent-input">
                    <input
                      type="text"
                      placeholder="請輸入想兌換紅利點數"
                    > <button class="CartProcess1_btn CartProcess1_btn-small">
                      套用
                    </button>
                  </div>
                  <div class="CartProcess1_discount-itemContent-text">
                    紅利點數餘額 NT$100
                  </div>
                </div>
              </div>
              <div class="CartProcess1_discount-item CartProcess1_discount-item-gift">
                <div class="CartProcess1_discount-itemTitle">
                  <div>
                    【官網獨家｜滿額贈】<br>藻作坊限量帆布提袋（數量有限，送完為止）
                  </div>
                </div>
                <div class="CartProcess1_discount-itemTag">
                  再買 NT$320 即享有贈品
                </div>
              </div>
            </div>
          </div>
          <button class="CartProcess1_btn CartProcess1_btn-small CartProcess1_btn-go-product">
            繼續購物
          </button>
        </div>
      </div>
      <div class="CartProcess1_charge">
        <div class="CartProcess1_charge-wrap">
          <div class="CartProcess1_charge-total">
            <div class="CartProcess1_charge-total-zh">
              商品合計
            </div>
            <div class="CartProcess1_charge-total-data">
              $1450
            </div>
          </div>
          <div class="CartProcess1_charge-bonus">
            <div class="CartProcess1_charge-bonus-zh">
              訂單完成後獲得紅利點數
            </div>
            <div class="CartProcess1_charge-bonus-data">
              + NT$36
            </div>
          </div>
          <a
            class="CartProcess1_goCharge CartProcess1_btn CartProcess1_btn-go-checkout"
            href="javascript:;"
          >前往結賬</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'CartProcess1',
  components: {
    Title,
    Breadcrumb
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
