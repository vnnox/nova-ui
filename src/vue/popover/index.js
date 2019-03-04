import Popover from '../../components/popover'


function createPopover (el, modifiers, options) {
  options = options || {}
  if (el.$__popover) {
    try {
      el.$__popover.destroy()
    } catch (error) {
      // todo
    }
    el.$__popover = null
    delete el.$__popover
  }
  if (!options.trigger) {
    let trigger
    if (modifiers.click) {
      trigger = 'click'
    } else if (modifiers.hover) {
      trigger = 'hover'
    } else if (modifiers.focus) {
      trigger = 'focus'
    }
    if (trigger) {
      options.trigger = trigger
    }
  }
  el.$__popover = new Popover(el, options)
}


export const PopoverDirective = {
  
  bind(el, binding) {
    let { modifiers, value: options } = binding
    createPopover(el, modifiers, options)
  },
  
  update(el, binding) {
    let { modifiers, value: options } = binding
    createPopover(el, modifiers, options)
  },

  unbind(el) {
    if (el.$__popover) {
      try {
        el.$__popover.destroy()
      } catch (error) {
        // todo
      }
      el.$__popover = null
      delete el.$__popover
    }
  },

}

export default PopoverDirective