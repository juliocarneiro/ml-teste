const INITIAL_STATE = {
  product: null,
  description: null
};
export default function reduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_API_PRODUCT":
      return {
        ...state,
        product: action.product
      };
    case "GET_DETAILS_PRODUCT":
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}
