import "./App.css";
import { Navbar } from "./frontend/components/index";
import { Router } from "./Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
