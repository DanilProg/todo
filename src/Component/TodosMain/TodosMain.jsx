import React, { useMemo, useState } from 'react'

import Footer from '../Footer/Footer'
import Todo from '../Todo/Todo'
import Header from '../Header/Header'
import { todoFilter } from '../../utils/filterTodo'
import { CreatingTodo } from '../../utils/creatingTodo'

const TodosMain = () => {
  const [todos, setTodos] = useState([])
  const [counter, setCounter] = useState(0)
  const [activeAll, setActiveAll] = useState('All')
  const addTodo = (value) => {
    if (value) {
      setTodos([...todos, new CreatingTodo(value)])
      setCounter(counter + 1)
    }
  }
  const filtersTodo = useMemo(() => {
    todoFilter(activeAll, todos).map((todo) => (
      <Todo
        todo={todo}
        key={todo.id}
        todos={todos}
        setTodos={setTodos}
        setCounter={setCounter}
        counter={counter}
      />
    ))
  }, [todos, activeAll, counter])
  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <section className="main">
        <ul className="todo-list">{filtersTodo}</ul>
        <Footer
          counter={counter}
          setCounter={setCounter}
          todos={todos}
          setTodos={setTodos}
          activeAll={activeAll}
          setActiveAll={setActiveAll}
        />
      </section>
    </section>
  )
}

export default TodosMain
