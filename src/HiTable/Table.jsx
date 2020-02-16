import React, { useState, useRef, useEffect } from 'react'
import HeaderTable from './HeaderTable'
import BodyTable from './BodyTable'
import TableContext from './context'
import classnames from 'classnames'
import {
  getFixedDataByFixedColumn,
  getScrollBarSize,
  flatTreeData
} from './util'
import { Pagination } from '@hi-ui/hiui'
import axios from 'axios'
import FixedBodyTable from './FixedBodyTable'
import './style'
import mockServerTableConfig from '../mock/server-table-config'

const Table = props => {
  const hiTable = useRef(null)
  const [ceiling, setCeiling] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [activeSorterColumn, setActiveSorterColumn] = useState(null)
  const [activeSorterType, setActiveSorterType] = useState(null)
  const [highlightColumns, setHighlightColumns] = useState([])
  const [highlightRows, setHighlightRows] = useState([])
  const [freezeColumn, setFreezeColumn] = useState(null)
  const [hoverRow, setHoverRow] = useState(null)
  const [serverTableConfig, setServerTableConfig] = useState({})

  const {
    striped,
    bordered,
    resizable,
    size,
    errorRowKeys = [],
    rowSelection,
    data = [],
    highlightedRowKeys = [],
    highlightedColKeys = [],
    columns = [],
    expandedRender,
    maxHeight,
    pagination,
    dataSource,
    showColMenu,
    prefix = 'power-table',
    fixedToColumn,
    sticky: _ceiling,
    setting,
    // *********
    sortCol,
    setSortCol,
    visibleCols,
    setVisibleCols,
    setCacheVisibleCols,
    scrollWidth
  } = props

  const [realColumnsWidth, setRealColumnsWidth] = useState(
    columns.map(c => c.width || 'auto')
  )

  const firstRowRef = useRef(null)

  useEffect(() => {
    setRealColumnsWidth(columns.map(c => c.width || 'auto'))
    setTimeout(() => {
      if (firstRowRef.current) {
        const _realColumnsWidth = Array.from(
          firstRowRef.current.childNodes
        ).map(node => node.clientWidth)
        setRealColumnsWidth(_realColumnsWidth)
      }
    })
  }, [columns])

  const flattedColumns = flatTreeData(columns)
  // 有表头分组那么也要 bordered
  const _bordered = flattedColumns.length > columns.length || bordered

  // 固定列逻辑，后续可以抽成一个函数
  const fixedColumn = freezeColumn || fixedToColumn
  // 计算冻结列需要取道index最大那个往左全部冻结
  let maxIndex
  columns.forEach((c, index) => {
    if (fixedColumn === c.dataKey) {
      maxIndex = index
    }
  })
  const realFixedColumns = [...columns].splice(0, maxIndex + 1)
  const fixedData = getFixedDataByFixedColumn(realFixedColumns, data)

  // 同步滚动条
  const headerTableRef = useRef(null)
  const stickyHeaderRef = useRef(null)
  const bodyTableRef = useRef(null)
  const fixedBodyTableRef = useRef(null)
  const syncScrollLeft = (scrollLeft, syncTarget) => {
    if (syncTarget && syncTarget.scrollLeft !== scrollLeft) {
      syncTarget.scrollLeft = scrollLeft
    }
  }
  const syncScrollTop = (scrollTop, syncTarget) => {
    if (syncTarget && syncTarget.scrollTop !== scrollTop) {
      syncTarget.scrollTop = scrollTop
    }
  }

  const _pagination = (dataSource && serverTableConfig.pagination) || pagination
  // 高亮行
  const _highlightRows = highlightedRowKeys.concat(
    highlightRows.filter(row => !highlightedRowKeys.includes(row.key))
  )
  // 需要右对齐的列
  const alignRightColumns = columns
    .filter(c => c.align === 'right')
    .map(col => col.dataKey)
  // baseTable
  const baseTable = useRef(null)
  const [baseTableWidth, setBaseTableWidth] = useState('100%')
  const clientWidth = baseTable.current && baseTable.current.clientWidth
  useEffect(() => {
    setBaseTableWidth(clientWidth)
  }, [clientWidth])

  useEffect(() => {
    if (_ceiling) {
      window.addEventListener('scroll', () => {
        if (
          hiTable &&
          hiTable.current.getBoundingClientRect().top <= 0 &&
          hiTable &&
          hiTable.current.getBoundingClientRect().bottom >= 35
        ) {
          setCeiling(true)
          syncScrollLeft(
            bodyTableRef.current.scrollLeft,
            stickyHeaderRef.current
          )
        } else {
          setCeiling(false)
        }
        if (hiTable.current.getBoundingClientRect().bottom < 35) {
          setHeaderVisible(false)
        } else {
          setHeaderVisible(true)
        }
      })
    }
    if (dataSource) {
      const fetchConfig = dataSource(1)
      axios(fetchConfig)
        .then(res => {
          setServerTableConfig(res)
        })
        .catch(() => {
          // 此处用于模拟服务端表格返回
          setServerTableConfig(mockServerTableConfig)
        })
    }
  }, [_ceiling, dataSource])
  return (
    <TableContext.Provider
      value={{
        setting,
        firstRowRef,
        prefix,
        errorRowKeys,
        bordered: _bordered,
        resizable,
        rowSelection,
        highlightedRowKeys: _highlightRows,
        setHighlightRows,
        highlightedColKeys,
        data: (dataSource && serverTableConfig.data) || data,
        columns: (dataSource && serverTableConfig.columns) || columns,
        expandedRender,
        fixedColumns: realFixedColumns,
        realColumnsWidth,
        setRealColumnsWidth,
        fixedData,
        ceiling,
        headerVisible,
        scrollBarSize: getScrollBarSize(), // 滚动条宽度
        // 排序逻辑
        activeSorterColumn,
        activeSorterType,
        setActiveSorterColumn: setActiveSorterColumn,
        setActiveSorterType: setActiveSorterType,
        // 高亮列
        highlightColumns,
        setHighlightColumns,
        // 冻结列
        freezeColumn,
        setFreezeColumn,
        // hover 高亮行
        hoverRow,
        setHoverRow,
        showColMenu,
        maxHeight,
        // 同步滚动条
        headerTableRef,
        stickyHeaderRef,
        bodyTableRef,
        syncScrollLeft,
        fixedBodyTableRef,
        syncScrollTop,
        alignRightColumns,
        // setting 列操作相关
        sortCol,
        setSortCol,
        visibleCols,
        setVisibleCols,
        setCacheVisibleCols,
        // 出现横向滚动条时的宽度
        scrollWidth
      }}
    >
      <div
        className={classnames(prefix, {
          [`${prefix}--striped`]: striped,
          [`${prefix}--bordered`]: _bordered,
          [`${prefix}--${size}`]: size
        })}
        ref={hiTable}
      >
        {/* Normal table 普通表格 */}
        <div className={`${prefix}__container`} ref={baseTable}>
          <HeaderTable bodyWidth={baseTableWidth} />
          <BodyTable />
        </div>
        {/* Fixed table 固定列表格 */}
        {fixedColumn && realFixedColumns.length > 0 && (
          <div
            className={classnames(
              `${prefix}__container`,
              `${prefix}__container--fixed`
            )}
          >
            <HeaderTable isFixed />
            <FixedBodyTable />
          </div>
        )}
        {/* Pagination 分页组件 */}
        {_pagination && (
          <div className={`${prefix}__pagination`}>
            <Pagination {..._pagination} />
          </div>
        )}
      </div>
    </TableContext.Provider>
  )
}

