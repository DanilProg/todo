export const todoFilter = (activeAll, todos) => {
  return todos.filter((todo) => {
    if (activeAll === 'All') {
      return true
    }
    if (activeAll === 'Active') {
      return todo.isActive === false
    }
    return todo.isActive === true
  })
}
