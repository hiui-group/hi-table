import React, { useState, useContext, useRef } from 'react'
import Row from './Row'
import TableContext from './context'
import _ from 'lodash'
import { flatTreeData, setDepth } from './util'

const FixedBodyTable = props => {
  const [expandedTreeRows, setExpandedTreeRows] = useState([])
  const {
    fixedData,
    fixedColumns,
    maxHeight,
    scrollBarSize,
    syncScrollTop,
    fixedBodyTableRef,
    bodyTableRef,
    activeSorterColumn,
    activeSorterType,
    realColumnsWidth,
    bordered
  } = useContext(TableContext)
  let _columns = _.cloneDeep(fixedColumns)
  let depthArray = []
  setDepth(_columns, 0, depthArray)
  const columnsgroup = flatTreeData(_columns).filter(col => col.isLast)
  const bodyInner = useRef(null)
  const renderRow = (row, level) => {
    return (
      <React.Fragment key={row.key}>
        <Row
          rowData={row}
          isFixed
          level={level}
          expandedTree={expandedTreeRows.includes(row.key)}
          expandedTreeRows={expandedTreeRows}
          setExpandedTreeRows={setExpandedTreeRows}
        />
        {row.children &&
          expandedTreeRows.includes(row.key) &&
          row.children.map(child => {
            return renderRow(child, level + 1)
          })}
      </React.Fragment>
    )
  }
  const fixedColumnsWidth = fixedColumns
    .map((c, idx) => realColumnsWidth[idx])
    .reduce((total, cur) => {
      return total + cur
    }, 0)

  // **************** 根据排序列处理数据
  let _fixedData = fixedData

  if (activeSorterColumn) {
    let sorter =
      fixedColumns.filter(d => d.dataKey === activeSorterColumn)[0] &&
      fixedColumns.filter(d => d.dataKey === activeSorterColumn)[0].sorter

    if (sorter) {
      _fixedData =
        activeSorterType === 'ascend'
          ? [..._fixedData].sort(sorter)
          : [..._fixedData].sort(sorter).reverse()
    }
  }
  return (
    <div
      style={{
        marginBottom: -scrollBarSize,
        overflow: 'hidden',
        width:
          bodyTableRef.current && fixedColumnsWidth > bodyTableRef.current.clientWidth
            ? bodyTableRef.current.clientWidth
            : fixedColumnsWidth + 1
      }}
    >
      <div
        style={{
          maxHeight: maxHeight || 'auto',
          width:
            bodyTableRef.current && fixedColumnsWidth > bodyTableRef.current.clientWidth
              ? bodyTableRef.current.clientWidth
              : fixedColumnsWidth + 20,

          overflow: 'scroll',
          paddingRight: 0,
          marginRight: -scrollBarSize // 利用负 margin 隐藏滚动条
        }}
        ref={fixedBodyTableRef}
        onScroll={e => {
          syncScrollTop(fixedBodyTableRef.current.scrollTop, bodyTableRef.current)
        }}
      >
        <table
          style={{ width: 'auto', borderLeft: bordered ? '1px solid #e7e7e7' : 'none' }}
          ref={bodyInner}
        >
          <colgroup>
            {columnsgroup.map((c, idx) =>
              <col
                key={idx}
                style={{
                  width: realColumnsWidth[idx],
                  minWidth: realColumnsWidth[idx]
                }}
              />
            )}
          </colgroup>
          <tbody>
            {_fixedData.map((row, index) => renderRow(row, 1))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FixedBodyTable
