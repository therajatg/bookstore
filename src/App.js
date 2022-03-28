import "./App.css";
import { Home } from "./frontend/pages/home/Home";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./frontend/components/navbar/Navbar";
import { Footer } from "./frontend/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/> */}
        <Route path="/test-api" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
