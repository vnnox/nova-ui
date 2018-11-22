import Router from '../assets/router'

const Install = require('../docs/documents/install.md')
const Usage = require('../docs/documents/usage.md')

const $contianer = document.getElementById('container')

function setPage (page, title, cb) {
  return function () {
    $contianer.innerHTML = page
    document.title = `${title} | Nova UI Documents`
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