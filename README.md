# Canvas

## 指定canvas宽高

```
let canvas = document.getElementById('canvas');
canvas.width = 1024;
canvas.height = 768;
```

## Canvas处理浏览器兼容

```
<canvas id="canvas">当前浏览器不支持Canvas</canvas>
```

```
// 判断浏览器是否支持canvas
if (canvas.getContext('2d')) {
	console.log('支持')
} else {
	console.log('不支持')
}
```

Canvas画直线

```
let context = canvas.getContext('2d')
context.moveTo(100, 100)
context.lineTo(700, 700)
context.fillStyle = "blue" // 着色
context.fill()
context.lineWidth = 5
context.strokeStyle = 'red' // 边框颜色
context.stroke()
```

```
let context = canvas.getContext('2d')
context.beginPath()   // 绘制开始
context.moveTo(100, 100)
context.lineTo(200, 100)
context.closePath()   // 绘制结束
context.lineWidth = 1
context.strokeStyle = "red"
context.stroke()   
context.beginPath()   // 第二段绘制开始
context.moveTo(150, 50)
context.lineTo(150, 150)
context.closePath()   // 第二段绘制结束
context.lineWidth = 1
context.strokeStyle = "blue"
context.stroke()
```

