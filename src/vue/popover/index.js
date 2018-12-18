import Popover from '../../components/popover'


function createPopover (el, modifiers, options) {
  options = options || {}
  el.$__popover && el.$__popover.destroy()
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
    el.$__popover && el.$__popover.destroy()
  },

}

export default PopoverDirective