/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Used for ...
 * Created: 2018-11-08 11:13
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-08 11:29
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import Events from '../../utils/events'

export class Pagination extends Events {
  constructor(container, options) {
    super()
    if (!(this instanceof Pagination)) {
      return new Pagination(container, options)
    }
  }
}

export default Pagination