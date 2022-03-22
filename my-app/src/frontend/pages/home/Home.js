import './home.css';
import {Navbar} from '../.././components/navbar/Navbar'
import {Products} from '../.././components/products/Products'


function Home() {
  return (
    <div>
        <Navbar/>
        <Products/>
    </div>
  )
}

export {Home}