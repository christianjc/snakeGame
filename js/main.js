import { Grid } from './game/board.js'

let canvas = document.getElementById('gameCanvas')
let ctx = canvas.getContext('2d')
const grid = new Grid(ctx, canvas.width, canvas.height, 50)
function animate(currentTime) {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // console.log(currentTime)
    grid.drawGrid()
}

requestAnimationFrame(animate)
