import Table from '../HiTable'
import React from 'react'

const columns = [
  // {dataKey: 'goodsCategory', title: '品类'},
  { key: 'source', dataKey: 'source', title: '平台', fixed: 'left', width: 80 },
  {
    key: 'storeType',
    dataKey: 'storeType',
    title: '店铺类型',
    fixed: 'left',
    width: 150
  },
  {
    key: 'storeName',
    dataKey: 'storeName',
    title: '店铺名称',
    fixed: 'left',
    width: 150
  },
  { key: 'priceSegment', dataKey: 'priceSegment', title: '价格段', width: 150 },
  { key: 'stBrand', dataKey: 'stBrand', title: '品牌', width: 150 },
  { key: 'stModel', dataKey: 'stModel', title: '机型', width: 150 },
  { key: 'stMemory', dataKey: 'stMemory', title: '配置', width: 350 },

  {
    key: 'receptionPrice',
    dataKey: 'receptionPrice',
    title: '到手价'
  }
]

let data = [
  {
    benefitInfo: '促销:满539.0减40.0',
    cartPrice: 539,
    dt: '2020-02-11 00:00:00',
    fdsUrl:
      'http://cnbj1-fds.api.xiaomi.net/pricemonitor/TMALL/2020021120/4176160609724@594387510987.png',
    goodsCategory: '手机',
    key: 22,
    isFlagshipStore: '1',
    platformUrl:
      'https://detail.tmall.com/item.htm?id=594387510987&skuId=4176160609724',
    priceSegment: '0-1000',
    receptionPrice: 499,
    skuCnt: '0',
    source: '天猫',
    stBrand: 'REDMI',
    stMemory: '2GB+32GB',
    stModel: '7A',
    storeName: '小米天猫官方旗舰店',
    storeType: '官方旗舰店',
    timeSegment: '2020-02-11 20'
  },
  {
    benefitInfo: '促销:满539.0减40.0',
    cartPrice: 549,
    dt: '2020-02-11 00:00:00',
    fdsUrl:
      'http://cnbj1-fds.api.xiaomi.net/pricemonitor/TMALL/2020021120/4369944479551@594387510987.png',
    goodsCategory: '手机',
    key: 39,
    isFlagshipStore: '1',
    platformUrl:
      'https://detail.tmall.com/item.htm?id=594387510987&skuId=4369944479551',
    priceSegment: '0-1000',
    receptionPrice: 509,
    skuCnt: '0',
    source: '天猫',
    stBrand: 'REDMI',
    stMemory: '3GB+32GB',
    stModel: '7A',
    storeName: '小米天猫官方旗舰店',
    storeType: '官方旗舰店',
    timeSegment: '2020-02-11 20'
  },
  {
    benefitInfo: '6期内免息',
    cartPrice: 1698.8,
    dt: '2020-02-11 00:00:00',
    fdsUrl:
      'http://cnbj1-fds.api.xiaomi.net/pricemonitor/JD/2020021120/100003872923.png',
    goodsCategory: '手机',
    key: 37,
    isFlagshipStore: '1',
    platformUrl: 'https://item.jd.com/100003872923.html',
    priceSegment: '1000-2000',
    receptionPrice: 1499,
    skuCnt: '0',
    source: '京东',
    stBrand: '小米',
    stMemory: '6GB+128GB',
    stModel: 'CC9',
    storeName: '小米京东官方旗舰店',
    storeType: '官方旗舰店',
    timeSegment: '2020-02-11 20'
  },
  {
    benefitInfo: '6期内免息;促销:满3000.0减50.0',
    cartPrice: 3199,
    dt: '2020-02-11 00:00:00',
    fdsUrl:
      'http://cnbj1-fds.api.xiaomi.net/pricemonitor/JD/2020021120/100009564076.png',
    goodsCategory: '手机',
    key: 21,
    isFlagshipStore: '1',
    platformUrl: 'https://item.jd.com/100009564076.html',
    priceSegment: '3000-4000',
    receptionPrice: 3049,
    skuCnt: '0',
    source: '京东',
    stBrand: '小米',
    stMemory: '8GB+256GB',
    stModel: 'CC9 PRO',
    storeName: '小米京东官方旗舰店',
    storeType: '官方旗舰店',
    timeSegment: '2020-02-11 20'
  },
  {
    benefitInfo: '6期内免息;促销:满2799.0减100.0',
    cartPrice: 2799,
    dt: '2020-02-11 00:00:00',
    fdsUrl:
      'http://cnbj1-fds.api.xiaomi.net/pricemonitor/TMALL/2020021120/4259168580074@604775988717.png',
    goodsCategory: '手机',
    key: 26,
    isFlagshipStore: '1',
    platformUrl:
      'https://detail.tmall.com/item.htm?id=604775988717&skuId=4259168580074',
    priceSegment: '2000-3000',
    receptionPrice: 2699,
    skuCnt: '0',
    source: '天猫',
    stBrand: '小米',
    stMemory: '8GB+128GB',
    stModel: 'CC9 PRO',
    storeName: '小米天猫官方旗舰店',
    storeType: '官方旗舰店',
    timeSegment: '2020-02-11 20'
  },
  {
    benefitInfo: '6期内免息;促销:满2799.0减100.0',
    cartPrice: 3199,
    dt: '2020-02-11 00:00:00',
    fdsUrl:
      'http://cnbj1-fds.api.xiaomi.net/pricemonitor/TMALL/2020021120/4259168580078@604775988717.png',
    goodsCategory: '手机',
    key: 28,
    isFlagshipStore: '1',
    platformUrl:
      'https://detail.tmall.com/item.htm?id=604775988717&skuId=4259168580078',
    priceSegment: '3000-4000',
    receptionPrice: 3099,
    skuCnt: '0',
    source: '天猫',
    stBrand: '小米',
    stMemory: '8GB+256GB',
    stModel: 'CC9 PRO',
    storeName: '小米天猫官方旗舰店',
    storeType: '官方旗舰店',
    timeSegment: '2020-02-11 20'
  },
  {
    benefitInfo: '6期内免息;促销:满1999.0减50.0',
    cartPrice: 1999,
    dt: '2020-02-11 00:00:00',
    fdsUrl:
      'http://cnbj1-fds.api.xiaomi.net/pricemonitor/TMALL/2020021120/4160269812356@597269145005.png',
    goodsCategory: '手机',
    key: 24,
    isFlagshipStore: '1',
    platformUrl:
      'https://detail.tmall.com/item.htm?id=597269145005&skuId=4160269812356',
    priceSegment: '1000-2000',
    receptionPrice: 1949,
    skuCnt: '0',
    source: '天猫',
    stBrand: '小米',
    stMemory: '8GB+256GB',
    stModel: 'CC9 美图定制版',
    storeName: '小米天猫官方旗舰店',
    storeType: '官方旗舰店',
    timeSegment: '2020-02-11 20'
  },
  {
    benefitInfo:
      '小米 MI （赠品）小米移动电源3 10000mAh USB-C双向快充版 银色;优惠券:满980.0减60.0',
    cartPrice: 1999,
    dt: '2020-02-11 00:00:00',
    fdsUrl:
      'http://cnbj1-fds.api.xiaomi.net/pricemonitor/JD/2020021120/7437712.png',
    goodsCategory: '手机',
    key: 32,
    isFlagshipStore: '1',
    platformUrl: 'https://item.jd.com/7437712.html',
    priceSegment: '1000-2000',
    receptionPrice: 1939,
    skuCnt: '0',
    source: '京东',
    stBrand: '小米',
    stMemory: '8GB+256GB',
    stModel: 'CC9 美图定制版',
    storeName: '小米京东官方旗舰店',
    storeType: '官方旗舰店',
    timeSegment: '2020-02-11 20'
  },
  {
    benefitInfo: '6期内免息',
    cartPrice: 1099,
    dt: '2020-02-11 00:00:00',
    fdsUrl:
      'http://cnbj1-fds.api.xiaomi.net/pricemonitor/JD/2020021112/100003884767.png',
    goodsCategory: '手机',
    key: 38,
    isFlagshipStore: '1',
    platformUrl: 'https://item.jd.com/100003884767.html',
    priceSegment: '1000-2000',
    receptionPrice: 1049,
    skuCnt: '0',
    source: '京东',
    stBrand: '小米',
    stMemory: '6GB+64GB',
    stModel: 'CC9E',
    storeName: '小米京东官方旗舰店',
    storeType: '官方旗舰店',
    timeSegment: '2020-02-11 12'
  },
  {
    benefitInfo: '优惠券:满980.0减60.0',
    cartPrice: 2499,
    dt: '2020-02-11 00:00:00',
    fdsUrl:
      'http://cnbj1-fds.api.xiaomi.net/pricemonitor/JD/2020021103/100003582699.png',
    goodsCategory: '手机',
    key: 29,
    isFlagshipStore: '1',
    platformUrl: 'https://item.jd.com/100003582699.html',
    priceSegment: '2000-3000',
    receptionPrice: 2039,
    skuCnt: '0',
    source: '京东',
    stBrand: 'REDMI',
    stMemory: '6GB+64GB',
    stModel: 'K20 PRO',
    storeName: '小米京东官方旗舰店',
    storeType: '官方旗舰店',
    timeSegment: '2020-02-11 03'
  }
]

const FixedTable = () => {
  return (
    <div style={{ width: 1100, margin: '0 auto' }}>
      <h2>列冻结</h2>
      <Table
        // showColMenu
        // size='small'
        columns={columns}
        data={data}
        scrollWidth={1500}
        standard
        fixedToColumn={'storeName'}
      />
    </div>
  )
}

export default FixedTable
