function filterReducer(state, action) {
  switch (action.type) {
    case "RANGE":
      return { ...state, range: action.payload };
    case "CATEGORIES":
      if (state.categories.includes(action.payload)) {
        const newCategories = state.categories.filter((item) =>
          item === action.payload ? false : true
        );
        return { ...state, categories: newCategories };
      } else {
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
      }
    case "SEE_MORE":
      return { ...state, seeMore: !state.seeMore };
    case "RATING":
      return { ...state, filterByRating: action.payload };
    case "PRICE":
      return { ...state, sortByPrice: action.payload };
    case "DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "RESET":
      return {
        ...state,
        range: 2000,
        categories: [],
        filterByRating: false,
        sortByPrice: false,
        fastDelivery: false,
        seeMore: false,
        reset: true,
      };
    default:
      return state;
  }
}

function rangeFilter(productListing, state) {
  return productListing.filter((item) =>
    item.price <= state.range ? true : false
  );
}

function categoryFilter(productListing, state) {
  if (state.categories.length > 0) {
    return productListing.filter((item) =>
      state.categories.includes(item.categoryName)
    );
  } else {
    return productListing;
  }
}

function ratingFilter(productListing, state) {
  switch (state.filterByRating) {
    case "FOUR_AND_ABOVE":
      return productListing.filter((item) => (item.rating >= 4 ? true : false));
    case "THREE_AND_ABOVE":
      return productListing.filter((item) => (item.rating >= 3 ? true : false));
    case "TWO_AND_ABOVE":
      return productListing.filter((item) => (item.rating >= 2 ? true : false));
    case "ONE_AND_ABOVE":
      return productListing.filter((item) => (item.rating >= 1 ? true : false));
    default:
      return productListing;
  }
}

function priceSort(productListing, state) {
  switch (state.sortByPrice) {
    case "LOW_TO_HIGH":
      return [...productListing].sort((a, b) => a.price - b.price);
    case "HIGH_TO_LOW":
      return [...productListing].sort((a, b) => b.price - a.price);
    default:
      return productListing;
  }
}

function deliveryFilter(productListing, state) {
  if (state.fastDelivery) {
    return productListing.filter((item) => item.fastDelivery);
  } else {
    return productListing;
  }
}

const allfilterFunctions = [
  rangeFilter,
  categoryFilter,
  ratingFilter,
  priceSort,
  deliveryFilter,
];

const compose = (allFilterFunctions, state, productListing) =>
  allFilterFunctions.reduce((acc, current) => {
    return current(acc, state);
  }, productListing);

//   const rangeData = rangeFilter(productListing, state);
//   const categoryData = categoryFilter(rangeData, state);
//   const ratingData = ratingFilter(categoryData, state);
//   const priceSortData = priceSort(ratingData, state);
//   const deliveryData = deliveryFilter(priceSortData, state);

export { filterReducer, compose, allfilterFunctions };
