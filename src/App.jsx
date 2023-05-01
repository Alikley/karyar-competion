import './App.css';

import Layout from './components/layout/Layout';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Karyarval from './components/karyar/Karyar-val';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route  path='/karyarval' element={<Karyarval />} />
        
      </Route>
    </Routes>
    </div>
  );
}

export default App;
