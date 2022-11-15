import React, { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

const Todo = ({ todo, setTodos, counter, setCounter }) => {
  const date = formatDistanceToNow(new Date(todo.date), { addSuffix: false })
  const [editActive, setEditActive] = useState(true)
  const [valueEdit, setValueEdit] = useState('')
  const delTodo = (todoID) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todoID))
    setCounter(counter - 1)
  }
  const changeCheked = () => {
    setTodos((prevState) => {
      prevState.find((el, i) => {
        if (el.id === todo.id) {
          prevState.splice(i, 1, { ...el, isActive: !el.isActive })
        }
      })
      return [...prevState]
    })
  }
  const editTodo = () => {
    setTodos((prevState) => {
      return prevState.map((prev) => {
        if (prev.id === todo.id) {
          setEditActive(true)
          return { ...prev, value: valueEdit }
        }
        return prev
      })
    })
  }

  return (
    <>
      {editActive ? (
        <li className={todo.isActive ? 'completed' : ''}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              defaultChecked={todo.isActive}
              onChange={changeCheked}
            />
            <label>
              <span className="description">{todo.value}</span>
              <span className="created">created {date} ago</span>
            </label>
            <button
              type="button"
              className="icon icon-edit"
              onClick={() => setEditActive(!editActive)}
            />
            <button
              type="button"
              className="icon icon-destroy"
              onClick={() => delTodo(todo.id)}
            />
          </div>
        </li>
      ) : (
        <li className="editing">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">{todo.value}</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button type="button" className="icon icon-edit" />
            <button type="button" className="icon icon-destroy" />
          </div>
          <input
            type="text"
            className="edit"
            value={valueEdit}
            onChange={(e) => setValueEdit(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && editTodo()}
          />
        </li>
      )}
    </>
  )
}

export default Todo
