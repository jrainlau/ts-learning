// Boolean
const isDone: boolean = true

// Number
const decimal: number = 123

// String
const string: string = 'string'

// Array
const list1: number[] = [1, 2, 3]
const list2: string[] = ['a', 'b', 'c']
const list3: Array<number> = [1, 2, 3]
const list4: any[] = [1, '2', 3, null, undefined, true]

// Tuple
const tuple: [string, number] = ['string', 1]
tuple[2] = 123

// Enum
enum Color {Red = 1, Green, Blue}
const colorName: string = Color[2] // --> Green

// Any
let notSure: any = 1
notSure = 'string'
notSure = true

// Void
function funcNoting (): void {
  console.log('Nothing...')
}
function funcString (): string {
  return 'This is a string'
}
function funcNumber (): number {
  return 123
}

// Null and Undefined
const u: undefined = undefined
const uv: undefined = void 0
const n: null = null

// Never
function nerverReturn (): never {
  throw new Error('Never')
}
function nerverStop (): never {
  while(true) {}
}

// Object
function create (o: object | null): void {}

create({})
create(null)

// Type assertions
const someValue: any = 'This is a string'
const strLength1: number = (someValue as string).length
const strLength2: number = (<string>someValue).length