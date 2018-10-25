export class Router {
  constructor(onchange) {
    this.routers = Object.create(null)
    this.url = ''
    this.onchange = onchange
  }

  static getPath(url) {
    url = url || window.location.hash
    url = url
      .replace(/^#/, '')
      .replace(/^\/*|\/*$/g, '').trim()
    return url
  }

  set(url, cb) {
    url = Router.getPath(url)
    this.routers[url] = cb && typeof cb === 'function' ? cb : function () { }
    return this
  }

  refresh() {
    let oldPath = this.url
    this.url = Router.getPath()
    let callback = this.routers[this.url]
    if (!callback) {
      window.location.hash = '#/'
      return
    }
    this.onchange && this.onchange.call(this, this.url, oldPath)
    setTimeout(() => {
      callback && callback.call(this, this.url, oldPath)
    }, 0)
    return this
  }

  init() {
    this.url = Router.getPath()
    window.addEventListener('load', this.refresh.bind(this), false)
    window.addEventListener('hashchange', this.refresh.bind(this), false)
  }
}

export default Router