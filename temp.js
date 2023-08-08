class Node {
    constructor(data = null) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.sentinel = new Node() // Sentinel node
        this.size = 0
    }

    // Append a new node to the end
    append(data) {
        const newNode = new Node(data)
        let current = this.sentinel
        while (current.next) {
            current = current.next
        }
        current.next = newNode
        this.size++
    }

    // Insert a new node at a specific position
    insertAt(data, index) {
        if (index < 0 || index > this.size) return false

        const newNode = new Node(data)
        let current = this.sentinel
        let i = 0
        while (i < index) {
            i++
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
        this.size++
    }

    // Remove a node by its value
    remove(data) {
        let current = this.sentinel
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next
                this.size--
                return data
            }
            current = current.next
        }
        return null
    }

    // Find a node by its value
    find(data) {
        let current = this.sentinel.next
        while (current) {
            if (current.data === data) {
                return current
            }
            current = current.next
        }
        return null
    }

    // Print the linked list
    print() {
        let current = this.sentinel.next
        let result = ''
        while (current) {
            result += current.data + ' -> '
            current = current.next
        }
        result += 'null'
        console.log(result)
    }
}

// Usage
const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.print() // 10 -> 20 -> 30 -> null
list.insertAt(25, 2)
list.print() // 10 -> 20 -> 25 -> 30 -> null
list.remove(20)
list.print() // 10 -> 25 -> 30 -> null
console.log(list.find(25)) // Node { data: 25, next: Node { data: 30, next: null } }

// let snake = [{ top: 200, left: 200 }]
// let apple = null
// let direction = 'Right'
// let score = 0

// let canvas = document.getElementById('gameCanvas')
// let ctx = canvas.getContext('2d')

// let size = 50 // size of the grid cells
// let rows = canvas.height / size
// let cols = canvas.width / size

// ctx.strokeStyle = '#000'

// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//         ctx.strokeRect(i * size, j * size, size, size)
//     }
// }

// function gameLoop() {
//     bodyNode()

//     setTimeout(gameLoop, 1000)
// }

// let moveUp = 0
// let moveRight = 0

// function bodyNode() {
//     ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
//     ctx.fillRect(0 + moveUp, 0 + moveRight, size, size)
//     moveUp += size
//     moveRight += size
// }

// function gameLoop() {
//     if (snakeOutOfBounds() || snakeTouchesItself()) {
//         return gameOver()
//     }

//     if (apple === null) {
//         apple = getRandomPosition()
//     }

//     if (snakeTouchesApple()) {
//         score += 1
//         apple = null
//         growSnake()
//     } else {
//         moveSnake()
//     }

//     drawEverything()

//     setTimeout(gameLoop, 1000)
// }

// function drawEverything() {
//     document.getElementById('game-board').innerHTML = ''
//     document.getElementById('score').innerText = score

//     snake.forEach(function (part) {
//         drawElement('snake', part.top, part.left)
//     })

//     if (apple !== null) {
//         drawElement('apple', apple.top, apple.left)
//     }
// }

// function drawElement(id, top, left) {
//     let newElement = document.createElement('div')
//     newElement.classList.add('box', id)
//     newElement.style.top = `${top}px`
//     newElement.style.left = `${left}px`
//     document.getElementById('game-board').appendChild(newElement)
// }

// function getRandomPosition() {
//     let left = Math.floor(Math.random() * 20) * 20
//     let top = Math.floor(Math.random() * 20) * 20
//     return { top, left }
// }

// function growSnake() {
//     let tail = Object.assign({}, snake[snake.length - 1]) // copy the tail

//     switch (direction) {
//         case 'Left':
//             tail.left += 20
//             break
//         case 'Right':
//             tail.left -= 20
//             break
//         case 'Up':
//             tail.top += 20
//             break
//         case 'Down':
//             tail.top -= 20
//             break
//     }

//     snake.push(tail)
// }

// function moveSnake() {
//     for (let i = snake.length - 1; i >= 0; i--) {
//         if (i === 0) {
//             switch (direction) {
//                 case 'Left':
//                     snake[i].left -= 20
//                     break
//                 case 'Right':
//                     snake[i].left += 20
//                     break
//                 case 'Up':
//                     snake[i].top -= 20
//                     break
//                 case 'Down':
//                     snake[i].top += 20
//                     break
//             }
//         } else {
//             snake[i].left = snake[i - 1].left
//             snake[i].top = snake[i - 1].top
//         }
//     }
// }

// function snakeTouchesApple() {
//     return snake[0].top === apple.top && snake[0].left === apple.left
// }

// function snakeOutOfBounds() {
//     return snake[0].top < 0 || snake[0].top === 400 || snake[0].left < 0 || snake[0].left === 400
// }

// function snakeTouchesItself() {
//     for (let i = 1; i < snake.length; i++) {
//         if (snake[i].top === snake[0].top && snake[i].left === snake[0].left) {
//             return true
//         }
//     }
// }

// function gameOver() {
//     window.alert(`Game Over! Your score was ${score}`)
// }

// window.addEventListener('keydown', (e) => {
//     switch (e.key) {
//         case 'ArrowUp':
//             if (direction !== 'Down') {
//                 direction = 'Up'
//             }
//             break
//         case 'ArrowDown':
//             if (direction !== 'Up') {
//                 direction = 'Down'
//             }
//             break
//         case 'ArrowRight':
//             if (direction !== 'Left') {
//                 direction = 'Right'
//             }
//             break
//         case 'ArrowLeft':
//             if (direction !== 'Right') {
//                 direction = 'Left'
//             }
//             break
//     }
// })

// gameLoop()
