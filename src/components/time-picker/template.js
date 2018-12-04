export const skeletonTpl = `
<div class="nv-time-picker__body">
  <div class="nv-time-picker__wrap">
    <div class="nv-scroller hour-select">
      <ul class="nv-time-picker__select"></ul>
    </div>
  </div>
  <div class="nv-time-picker__wrap">
    <div class="nv-scroller minute-select" >
      <ul class="nv-time-picker__select"></ul>
    </div>
  </div>
  <div class="nv-time-picker__wrap">
    <div class="nv-scroller second-select" >
      <ul class="nv-time-picker__select"></ul>
    </div>
  </div>
  <div class="nv-time-picker__separator">
    <span>:</span>
    <span>:</span>
    <span>:</span>
  </div>
</div>
<% if (cancel || confirm) { %>
<div class="nv-time-picker__foot">
<% if(cancel) {%>
  <button type="button" class="nv-btn nv-btn--small nv-btn--text nv-btn__cancel"><%= cancel%></button>
<% } %>
<% if(confirm) {%>
  <button type="button" class="nv-btn nv-btn--small nv-btn--link nv-btn__confirm"><%= confirm%></button>
<% } %>
</div>
<% } %>
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