export const skeletonTpl = `
<div class="nv-slider__runway">
  <div class="nv-slider__progress"></div>
  <div class="nv-slider__thumb" tabindex="<%if (disabled) {%>-1<% }else{ %>0<% }%>">
    <% if(tooltip) { %>
      <span class="nv-slider__tooltip"></span>
    <% } %>  
  </div> 
</div>
`

export default {skeletonTpl}