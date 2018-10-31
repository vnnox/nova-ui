import NvRadioGroup from './group'
import NvRadioItem from './item'

NvRadioGroup.install = Vue => Vue.component(NvRadioGroup.name, NvRadioGroup)
NvRadioItem.install = Vue => Vue.component(NvRadioItem.name, NvRadioItem)

export default {
  NvRadioGroup,
  NvRadioItem,
}