import React from 'react'
import HeaderSelection from './HeaderSelection'

const Header = ({ columns = [], expandedRender }) => {
  return (
    <thead>
      <tr>
        <HeaderSelection />
        {expandedRender && <th style={{ width: 50 }} />}
        {columns.map(column => {
          return <th key={column.dataKey}>{column.title}</th>
        })}
      </tr>
    </thead>
  )
}

export default Header
