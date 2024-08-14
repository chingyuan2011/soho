<template>
  <div class="OrderStatus">
    <div class="container-page">
      <div class="page_commonTitleArea">
        <Title
          en="ORDER STATUS"
          zh="訂單查詢"
        ></Title>
        <Breadcrumb :link-data="[{title: 'ORDER STATUS', path: '/orderStatus.html'}]"></Breadcrumb>
      </div>
    </div>

    <Tabs></Tabs>

    <div class="container">
      <h2 class="OrderStatus_pageTitle">
        訂單查詢 /
      </h2>

      <div>
        <div
          class="OrderStatus_item active"
          data-good-id="20240601000"
        >
          <div class="OrderStatus_itemStatus unpaid">
            <span>尚未付款</span>
          </div>
          <div class="OrderStatus_content">
            <div class="OrderStatus_text OrderStatus_text-highlight">
              <span>訂單編號：</span>
              <span>20240601000</span>
            </div>
            <div class="OrderStatus_text">
              <span>訂單成立：</span>
              <span>2024/06/01  00:00</span>
            </div>
            <div class="OrderStatus_text">
              <span>付款方式：</span>
              <span>信用卡</span>
            </div>
            <div class="OrderStatus_text">
              <span>付款狀態：</span>
              <span>尚未寄件</span>
            </div>
            <div class="OrderStatus_text">
              <span>付款時間：</span>
              <span>-</span>
            </div>
            <div class="OrderStatus_text">
              <span>實付金額：</span>
              <span>＄1490</span>
            </div>
          </div>

          <div class="OrderStatus_itemTrigger">
            <button>查看訂單明細 <span class="OrderStatus_itemTriggerArrow"></span></button>
          </div>

          <div class="OrderStatus_itemGoods">
            <div class="OrderStatus_itemGoodsHeader">
              <div></div>
              <div>品名</div>
              <div>數量</div>
              <div>單價</div>
              <div>小計</div>
            </div>
            <div class="OrderStatus_itemGood">
              <div><img src="/soho/img/orderStatus/orderStatus_item1.png"></div>
              <div>六色海藻</div>
              <div>2</div>
              <div>$330</div>
              <div>$660</div>
            </div>
            <div class="OrderStatus_itemGood">
              <div><img src="/soho/img/orderStatus/orderStatus_item2.png"></div>
              <div>昆布鹽</div>
              <div>1</div>
              <div>$230</div>
              <div>$230</div>
            </div>
            <div class="OrderStatus_itemGood">
              <div><img src="/soho/img/orderStatus/orderStatus_item3.png"></div>
              <div>六色海藻組合</div>
              <div>1</div>
              <div>$890</div>
              <div>$890</div>
            </div>
          </div>
        </div>
        <div
          class="OrderStatus_item"
          data-good-id="20240522030"
        >
          <div class="OrderStatus_itemStatus">
            <span>付款完成</span>
          </div>
          <div class="OrderStatus_content">
            <div class="OrderStatus_text OrderStatus_text-highlight">
              <span>訂單編號：</span>
              <span>20240522030</span>
            </div>
            <div class="OrderStatus_text">
              <span>訂單成立：</span>
              <span>2024/05/22  21:34</span>
            </div>
            <div class="OrderStatus_text">
              <span>付款方式：</span>
              <span>信用卡</span>
            </div>
            <div class="OrderStatus_text">
              <span>付款狀態：</span>
              <span>訂單已出貨</span>
            </div>
            <div class="OrderStatus_text">
              <span>付款時間：</span>
              <span>2024/05/22  22:49</span>
            </div>
            <div class="OrderStatus_text">
              <span>實付金額：</span>
              <span>＄5000</span>
            </div>
          </div>

          <div class="OrderStatus_itemTrigger">
            <button>查看訂單明細 <span class="OrderStatus_itemTriggerArrow"></span></button>
          </div>

          <div class="OrderStatus_itemGoods">
            <div class="OrderStatus_itemGoodsHeader">
              <div></div>
              <div>品名</div>
              <div>數量</div>
              <div>單價</div>
              <div>小計</div>
            </div>
            <div class="OrderStatus_itemGood">
              <div><img src="/soho/img/orderStatus/orderStatus_item1.png"></div>
              <div>六色海藻</div>
              <div>2</div>
              <div>$330</div>
              <div>$660</div>
            </div>
          </div>
        </div>
        <div
          class="OrderStatus_item"
          data-good-id="20240322101"
        >
          <div class="OrderStatus_itemStatus">
            <span>付款完成</span>
          </div>
          <div class="OrderStatus_content">
            <div class="OrderStatus_text OrderStatus_text-highlight">
              <span>訂單編號：</span>
              <span>20240322101</span>
            </div>
            <div class="OrderStatus_text">
              <span>訂單成立：</span>
              <span>2024/03/22  10:21</span>
            </div>
            <div class="OrderStatus_text">
              <span>付款方式：</span>
              <span>信用卡</span>
            </div>
            <div class="OrderStatus_text">
              <span>付款狀態：</span>
              <span>訂單已出貨</span>
            </div>
            <div class="OrderStatus_text">
              <span>付款時間：</span>
              <span>2024/03/23  23:49</span>
            </div>
            <div class="OrderStatus_text">
              <span>實付金額：</span>
              <span>＄4250</span>
            </div>
          </div>

          <div class="OrderStatus_itemTrigger">
            <button>查看訂單明細 <span class="OrderStatus_itemTriggerArrow"></span></button>
          </div>

          <div class="OrderStatus_itemGoods">
            <div class="OrderStatus_itemGoodsHeader">
              <div></div>
              <div>品名</div>
              <div>數量</div>
              <div>單價</div>
              <div>小計</div>
            </div>
            <div class="OrderStatus_itemGood">
              <div><img src="/soho/img/orderStatus/orderStatus_item1.png"></div>
              <div>六色海藻</div>
              <div>2</div>
              <div>$330</div>
              <div>$660</div>
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
