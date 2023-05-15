import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Laptops from './pages/Laptops';
import Tracking from './pages/Tracking';

import './App.css'



function App() 
{
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Laptops/>}></Route>
      <Route path='Laptops' element={<Laptops/>}></Route>
      <Route path='Tracking' element={<Tracking/>}></Route>
    </Routes>
  </BrowserRouter>
}
export default App;
