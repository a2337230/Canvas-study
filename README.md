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

## Canvas绘制弧线

```
let canvas = document.getElementById('canvas')
canvas.width = 1024
canvas.height = 768
let context = canvas.getContext('2d')
context.lineWidth = 5
context.strokeStyle = "red"
context.arc(300,300,200,0,0.5 * Math.PI, true)
// x,y,半径,起点,终点,是否逆时针
context.stroke()
```

```
for(let i = 0; i<10; i++) {
    context.beginPath()
    context.arc(50 + i * 100, 150, 40, 0 , 2 * Math.PI * (i + 1)/ 10)
    context.closePath() // 会使收尾链接
    context.stroke()
}
```

```
实心圆-实心closePath没有影响
context.fillStyle = '#005588'
for(let i = 0; i<10; i++) {
    context.beginPath()
    context.arc(50 + i * 100, 150, 40, 0 , 2 * Math.PI * (i + 1)/ 10)
    context.fill()
}
```

## Canvas刷新操作

```
*cxt*.clearRect(0,0,WIDTH,HEIGHT)
```

