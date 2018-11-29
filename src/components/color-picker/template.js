// export const skeletonTpl = `
// <% if (lumps) {%>
// <ul class="nv-color-picker__lumps"></ul>
// <% } %>
// <div class="nv-color-picker__panel"><div class="panel-main"></div></div>
// <% if(clear || showInput || confirm) { %>
// <div class="nv-color-picker__foot nv-clearfix">
//   <% if(showInput) { %>
//   <label class="nv-color-picker__current nv-left">
//     <span class="current-lump"></span>
//     <input class="nv-input nv-input--small nv-color-picker__value" spellcheck="false" value="<%= value%>"/>
//   </label>
//   <% } %>
//   <div class="nv-color-picker__btns nv-right">
//     <% if(clear) { %>
//     <button type="button" class="nv-btn nv-btn--small nv-btn--link nv-color-picker__clear"><%= clear%></button>
//     <% } if(confirm) { %>
//     <button type="button" class="nv-btn nv-btn--small nv-btn--primary nv-color-picker__confirm"><%= confirm %></button>
//     <% }%>
//   </div>
// </div>
// <% }%>
// `

export const skeletonTpl = `
<div class="color-panel">
  <ul class="color-panel__lumps recommend-colors"></ul>
  <div class="color-panel__recently">
    <h3 class="recently-label"><%= recently%></h3>
    <ul class="color-panel__lumps recently-colors"></ul>
  </div>
</div>
`


export const moreBtnTpl = `
<li class="color-lump nv-color-picker_more">
  <label class="more-toggle">
    <input type="color" class="choose-color">
    <a role="button" class="more-toggle__btn"><%= more%></a>
  </label>
</li>
`

export const lumpTpl = `
<li class="color-lump" data-value="<%=color%>"><span style="background-color:<%=color%>"></span></li>
`

export default {
  skeletonTpl,
  moreBtnTpl,
  lumpTpl
}