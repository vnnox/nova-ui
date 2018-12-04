export const skeletonTpl = `
<div class="nv-time-picker__body">
  <div class="nv-time-picker__wrap">
    <div class="nv-scroller hour-select" style="margin-right:-<%=scrollWidth%>px;">
      <ul class="nv-time-picker__select"></ul>
    </div>
  </div>
  <span class="nv-time-picker__separator">：</span>
  <div class="nv-time-picker__wrap">
    <div class="nv-scroller minute-select"  style="margin-right:-<%=scrollWidth%>px;">
      <ul class="nv-time-picker__select"></ul>
    </div>
  </div>
  <span class="nv-time-picker__separator">：</span>
  <div class="nv-time-picker__wrap">
    <div class="nv-scroller second-select"  style="margin-right:-<%=scrollWidth%>px;">
      <ul class="nv-time-picker__select"></ul>
    </div>
  </div>
</div>
`

export const optionsTpl = `
<% for(var i = 0, len = options.length; i < len; i++) {
  var option = options[i];
%>
<li class="nv-time-picker__option"><%=option.label%></li>
<% }%>
`




export default {
  skeletonTpl,
  optionsTpl
}