// 定义全局变量宽高
const WIDTH = 1024
const HEIGHT = 768
const RADUIS = 6
var MARGIN_LEFT = 0
var MARGIN_TOP = 0
var balls = []
var second = 0
window.onload = () => {
  let canvas = document.getElementById('canvas')
  let context = canvas.getContext('2d')
  canvas.width = WIDTH
  canvas.height = HEIGHT
  setInterval(() => {
    render(context)
  }, 50);
}
// 时间处理函数
function render(cxt) {
  // 时分秒
  let date = new Date()
  let hourse = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let minutes = date.getMinutes()< 10 ? '0' + date.getMinutes() : date.getMinutes()
  let secondes = date.getSeconds()< 10 ? '0' + date.getSeconds() : date.getSeconds()
  // 秒数改变刷新
  if (second !== secondes) {
    let now = (hourse + ':' + minutes + ':' + secondes).split('')
    cxt.clearRect(0,0,WIDTH,HEIGHT)
    now.forEach((item, index)=> {
      renderDigit(MARGIN_LEFT + item == ':' ? index * 9 : index * 15 * (RADUIS + 1), MARGIN_TOP, item == ':'? 10 : item, cxt)
    })
    second = secondes


  }
  // renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hourse/10),cxt)
  // renderDigit(MARGIN_LEFT + 15*(RADUIS + 1),MARGIN_TOP,2,cxt)
  // renderDigit(MARGIN_LEFT + 30*(RADUIS + 1),MARGIN_TOP,10,cxt)
}
// 时钟绘制函数
function renderDigit(x,y,num,cxt) {
  let r = parseInt(Math.random() * 255)
  let g = parseInt(Math.random() * 255)
  let b = parseInt(Math.random() * 255)
  // cxt.fillStyle = 'blue'
  cxt.fillStyle = `rgb(${r},${g},${b})`
  for(let i = 0; i < digit[num].length; i++) {
    for(let j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        cxt.beginPath()
        cxt.arc(x + j * 2 * (RADUIS + 1) + (RADUIS + 1), y + i * 2 * (RADUIS + 1) + (RADUIS + 1), RADUIS, 0 , 2 * Math.PI)
        cxt.closePath()
        cxt.fill()
      }
    }
  }
}

// 小球动画
function addBalls(x,y,num) {
  for(let i = 0; i < digit[num].length; i++) {
    for(let j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j]) {
        var aBall = {
          x: x + j * 2 * (RADUIS + 1) + (RADUIS + 1),
          y: y + i * 2 * (RADUIS + 1) + (RADUIS + 1),
          g: 1.5 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random) * 1000) * 4,
          vy: -5,
          color: `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`
        }
        balls.push(aBall)
      }
    }
  }
  updateBalls()
}

function updateBalls() {
  balls.forEach(item => {
    item.x+=item.vx
    item.y+=item.vy
    item.vy+=item.g
    if (item.y >= HEIGHT - RADUIS) {
      item.y = HEIGHT - RADUIS
      item.vy = -item.vy * 0.75
    }
  })
}