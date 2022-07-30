import "./filter.css";
import { useFilter } from "../../contexts/index";
import { allCategories } from "../../constants/categories";

export function Filter() {
  const { filterDispatch, filterState } = useFilter();
  const {
    range,
    filterByRating,
    sortByPrice,
    fastDelivery,
    categories,
    seeMore,
  } = filterState;

  return (
    <div className="filters">
      <div>
        <h2 className="filterPrice">Price</h2>
        <input
          type="range"
          min="1"
          max="2000"
          id="price"
          name="price"
          value={range}
          onChange={(e) =>
            filterDispatch({ type: "RANGE", payload: e.target.value })
          }
        />
        <span>{range}</span>
      </div>

      <div>
        <h2>Category</h2>
        <ul>
          {allCategories.map((item) => (
            <li key={item}>
              <input
                type="checkbox"
                id={item}
                value={item}
                checked={categories.includes(item)}
                onChange={(e) =>
                  filterDispatch({
                    type: "CATEGORIES",
                    payload: e.target.value,
                  })
                }
              />
              <label htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Rating</h2>
        <ul>
          <li>
            <input
              type="radio"
              name="rating"
              id="FOUR_AND_ABOVE"
              value="FOUR_AND_ABOVE"
              checked={filterByRating === "FOUR_AND_ABOVE"}
              onChange={(e) =>
                filterDispatch({ type: "RATING", payload: e.target.value })
              }
            />
            <label htmlFor="FOUR_AND_ABOVE">
              &#11088;&#11088;&#11088;&#11088; & above
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="rating"
              id="THREE_AND_ABOVE"
              value="THREE_AND_ABOVE"
              checked={filterByRating === "THREE_AND_ABOVE"}
              onChange={(e) =>
                filterDispatch({ type: "RATING", payload: e.target.value })
              }
            />
            <label htmlFor="THREE_AND_ABOVE">
              &#11088;&#11088;&#11088; & above
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="rating"
              id="TWO_AND_ABOVE"
              value="TWO_AND_ABOVE"
              checked={filterByRating === "TWO_AND_ABOVE"}
              onChange={(e) =>
                filterDispatch({ type: "RATING", payload: e.target.value })
              }
            />
            <label htmlFor="TWO_AND_ABOVE">&#11088;&#11088; & above</label>
          </li>
          <li>
            <input
              type="radio"
              name="rating"
              id="ONE_AND_ABOVE"
              value="ONE_AND_ABOVE"
              checked={filterByRating === "ONE_AND_ABOVE"}
              onChange={(e) =>
                filterDispatch({ type: "RATING", payload: e.target.value })
              }
            />
            <label htmlFor="ONE_AND_ABOVE">&#11088; & above</label>
          </li>
        </ul>
      </div>

      <div>
        <h2>Sort By</h2>

        <ul>
          <li>
            <input
              type="radio"
              name="priceSort"
              id="lowToHigh"
              value="LOW_TO_HIGH"
              checked={sortByPrice === "LOW_TO_HIGH"}
              onChange={(e) =>
                filterDispatch({ type: "PRICE", payload: e.target.value })
              }
            />
            <label htmlFor="lowToHigh">Price - Low To High</label>
          </li>

          <li>
            <input
              type="radio"
              name="priceSort"
              id="highToLow"
              value="HIGH_TO_LOW"
              checked={sortByPrice === "HIGH_TO_LOW"}
              onChange={(e) =>
                filterDispatch({ type: "PRICE", payload: e.target.value })
              }
            />
            <label htmlFor="highToLow">Price - High To Low</label>
          </li>
        </ul>
      </div>

      <div>
        <h2>Delivery</h2>
        <input
          type="checkbox"
          id="delivery"
          value="FAST_DELIVERY"
          checked={fastDelivery}
          onChange={(e) => filterDispatch({ type: "DELIVERY" })}
        />
        <label htmlFor="delivery">Superfast Delivery Only</label>
      </div>

      <button
        className="button-contained add-to-cart-button"
        onClick={() => filterDispatch({ type: "RESET" })}
      >
        Reset All Filters
      </button>
    </div>
  );
}
