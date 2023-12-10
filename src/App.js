import './App.css';
import Pagination from './Pagination';

function App() {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className='App'>
      <Pagination itemsPerPage={10} items={items} />
    </div>
  );
}

export default App;
