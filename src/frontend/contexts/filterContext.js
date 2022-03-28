import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import axios from "axios";
import {
  filterReducer,
  compose,
  allfilterFunctions,
} from "../reducers/filterReducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

function FilterProvider({ children }) {
  const [productListing, setProductListing] = useState([]);

  const [state, dispatch] = useReducer(filterReducer, {
    range: 2000,
    categories: [],
    filterByRating: false,
    sortByPrice: false,
    fastDelivery: false,
    reset: false,
    seeMore: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setProductListing([...response.data.products]);
      } catch {
        console.log("Error");
      }
    })();
  }, []);

  const finalProductList = compose(allfilterFunctions, state, productListing);

  return (
    <FilterContext.Provider value={{ finalProductList, dispatch, state }}>
      {children}
    </FilterContext.Provider>
  );
}

export { useFilter, FilterProvider };
