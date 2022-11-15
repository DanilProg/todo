import React from 'react'

const TodoFilter = ({ setActiveAll, activeAll }) => {
  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          className={activeAll === 'All' ? 'selected' : ''}
          onClick={() => setActiveAll('All')}
        >
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          className={activeAll === 'Active' ? 'selected' : ''}
          onClick={() => setActiveAll('Active')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          className={activeAll === 'Completed' ? 'selected' : ''}
          onClick={() => setActiveAll('Completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TodoFilter
