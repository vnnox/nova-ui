import Loader from '../../components/loader'
import { isElement } from '../../utils/utils'

function createLoader (el, modifiers, value) {
  let $container = el 
  if (modifiers.fullscreen) {
    $container = document.body
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
  } else {
    el.$nv__loader && el.$nv__loader.close()
  } 
}


export const directive = {
  bind(el, binding) {
    let { modifiers, value } = binding
    createLoader(el, modifiers, value)
  },

  update (el, binding) {
    let { modifiers, value } = binding
    createLoader(el, modifiers, value)
  },

  unbind(el) {
    if (el.$nv__loader) {
      el.$nv__loader.close()
    }
  }
}

export default {
  directive,
  Loader (options) {
    options = options || {}
    let $container = options.target 
    if (!$container || !isElement($container)) {
      $container = document.body
    }
    delete options.target 

    return new Loader($container, options)
  }
}