export const skeletonTpl = `
<%if (title) {%>
  <h3 class="nv-popover__title"><%= title%></h3>
<% }%>  
<div class="nv-popover__content"></div>
<% if (cancel || confirm) { %>
<div class="nv-popover__btns">
  <% if(cancel) {%>
  <button type="button" class="nv-btn nv-btn--small nv-popover__cancel <%=cancel.css%>"><%=cancel.text%></button>  
  <% } if (confirm) {%>
  <button type="button" class="nv-btn nv-btn--small nv-popover__confirm <%=confirm.css%>"><%=confirm.text%></button>
  <% }%>    
</div>
<% }%>
`
export default {
  skeletonTpl
}