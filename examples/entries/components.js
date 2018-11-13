require('../../src/scss/index.scss')
require('../assets/scss/index.scss')
document.getElementById('head').innerHTML = require('html-loader?interpolate!./header.html')
require('./router.components')

import Dom from '../../src/utils/dom'
import InputNumber from '../../src/components/input-number'
import Tree from '../../src/components/tree'
import Picker from '../../src/components/picker'
import Select from '../../src/components/select'


const Nova = Object.create(null)
Nova.Dom = Dom 
Nova.InputNumber = InputNumber
Nova.Tree = Tree
Nova.Picker = Picker
Nova.Select = Select

window.Nova = Nova