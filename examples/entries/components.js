require('../../src/scss/index.scss')
require('../assets/scss/index.scss')
document.getElementById('head').innerHTML = require('html-loader?interpolate!./header.html')
require('./router.components')

import InputNumber from '../../src/components/input-number'

const Nova = Object.create(null)
Nova.InputNumber = InputNumber

window.Nova = Nova