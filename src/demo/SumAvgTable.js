import Table from '../HiTable'
import React from 'react'

let columns = [
  {
    title: 'Home phone',
    colSpan: 2,
    dataKey: 'tel',
    // total: true,
    render (text, record, index) {
      return text
    }
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataKey: 'phone',
    avg: true,
    total: true
  },
  {
    title: 'Address',
    dataKey: 'address'
  }
]

let datas = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 11,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 22,
    age: 42,
    total: true,
    avg: true,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 33,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 44,
    address: 'London No. 2 Lake Park'
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 55,
    address: 'Dublin No. 2 Lake Park'
  }
]

class App extends React.Component {
  state = {
    data: datas
  }
  render () {
    return (
      <div style={{ width: 1100, margin: '0 auto' }}>
        <h2>求和、平均数</h2>
        <Table columns={columns} data={this.state.data} errorRows={['4', '5']} />
      </div>
    )
  }
}

export default App
