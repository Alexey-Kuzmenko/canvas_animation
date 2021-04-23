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

const canvas = document.getElementById("animation")
const ctx = canvas.getContext("2d")

let rectSize = 0

setInterval(
    function () {
        ctx.clearRect(0, 0, 200, 200)
        ctx.fillRect(0, 0, rectSize, rectSize)
        
        rectSize++
        if (rectSize > 200) {
            rectSize = 0
        }
    },30)


