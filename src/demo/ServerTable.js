import Table from '../HiTable'
import React from 'react'

const ServerTable = () => {
  return (
    <div style={{ width: 1100, margin: '0 auto' }}>
      <h2>服务端表格</h2>
      <Table
        dataSource={current => {
          let obj = {
            url: 'http://localhost:3000/',
            method: 'get',
            headers: {},
            data: {},
            params: { pageNum: current },
            transformResponse: res => {
              return {
                columns: res.columns,
                data: res.data,
                pagination: {
                  pageSize: 10,
                  total: res.data.length,
                  current,
                  onChange: (page, pre, size) => {
                    console.log(page, pre, size)
                    this.set(page)
                  }
                }
              }
            }
          }
          return obj
        }}
      />
    </div>
  )
}

export default ServerTable
