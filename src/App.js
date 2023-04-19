import Home from './components/home/Home';
import data from './data/db.json';

import './App.css';

function App() {
  return (
  <>
   <Home data={data}/>
  </>
  );
}

export default App;
