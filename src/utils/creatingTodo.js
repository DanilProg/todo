export class CreatingTodo {
  constructor(value) {
    this.id = Math.random()
    this.date = new Date()
    this.value = value
    this.isActive = false
  }
}
