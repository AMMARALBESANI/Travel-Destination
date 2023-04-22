import Home from './components/home/Home';
import TourDetail from "./components/TourDetails/TourDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../src/components/header/Header";
import Footer from "./components/footer/Footer"
import data from "./data/db.json";
import { Routes,Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
  <>
     <Header/>
    <Routes >
    <Route path="/" element={<Home data={data}/>}>
    </Route>
    <Route path="/info/:id" element={<TourDetail  data={data} />}>
     
    </Route>
   </Routes>
   
   
   <Footer/>
  </>
  );
}

export default App;
