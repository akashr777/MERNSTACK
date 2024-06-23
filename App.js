import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Statebasics from './components/Statebasics';
import Counter  from './components/Counter';
import Listmap from './components/Listmap';
import Api from './components/Api';
import Sample from './components/Sample';
import Getcard from './components/Getcard';

function App() {
  return (
    <div className="App">
           <Navbar/>
           <Routes>
            <Route path='/' element={<Register/>}/>
              <Route path='/sin' element={<Signup/>}/>
              <Route path='/state' element={<Statebasics/>}/>
              <Route path='/c' element={<Counter/>}/>
              <Route path='/lm' element={<Listmap/>}/>
              <Route path='/api' element={<Api/>}/>
              <Route path='/sample' element={<Sample/>}/>
              <Route path='/card' element={<Getcard/>}/>






           </Routes>
           
          
    </div>
  );
}

export default App;
