// 下拉配置接口
export interface SelectOptions {
  value: number
  label: string
}

export interface pikerOptionConfig {
  disabledDate: Function
}

// 月总量配置接口
export interface monthResultConfig {
  quantity: Array<string>
  amount: Array<string>
  voucherCount: Array<string>
  xData: Array<string>
  rank: Array<string>
}
// 本组件state配置接口
export interface StateConfig {
  dayTime: Date
  monthSelect: number
  selectOptions: Array<SelectOptions>
  pickerOptions: pikerOptionConfig
  monthCharts: null | any
  monthResult: monthResultConfig
}
