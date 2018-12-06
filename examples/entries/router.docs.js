import Router from '../assets/router'

const Install = require('../docs/documents/install.md')
const Usage = require('../docs/documents/usage.md')
const I18n = require('../docs/documents/i18n.md')
const CssRule = require('../docs/documents/css-rules.md')
const JsRule = require('../docs/documents/js-rules.md')

const $contianer = document.getElementById('container')


const $navItems = document.querySelectorAll('.app-aside__nav .nav-group__item > a')

// 高亮选中菜单
function toggleNavClass () {
  var hash = window.location.hash.slice(1)
  $navItems.forEach(function($nav) {
    var href = $nav.href 
    var actived = false
    if (href.indexOf(hash) > -1) {
      actived = true
    }
    $nav.parentNode.classList[actived ? 'add' : 'remove']('actived')
  })
}


function setPage (page, title, cb) {
  return function () {
    $contianer.innerHTML = page
    document.title = `${title} | Nova UI Documents`
    toggleNavClass()
    setTimeout(() => {
      cb && typeof cb === 'function' && cb()
    })
  }
}


function routerChange (newPath, oldPath) {
  if (oldPath === newPath) {
    return
  }
  window.scrollTo(0, 0)
}


export const router = new Router(routerChange)

router
  .set('/')
  .set('/install', setPage(Install, 'Install'))
  .set('/usage', setPage(Usage, 'Usage'))
  .set('/i18n', setPage(I18n, 'I18n'))
  .set('/css-rules', setPage(CssRule, 'Css Rules'))
  .set('/js-rules', setPage(JsRule, 'Javascript Rules'))
 
  .init()



// events 
document.addEventListener('click', function (e) {
  var target = e.target
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