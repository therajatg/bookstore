import {useEffect, useState} from 'react';
import axios from 'axios';
import './products.css'
import { useFilter } from '../../contexts/filterContext';


export function Products() {

  const productListing = useFilter();
  console.log(productListing)

  return (
    <div className='product-grid'>
      {productListing.map(item => <img src={item.img}/>)}
    </div>
  )
} 

















// {    productListing.map(({img, title, author, rating, price}) => <div className="card-container">
//        <img className='img-dimension' src={img} />
//        <h3 className='margin-zero'>{title}</h3>
//        <h6 className='margin-one'>by {author}</h6>
//        <p className="rating margin-one">Rating: {rating}</p>
//        <h4 className='margin-one'>Superfast delivery (within 24 hours)</h4>
//        <span className='margin-one flex-space-between'>
//          <span className='font-price'>&#8377;{price}</span>
//          <del className='margin-one gray-text'>&#8377;{price+368}</del>
//          <span className='off font-size-xs'>{Math.round(368*100/price)}%off</span>
//         </span>
//        <a href="#" className="button-contained add-to-cart-button margin-one">Add To Cart</a>
//        </div>
//     )}


