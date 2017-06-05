# 一、text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中？
text-align:center 作用在块级容器上，可使行内元素或文本在其父容器中水平居中；对块级元素无效，但对其中的文本生效；属性可继承。

![[对应示例](http://js.jirengu.com/sajinoceqa/2/edit)](http://upload-images.jianshu.io/upload_images/5550805-a2ccd122c397e5d9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 二、IE 盒模型和W3C盒模型有什么区别?
* W3C盒模型的设定的宽高是content的宽高，而IE盒模型设定的宽高是content、padding、border整体的宽高。
通过声明doctype可以使浏览器以W3C盒模型渲染。

![W3C盒模型](http://upload-images.jianshu.io/upload_images/5550805-8b646fd8a442e47a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![IE盒模型](http://upload-images.jianshu.io/upload_images/5550805-bc5a547325c3daa3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 三、`*{ box-sizing: border-box;}`的作用是什么？
所有元素使用IE盒模型来计算宽高，即元素宽高包含content、padding、border。

# `line-height: 2`和`line-height: 200%`有什么区别?
* `line-height: 2`：相对于元素本身字体大小的倍数；
* `line-height: 200%`：相对于父元素字体大小的百分比。

# 四、inline-block有什么特性？如何去除缝隙？高度不一样的inline-block元素如何顶端对齐?
* 特性：同时具有inline元素的宽度由内容决定，不像block占据一整行的特性，又具有block可设置宽高，内外边距的特性。
* 去除缝隙：缝隙是由于inline-block元素还是内联元素，标签之间的空格有显示。可以让两个inline-block元素结束和开始标签之间没有空格或者让父元素的font-size为0，子元素再设置font-size覆盖，如：

![去除inline-block缝隙](http://upload-images.jianshu.io/upload_images/5550805-ebed72be6da4b55b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
* 高度不一样的inline-block元素如何顶端对齐：vertical-align:top;(对于inline level或table-cell设置起效)

# 五、让一个元素"看不见"有几种方式？有什么区别?
>参考文献
[1.Does opacity:0 have exactly the same effect as visibility:hidden](http://stackoverflow.com/questions/272360/does-opacity0-have-exactly-the-same-effect-as-visibilityhidden)

|方式 |区别|
|:-:| :----------:|
|opacity: 0 | 容器内所有元素都变为透明，可以响应鼠标点击等事件 |
|visibility: hidden |容器内元素不显示，占用位置，不可响应点击等事件，但子元素可以通过visibility:visible显示|
| display:none |元素不显示，也不占用位置，当然也不响应事件|
|background-color: rgba(0，0，0，0) |a的值设为0时，背景色做透明处理，背景图片或子元素不受影响|

# 六、实现效果

![[效果一 -- 点我](http://js.jirengu.com/jayazojesi/2/edit)](http://upload-images.jianshu.io/upload_images/5550805-d421ad9f420acc79.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![[效果二 -- 点我](http://js.jirengu.com/cemegebivu/2/edit)](http://upload-images.jianshu.io/upload_images/5550805-7dd3c6d97da49bcd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
