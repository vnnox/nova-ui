import NvDropmenu from './main'
import NvDropmenuItem from './item'

NvDropmenu.install = Vue => Vue.component(NvDropmenu.name, NvDropmenu)
NvDropmenuItem.install = Vue => Vue.component(NvDropmenuItem.name, NvDropmenuItem)


export default {
  NvDropmenu,
  NvDropmenuItem
}