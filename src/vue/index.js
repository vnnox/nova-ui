import Radio from './radio'
import RadioGroups from './radio-group'
import Checkbox from './checkbox'
import CheckboxGroups from './checkbox-group'
import Switch from './switch'
import InputNumber from './input-number'
import Tree from './tree'
import Select from './select'
import Option from './option'
import Pagination from './pagination'
import Slider from './slider'
import Modal from './modal'
import Alert from './alert'


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
  Tree,
  Option,
  Select,
  Pagination,
  Slider,
  Modal,
  Alert,
]

if (typeof window !== 'undefined' && window.Vue) {
  components.forEach(component => {
    window.Vue.component(component.name, component)
  })
}

export default {
  Radio,
  RadioGroup,
  RadioItem,
  Checkbox,
  CheckboxGroup,
  CheckboxItem,
  Switch,
  InputNumber,
  Tree,
  Option,
  Select,
  Pagination,
  Slider,
  Modal,
  Alert
}