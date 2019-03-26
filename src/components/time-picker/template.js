export const skeletonTpl = `
<div class="nv-time-picker__body">
  <div class="nv-time-picker__inputs">
    <% if(useHour) { %>
    <div class="time-picker__cell">
      <input class="nv-input nv-input--small js-hour" data-key="hour" maxlength="2"/>
    </div>
    <span class="time-picker__divider">:</span>
    <% } if(useMinute) { %>
    <div class="time-picker__cell">
      <input class="nv-input nv-input--small js-minute" data-key="minute" maxlength="2"/>
    </div>
    <% } if(useSecond) { %>
    <span class="time-picker__divider">:</span>
    <div class="time-picker__cell">
      <input class="nv-input nv-input--small js-second" data-key="second" maxlength="2"/>
    </div>
    <% } if(useMs) { %>
    <span class="time-picker__divider">.</span>
    <div class="time-picker__cell is-ms">
      <input class="nv-input nv-input--small js-ms" data-key="ms" maxlength="3"/>
    </div>
    <% } %>
  </div>
  
  <% if (spinner) {%>
  <div class="nv-time-picker__spinners">
    <% if(useHour) { %>
    <div class="time-picker__cell">
      <div class="time-spinner" data-key="hour">
        <a class="time-spinner__ctrl js-spinner-ctrl" role="button" data-key="hour" data-action="prev">
          <i class="nv-icon-arrow-up"></i>
        </a>
        <ul class="time-spinner__times js-spinner-hour"></ul>
        <a class="time-spinner__ctrl js-spinner-ctrl" role="button" data-key="hour" data-action="next">
          <i class="nv-icon-arrow-down"></i>
        </a>
      </div>
    </div>
    <span class="time-picker__divider nv-hidden"></span>
    <% } if(useMinute) { %>
    <div class="time-picker__cell">
      <div class="time-spinner" data-key="minute">
        <a class="time-spinner__ctrl js-spinner-ctrl" role="button" data-key="minute" data-action="prev">
          <i class="nv-icon-arrow-up"></i>
        </a>
        <ul class="time-spinner__times js-spinner-minute"></ul>
        <a class="time-spinner__ctrl js-spinner-ctrl" role="button" data-key="minute" data-action="next">
          <i class="nv-icon-arrow-down"></i>
        </a>
      </div>
    </div>
    <% } if(useSecond) { %>
    <span class="time-picker__divider nv-hidden"></span>
      <div class="time-picker__cell">
        <div class="time-spinner" data-key="second">
          <a class="time-spinner__ctrl js-spinner-ctrl" role="button" data-key="second" data-action="prev">
            <i class="nv-icon-arrow-up"></i>
          </a>
          <ul class="time-spinner__times js-spinner-second"></ul>
          <a class="time-spinner__ctrl js-spinner-ctrl" role="button" data-key="second" data-action="next">
            <i class="nv-icon-arrow-down"></i>
          </a>
       </div>
    </div>
    <% } if(useMs) { %>
    <span class="time-picker__divider nv-hidden"></span>
    <div class="time-picker__cell is-ms">
      <div class="time-spinner" data-key="ms">
        <a class="time-spinner__ctrl js-spinner-ctrl" data-key="ms" data-action="prev">
          <i class="nv-icon-arrow-up"></i>
        </a>
        <ul class="time-spinner__times js-spinner-ms"></ul>
        <a class="time-spinner__ctrl js-spinner-ctrl" data-key="ms" data-action="next">
          <i class="nv-icon-arrow-down"></i>
        </a>
      </div>
    </div>
    <% }%>
  </div>
</div>
<% }%>
<% if(now || confirm) {%>
<div class="nv-time-picker__btns">
  <% if(now) {%>
  <button class="nv-btn nv-btn--small nv-btn--link js-btn-now" type="button"><%= now%></button>
  <% } if(confirm) {%>
  <button class="nv-btn nv-btn--small nv-btn--primary js-btn-confirm" type="button"><%= confirm%></button>
  <% }%>  
</div>
<% }%>
`

export const optionsTpl = `
<% for(var i = 0, len = options.length; i < len; i++) {
  var option = options[i];
%>
<li class="time-spinner__time<% if(option.placeholder) { %> nv-placeholder<% } if(option.actived) {%> nv-actived<% }%>"><%= option.label%></li>
<% }%>
`




export default {
  skeletonTpl,
  optionsTpl
}