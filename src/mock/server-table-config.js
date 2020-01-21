export default {
  data: [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park'
    }
  ],
  columns: [
    {
      title: 'Name',
      dataKey: 'name',
      key: 1
    },
    {
      title: 'Age',
      dataKey: 'age',
      key: 2
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
}
