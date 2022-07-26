import "./App.css";
import { Navbar } from "./frontend/components/index";
import { Router } from "./router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
