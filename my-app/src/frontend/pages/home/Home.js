import './home.css';
import {Navbar} from '../.././components/navbar/Navbar'
import {Products} from '../.././components/products/Products'
import {Filter} from '../.././components/filter/Filter'
import {Footer} from '../.././components/footer/Footer'


function Home() {
  return (
    <div>
      <Navbar/>
        <div className='sidebar-and-products'>
          <Filter/>
          <Products/>
        </div>
        <Footer/>
    </div>
  )
}

export {Home}