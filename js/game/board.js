export class Grid {
    constructor(ctx, width, height, sqSize) {
        this.ctx = ctx
        this.width = width
        this.height = height
        this.sqSize = sqSize
    }

    //** sets the with of the grid */
    setWidth(value) {
        this.width = value
    }

    //** sets the height of the grid */
    setHeight(value) {
        this.height = value
    }

    //** sets the square size of the grid */
    setSqSize(value) {
        this.sqSize = value
    }

    //** sets the contex object */
    setCtx(value) {
        this.ctx = value
    }

    //** gets the with of the grid */
    getWidth() {
        return this.width
    }

    //** sets the height of the grid */
    getHeight() {
        return this.height
    }

    //** sets the size of the grid */
    getSqSize() {
        return this.sqSize
    }

    //** draws the grid to the canvas */
    drawGrid() {
        this.ctx.strokeStyle = '#000000'
        for (let col = 0; col <= this.width; col += this.sqSize) {
            this.ctx.beginPath()
            this.ctx.moveTo(col, 0)
            this.ctx.lineTo(col, this.height)
            this.ctx.stroke()
        }

        for (let row = 0; row <= this.height; row += this.sqSize) {
            this.ctx.beginPath()
            this.ctx.moveTo(0, row)
            this.ctx.lineTo(this.width, row)
            this.ctx.stroke()
        }
    }
}
