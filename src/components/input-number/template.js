// 骨架
export const skeletonTpl = `
<input type="text" class="nv-input<% if(size) {%> nv-input--<%=size%><% }%>" placeholder="<%= placeholder%>" name="<%= name%>" role="spinbutton" autocomplete="off" aria-valuemin="<%= min%>" aria-valuemax="<%= max%>" aria-valuenow="" aria-disabled="<%= disabled%>"<% if (!editable) {%> readonly<% }%><% if (disabled) {%> disabled<% }%>/>
<a class="nv-input-number__increase" role="button" aria-label="Increase Value" aria-disabled="<%=disabled%>"></a>
<a class="nv-input-number__decrease" role="button" aria-label="Decrease Value" aria-disabled="<%=disabled%>"></a>
`

export default skeletonTpl