import Table from '../HiTable'
import React from 'react'

let columns = [
  {
    title: 'Name',
    dataKey: 'name',
    key: 1,
    width: 150
  },
  {
    title: 'Age',
    dataKey: 'age',
    key: 2,
    width: 150
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataKey: 'tel',
    key: 3,
    width: 300
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataKey: 'phone',
    key: 4,
    width: 300
  },
  {
    title: 'Address',
    dataKey: 'address',
    key: 5,
    width: 300
  },
  {
    title: 'Address2',
    dataKey: 'address2',
    key: 6,
    width: 300
  }
]

let data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
    address2: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
    address2: 'New York No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
    address2: 'New York No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
    address2: 'New York No. 1 Lake Park'
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
    address2: 'New York No. 1 Lake Park'
  }
]

const FixedTable = () => {
  return (
    <div style={{ width: 1100, margin: '0 auto' }}>
      <h2>固定表头</h2>
      <Table columns={columns} data={data} maxHeight={200} showColMenu />
    </div>
  )
}

export default FixedTable
