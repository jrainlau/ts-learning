interface LabelValue {
  label: string
}

function logLabel (label: LabelValue) {
  console.log(label)
}

/* ********** */
interface SquareConfig {
  width?: number
  color?: string
}

function createSquare (config: SquareConfig) {
  const newSquare = { color: 'Blue', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width**2
  }
  return newSquare
}

createSquare({ color: 'Red', width: 5 }) // --> { color: 'Red', area: 25 }

/* ********** */

interface ReadonlyPoint {
  readonly x: number
  readonly y: number
}

const p1: ReadonlyPoint = { x: 10, y: 20 }

/* ********** */

let a: number[] = [1, 2, 3]
let ro: ReadonlyArray<number> = a
a = ro as number[]

