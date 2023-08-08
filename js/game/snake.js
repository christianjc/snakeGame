class Node {
    constructor(ctx = null, x = null, y = null) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.next = null
    }
}

export class Snake {
    constructor(ctx, x = 200, y = 200) {
        // canvas context
        this.ctx = ctx
        // initial position x and y
        this.x = x
        this.y = y
        this.sentinel = new Node()
        this.size = 0
    }
}
