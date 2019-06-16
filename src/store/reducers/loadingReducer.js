const INITIAL_STATE = {
  isLoading: false
};
export default function reduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.loading
      };
    default:
      return state;
  }
}
