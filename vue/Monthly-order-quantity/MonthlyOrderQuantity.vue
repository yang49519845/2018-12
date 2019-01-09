

<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import { CreateElement } from 'vue'
// 请求
import { ERPService, errorHandler } from '@/core/ts/services'
// echarts配置
import { monthOptions } from './monthOption'
// 格式化时间，金钱
import { formatDate } from '@/core/ts/filter'
// 对象描述接口
import { SelectOptions, monthResultConfig, StateConfig } from './MonthlyOrderQuantityInterface'
// 图表绘制
import echarts from 'echarts'
// mock axios请求
import axios from 'axios'

@Component
export default class MonthlyOrderQuantity extends Vue {
  public state: StateConfig = null
  constructor() {
    super()
    this.state = {
      // 月开单量 日期
      dayTime: new Date(),
      // 月开单量 类型
      monthSelect: 1,
      // 筛选下拉选项
      selectOptions: [
        {
          value: 1,
          label: '销售'
        },
        {
          value: 2,
          label: '采购'
        },
        {
          value: 3,
          label: '销售退货'
        },
        {
          value: 4,
          label: '采购退货'
        },
        {
          value: 5,
          label: '销售及退货'
        },
        {
          value: 6,
          label: '采购及退货'
        }
      ],
      // 禁选之后的月份
      pickerOptions: {
        disabledDate(time: Date): boolean {
          return time.getTime() > Date.now() - 8.64e6
        }
      },
      // 初始化的echarts Dom
      monthCharts: null,
      // 本月统计结果
      monthResult: {
        rank: [],
        xData: [],
        quantity: [],
        amount: [],
        voucherCount: []
      }
    }
    // 绑定到当前组件
    this.findMonth = this.findMonth.bind(this)
  }
  /**
   * 装载过程
   * 初始画布
   * 请求数据
   * 绘制图表
   */
  mounted() {
    this.state = Object.assign({}, this.state, { monthCharts: echarts.init(document.querySelector('#monthCharts')) })
    this.findMonth()
    window.onresize = () => {
      this.state.monthCharts.resize()
    }
  }

  findMonth(): void {
    let time = formatDate(this.state.dayTime, 'yyyymm')
    for (let key in this.state.monthResult) {
      this.state.monthResult[key] = []
    }
    // ERPService.getData({
    //   BeginTime: '20190109000000',
    //   Code: '50001',
    //   DateType: '0',
    //   EndTime: '20190109000000',
    //   StatisticsType: '0',
    //   StoreId: '2213'
    // })
    //   .then(success => {
    //     if (success) {

    //       console.log(success.Message)
    //     }
    //   })
    //   .catch(error => {
    //     errorHandler(error)
    //   })
    axios
      .post('https://www.easy-mock.com/mock/5c1b038748952b7bd651426c/example/month', {
        Code: '31111',
        OccurTime: time,
        QueryType: this.state.monthSelect
      })
      .then((res: any) => {
        if (res.Message.StoreSaleListGroup.length) {
          res.Message.StoreSaleListGroup.forEach((item: any, index) => {
            this.state.monthResult.quantity.push(item.Quantity)
            this.state.monthResult.amount.push(item.Amount)
            this.state.monthResult.voucherCount.push(item.VoucherCount)
            this.state.monthResult.xData.push(item.TimeSection)
          })
        }
        let { xData, voucherCount, quantity, amount } = this.state.monthResult
        monthOptions.xAxis[0].data = xData
        monthOptions.series[0].data = voucherCount
        monthOptions.series[1].data = quantity
        monthOptions.series[2].data = amount
        this.state.monthCharts.setOption(monthOptions)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render(h: CreateElement) {
    // 搜索下拉
    const SelectOption = this.state.selectOptions.map((item: any) => {
      return (
        <i-option value={item.value} key={item.value}>
          {item.label}
        </i-option>
      )
    })
    return (
      <div class="monthly">
        <card>
          <div slot="title" class="monthly-header">
            <span class="monthly-title">月开单量</span>
            <date-picker
              editable={false}
              clearable={false}
              type="month"
              align="center"
              placeholder="选择日期时间"
              class="monthly-picker"
              v-model={this.state.dayTime}
              options={this.state.pickerOptions}
            />
            <i-select class="monthly-select" v-model={this.state.monthSelect}>
              {SelectOption}
            </i-select>
          </div>
          <div class="monthly-content">
            <div id="monthCharts" style="width: 100%;height:100%" />
          </div>
        </card>
      </div>
    )
  }
}
</script>
<style lang="scss">
.monthly {
  padding: 10px;
  .monthly-header {
    .monthly-title {
      margin-right: 10px;
    }
    .monthly-picker,
    .monthly-select {
      display: inline-block;
      width: 200px;
    }
  }
  .monthly-content {
    height: 450px;
  }
}
</style>
