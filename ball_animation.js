// ! connect DOM element 
const canvas = document.getElementById("animation")
const ctx = canvas.getContext("2d")

function Ball() {
    this.x = 100
    this.y = 100
    this.xSpeed = -2
    this.ySpeed = 3
}

const circle = (x, y, radius, fillCircle) => {
    ctx.beginPath()

    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
        if (fillCircle) {
            ctx.fill()
        }else {
            ctx.stroke()
        }
}
Ball.prototype.draw = function () {
    circle(this.x, this.y, 3, true)
}

Ball.prototype.move = function () {
    this.x += this.xSpeed
    this.y += this.ySpeed
}
