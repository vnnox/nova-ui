export const panelTpl = `
<div class="nv-date-panel">
  <div class="nv-date__head">
    <button type="button" class="year-prev">
      <i class="nv-icon-arrow-d-left"></i>
    </button>
    <button type="button" class="month-prev">
      <i class="nv-icon-arrow-left"></i>
    </button>
    <a class="year-current"></a>
    <a class="month-current"></a>
    <button type="button" class="month-next">
      <i class="nv-icon-arrow-right"></i>
    </button>
    <button type="button" class="year-next">
      <i class="nv-icon-arrow-d-right"></i>
    </button>
  </div>
  <div class="nv-date__body"></div>
  <div class="nv-date__foot">
  <% if(today) {%>
    <button type="button" class="nv-btn nv-btn--small nv-btn--link nv-date__btn_today"><%= today%></button>
  <% } %>
  <% if(confirm) {%>
    <button type="button" class="nv-btn nv-btn--small nv-btn--primary nv-date__btn_confirm"><%= confirm%></button>
  <% } %>
  </div>
</div>
`

export const weekTpl = `
<ul class="nv-date__rows week-rows">
<% for(var i = 0, len = weeks.length; i < len; i++) {
  var week = weeks[i];
%>
<li class="nv-date__cell"><%=week%></li>
<% }%>
</ul>
`

export const datesTpl = `
<% for(var i = 0; i < 6; i++) { %>
<ul class="nv-date__rows date-rows">
<% for(var j = 0; j < 7; j++) {
  var date = dates[i * 7 + j];
%>
<li class="nv-date__cell nv-date__item <% if(date.placeholder) { %> nv-placeholder<% } if (date.today) {%> is-today<% }%>"><span><%=date.label%></span></li>
<% }%>
</ul>
<% }%>
`

export const yearMonthTpl = `
<ul class="nv-date__rows year-rows">
<% for(var i = 0, len = dates.length; i < len; i++) {
  var date = dates[i];
%>
<li class="nv-date__cell nv-date__item<% if(date.placeholder) { %> nv-placeholder<% }%>"><span><%=date.label%></span></li>
<% }%>
</ul>
`

export default {
  panelTpl,
  weekTpl,
  datesTpl,
  yearMonthTpl
}