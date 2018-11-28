import { bind } from '../utils/dom'
import Radio from './radio'
import Checkbox from './checkbox'
import RadioGroups from './radio-group'
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
import Message from './message'
import MessageBox from './message-box'
import Popover from './popover'
import Tag from './tag'
import ColorPicker from './color-picker'
import Loader from './loader'
import DatePicker from './date-picker'


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
  Tag,
  ColorPicker,
  DatePicker,
]

if (typeof window !== 'undefined' && window.Vue) {
  components.forEach(component => {
    window.Vue.component(component.name, component)
  })
  const VP = window.Vue.prototype
  VP.$message = Message
  VP.$alert = MessageBox.alert
  VP.$confirm = MessageBox.confirm
  VP.$loader = Loader.Loader

  // directive
  window.Vue.directive('popover', Popover)
  window.Vue.directive('loader', Loader.directive)
}


function routeChangeDestory() {
  MessageBox.destroy()
  Message.destroy()
}

// 当路由改变时，销毁已存在的实例
bind(window, 'hashchange', routeChangeDestory)
bind(window, 'popstate', routeChangeDestory)


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
  Alert,
  Tag,
  ColorPicker,
  DatePicker
}