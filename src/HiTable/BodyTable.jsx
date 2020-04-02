import React, { useState, useContext } from 'react'
import Row from './Row'
import TableContext from './context'
import _ from 'lodash'
import { setDepth } from './util'

const BodyTable = props => {
  const [expandedTreeRows, setExpandedTreeRows] = useState([])
  const {
    data = [],
    columns
  } = useContext(TableContext)

  const renderRow = (row, level, index, rowConfig = {}, isTree) => {
    let childrenHasTree = false
    if (row.children && row.children.length) {
      childrenHasTree = row.children.some(
        child => child.children && child.children.length
      )
    }
    return (
      <React.Fragment key={row.key}>
        <Row
          key={row.key}
          rowData={row}
          level={level}
          index={index}
          expandedTree={expandedTreeRows.includes(row.key)}
          expandedTreeRows={expandedTreeRows}
          setExpandedTreeRows={setExpandedTreeRows}
          isAvgRow={rowConfig.isAvgRow}
          isSumRow={rowConfig.isSumRow}
          isTree={isTree}
        />
        {row.children &&
          expandedTreeRows.includes(row.key) &&
          row.children.map(child => {
            return renderRow(
              child,
              level + 1,
              index,
              _,
              childrenHasTree || isTree
            )
          })}
      </React.Fragment>
    )
  }
  return (
    <tbody>
      {data.map((row, index) => renderRow(row, 1, index))}
    </tbody>
  )
}

export default BodyTable
