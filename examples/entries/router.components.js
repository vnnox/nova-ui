import Router from '../assets/router'

const Button = require('../docs/components/button.md')
const Input = require('../docs/components/input.md')
const Checkbox = require('../docs/components/checkbox.md')
const Radio = require('../docs/components/radio.md')
const Switch = require('../docs/components/switch.md')
const Modal = require('../docs/components/modal.md')
const Breadcrumb = require('../docs/components/breadcrumb.md')
const Badge = require('../docs/components/badge.md')
const InputNumber = require('../docs/components/input-number.md')

const RadioVue = require('../docs/components/vue/radio.md')
const CheckboxVue = require('../docs/components/vue/checkbox.md')



const $contianerNative = document.getElementById('container-native')
const $contianerVue = document.getElementById('container-vue')

function setPage (pages, title, cb) {
  return function () {
    $contianerNative.innerHTML = pages.native
    $contianerVue.innerHTML = pages.vue || '同原生用法'
    document.title = `${title} | Nova UI Components`
    setTimeout(() => {
      cb && typeof cb === 'function' && cb()
    })
  }
}


function runScript () {
  let $code = document.querySelectorAll('.code-view')
  Array.prototype.slice.call($code).forEach(el => {
    let codeNative = el.getAttribute('data-eval')
    let codeVue = el.getAttribute('data-vue-eval')
    if (codeNative) {
      codeNative = JSON.parse(codeNative)
      if (codeNative.script) {
        var source = new Function(codeNative.script)
        source()
      }
    }

    if (codeVue) {
      codeVue = JSON.parse(codeVue)
      let scripts = codeVue.script
      let source = scripts || Object.create(null)
      let $container = el.querySelector('.code-view__view')
      let vm = new window.Vue(source).$mount()
      $container.appendChild(vm.$el)
    }
  })
}

function routerChange (newPath, oldPath) {
  if (oldPath === newPath) {
    return
  }
  window.instances.forEach(instance => {
    instance.destroy && instance.destroy()
  })
  window.instances.length = 0
  window.scrollTo(0, 0)
}


export const router = new Router(routerChange)

router
  .set('/')
  .set('/button', setPage({
    native: Button
  }, 'Button'))
  .set('/input', setPage({
    native: Input
  }, 'Input'))
  .set('/checkbox', setPage({
    native: Checkbox,
    vue: CheckboxVue
  }, 'Checkbox', runScript))
  .set('/radio', setPage({
    native: Radio,
    vue: RadioVue
  }, 'Radio', runScript))
  .set('/switch', setPage({
    native: Switch
  }, 'Switch'))
  .set('/breadcrumb', setPage({
    native: Breadcrumb
  }, 'Breadcrumb'))
  .set('/badge', setPage({
    native: Badge
  }, 'Badge'))
  .set('/modal', setPage({
    native: Modal
  }, 'Modal', runScript))
  .set('/input-number', setPage({
    native: InputNumber
  }, 'InputNumber', runScript))
  .init()



// events 
document.addEventListener('click', function (e) {
  var target = e.target;
  var nodes = Array.prototype.slice.call(document.querySelectorAll('.code-view__ctrl'))
  var matched
  for (let i = 0, len = nodes.length; i < len; i++) {
    const node = nodes[i]
    if (node === target || node.contains(target)) {
      matched = node
      break
    }
  }
  if (matched) {
    var $panel = matched.parentNode
    $panel.classList.toggle('source-opened')
  }
})




export default router