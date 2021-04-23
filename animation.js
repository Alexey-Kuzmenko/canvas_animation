// alert("testing")
// const canvas = document.getElementById("animation")
// const ctx = canvas.getContext("2d")

// let position = 0
// setInterval(
//     function () {
//         ctx.clearRect(0, 0, 200, 200)
//         ctx.fillRect(position, 0, 20, 20)
//         position++
//         if (position > 200) {
//             position = 0
//         }
//     },30)

// * change rect size 

// const canvas = document.getElementById("animation")
// const ctx = canvas.getContext("2d")

// let rectSize = 0

// setInterval(
//     function () {
//         ctx.clearRect(0, 0, 200, 200)
//         ctx.fillRect(0, 0, rectSize, rectSize)
        
//         rectSize++
//         if (rectSize > 200) {
//             rectSize = 0
//         }
//     },30)

// * bee animation 

const circle = (x, y, radius, fillCircle) => {
    ctx.beginPath()

    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
        if (fillCircle) {
            ctx.fill()
        }else {
            ctx.stroke()
        }
}

// * draw bee

const drawBee = (x, y) => {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Gold";

    circle(x, y, 8, true)
    circle(x, y, 8, false)
    circle(x - 5, y - 11, 5, false)
    circle(x + 5, y - 11, 5, false)
    circle(x - 2, y - 1, 2, false)
    circle(x + 2, y - 1, 2, false)
}

// * change bee position 
const update = (coordinate) => {
    let offset = Math.random() * 4 - 2
    coordinate += offset

    if (coordinate > 200) {
        coordinate = 200
    } 
    if (coordinate < 0) {
        coordinate = 0
    }
    return coordinate
}

// * bee animation code 
const canvas = document.getElementById("animation")
const ctx = canvas.getContext("2d")

let x = 100
let y = 100

setInterval(
    function () {
        ctx.clearRect(0, 0, 200, 200)
        
        drawBee(x, y)
        x = update(x)
        y = update(y)
        ctx.strokeRect(0, 0, 200, 200)
    }, 30)

