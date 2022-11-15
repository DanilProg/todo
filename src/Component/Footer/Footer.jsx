import TodoFilter from '../TodoFilter/TodoFilter'

const Footer = ({ counter, setCounter, setTodos, setActiveAll, activeAll }) => {
  const clearTodo = () => {
    setTodos([])
    setCounter(0)
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