const TableWrapper = ({ columns, uniqueId, standard, ...settingProps }) => {
  const _sortCol =
    uniqueId && window.localStorage.getItem(`${uniqueId}_sortCol`)
      ? JSON.parse(window.localStorage.getItem(`${uniqueId}_sortCol`))
      : columns

  const _visibleCols =
    uniqueId && window.localStorage.getItem(`${uniqueId}_visibleCols`)
      ? JSON.parse(window.localStorage.getItem(`${uniqueId}_visibleCols`))
      : columns

  const _cacheVisibleCols =
    uniqueId && window.localStorage.getItem(`${uniqueId}_cacheVisibleCols`)
      ? JSON.parse(window.localStorage.getItem(`${uniqueId}_cacheVisibleCols`))
      : columns
  // 列操作逻辑
  const [sortCol, setSortCol] = useState(_sortCol)
  const [visibleCols, setVisibleCols] = useState(_visibleCols)
  const [cacheVisibleCols, setCacheVisibleCols] = useState(_cacheVisibleCols)
  useEffect(() => {
    window.localStorage.setItem(`${uniqueId}_sortCol`, JSON.stringify(sortCol))
    window.localStorage.setItem(
      `${uniqueId}_visibleCols`,
      JSON.stringify(visibleCols)
    )
    window.localStorage.setItem(
      `${uniqueId}_cacheVisibleCols`,
      JSON.stringify(cacheVisibleCols)
    )
  }, [sortCol, visibleCols, cacheVisibleCols])
  const standardPreset = standard
    ? {
      showColMenu: true,
      sticky: true,
      bordered: true,
      setting: true,
      striped: true
    }
    : {}
  // ***************
  return (
    <Table
      columns={cacheVisibleCols}
      {...settingProps}
      {...standardPreset}
      sortCol={sortCol}
      setSortCol={setSortCol}
      visibleCols={visibleCols}
      setVisibleCols={setVisibleCols}
      setCacheVisibleCols={setCacheVisibleCols}
    />
  )
}

export default TableWrapper
