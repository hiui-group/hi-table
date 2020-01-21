import Table from '../HiTable'
import React from 'react'

let columns = [
  {
    title: 'Name 吸顶功能',
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
]

let data = []

for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: 'Jake White',
    age: i,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park'
  })
}

export default function () {
  return (
    <div style={{ width: 1100, margin: '0 auto' }}>
      <h2>表格吸顶</h2>
      <Table columns={columns} data={data} sticky />
    </div>
  )
}
