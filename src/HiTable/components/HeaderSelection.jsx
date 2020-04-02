import React, { useCallback, useContext } from 'react'
import { Checkbox } from '@hi-ui/hiui'
import TableContext from '../context'

const HeaderSelection = () => {
  const { rowSelection, data } = useContext(TableContext)
  let isAllChecked
  if (rowSelection && rowSelection.selectedRowKeys) {
    isAllChecked = data.every(d => rowSelection.selectedRowKeys.includes(d.key))
  }
  const onChange = useCallback(() => {
    rowSelection.onChange(isAllChecked ? [] : data.map(d => d.key))
  }, [isAllChecked, data])

  return rowSelection ? (
    <th style={{ width: 50 }}>
      <Checkbox
        checked={isAllChecked}
        indeterminate={!isAllChecked && rowSelection.selectedRowKeys.length > 0}
        onChange={onChange}
      />
    </th>
  ) : null
}
export default HeaderSelection
