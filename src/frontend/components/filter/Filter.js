import './filter.css';


export function Filter() {

  return (
    <div className="filters">
      <div>
        <h2>Price</h2>
        <input
        type="range"
        min="1"
        max="1000"
        id="price"
        name="price"
      />
      </div>

      <div>
        <h2>Category</h2>
        <ul>
          <li><input type="checkbox" id=''/><label for="">Biographies</label></li>
          <li><input type="checkbox" id=''/><label for="">Literature & Fiction</label></li>
          <li><input type="checkbox" id=''/><label for="">Business & Money</label></li>
          <li><input type="checkbox" id=''/><label for="">Comics & Graphic novels</label></li>
          <li><input type="checkbox" id=''/><label for="">Computers & Technology</label></li>
          <li><input type="checkbox" id=''/><label for="">Parenting & Relationships</label></li>
          <li><input type="checkbox" id=''/><label for="">Cookbooks, Food & Wine</label></li>
          <li><input type="checkbox" id=''/><label for="">Education & Teaching</label></li>
          <li><input type="checkbox" id=''/><label for="">Politice & Social Sciences</label></li>
          <li className='see-more'>See More</li>
        </ul>
      </div>

      <div>
        <h2>Rating</h2>
        <ul>
        <li><input type="radio" name='rating'/><label>&#11088;&#11088;&#11088;&#11088; & above</label></li>
        <li><input type="radio" name='rating'/><label>&#11088;&#11088;&#11088; & above</label></li>
        <li><input type="radio" name='rating'/><label>&#11088;&#11088; & above</label></li>
        <li><input type="radio" name='rating'/><label>&#11088; & above</label></li>
        </ul>
      </div>

      <div>
        <h2>Sort By</h2>

        <ul>
          <li>
          <input
        type="radio"
        name="price"
        value="lowToHigh"
        id="lowToHigh"
      />
      <label>Price - Low To High</label>
          </li>

          <li>
          <input
        type="radio"
        name="price"
        value="highToLow"
        id="highToLow"
      />
      <label>Price - High To Low</label>
          </li>
        </ul>
        
      



      </div>

      <div>
        <h2>Delivery</h2>
        <input
        type="checkbox"
      />
      <label htmlFor="">Superfast Delivery Only</label>
      </div>
     
      

      <button className="button-contained add-to-cart-button">Reset All Filters</button>
    </div>
  );
}
