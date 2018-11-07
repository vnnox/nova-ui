import Radio from './radio'
import RadioGroups from './radio-group'
import Checkbox from './checkbox'
import CheckboxGroups from './checkbox-group'
import Switch from './switch'
import InputNumber from './input-number'


const RadioGroup = RadioGroups.NvRadioGroup
const RadioItem = RadioGroups.NvRadioItem
const CheckboxGroup = CheckboxGroups.NvCheckboxGroup
const CheckboxItem = CheckboxGroups.NvCheckboxItem

const components = [
  Radio,
  RadioGroup,
  RadioItem,
  Checkbox,
  CheckboxGroup,
  CheckboxItem,
  Switch,
  InputNumber,
]

const Vue = window.Vue

components.forEach(component => {
  console.log(component.name)
  Vue.component(component.name, component)
})

export default {
  Radio,
  RadioGroup,
  RadioItem,
  Checkbox,
  CheckboxGroup,
  CheckboxItem,
  Switch,
  InputNumber
}