export const skeletonTpl = `
<li role="treeitem" class="nv-tree__node<% if(expandAll || node.expanded) {%> tree-node--expanded<% } if(disabled || node.disabled) {%> nv-disabled<% } if(node.children && node.children.length) {%> tree-node--branch<% } else {%> tree-node--leaf<% } if(!node.visible) {%> tree-node--hidden<% }%>" data-node="<%= node.id%>">
  <div class="tree-node__inner" style="padding-left:<%= (node.level * indent)%>px;">
    <span class="tree-node__icon<% if(!node.children || !node.children.length) {%> is-leaf<% }%>">
      <i class="nv-icon-arrow-right"></i>
    </span> 
    <% if(checkable) { %>
    <label class="nv-<%= chooseType %> tree-node__check" role="<%= chooseType%>">
      <input type="<%= chooseType%>" class="tree-node__value" name="<%= checkName %>" value="<%= node.id%>"<% if(disabled || node.disabled) {%> disabled<% } if (node.checked) {%> checked<% }%> />
      <i class="nv-<%= chooseType%>__icon"></i>
    </label>
    <% } %>
    <div class="tree-node__label" title="<%= node.label%>"><%= node.content%></div>
  </div>
  <% if(node.children && node.children.length) {%>
    <ul role="group" class="tree-node__children">
      <%= callback(node.children)%>
    </ul>
  <%}%>  
</li>
`

export const noDataTpl = `
<li class="nv-tree__empty"><%=noDataText%></li>
`

export const noMatchDataTpl = `
<li class="nv-tree__empty no-match"><%=noMatchDataText%></li>
`

export default {
  skeletonTpl,
  noDataTpl
}