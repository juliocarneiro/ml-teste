const INITIAL_STATE = {
  products: null
};
export default function reduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_API_PRODUCTS":
      return {
        ...state,
        products: action.products
      };
    default:
      return state;
  }
}
