// alert("testing")
const canvas = document.getElementById("animation")
const ctx = canvas.getContext("2d")

let position = 0
setInterval(
    function () {
        ctx.clearRect(0, 0, 200, 200)
        ctx.fillRect(position, 0, 20, 20)

        position++
        if (position > 200) {
            position = 0
        }
    },30)

    // ! clear Rect - очистить прямоугольник