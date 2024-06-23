import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Add from './components/Add';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
            <Route path='/add' element={<Add/>}/>
              <Route path='/view' element={<View/>}/>
          
           </Routes>
      
     
    </div>
  );
}

export default App;
