import Table from '../PowerTable'
import React from 'react'

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {}
  }
  if (index === 4) {
    obj.props.colSpan = 0
  }
  return obj
}

let columns = [
  {
    title: 'Name',
    dataKey: 'name',
    render: (text, row, index) => {
      if (index < 4) {
        return <span>{text}</span>
      }
      return {
        children: <span>{text}</span>,
        props: {
          colSpan: 4
        }
      }
    },
    key: 1
  },
  {
    title: 'Age',
    dataKey: 'age',
    key: 2,
    render: renderContent
  },
  {
    title: 'Home phone',
    dataKey: 'tel',
    key: 3,
    render: renderContent
  },
  {
    title: 'Address',
    dataKey: 'address',
    render: renderContent,
    key: 4
  }
]

let data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    address: 'London No. 2 Lake Park'
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    address: 'Dublin No. 2 Lake Park'
  }
]

const MergeCellTable = () => {
  return (
    <div style={{ width: 1100, margin: '0 auto' }}>
      <h2> 合并单元格</h2>
      <Table columns={columns} data={data} />
    </div>
  )
}
export default MergeCellTable
