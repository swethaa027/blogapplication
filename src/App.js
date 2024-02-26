
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Addblog from './components/Addblog';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='Addblog' element={<Addblog/>}/>
        <Route path='Dashboard' element={<Dashboard/>}/>
      </Routes>
      
    </div>
  );
}


export default App;
