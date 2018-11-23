export const skeletonTpl = `
<ul class="nv-color-picker__lumps"></ul>
<div class="nv-color-picker__panel"><div class="panel-main"></div></div>
<div class="nv-color-picker__foot nv-clearfix">
  <label class="nv-color-picker__current">
    <span class="current-lump"></span>
    <input class="nv-input">
  </label>
  <button type="button" class="nv-btn nv-btn--primary nv-right">确定</button>
</div>
`

export const lumpTpl = `
<li class="color-lump"><span style="background-color:<%=color%>"></span></li>
`

export default {
  skeletonTpl,
  lumpTpl
}