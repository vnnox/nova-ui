require('../../src/scss/index.scss')
require('../assets/scss/index.scss')
document.getElementById('head').innerHTML = require('html-loader?interpolate!./header.html')
require('./router.components')

import InputNumber from '../../src/components/input-number'
import Tree from '../../src/components/tree'
import Dom from '../../src/utils/dom'



const Nova = Object.create(null)
Nova.InputNumber = InputNumber
Nova.Tree = Tree
Nova.Dom = Dom 


window.Nova = Nova