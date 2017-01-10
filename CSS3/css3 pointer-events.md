pointer-events 更像是JavaScript，它能够：

阻止用户的点击动作产生任何效果
阻止缺省鼠标指针的显示
阻止CSS里的 hover 和 active 状态的变化触发事件
阻止JavaScript点击动作触发的事件
实际代码使用中案例：

1、提交页面，提交按钮点击后，添加这个样式属性（style="pointer-events"），来防止重复提交。 @camnpr

2、一些层的绝对定位，覆盖按钮，穿透可以点击它。等等。

来看下具体用法：

pointer-events:  auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit
pointer-events属性有很多值，但是对于浏览器来说，只有auto和non两个值可用，其它的几个是针对SVG的(本身这个属性就来自于SVG技术)。

@郑州网建

pointer-events属性值详解

auto——效果和没有定义pointer-events属性相同，鼠标不会穿透当前层。在SVG中，该值和visiblePainted的效果相同。
none——元素不再是鼠标事件的目标，鼠标不再监听当前层而去监听下面的层中的元素。但是如果它的子元素设置了pointer-events为其它值，比如auto，鼠标还是会监听这个子元素的。
其它属性值为SVG专用，这里不再多介绍了。
浏览器兼容性

Firefox 3.6+和chrome 2.0+ 以及safari 4.0+都支持这个CSS3属性，IE6/7/8/9都不支持（IE11又支持，不过很好的一点是在ie中给a加disabled 点击事件自动无效。），Opera在SVG中支持。 但是 该属性HTML中 不支持 。