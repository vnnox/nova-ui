require('../../src/scss/index.scss')
require('../assets/scss/index.scss')
document.getElementById('head').innerHTML = require('html-loader?interpolate!./header.html')
require('./router.components')

import Dom from '../../src/utils/dom'
import InputNumber from '../../src/components/input-number'
import Tree from '../../src/components/tree'
import Picker from '../../src/components/picker'
import Select from '../../src/components/select'
import Pagination from '../../src/components/pagination'
import Slider from '../../src/components/slider'



const Nova = Object.create(null)
Nova.Dom = Dom 
Nova.InputNumber = InputNumber
Nova.Tree = Tree
Nova.Picker = Picker
Nova.Select = Select
Nova.Pagination = Pagination
Nova.Slider = Slider

window.Nova = Nova