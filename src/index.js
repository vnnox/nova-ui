require('./scss/index.scss')

import Utils from './utils/utils'
import Dom from './utils/dom'
import Events from './utils/events'
import InputNumber from './components/input-number'
import Pagination from './components/pagination'
import Select from './components/select'
import Slider from './components/slider'
import Tree from './components/tree'
import Modal from './components/modal'
import Message from './components/message'
import MessageBox from './components/message-box'
import Popover from './components/popover'
import ColorPicker from './components/color-picker'
import Loader from './components/loader'
import DatePicker from './components/date-picker'
import Picker from './components/picker'


const Nova = Object.create(null)

Nova.$Utils = Utils
Nova.$Events = Events
Nova.$Dom = Dom
Nova.InputNumber = InputNumber
Nova.Pagination = Pagination
Nova.Popover = Popover
Nova.Select = Select
Nova.Slider = Slider
Nova.Tree = Tree
Nova.Modal = Modal
Nova.Message = Message
Nova.MessageBox = MessageBox
Nova.ColorPicker = ColorPicker
Nova.Loader = Loader
Nova.DatePicker = DatePicker
Nova.Picker = Picker

function routeChangeDestory() {
  MessageBox.destroy()
  Message.destroy()
  Loader.destroy()
}

// 当路由改变时，销毁已存在的实例
Dom.bind(window, 'hashchange', routeChangeDestory)
Dom.bind(window, 'popstate', routeChangeDestory)


Object.freeze(Nova)

export default Nova