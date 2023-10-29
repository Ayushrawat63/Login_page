import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import Login from '../src/components/Login';
import Register2 from './components/Register2';


const App=()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar2/>} />
      <Route path="/register" element={<Register2/>}/>
        <Route path="/login" element={<Login/>} />
    </Routes>
      {/* <Navbar2/>      */}
      <Register2/>
      <Login/>
    </BrowserRouter>
  );
}

export default App;
