export const skeletonTpl = `
<% if (lumps) {%>
<ul class="nv-color-picker__lumps"></ul>
<% } %>
<div class="nv-color-picker__panel"><div class="panel-main"></div></div>
<% if(clear || showInput || confirm) { %>
<div class="nv-color-picker__foot nv-clearfix">
  <% if(showInput) { %>
  <label class="nv-color-picker__current nv-left">
    <span class="current-lump"></span>
    <input class="nv-input nv-input--small nv-color-picker__value" spellcheck="false" value="<%= value%>"/>
  </label>
  <% } %>
  <div class="nv-color-picker__btns nv-right">
    <% if(clear) { %>
    <button type="button" class="nv-btn nv-btn--small nv-btn--link nv-color-picker__clear"><%= clear%></button>
    <% } if(confirm) { %>
    <button type="button" class="nv-btn nv-btn--small nv-btn--primary nv-color-picker__confirm"><%= confirm %></button>
    <% }%>
  </div>
</div>
<% }%>
`

export const lumpTpl = `
<li class="color-lump" data-value="<%=color%>"><span style="background-color:<%=color%>"></span></li>
`

export default {
  skeletonTpl,
  lumpTpl
}