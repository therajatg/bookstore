import { FcSearch } from 'react-icons/fc';
import { AiFillHeart } from 'react-icons/ai';
import { FaBookOpen, FaShoppingCart } from 'react-icons/fa';
import "./navbar.css"




function Navbar() {
  return (
    <nav class="navigation-container">
    <div class="logo">
    <FaBookOpen className='icon-size-small'/>
    <span className="font-size-m">Kitab</span>
    </div>

    <div class="nav-search-bar">
        <input type="search" placeholder="Search..." class="nav-search-input"></input>
        <FcSearch/>
    </div>
    <div class="nav-options">
        <div className='helloUser'>
            <span>Hello User</span>
            <button class="button-outlined font-size-s">Login</button>
        </div>
        <div class="icon-button">
            <AiFillHeart className='icon-size-large'/>
            <span class="icon-button__badge">2</span>
        </div>
        <div class="icon-button">
            <FaShoppingCart className='icon-size-large'/>
            <span class="icon-button__badge">2</span>
        </div>
    </div>
</nav>
  )
}

export {Navbar}