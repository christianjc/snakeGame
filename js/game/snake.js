import { DIR } from '../utils/const'
class Node {
    constructor(ctx = null, x = 0, y = 0, dir = null) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.width = 50
        this.height = 50
        this.tail = dir
        this.next = null
    }

    setPosition(x, y) {
        this.x = x
        this.y = y
    }
}

class Velocity {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }
}

class Position {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
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
        this.sentinel.next = new Node(ctx, x, y, DIR.left)
        this.size = 0
    }

    grow() {
        let head = this.sentinel.next
        let newX = 0
        let newY = 0
        switch (head.tail) {
            case DIR.left:
                newX = head.x
                break
            case DIR.up:
                break
            case DIR.right:
                break
            case DIR.down:
                break

            default:
                break
        }
        const newNode = new Node()
    }
}
