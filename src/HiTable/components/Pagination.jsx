import React from 'react'
import { Pagination } from '@hi-ui/hiui'

const TablePagination = ({ pagination, prefix }) => {
  return pagination ? (
    <div className={`${prefix}__pagination`}>
      <Pagination {...pagination} />
    </div>
  ) : null
}

export default TablePagination
