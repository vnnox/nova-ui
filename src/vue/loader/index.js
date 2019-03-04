import Loader from '../../components/loader'
import { isElement } from '../../utils/utils'

/**
 * Creates an instance of Loader.
 * @param {*} el 
 * @param {*} modifiers 
 * @param {*} value 
 */
function createLoader(el, modifiers, value) {
  let $container = el
  if (modifiers.fullscreen) {
    $container = document.body
  }

  if (el.$nv__loader) {
    try {
      el.$nv__loader.close()
    } catch (error) {
      // 
    }
    el.$nv__loader = null
    delete el.$nv__loader
  }

  if (value) {
    let options = {}
    if (modifiers.lock) {
      options.lock = true
    }
    if (modifiers.vertical) {
      options.vertical = true
    }
    let label = el.getAttribute('data-loader-label')
    let css = el.getAttribute('data-loader-css')
    let background = el.getAttribute('data-loader-background')
    label && (options.label = label)
    css && (options.customClass = css)
    background && (options.background = background)
    el.$nv__loader = new Loader($container, options)
  }
}


export const directive = {
  bind(el, binding) {
    let { modifiers, value } = binding
    createLoader(el, modifiers, value)
  },

  update(el, binding) {
    let { modifiers, value } = binding
    createLoader(el, modifiers, value)
  },

  unbind(el) {
    if (el.$nv__loader) {
      try {
        el.$nv__loader.close()
      } catch (error) {
        // 
      }
      el.$nv__loader = null
      delete el.$nv__loader
    }
  }
}


export default {
  directive,
  Loader(options) {
    options = options || {}
    let $container = options.target
    if (!$container || !isElement($container)) {
      $container = document.body
    }
    delete options.target
    return new Loader($container, options)
  }
}