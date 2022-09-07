import logo from './logo.svg';
import './App.css';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import FilteringColumn from './components/FilteringColumn';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';
import ColumnOrder from './components/ColumnOrder';
import ColumnHiding from './components/ColumnHiding';
import StickyTable from './components/StickyTable';
function App() {
  return (
    <div>
     <StickyTable/>
    </div>
  );
}

export default App;