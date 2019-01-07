export const skeletonTpl = `
<div class="nv-progress__track">
  <div class="nv-progress__running"></div>
  <% if(labelInside && showLabel) {%>
  <div class="nv-progress__label"></div>
  <% }%>
</div>
<% if(!labelInside && showLabel) {%>
  <div class="nv-progress__label"></div>
<% }%>
`

export default {
  skeletonTpl
}