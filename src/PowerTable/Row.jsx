import React, { useState, useContext } from 'react'
import Cell from './Cell'
import TableContext from './context'
import classNames from 'classnames'
import _ from 'lodash'
import { Checkbox, Icon } from '@hi-ui/hiui'
import { flatTreeData, setDepth } from './util'

const Row = ({
  rowData,
  level,
  expandedTree,
  expandedTreeRows,
  setExpandedTreeRows,
  isFixed,
  isSumRow, // 是否为合计行
  isAvgRow, // 是否为平均行
  index,
  innerRef
}) => {
  const [expanded, setExpanded] = useState(false)
  let {
    errorRowKeys,
    rowSelection,
    highlightedRowKeys,
    setHighlightRows,
    columns,
    expandedRender,
    fixedColumns,
    hoverRow,
    setHoverRow,
    prefix
  } = useContext(TableContext)

  let _columns = _.cloneDeep(columns)
  let depthArray = []
  setDepth(_columns, 0, depthArray)

  let rowColumns = flatTreeData(_columns).filter(col => col.isLast)
  if (isFixed) {
    rowColumns = fixedColumns
  }
  return [
    <tr
      ref={innerRef}
      className={classNames(`${prefix}__row`, {
        [`${prefix}__row--error`]: errorRowKeys.includes(rowData.key),
        [`${prefix}__row--highlight`]:
          hoverRow === rowData.key || highlightedRowKeys.includes(rowData.key),
        [`${prefix}__row--total`]: isSumRow,
        [`${prefix}__row--avg`]: isAvgRow
      })}
      key='row'
      onDoubleClick={e => {
        if (highlightedRowKeys.includes(rowData.key)) {
          setHighlightRows(highlightedRowKeys.filter(r => r !== rowData.key))
        } else {
          setHighlightRows(highlightedRowKeys.concat(rowData.key))
        }
      }}
      onMouseEnter={e => setHoverRow(rowData.key)}
      onMouseLeave={e => setHoverRow(null)}
    >
      {rowSelection &&
        <td>
          <Checkbox
            checked={rowSelection.selectedRowKeys.includes(rowData.key)}
            onChange={e => {
              const { selectedRowKeys = [], onChange } = rowSelection
              let _selectedRowKeys = [...selectedRowKeys]
              if (_selectedRowKeys.includes(rowData.key)) {
                onChange(_selectedRowKeys.filter(key => key !== rowData.key))
              } else {
                _selectedRowKeys.push(rowData.key)
                onChange(_selectedRowKeys)
              }
            }}
          />
        </td>}
      {expandedRender &&
        <td>
          <Icon
            style={{ cursor: 'pointer' }}
            name={expanded ? 'down' : 'right'}
            onClick={() => {
              setExpanded(!expanded)
            }}
          />
        </td>}

      {rowColumns.map((column, idx) =>
        <Cell
          key={idx}
          column={column}
          rowData={rowData}
          level={level}
          columnIndex={idx}
          rowIndex={index}
          expandedTree={expandedTree}
          expandedTreeRows={expandedTreeRows}
          setExpandedTreeRows={setExpandedTreeRows}
        />
      )}
    </tr>,
    // 可展开的内嵌部分
    expandedRender &&
      expanded &&
      <tr key='expanded-row' className={`${prefix}--expanded`} style={{background: 'rgba(251,251,251,1)'}}>
        {/* 多选占位 */}
        {rowSelection && <td />}
        {/* 可展开内嵌显示 */}
        <td colSpan={columns.length + 1} style={{color: '#666666'}}>
          {expandedRender()}
        </td>
      </tr>
  ]
}

export default Row
