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
import Message from './message'
import MessageBox from './message-box'
import { bind } from '../utils/dom'

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
  const VP = window.Vue.prototype
  VP.$message = Message
  VP.$alert = MessageBox.alert
  VP.$confirm = MessageBox.confirm
}


function routeChangeDestory () {
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
  Alert
}