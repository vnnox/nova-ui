import Popover from '../../components/popover'

export const PopoverDirective = {
  inserted(el, binding) {
    let { modifiers, value: options } = binding
    options = options || {}
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
    return new Popover(el, options)
  }
}

export default PopoverDirective