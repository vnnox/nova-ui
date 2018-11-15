// total record 
export const totalTpl = `
<span class="nv-pagination__cell nv-pagination__label nv-pagination__total">{i18n:total}</span>
`
// prev btn
export const prevTpl = `
<button type="button" class="nv-pagination__cell nv-pagination__prev">
  <%= prevText %>
</button>
`
// next btn
export const nextTpl = `
<button type="button" class="nv-pagination__cell nv-pagination__next">
  <%= nextText %>
</button>
`

// pagers wrap
export const pagerTpl = `
<ul class="nv-pagination__cell nv-pagination__pagers">
</ul>
`

export const sizesTpl = `
<div class="nv-pagination__cell nv-pagination__sizes">
  <input type="text">
  <span class="nv-pagination__label">{i18n:eachPage}</span>
</div>
`


export const jumperTpl = `
<div class="nv-pagination__cell nv-pagination__jumper">
  <span class="nv-pagination__label">{i18n:jumper}</span>
  <input type="text" class="nv-input pagination-jumper__input" value="<%= jumper%>">
  <span class="nv-pagination__label">{i18n:unit}</span>
</div>
`

export const pagerItemsTpl = `
<% for(var i = 0, len = data.length; i < len; i++) {
  var pager = data[i];
%>
  <% if(pager.value === -1) {%>
    <li class="nv-pager nv-pager--ellipsis"></li>
  <% } else { %>
    <li class="nv-pager<% if(pager.active){ %> nv-actived<% }%>" data-value="<%= pager.value%>"><%= pager.value %></li>
  <% }%>
<% }%>
`


export default {
  totalTpl,
  prevTpl,
  pagerTpl,
  nextTpl,
  sizesTpl,
  jumperTpl,
  pagerItemsTpl
}