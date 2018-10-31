import NvCheckboxGroup from './group'
import NvCheckboxItem from './item'

NvCheckboxGroup.install = Vue => Vue.component(NvCheckboxGroup.name, NvCheckboxGroup)
NvCheckboxItem.install = Vue => Vue.component(NvCheckboxItem.name, NvCheckboxItem)

export default {
  NvCheckboxGroup,
  NvCheckboxItem,
}