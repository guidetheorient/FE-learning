## Q1.positon:absolute的参照对象为根节点时，那是body还是html？
A：html

![[Q1](http://js.jirengu.com/jefakewuta/3/edit)](http://upload-images.jianshu.io/upload_images/5550805-d091e2e95c7aa13a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Q2.positon:absolute的参照对象为根节点时，不设置位置值，及left:auto;
top:auto;间隔是怎么参照什么算出来的？

## Q3.1 positon:absolute;参照对象不是根节点，那么left:auto;top:auto;有什么特点？
感觉还是跟普通流有关系，可以看出，如果absolute元素的父容器内前面还有行内元素 ，则是相对于行内元素下边缘；如果是block level，那么是相对于下margin。即是想普通流中block一样占满一整行。

## Q3.2 left:0;top:0是相对于父元素的什么？
相对于父元素的border。


![[Q3.1](http://js.jirengu.com/lokoyinepi/2/edit?html,css,output)](http://upload-images.jianshu.io/upload_images/5550805-306eac9c578607ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![Q3.1](http://upload-images.jianshu.io/upload_images/5550805-68835833fe87c1da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![[Q3.2](http://js.jirengu.com/bafuheteru/2/edit)](http://upload-images.jianshu.io/upload_images/5550805-275667be164cf69e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 4.1 positon:absolute;会让行内元素dispay:block;
## 4.2 absolute元素通过设置 absolute可以设置z-index:-1;改为被其他元素覆盖

![[4.2](http://js.jirengu.com/heleqeqoda/2/edit)](http://upload-images.jianshu.io/upload_images/5550805-f62abcb43621b695.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


Q4 不同父容器内的浮动元素
![[Q4](http://js.jirengu.com/kayitiyijo/2/edit)](http://upload-images.jianshu.io/upload_images/5550805-f0f87ba8aaf3f166.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
