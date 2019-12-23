import { DirectiveOptions } from 'vue'
export const directives = {
  // test: {
  //   bind: function () { },
  //   inserted: function () { },
  //   update: function () { },
  //   componentUpdated: function () { },
  //   unbind: function () { }
  // },
  focus: {
    // 指令的定义
    inserted: (el: any) => {
      el.querySelector('input').focus()
    },
    componentUpdated: (el: any) => {
      el.querySelector('input').focus()
    }
  },
  // 验证小数点后两位
  /**
     * v-matchNumber2:pointer= "3" 小数点后三位
     * v-matchNumber2:pointer 小数点后三位
     */
  matchNumber2: {
    bind: (el: any, binding: any) => {
      const element = el.getElementsByTagName('input')[0]
      element.handler = function () {
        element.value = element.value.replace(/[^\d.]/g, '') // 清除“数字”和“.”以外的字符
        element.value = element.value.replace(/^\./g, '') // 验证第一个字符是数字而不是.
        element.value = element.value.replace(/\.{2,}/g, '.') // 只保留第一个. 清除多余的.
        element.value = element.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
        if (element.value.indexOf('.') < 0 && element.value !== '') { // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
          if (element.value.substr(0, 1) === '0' && element.value.length === 2) {
            element.value = element.value.substr(1, element.value.length)
          }
        }

        if (element.value !== '') {
          if (element.value.indexOf('.') > 0) {
            if (binding.arg) {
              if (element.value.split('.')[1].length > 3) { // 控制只能输入小数点后3位
                element.value = (element.value.match(/^\d*(\.?\d{0,3})/g)[0]) || null
              }
            } else {
              if (element.value.split('.')[1].length > 2) { // 控制只能输入小数点后2位
                element.value = (element.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
              }
            }
          }
        }
        // 手动刷新data中绑定的属性
        // vnode.context.setInitInput(element.element.value)
      }
      element.addEventListener('input', element.handler)
    },
    unbind: (el: any) => {
      const element = el.getElementsByTagName('input')[0]
      element.removeEventListener('input', element.handler)
    }
  },
  // 验证数字
  number: {
    bind: (el: any) => {
      const element = el.getElementsByTagName('input')[0]
      element.handler = function () {
        element.value = element.value.replace(/[^\d.]/g, '') // 清除“数字”和“.”以外的字符
        element.value = element.value.replace(/\.{1,}/g, '') // 只保留第一个. 清除多余的.
        element.value = element.value.replace(/^1[12]/g, '1')
      }
      element.addEventListener('input', element.handler)
    },
    unbind: (el: any) => {
      const element = el.getElementsByTagName('input')[0]
      element.removeEventListener('input', element.handler)
    }
  },
  /*
      @example v-font="70"
      */
  font: {
    inserted: (el: any, binding: any) => {
      el.style.fontSize = binding.value + 'px'
    }
  }
}
