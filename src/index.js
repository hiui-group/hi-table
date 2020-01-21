import React from 'react'
import ReactDOM from 'react-dom'

import NormalTable from './demo/NormalTable'
import StandardTable from './demo/StandardTable'
import AlignTable from './demo/AlignTable'
import ZebraTable from './demo/ZebraTable'
import RowErrorTable from './demo/RowErrorTable'
import RowSelectionTable from './demo/RowSelectionTable'
import RowHighlightedTable from './demo/RowHighlightedTable'
import ColHighlightedTable from './demo/ColHighlightedTable'
import ExpandedRowTable from './demo/ExpandedRowTable'
import TreeTable from './demo/TreeTable'
import MultipleHeaderTable from './demo/MultipleHeaderTable'
import MergeCellTable from './demo/MergeCellTable'
import FixedTable from './demo/FixedTable'
import FixedHeaderTable from './demo/FixedHeaderTable'

import BorderedTable from './demo/BorderedTable'
import LargeTable from './demo/LargeTable'
import SmallTable from './demo/SmallTable'
import SortTable from './demo/SortTable'

// import Demo11 from './demo/demo11'
import PaginationTable from './demo/PaginationTable'
import ServerTable from './demo/ServerTable'

import CeilingTable from './demo/CeilingTable'
import SumAvgTable from './demo/SumAvgTable'

const App = () =>
  <div style={{ padding: 50 }}>
    <StandardTable />
    <NormalTable />
    <AlignTable />
    <ZebraTable />
    <RowErrorTable />
    <RowSelectionTable />
    <RowHighlightedTable />
    <SumAvgTable />
    <ColHighlightedTable />
    <BorderedTable />
    <LargeTable />
    <SmallTable />
    <SortTable />
    <PaginationTable />
    <CeilingTable />
    <TreeTable />
    <MergeCellTable />
    <FixedHeaderTable />
    <FixedTable />
    <MultipleHeaderTable />
    <ExpandedRowTable />
    {
      null && <div>

        <ServerTable />

      </div>}
  </div>

ReactDOM.render(<App />, document.getElementById('root'))
