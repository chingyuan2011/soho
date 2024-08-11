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
          目前紅利點數為 <span>100</span> 點
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
                <div class="text">
                  2024/06/02
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  DW123456
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  +30
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  -50
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  2025/12/31
                </div>
              </div>
            </div>
            <div class="Bonus_table-row">
              <div class="Bonus_table-cell">
                <div class="text">
                  2024/05/29
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  HP234567
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  618年中慶健康禮盒
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  +120
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  -
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  2025/12/31
                </div>
              </div>
            </div>
            <div class="Bonus_table-row">
              <div class="Bonus_table-cell">
                <div class="text">
                  2024/05/02
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  –
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  感恩回饋
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  +30
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  -
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  2025/12/31
                </div>
              </div>
            </div>
            <div class="Bonus_table-row">
              <div class="Bonus_table-cell">
                <div class="text">
                  2024/05/17
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  -
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  紅利過期
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  -30
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  -
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  2025/12/31
                </div>
              </div>
            </div>
            <div class="Bonus_table-row">
              <div class="Bonus_table-cell">
                <div class="text">
                  2023/12/22
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  LO345678
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  新加入會員
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  +30
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  -
                </div>
              </div>
              <div class="Bonus_table-cell">
                <div class="text">
                  2025/12/31
                </div>
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
