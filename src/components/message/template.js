export const skeletonTpl = `
<div class="nv-alert__inner">
  <% if (icon) {%>
  <span class="nv-alert__icon"><i class="<%=icon%>"></i></span>
  <% }%>
  <div class="nv-alert__content"></div>
  <% if(closeable) {%>
  <button type="button" class="nv-alert__close" aria-label="Close">
    <i class="nv-icon-close"></i>
  </button>
  <% }%>
</div>
`
export default skeletonTpl