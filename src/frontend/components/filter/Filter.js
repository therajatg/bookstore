import "./filter.css";
import { useFilter } from "../../contexts/index";

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
        <h2>Price</h2>
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
          <li>
            <input
              type="checkbox"
              id="biographies"
              value="BIOGRAPHIES"
              checked={categories.includes("BIOGRAPHIES")}
              onChange={(e) =>
                filterDispatch({ type: "CATEGORIES", payload: e.target.value })
              }
            />
            <label htmlFor="biographies">Biographies</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="literature"
              value="LITERATURE_AND_FICTION"
              checked={categories.includes("LITERATURE_AND_FICTION")}
              onChange={(e) =>
                filterDispatch({ type: "CATEGORIES", payload: e.target.value })
              }
            />
            <label htmlFor="literature">Literature & Fiction</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="business"
              value="BUSINESS_AND_MONEY"
              checked={categories.includes("BUSINESS_AND_MONEY")}
              onChange={(e) =>
                filterDispatch({ type: "CATEGORIES", payload: e.target.value })
              }
            />
            <label htmlFor="business">Business & Money</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="comics"
              value="COMICS_AND_GRAPHIC_NOVELS"
              checked={categories.includes("COMICS_AND_GRAPHIC_NOVELS")}
              onChange={(e) =>
                filterDispatch({ type: "CATEGORIES", payload: e.target.value })
              }
            />
            <label htmlFor="comics">Comics & Graphic novels</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="computers"
              value="COMPUTERS_AND_TECHNOLOGY"
              checked={categories.includes("COMPUTERS_AND_TECHNOLOGY")}
              onChange={(e) =>
                filterDispatch({ type: "CATEGORIES", payload: e.target.value })
              }
            />
            <label htmlFor="computers">Computers & Technology</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="parenting"
              value="PARENTING_AND_RELATIONSHIPS"
              checked={categories.includes("PARENTING_AND_RELATIONSHIPS")}
              onChange={(e) =>
                filterDispatch({ type: "CATEGORIES", payload: e.target.value })
              }
            />
            <label htmlFor="parenting">Parenting & Relationships</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="cookbook"
              value="COOKBOOKS_FOOD_AND_WINE"
              checked={categories.includes("COOKBOOKS_FOOD_AND_WINE")}
              onChange={(e) =>
                filterDispatch({ type: "CATEGORIES", payload: e.target.value })
              }
            />
            <label htmlFor="cookbook">Cookbooks, Food & Wine</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="education"
              value="EDUCATION_AND_TEACHING"
              checked={categories.includes("EDUCATION_AND_TEACHING")}
              onChange={(e) =>
                filterDispatch({ type: "CATEGORIES", payload: e.target.value })
              }
            />
            <label htmlFor="education">Education & Teaching</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="politics"
              value="POLICTICS_AND_SOCIAL_SCIENCES"
              checked={categories.includes("POLICTICS_AND_SOCIAL_SCIENCES")}
              onChange={(e) =>
                filterDispatch({ type: "CATEGORIES", payload: e.target.value })
              }
            />
            <label htmlFor="politics">Politics & Social Sciences</label>
          </li>
          <li
            className="see-more"
            onClick={() => filterDispatch({ type: "SEE_MORE" })}
            style={{ display: seeMore ? "none" : "block" }}
          >
            See More
          </li>
          <div style={{ display: seeMore ? "block" : "none" }}>
            <li>
              <input
                type="checkbox"
                id="business"
                value="BUSINESS_AND_MONEY"
                checked={categories.includes("BUSINESS_AND_MONEY")}
                onChange={(e) =>
                  filterDispatch({
                    type: "CATEGORIES",
                    payload: e.target.value,
                  })
                }
              />
              <label htmlFor="business">Business & Money</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="comics"
                value="COMICS_AND_GRAPHIC_NOVELS"
                checked={categories.includes("COMICS_AND_GRAPHIC_NOVELS")}
                onChange={(e) =>
                  filterDispatch({
                    type: "CATEGORIES",
                    payload: e.target.value,
                  })
                }
              />
              <label htmlFor="comics">Comics & Graphic novels</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="computers"
                value="COMPUTERS_AND_TECHNOLOGY"
                checked={categories.includes("COMPUTERS_AND_TECHNOLOGY")}
                onChange={(e) =>
                  filterDispatch({
                    type: "CATEGORIES",
                    payload: e.target.value,
                  })
                }
              />
              <label htmlFor="computers">Computers & Technology</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="parenting"
                value="PARENTING_AND_RELATIONSHIPS"
                checked={categories.includes("PARENTING_AND_RELATIONSHIPS")}
                onChange={(e) =>
                  filterDispatch({
                    type: "CATEGORIES",
                    payload: e.target.value,
                  })
                }
              />
              <label htmlFor="parenting">Parenting & Relationships</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="cookbook"
                value="COOKBOOKS_FOOD_AND_WINE"
                checked={categories.includes("COOKBOOKS_FOOD_AND_WINE")}
                onChange={(e) =>
                  filterDispatch({
                    type: "CATEGORIES",
                    payload: e.target.value,
                  })
                }
              />
              <label htmlFor="cookbook">Cookbooks, Food & Wine</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="education"
                value="EDUCATION_AND_TEACHING"
                checked={categories.includes("EDUCATION_AND_TEACHING")}
                onChange={(e) =>
                  filterDispatch({
                    type: "CATEGORIES",
                    payload: e.target.value,
                  })
                }
              />
              <label htmlFor="education">Education & Teaching</label>
            </li>
          </div>
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
