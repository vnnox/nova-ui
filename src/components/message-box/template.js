export const skeletonTpl = `
<% if (icon) { %>
<span class="nv-message-box__icon">
  <i class="<%= icon %>"></i>
</span>
<% } %>
<div class="nv-message-box__content">
  <div class="nv-message-box__message"></div>
  <% if (describe) { %>
  <div class="nv-message-box__describe"></div>
  <% } %>
</div>
`
export default {
  skeletonTpl
}