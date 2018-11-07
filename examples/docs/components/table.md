# Table 表格

### 基础用法

:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">单行</h5>
  <p class="doc-row__describe">适用于表格内容少，条目可以单行展示的需求</p>
  <div class="doc-row__body">
    <table class="nv-table">
      <thead>
        <tr>
          <th><div class="nv-table__cell">序号</div></th>
          <th><div class="nv-table__cell">类型</div></th>
          <th><div class="nv-table__cell">许可证</div></th>
          <th><div class="nv-table__cell">使用状态</div></th>
          <th><div class="nv-table__cell">到期时间</div></td>
        </tr>  
      </thead>
      <tbody>
        <tr>
          <td><div class="nv-table__cell">1</div></td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td><div class="nv-table__cell">未使用</div></td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
        <tr>
          <td><div class="nv-table__cell">2</div></td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td><div class="nv-table__cell">未使用</div></td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
        <tr>
          <td><div class="nv-table__cell">3</div></td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td><div class="nv-table__cell">未使用</div></td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
      </tbody>    
    </table>  
  </div>
</div>  
<div class="doc-row">
  <h5 class="doc-row__title">多行</h5>
  <p class="doc-row__describe">适用于有复杂媒体资源展示（如缩略图）或者每一列需要展示多个信息的需求。此时需要为表格添加<code>nv-table--multiline</code>样式类</p>
  <div class="doc-row__body">
    <table class="nv-table nv-table--multiline">
      <thead>
        <tr>
          <th><div class="nv-table__cell">序号</div></th>
          <th><div class="nv-table__cell">缩略图</div></th>
          <th><div class="nv-table__cell">类型</div></th>
          <th><div class="nv-table__cell">许可证</div></th>
          <th><div class="nv-table__cell">详细信息</div></th>
          <th><div class="nv-table__cell">到期时间</div></td>
        </tr>  
      </thead>
      <tbody>
        <tr>
          <td><div class="nv-table__cell">1</div></td>
          <td>
            <div class="nv-table__cell">
              <span class="table-demo-thumb"></span>
            </div>
          </td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td>
            <div class="nv-table__cell">
              <p>使用：未使用</p>
              <p>数量：200个</p>
            </div>
          </td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
        <tr>
          <td><div class="nv-table__cell">2</div></td>
          <td>
            <div class="nv-table__cell">
              <span class="table-demo-thumb"></span>
            </div>
          </td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td>
            <div class="nv-table__cell">
              <p>使用：未使用</p>
              <p>数量：200个</p>
            </div>
          </td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
        <tr>
          <td><div class="nv-table__cell">3</div></td>
          <td>
            <div class="nv-table__cell">
              <span class="table-demo-thumb"></span>
            </div>
          </td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td>
            <div class="nv-table__cell">
              <p>使用：未使用</p>
              <p>数量：200个</p>
            </div>
          </td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
      </tbody>    
    </table>  
  </div>
</div>  

```
:::

### 隔行变色（斑马纹）

> 类名：`nv-table--striped`

:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">单行</h5>
  <p class="doc-row__describe">适用于表格内容少，条目可以单行展示的需求</p>
  <div class="doc-row__body">
    <table class="nv-table nv-table--striped">
      <thead>
        <tr>
          <th><div class="nv-table__cell">序号</div></th>
          <th><div class="nv-table__cell">类型</div></th>
          <th><div class="nv-table__cell">许可证</div></th>
          <th><div class="nv-table__cell">使用状态</div></th>
          <th><div class="nv-table__cell">到期时间</div></td>
        </tr>  
      </thead>
      <tbody>
        <tr>
          <td><div class="nv-table__cell">1</div></td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td><div class="nv-table__cell">未使用</div></td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
        <tr>
          <td><div class="nv-table__cell">2</div></td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td><div class="nv-table__cell">未使用</div></td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
        <tr>
          <td><div class="nv-table__cell">3</div></td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td><div class="nv-table__cell">未使用</div></td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
      </tbody>    
    </table>  
  </div>
</div>  
<div class="doc-row">
  <h5 class="doc-row__title">多行</h5>
  <p class="doc-row__describe">适用于有复杂媒体资源展示（如缩略图）或者每一列需要展示多个信息的需求。此时需要为表格添加<code>nv-table--multiline</code>样式类</p>
  <div class="doc-row__body">
    <table class="nv-table nv-table--striped nv-table--multiline">
      <thead>
        <tr>
          <th><div class="nv-table__cell">序号</div></th>
          <th><div class="nv-table__cell">缩略图</div></th>
          <th><div class="nv-table__cell">类型</div></th>
          <th><div class="nv-table__cell">许可证</div></th>
          <th><div class="nv-table__cell">详细信息</div></th>
          <th><div class="nv-table__cell">到期时间</div></td>
        </tr>  
      </thead>
      <tbody>
        <tr>
          <td><div class="nv-table__cell">1</div></td>
          <td>
            <div class="nv-table__cell">
              <span class="table-demo-thumb"></span>
            </div>
          </td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td>
            <div class="nv-table__cell">
              <p>使用：未使用</p>
              <p>数量：200个</p>
            </div>
          </td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
        <tr>
          <td><div class="nv-table__cell">2</div></td>
          <td>
            <div class="nv-table__cell">
              <span class="table-demo-thumb"></span>
            </div>
          </td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td>
            <div class="nv-table__cell">
              <p>使用：未使用</p>
              <p>数量：200个</p>
            </div>
          </td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
        <tr>
          <td><div class="nv-table__cell">4</div></td>
          <td>
            <div class="nv-table__cell">
              <span class="table-demo-thumb"></span>
            </div>
          </td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td>
            <div class="nv-table__cell">
              <p>使用：未使用</p>
              <p>数量：200个</p>
            </div>
          </td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
        <tr>
          <td><div class="nv-table__cell">3</div></td>
          <td>
            <div class="nv-table__cell">
              <span class="table-demo-thumb"></span>
            </div>
          </td>
          <td><div class="nv-table__cell">同步</div></td>
          <td><div class="nv-table__cell">0210-3849-2895-1239</div></td>
          <td>
            <div class="nv-table__cell">
              <p>使用：未使用</p>
              <p>数量：200个</p>
            </div>
          </td>
          <td><div class="nv-table__cell">2017-12-31</div></td>
        </tr>
      </tbody>    
    </table>  
  </div>
</div>  

```
:::