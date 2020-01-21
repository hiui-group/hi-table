import Table from '../HiTable'
import React from 'react'

let columns = [
  {
    title: '商品名',
    dataKey: 'name',
    width: 150
  },
  {
    title: '品类',
    dataKey: 'type',
    width: 150
  },
  {
    title: '规格',
    dataKey: 'size',
    width: 300
  },
  {
    title: '单价',
    dataKey: 'price',
    width: 300,
    sorter (pre, next) {
      return pre.price - next.price
    }
  },
  {
    title: '门店xxxxxx',
    dataKey: 'address',
    width: 300
  },
  {
    title: '库存',
    dataKey: 'stock',
    width: 300
  }
]

let data = [
  {
    name: '小米9',
    type: '手机',
    size: '6G+64G 全息幻彩蓝',
    price: 3299,
    address: '华润五彩城店',
    stock: '29,000',
    key: 1
  },
  {
    name: '小米9 SE',
    type: '手机',
    size: '6G+64G 全息幻彩蓝',
    price: 1999,
    address: '清河店',
    stock: '10,000',
    key: 2
  },
  {
    name: '小米8',
    type: '手机',
    size: '6G+64G 全息幻彩蓝',
    price: 2599,
    address: '双安店',
    stock: '12,000',
    key: 3
  },
  {
    name: 'Redmi Note7',
    type: '手机',
    size: '6G+64G 全息幻彩蓝',
    price: 999,
    address: '华润五彩城店',
    stock: '140,000',
    key: 4
  },
  {
    name: '小米8 SE',
    type: '手机',
    size: '6G+64G 全息幻彩蓝',
    price: 699,
    address: '双安店',
    stock: '12,000',
    key: 5
  }
]

const StandardTable = () => {
  return (
    <div style={{ width: 1100, margin: '0 auto' }}>
      <Table uniqueId='666' columns={columns} data={data} standard resizable />

    </div>
  )
}

export default StandardTable
