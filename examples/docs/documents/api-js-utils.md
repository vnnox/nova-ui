# Javascript 工具函数库

```javascript
import Utils '@vnnox/novaui/src/utils/utils'
```

## isString
> 校验传入值是否是字符串

``` javascript
Utils.isString('string') // true
Utils.isString(123) // false
```

## isObject
> 校验传入值是否是对象

``` javascript
Utils.isObject({}) // true
Utils.isObject(123) // false
Utils.isObject(null) // false
```

## isPlainObject
> 校验传入值是否是纯对象

``` javascript
Utils.isPlainObject({}) // true
Utils.isPlainObject([]) // false
Utils.isPlainObject(null) // false
```

## isArray
> 校验传入值是否是数组

``` javascript
Utils.isArray({}) // false
Utils.isArray([]) // true
```

## isFunction
> 校验传入值是否是函数

``` javascript
Utils.isFunction(function() {}) // true
let func = () => {}
Utils.isFunction(func) // true
```

## isPrimitive
> 校验传入值是否是基本类型值

``` javascript
Utils.isPrimitive('string') // true
Utils.isPrimitive(123) // true
Utils.isPrimitive(false) // true
Utils.isPrimitive(void 0) // true
Utils.isPrimitive(Symbol()) // true
Utils.isPrimitive({}) // false
Utils.isPrimitive([]) // false
Utils.isPrimitive(null) // false
```

## isBoolean
> 校验传入值是否是布尔类型

``` javascript
Utils.isBoolean(false) // true
Utils.isBoolean({}) // false
```

## isNumber
> 校验传入值是否是数字

``` javascript
Utils.isNumber(123) // true
Utils.isNumber('123') // false
Utils.isNumber(NaN) // false
```

## isNumberString
> 校验传入值是否是数字字符串

``` javascript
Utils.isNumberString('123') // true
Utils.isNumberString(123) // true
Utils.isNumberString(NaN) // false
```

## isInteger
> 校验传入值是否是整数

``` javascript
Utils.isInteger(123) // true
Utils.isInteger(12.3) // false
```

## isFloat
> 校验传入值是否是浮点数

``` javascript
Utils.isFloat(12.3) // true
Utils.isFloat(123) // false
```

## isElement
> 校验传入值是否是一个DOM元素

``` javascript
Utils.isElement(document.body) // true
Utils.isElement(document.getElementById('id')) // true
Utils.isElement({}) // false
Utils.isElement(window) // false
```

## isDate
> 校验传入值是否是一个日期对象

``` javascript
Utils.isDate(new Date()) // true
Utils.isDate('2018-12-14') // false
```

## isEmpty
> 校验传入值是否为空

``` javascript
Utils.isEmpty(null) // true
Utils.isEmpty(undefined) // true
Utils.isEmpty('') // true
Utils.isEmpty('  ') // true
Utils.isEmpty(false) // false
Utils.isEmpty(0) // false
```

## hasKey
> 判断对象自身是否含有指定的key

``` javascript
Utils.hasKey('a', {a: '1'}) // true
```

## toArray
> 将类数组转换为数组

``` javascript
Utils.toArray(document.getElementByClassName('className')) // [...]
Utils.toArray(arguments) // [...]
```

## mixins
> 对象混合，同JQuery `$.extends`

``` javascript
Utils.mixins(target, source, source2, ...sourcen) 
// 深拷贝
Utils.mixins(true, target, source, source2, ...sourcen) 
```

## objectClone
> 纯对象克隆, 深克隆。如克隆数据副本。

``` javascript
Utils.objectClone(plainObject) // plainObject 副本 
```

## hyphenate
> 驼峰转连接符

``` javascript
Utils.hyphenate('fadeIn') // fade-in
Utils.hyphenate('easeInOut') // ease-in-out
```

## escapeRegExp
> 对传入regExp的字符串转义。如搜索框中进行模糊匹配的时候，需要对键入的特殊字符进行转义

``` javascript
Utils.escapeRegExp(value) // 返回转义后的字符串
```

## getObjectValue
> 根据路径从一个对象中获取其值。内置了容错机制，防止层级太深时报错，一般用于后台返回的层级较深的数据结构

``` javascript
Utils.getObjectValue(path, object) 
Utils.getObjectValue('p1.p2', obj) // obj.p1.p2
Utils.getObjectValue('p1.0.p2', obj) // obj.p1[0].p2
```

## uuid
> 获取一个唯一值

``` javascript
Utils.uuid() // 返回一个数字
```
