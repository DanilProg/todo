import React, { useState } from 'react'

const Header = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const onPress = () => {
    addTodo(value)
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onPress()}
      />
    </header>
  )
}

export default Header
