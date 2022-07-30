import { ProductCard, Filter, Footer } from "../../components/index";
import { useFilter } from "../../contexts/index";
import style from "./home.module.css";

function Home() {
  const { finalProductList } = useFilter();
  return (
    <div className={style.filterProductsAndFooter}>
      <div className={style.filterAndProducts}>
        <Filter />
        <div className={style.products}>
          {finalProductList.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { Home };
