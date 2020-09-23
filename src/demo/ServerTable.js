import Table from '../HiTable'
import React from 'react'
let data = [

]

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'Jake White',
    age: i,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park'
  })
}

const ServerTable = () => {
  return (
    <div style={{ width: 1100, margin: '0 auto' }}>
      <h2>服务端表格</h2>
      <Table
        size
        dataSource={current => {
          let obj = {
            url: 'http://my-json-server.typicode.com/hiui-group/db/conditiondata',
            method: 'get',
            headers: {},
            data: {},
            params: { pageNum: current },
            transformResponse: res => {
              return {
                columns: [
                  {
                    title: 'Name',
                    dataKey: 'name',
                    key: 1
                  },
                  {
                    title: 'Age',
                    dataKey: 'age',
                    key: 2,
                    sorter (pre, next) {
                      return pre.age - next.age
                    }
                  },
                  {
                    title: 'Home phone',
                    colSpan: 2,
                    dataKey: 'tel',
                    key: 3
                  },
                  {
                    title: 'Phone',
                    colSpan: 0,
                    dataKey: 'phone',
                    key: 4
                  },
                  {
                    title: 'Address',
                    dataKey: 'address',
                    key: 5
                  }
                ],
                data: data,
                pagination: {
                  pageSize: 10,
                  total: data.length,
                  current,
                  onChange: (page, pre, size) => {
                    console.log(page, pre, size)
                    // this.set(page)
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
