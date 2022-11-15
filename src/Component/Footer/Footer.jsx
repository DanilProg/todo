import TodoFilter from '../TodoFilter/TodoFilter'

const Footer = ({ counter, setCounter, setTodos, setActiveAll, activeAll }) => {
  const clearTodo = () => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todo.id))
    setCounter((counter = 0))
  }

  return (
    <footer className="footer">
      <span className="todo-count">{counter} items left</span>
      <TodoFilter setActiveAll={setActiveAll} activeAll={activeAll} />
      <button type="button" className="clear-completed" onClick={clearTodo}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
