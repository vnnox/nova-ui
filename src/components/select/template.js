// 骨架
export const skeletonTpl = `
<input type="text" class="nv-input nv-select__value" name="<%=name%>" readonly autocomplete="off"<%if (disabled) {%> disabled<% } if (placeholder) {%> placeholder="<%=placeholder%>"<%}%> />
<% if (clearable) { %>
<a class="nv-select__clean"><i class="nv-icon-close"></i></a>
<% } %> 
`

// picker骨架
export const pickerSkeletonTpl = `
<div class="select-options__wrap"></div>
`

// options group
export const optionGroupsTpl = `
<% for(var i = 0, len = options.length; i < len; i++) { 
  var group = options[i];
%>
<div class="nv-select__group">
  <h5 class="nv-select__title"><%= group.label%></h5>
  <ul class="nv-select__options">
    <% for(var j = 0, size = group.options.length; j < size; j++) { 
      var option = group.options[j];
    %>
    <li class="nv-select__option<% if (disabled || option.disabled) {%> nv-disabled<% }%>" data-group="<%= i%>" data-index="<%= j%>"><%= render(option, j, i)%></li>
    <% }%>
  </ul>
</div>
<% }%>
`

// options
export const optionsTpl = `
<ul class="nv-select__options">
  <% for(var j = 0, size = options.length; j < size; j++) { 
    var option = options[j];
  %>
  <li class="nv-select__option<% if (disabled || option.disabled) {%> nv-disabled<% }%>" data-group="0" data-index="<%= j%>"><%= render(option, j, 0)%></li>
  <% }%>
</ul>
`

export default {
  skeletonTpl,
  pickerSkeletonTpl,
  optionGroupsTpl,
  optionsTpl
}