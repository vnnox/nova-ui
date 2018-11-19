require('../../src/scss/index.scss')
require('../assets/scss/index.scss')
document.getElementById('head').innerHTML = require('html-loader?interpolate!./header.html')
require('./router.components')

import Nova from '../../src/index.js'

window.Nova = Nova