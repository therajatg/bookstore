import "./home.css";
import { Products, Filter, Footer } from "../../components/index";

function Home() {
  return (
    <div className="filterProductAndFooter">
      <Filter />
      <Products />
      <Footer />
    </div>
  );
}

export { Home };
