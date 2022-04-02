import "./App.css";
import { Navbar, Footer } from "./frontend/components/index";
import { Router } from "./Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
