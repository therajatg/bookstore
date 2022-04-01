import "./home.css";
import { Products, Filter } from "../../components/index";

function Home() {
  return (
    <div className="sidebar-and-products">
      <Filter />
      <Products />
    </div>
  );
}

export { Home };
