import React, {useState} from 'react'
import Table from '../PowerTable'

let columns = [
  {
    title: 'Name',
    dataKey: 'name',
    key: '1'
  },
  {
    title: 'Other',

    children: [
      {
        title: 'Age',
        dataKey: 'age',
        key: 2
      },
      {
        title: 'Address',

        children: [
          {
            title: 'Street',
            dataKey: 'street',
            key: '3'
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataKey: 'building',
                key: '4'
              },
              {
                title: 'Door No.',
                dataKey: 'number',
                key: '5'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Company',
    key: '6',
    children: [
      {
        title: 'Address',
        dataKey: 'companyAddress',
        key: '7'
      },
      {
        title: 'Name',
        dataKey: 'companyName',
        key: '8'
      }
    ]
  },
  {
    title: 'Gender',
    dataKey: 'gender',
    key: '9'
  }
]
let data = []
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M'
  })
}

export default function App () {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  return (
    <div style={{ width: 1100, margin: '0 auto' }}>
      <h2>表头分组</h2>
      <Table columns={columns} data={data} rowSelection={{
        selectedRowKeys: selectedRowKeys,
        onChange: selectedRowKeys => {
          setSelectedRowKeys(selectedRowKeys)
        }
      }} />
    </div>
  )
}
