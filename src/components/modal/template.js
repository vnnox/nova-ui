export const skeletonTpl = `
<div class="nv-modal-dialog" role="document">
  <% if (title || closeBtn) { %>
  <div class="nv-modal__head<% if(closeBtn) {%> has-close<% }%><% if(title) {%> has-title<% }%>">
    <h3 class="nv-modal__title"><%=title%></h3>
    <% if(closeBtn) {%>
    <button type="button" class="nv-modal__close" data-dismiss="modal" aria-label="Close">
      <i class="nv-icon-close"></i>
    </button>
    <% }%>
  </div>
  <% }%>
  <div class="nv-modal__body">
  </div>
  <% if(footSlot || btns) {%>
  <div class="nv-modal__foot">
    <% if(footSlot) {%>
    <div class="nv-modal__foot_slot"></div>
    <% } %> 
    <% if(btns) {%>
    <div class="nv-modal__foot_btns"></div>
    <% }%>
  </div>
  <% } %>
</div>  
`
export default skeletonTpl