export const skeletonTpl = `
<div class="nv-loader__backdrop" style="background:<%=background%>;"></div>
<div class="nv-loader__inner">
  <div class="nv-loader__content">
    <span class="nv-loader__spin">
      <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
    </span>
    <% if(label) {%>
    <span class="nv-loader__label"><%=label%></span>
    <% }%>
  </div>
</div>
`

export default {
  skeletonTpl
}