require('./scss/index.scss')

import InputNumber from './components/input-number'
import Pagination from './components/pagination'
import Picker from './components/picker'
import Select from './components/select'
import Slider from './components/slider'
import Tree from './components/tree'
import Utils from './utils/utils'
import Dom from './utils/dom'
import Events from './utils/events'

const Nova = Object.create(null)

Nova.$Utils = Utils
Nova.$Events = Events
Nova.$Dom = Dom 
Nova.InputNumber = InputNumber
Nova.Pagination = Pagination
Nova.Picker = Picker
Nova.Select = Select
Nova.Slider = Slider
Nova.Tree = Tree 

Object.freeze(Nova)

export default Nova