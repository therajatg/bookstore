import './home.css';
import {Products} from '../.././components/products/Products'
import {Filter} from '../.././components/filter/Filter'


function Home() {
  return (
    <div className='sidebar-and-products'>
          <Filter/>
          <Products/>
    </div>
  )
}

export {Home}