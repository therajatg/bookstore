import "./App.css";
import {Home} from './frontend/pages/home/Home';
import Mockman from 'mockman-js';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/> */}
        <Route path="/test-api" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
