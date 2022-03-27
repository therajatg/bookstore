import {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

function FilterProvider({children}){

    const [productListing, setProductListing] = useState([]);

    useEffect(() => {
    (async () => {
      try{
        const response = await axios.get('/api/products')
        setProductListing([...response.data.products])
      } catch{
        console.log('Error')
      }
    })()
  }, [])

  return (
    <FilterContext.Provider value = {productListing}>
    {children}
    </FilterContext.Provider>
  )
}

export {useFilter, FilterProvider};