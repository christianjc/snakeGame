/**
 * Represents a grid on a canvas element.
 */
export class Grid {
    /**
     * Initializes a new instance of the Grid class.
     * @param {CanvasRenderingContext2D} ctx - The context object used to draw on the canvas.
     * @param {number} width - The width of the grid.
     * @param {number} height - The height of the grid.
     * @param {number} sqSize - The size of each square in the grid.
     * @throws {Error} - If width, height, or square size is less than or equal to zero.
     */
    constructor(ctx, width, height, sqSize) {
        if (width <= 0 || height <= 0 || sqSize <= 0) {
            throw new Error('Width, height, and square size must be positive numbers.')
        }
        this.ctx = ctx
        this.width = width
        this.height = height
        this.sqSize = sqSize
    }

    /**
     * Sets the width of the grid.
     * @param {number} value - The new width value.
     * @throws {Error} - If width size is less than or equal to zero.
     */
    setWidth(value) {
        if (value <= 0) {
            throw new Error('Width size must be positive numbers.')
        }
        this.width = value
    }

    /**
     * Sets the height of the grid.
     * @param {number} value - The new height value.
     * @throws {Error} - If height size is less than or equal to zero.
     */
    setHeight(value) {
        if (value <= 0) {
            throw new Error('Height size must be positive numbers.')
        }
        this.height = value
    }

    /**
     * Sets the square size of the grid.
     * @param {number} value - The new square size value.
     * @throws {Error} - If square size is less than or equal to zero.
     */
    setSqSize(value) {
        if (value <= 0) {
            throw new Error('Square size must be positive numbers.')
        }
        this.sqSize = value
    }

    /**
     * Sets the context object used to draw on the canvas.
     * @param {CanvasRenderingContext2D} value - The new context object.
     * @param {CanvasRenderingContext2D} ctx - If context is null or undefined
     */
    setCtx(value) {
        if (!value) {
            throw new Error('Context value must not be null.')
        }
        this.ctx = value
    }

    /**
     * Gets the width of the grid.
     * @returns {number} - The current width of the grid.
     */
    getWidth() {
        return this.width
    }

    /**
     * Gets the height of the grid.
     * @returns {number} - The current height of the grid.
     */
    getHeight() {
        return this.height
    }

    /**
     * Gets the square size of the grid.
     * @returns {number} - The current square size of the grid.
     */
    getSqSize() {
        return this.sqSize
    }

    /**
     * Draws the grid on the canvas.
     */
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
