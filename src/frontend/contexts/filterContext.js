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

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    search: "",
    range: 2000,
    categories: [],
    filterByRating: false,
    sortByPrice: false,
    fastDelivery: false,
    reset: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setProductListing(response.data.products);
      } catch {
        console.log("Error");
      }
    })();
  }, []);

  const finalProductList = compose(
    allfilterFunctions,
    filterState,
    productListing
  );

  return (
    <FilterContext.Provider
      value={{ finalProductList, filterDispatch, filterState }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { useFilter, FilterProvider };
