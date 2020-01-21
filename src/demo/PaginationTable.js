import Table from '../HiTable'
import React from 'react'

let data = []

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

class Demo extends React.Component {
  constructor (props) {
    super(props)
    this.columns = [
      { title: 'Full Name', dataKey: 'name', key: 'name' },
      { title: 'Age', dataKey: 'age', key: 'age' },
      { title: 'Tel', dataKey: 'tel', key: 'tel' },
      { title: 'Address', dataKey: 'address', key: 'address' }
    ]
    this.state = {
      pageSize: 5,
      current: 1,
      data: []
    }
  }

  get total2 () {
    return this.state.data.length
  }

  getData (current, pageSize) {
    let res = []
    let start = this.state.pageSize * (current - 1)
    let end = this.state.pageSize * current
    for (let i = start; i < end; i++) {
      res.push(data[i])
    }
    console.log(res, 'res--res')
    return res
  }

  componentDidMount () {
    this.setState({
      data: this.getData(2),
      current: 2
    })
  }

  set (current) {
    this.setState({ data: this.getData(current), current })
  }

  render () {
    return (
      <div style={{ width: 1100, margin: '0 auto' }}>
        <h2>前端分页</h2>
        <Table
          columns={this.columns}
          data={this.state.data}
          pagination={{
            pageSize: this.state.pageSize,
            total: data.length,
            current: this.state.current,
            onChange: (page, pre, size) => {
              console.log(page, pre, size)
              this.set(page)
            }
          }}
        />
      </div>
    )
  }
}

export default Demo
