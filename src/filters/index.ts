// 金额类型
export const moneyType = (val: any) => {
  if (val) {
    return val >= 0 ? `￥${val}` : `-￥${Math.abs(val)}`
  } else {
    return '￥' + 0
  }
}

// 数据类型
export const dataType = (val: any) => {
  if (val) {
    return val
  } else {
    return 0
  }
}

// 没有参数的处理
export const paramsType = (val: any) => {
  if (val) {
    return val
  } else {
    return '-'
  }
}

// 限制小数点后两位
export const rounding = (val: any) => {
  return val.toFixed(2)
}
